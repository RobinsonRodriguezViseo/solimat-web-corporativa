import type {
  CentroDto,
  HorarioDto,
  ObservacionPublicaDto,
  ProvinciaDto,
  ServicioOfrecidoDto,
} from './dto';
import { ApiValidationError } from './errors';

/**
 * Validación en frontera del API (CLAUDE.md: "validar y tipar toda respuesta").
 *
 * Criterio: estricto con lo imprescindible (`Id`, `Descripcion`, `Codigo` de
 * provincia) y tolerante con el resto, que se normaliza a `null`. Un centro con
 * un campo suelto vacío se sigue pintando; uno sin identificador se descarta,
 * porque no se podría enlazar su ficha.
 */

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

/** Texto normalizado: `null` cuando falta o queda vacío tras recortar. */
const asText = (value: unknown): string | null => {
  if (typeof value === 'string') {
    const trimmed = value.trim();
    return trimmed === '' ? null : trimmed;
  }
  // Algunos campos "de texto" (NumeroCalle, CodigoPostal) pueden llegar numéricos.
  if (typeof value === 'number' && Number.isFinite(value)) return String(value);
  return null;
};

const asNumber = (value: unknown): number | null => {
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};

const asBoolean = (value: unknown): boolean | null => {
  if (typeof value === 'boolean') return value;
  if (value === 'true' || value === 1 || value === '1') return true;
  if (value === 'false' || value === 0 || value === '0') return false;
  return null;
};

const asArray = (value: unknown): unknown[] => (Array.isArray(value) ? value : []);

const requireText = (source: Record<string, unknown>, field: string, context: string): string => {
  const value = asText(source[field]);
  if (value === null) {
    throw new ApiValidationError(`${context}: falta el campo obligatorio "${field}".`);
  }
  return value;
};

/** `true` para respuestas sin contenido (204, cuerpo vacío, `null`). */
export const isEmptyPayload = (payload: unknown): boolean =>
  payload === null || payload === undefined || payload === '';

const requireArrayPayload = (payload: unknown, context: string): unknown[] => {
  if (!Array.isArray(payload)) {
    throw new ApiValidationError(`${context}: se esperaba una lista y se ha recibido otra cosa.`);
  }
  return payload;
};

// ---------------------------------------------------------------- provincias

const parseProvincia = (raw: unknown): ProvinciaDto => {
  if (!isRecord(raw)) throw new ApiValidationError('Provincia: se esperaba un objeto.');

  return {
    Id: requireText(raw, 'Id', 'Provincia'),
    Codigo: requireText(raw, 'Codigo', 'Provincia'),
    Descripcion: requireText(raw, 'Descripcion', 'Provincia'),
  };
};

export const parseProvincias = (payload: unknown): ProvinciaDto[] => {
  if (isEmptyPayload(payload)) return [];
  return requireArrayPayload(payload, 'Listado de provincias').map(parseProvincia);
};

// ------------------------------------------------------------------- centros

const parseHorario = (raw: unknown): HorarioDto | null => {
  if (!isRecord(raw)) return null;

  return {
    TipoHorario: asNumber(raw['TipoHorario']),
    TipoHorarioDesc: asText(raw['TipoHorarioDesc']),
    HoraInicio: asText(raw['HoraInicio']),
    HoraFin: asText(raw['HoraFin']),
    DiasSemana: asText(raw['DiasSemana']),
  };
};

const parseServicio = (raw: unknown): ServicioOfrecidoDto | null => {
  if (!isRecord(raw)) return null;

  return {
    ServicioOfrecidoId: asNumber(raw['ServicioOfrecidoId']),
    Codigo: asText(raw['Codigo']),
    Nombre: asText(raw['Nombre']),
  };
};

const parseObservacion = (raw: unknown): ObservacionPublicaDto | null => {
  if (!isRecord(raw)) return null;

  return {
    ObservacionPublicaId: asNumber(raw['ObservacionPublicaId']),
    Descripcion: asText(raw['Descripcion']),
    FechaPublicacion: asText(raw['FechaPublicacion']),
    FechaCaducidad: asText(raw['FechaCaducidad']),
  };
};

const parseList = <T>(value: unknown, parse: (raw: unknown) => T | null): T[] =>
  asArray(value)
    .map(parse)
    .filter((item): item is T => item !== null);

export const parseCentro = (payload: unknown): CentroDto => {
  if (!isRecord(payload)) throw new ApiValidationError('Centro: se esperaba un objeto.');

  return {
    Id: requireText(payload, 'Id', 'Centro'),
    CentroId: asNumber(payload['CentroId']),
    Descripcion: requireText(payload, 'Descripcion', 'Centro'),
    Codigo: asText(payload['Codigo']),
    Cif: asText(payload['Cif']),
    EsCentroPropio: asBoolean(payload['EsCentroPropio']),
    EsCentroAsistencial: asBoolean(payload['EsCentroAsistencial']),

    NombreCalle: asText(payload['NombreCalle']),
    Portal: asText(payload['Portal']),
    NumeroCalle: asText(payload['NumeroCalle']),
    Bloque: asText(payload['Bloque']),
    Letra: asText(payload['Letra']),
    Piso: asText(payload['Piso']),
    Puerta: asText(payload['Puerta']),
    CodigoPostal: asText(payload['CodigoPostal']),
    CodigoTipoVia: asText(payload['CodigoTipoVia']),
    TipoViaDescripcion: asText(payload['TipoViaDescripcion']),
    CodigoLocalidad: asText(payload['CodigoLocalidad']),
    LocalidadDescripcion: asText(payload['LocalidadDescripcion']),
    CodigoProvincia: asText(payload['CodigoProvincia']),
    ProvinciaDescripcion: asText(payload['ProvinciaDescripcion']),
    Latitud: asNumber(payload['Latitud']),
    Longitud: asNumber(payload['Longitud']),

    CorreoElectronico: asText(payload['CorreoElectronico']),
    SitioWeb: asText(payload['SitioWeb']),
    Telefono: asText(payload['Telefono']),
    Movil: asText(payload['Movil']),
    Fax: asText(payload['Fax']),

    DireccionProvincialId: asText(payload['DireccionProvincialId']),
    DireccionProvincialDescripcion: asText(payload['DireccionProvincialDescripcion']),
    TipoCentroId: asNumber(payload['TipoCentroId']),
    TipoCentroDescripcion: asText(payload['TipoCentroDescripcion']),
    TitularidadId: asNumber(payload['TitularidadId']),
    TitularidadDescripcion: asText(payload['TitularidadDescripcion']),

    ServiciosOfrecidos: parseList(payload['ServiciosOfrecidos'], parseServicio),
    Horarios: parseList(payload['Horarios'], parseHorario),
    ObservacionesPublicas: parseList(payload['ObservacionesPublicas'], parseObservacion),
  };
};

export const parseCentros = (payload: unknown): CentroDto[] => {
  if (isEmptyPayload(payload)) return [];
  return requireArrayPayload(payload, 'Listado de centros').map(parseCentro);
};

/**
 * El paquete `@solimat/solimat-web-endpoint` devuelve la respuesta de axios.
 * Se extrae `data` sin arrastrar el `any` de su tipado.
 */
export const extractResponseData = (response: unknown): unknown => {
  if (isRecord(response) && 'data' in response) return response['data'];
  return response;
};
