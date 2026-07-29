/**
 * Portado tal cual del Portal de Pacientes (`src/utils/centerSorting.ts`) para
 * que ambos portales ordenen la red de centros igual. Trabaja sobre los campos
 * del DTO del API (`EsCentroPropio`, `TipoCentroId`, `Descripcion`), no sobre
 * el modelo de dominio: se aplica antes de mapear.
 */
export const CENTER_TYPE = {
  ASISTENCIAL_AMBULATORIO: {
    id: 1,
    code: 'AM',
    description: 'ASISTENCIAL (AMBULATORIO)',
  },
  ADMINISTRATIVO: {
    id: 2,
    code: 'AD',
    description: 'ADMINISTRATIVO',
  },
  AMBULATORIO_Y_ADMINISTRATIVO: {
    id: 3,
    code: 'AA',
    description: 'AMBULATORIO Y ADMINISTRATIVO',
  },
  HOSPITALARIO: {
    id: 4,
    code: 'HO',
    description: 'HOSPITALARIO',
  },
  HOSPITAL_DE_DIA: {
    id: 5,
    code: 'HD',
    description: 'HOSPITAL DE DIA',
  },
  EXTERNO: {
    id: 6,
    code: null,
    description: 'EXTERNO',
  },
  CENTRO_DE_SALUD_CONSULTORIO: {
    id: 7,
    code: null,
    description: 'CENTRO DE SALUD/CONSULTORIO',
  },
  CETD: {
    id: 8,
    code: null,
    description: 'CETD',
  },
  OTROS_CENTROS: {
    id: 9,
    code: 'OT',
    description: 'OTROS CENTROS',
  },
} as const;

export const CENTER_TYPES_TABLE = Object.values(CENTER_TYPE);

export const HOSPITALARIO_TIPO_CENTRO_ID = CENTER_TYPE.HOSPITALARIO.id;
export const HOSPITAL_DE_DIA_TIPO_CENTRO_ID = CENTER_TYPE.HOSPITAL_DE_DIA.id;

/**
 * Tipos que se consideran "hospital" al derivar `CentroType` (ver
 * `services/mapCentro.ts`), igual que la tarjeta de centro del Portal de
 * Pacientes (`CentersNew`): HOSPITALARIO y HOSPITAL DE DIA.
 *
 * Ojo: la prioridad de orden (`isHospitalCenter`) sigue mirando solo
 * HOSPITALARIO, tal y como está portada del Portal; no se toca para no
 * desalinear el orden de los listados entre ambos portales.
 */
export const HOSPITAL_TIPO_CENTRO_IDS: readonly number[] = [
  HOSPITALARIO_TIPO_CENTRO_ID,
  HOSPITAL_DE_DIA_TIPO_CENTRO_ID,
];

/** Fallback por descripción cuando el backend no informa `TipoCentroId`. */
export const HOSPITAL_TIPO_CENTRO_DESCRIPTIONS: readonly string[] = [
  CENTER_TYPE.HOSPITALARIO.description,
  CENTER_TYPE.HOSPITAL_DE_DIA.description,
];

export type SortableCenter = {
  EsCentroPropio?: boolean | string | number | null;
  TipoCentroId?: number | string | null;
  TipoCentroDescripcion?: string | null;
  Descripcion?: string | null;
};

export const isOwnCenter = (value: SortableCenter['EsCentroPropio']): boolean =>
  value === true || value === 'true' || value === 1 || value === '1';

const toNumber = (value: unknown): number | null => {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
};

export const isHospitalCenter = (center: SortableCenter): boolean => {
  const tipoCentroId = toNumber(center.TipoCentroId);
  if (tipoCentroId !== null) {
    return tipoCentroId === HOSPITALARIO_TIPO_CENTRO_ID;
  }

  // Fallback defensivo para no romper orden si el backend no envía TipoCentroId.
  return String(center.TipoCentroDescripcion ?? '').trim().toUpperCase() === 'HOSPITALARIO';
};

const getPriority = (center: SortableCenter): number => {
  const own = isOwnCenter(center.EsCentroPropio);
  const hospital = isHospitalCenter(center);

  if (own && hospital) return 3;
  if (own) return 2;
  if (hospital) return 1;
  return 0;
};

/** Propio+hospitalario > propio > hospitalario > resto; desempate por `Descripcion`. */
export const sortCentersByPriority = <T extends SortableCenter>(items: T[]): T[] =>
  [...(items ?? [])].sort((a, b) => {
    const aPriority = getPriority(a);
    const bPriority = getPriority(b);
    if (aPriority !== bPriority) return bPriority - aPriority;

    return String(a.Descripcion ?? '').localeCompare(String(b.Descripcion ?? ''), 'es');
  });
