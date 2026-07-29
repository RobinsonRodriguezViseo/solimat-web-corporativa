import type { Centro, CentroObservacion, CentroType, Provincia } from '../types/centro';
import {
  HOSPITAL_TIPO_CENTRO_DESCRIPTIONS,
  HOSPITAL_TIPO_CENTRO_IDS,
  isOwnCenter,
} from '../utils/centerSorting';
import type { CentroDto, HorarioDto, ObservacionPublicaDto, ProvinciaDto } from './dto';
import { TIPO_HORARIO } from './dto';

/** Provincia "sin asignar" del maestro; el Portal de Pacientes también la oculta. */
export const EXCLUDED_PROVINCE_CODE = '99';

/** Texto que se muestra cuando el API no informa un horario. */
export const NO_SCHEDULE = 'No disponible';

const compact = (parts: Array<string | null>): string[] =>
  parts.map((part) => part?.trim() ?? '').filter((part) => part !== '');

const join = (parts: Array<string | null>, separator = ' '): string =>
  compact(parts).join(separator);

// --------------------------------------------------------------- provincias

export const mapProvincia = (dto: ProvinciaDto): Provincia => ({
  id: dto.Id,
  code: dto.Codigo,
  name: dto.Descripcion,
});

/** Ordena alfabéticamente y descarta la provincia "99". */
export const mapProvincias = (dtos: ProvinciaDto[]): Provincia[] =>
  dtos
    .filter((dto) => dto.Codigo !== EXCLUDED_PROVINCE_CODE)
    .map(mapProvincia)
    .sort((a, b) => a.name.localeCompare(b.name, 'es'));

// ----------------------------------------------------------------- horarios

const WEEK_DAYS = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
] as const;

const normalizeDay = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();

const DAY_INDEX = new Map(WEEK_DAYS.map((day, index) => [normalizeDay(day), index]));

/**
 * "Lunes, Martes, Miércoles, Jueves, Viernes" → "Lunes a Viernes".
 * Un tramo de 3 o más días consecutivos se abrevia con "a"; si no, se enumeran
 * en orden de semana separados por comas y con "y" antes del último.
 */
export const formatDiasSemana = (diasSemana: string | null): string => {
  const rawLabels = (diasSemana ?? '')
    .split(',')
    .map((day) => day.trim())
    .filter((day) => day !== '');

  if (rawLabels.length === 0) return '';
  if (rawLabels.length === 1) return rawLabels[0] ?? '';

  const indexes = rawLabels.map((label) => DAY_INDEX.get(normalizeDay(label)));
  const knownIndexes = indexes.filter((index): index is number => index !== undefined);
  const allKnown = knownIndexes.length === indexes.length;
  const sorted = [...knownIndexes].sort((a, b) => a - b);

  const labels = allKnown ? sorted.map((index) => WEEK_DAYS[index] ?? '') : rawLabels;
  const first = labels[0] ?? '';
  const last = labels[labels.length - 1] ?? '';

  if (allKnown && labels.length >= 3) {
    const isRun = sorted.every(
      (value, position) => position === 0 || value === (sorted[position - 1] ?? -1) + 1,
    );
    if (isRun) return `${first} a ${last}`;
  }

  return `${labels.slice(0, -1).join(', ')} y ${last}`;
};

/** "08:00:00" → "08:00". Devuelve "" si el valor no es una hora reconocible. */
export const formatHora = (value: string | null): string => {
  const match = /^(\d{1,2}):(\d{2})/.exec((value ?? '').trim());
  if (!match) return '';

  const [, hours = '', minutes = ''] = match;
  return `${hours.padStart(2, '0')}:${minutes}`;
};

/** Un tramo → "Lunes a Viernes de 08:00 a 15:00". */
export const formatHorarioEntry = (entry: HorarioDto): string => {
  const days = formatDiasSemana(entry.DiasSemana);
  const start = formatHora(entry.HoraInicio);
  const end = formatHora(entry.HoraFin);
  const range = start !== '' && end !== '' ? `de ${start} a ${end}` : '';

  return join([days, range]);
};

/** Varios tramos del mismo tipo se encadenan con "; ". */
export const formatHorarios = (entries: HorarioDto[], tipoHorario: number): string => {
  const formatted = entries
    .filter((entry) => entry.TipoHorario === tipoHorario)
    .map(formatHorarioEntry)
    .filter((entry) => entry !== '');

  return formatted.length > 0 ? formatted.join('; ') : NO_SCHEDULE;
};

// ------------------------------------------------------------------ centros

/**
 * Regla de derivación del tipo de centro:
 *
 * - `EsCentroPropio` falso/ausente        → `colaborador` (no es de Solimat).
 * - propio y `TipoCentroId` 4 o 5
 *   (HOSPITALARIO / HOSPITAL DE DIA,
 *   tabla `CENTER_TYPE`)                  → `hospital`.
 * - propio y cualquier otro tipo          → `centro`.
 *
 * Los ids 4 y 5 son los mismos que el Portal de Pacientes trata como hospital al
 * pintar la tarjeta de centro (`CentersNew`).
 *
 * Se mantiene a propósito la condición `EsCentroPropio`, que el Portal NO exige:
 * allí "hospital" es solo una variante visual, mientras que aquí `CentroType`
 * alimenta texto que lee el usuario. Un hospital ajeno resuelto como `hospital`
 * se rotularía "Hospital" (`getCentroTypeLabel`) y mostraría el aviso del
 * Hospital San José con urgencias 24 h (`getCentroAviso`), que no le
 * corresponde. Como `colaborador` se rotula "Centro Colaborador" y recibe el
 * aviso genérico, que sí es correcto.
 *
 * Si el backend no envía `TipoCentroId`, se recurre a `TipoCentroDescripcion`
 * (mismo fallback defensivo que `centerSorting`).
 */
export const resolveCentroType = (dto: CentroDto): CentroType => {
  if (!isOwnCenter(dto.EsCentroPropio)) return 'colaborador';

  const isHospital =
    dto.TipoCentroId !== null
      ? HOSPITAL_TIPO_CENTRO_IDS.includes(dto.TipoCentroId)
      : HOSPITAL_TIPO_CENTRO_DESCRIPTIONS.includes(
          (dto.TipoCentroDescripcion ?? '').trim().toUpperCase(),
        );

  return isHospital ? 'hospital' : 'centro';
};

/** "Avenida Barber 26" */
export const buildAddress = (dto: CentroDto): string =>
  join([dto.TipoViaDescripcion, dto.NombreCalle, dto.NumeroCalle]);

/** "Avenida Barber 26, 45004 Toledo" */
export const buildFullAddress = (dto: CentroDto): string =>
  join([buildAddress(dto), join([dto.CodigoPostal, dto.LocalidadDescripcion])], ', ');

const isVigente = (observacion: ObservacionPublicaDto, now: Date): boolean => {
  if (observacion.FechaCaducidad === null) return true;

  const expiry = new Date(observacion.FechaCaducidad);
  // Una fecha ilegible no se toma como caducada: el aviso se sigue mostrando.
  if (Number.isNaN(expiry.getTime())) return true;

  return expiry.getTime() >= now.getTime();
};

export const mapObservaciones = (dto: CentroDto, now: Date): CentroObservacion[] =>
  dto.ObservacionesPublicas.filter(
    (observacion) => observacion.Descripcion !== null && isVigente(observacion, now),
  ).map((observacion, index) => ({
    id: observacion.ObservacionPublicaId ?? index,
    text: observacion.Descripcion ?? '',
    publishedAt: observacion.FechaPublicacion,
  }));

/** `now` es inyectable para que el filtro de observaciones caducadas sea testeable. */
export const mapCentro = (dto: CentroDto, now: Date = new Date()): Centro => ({
  id: dto.Id,
  name: dto.Descripcion,
  province: dto.ProvinciaDescripcion ?? '',
  type: resolveCentroType(dto),
  address: buildAddress(dto),
  fullAddress: buildFullAddress(dto),
  phone: dto.Telefono ?? '',
  fax: dto.Fax ?? '',
  horarioAdmin: formatHorarios(dto.Horarios, TIPO_HORARIO.ADMINISTRATIVO),
  horarioAsist: formatHorarios(dto.Horarios, TIPO_HORARIO.ASISTENCIAL),
  services: dto.ServiciosOfrecidos.map((servicio) => servicio.Nombre).filter(
    (nombre): nombre is string => nombre !== null,
  ),
  lat: dto.Latitud,
  lng: dto.Longitud,
  observaciones: mapObservaciones(dto, now),
});

export const mapCentros = (dtos: CentroDto[], now: Date = new Date()): Centro[] =>
  dtos.map((dto) => mapCentro(dto, now));
