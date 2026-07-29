import type { Centro, CentroType } from '../types/centro';

/**
 * Persistencia de la última provincia consultada, replicando las claves del
 * Portal de Pacientes para que ambos portales compartan comportamiento.
 *
 * `localStorage` es entrada NO confiable (el usuario puede editarla): lo leído
 * se valida campo a campo antes de devolverlo y, ante cualquier desviación, se
 * descarta y se limpia. Nunca se guardan datos personales, solo la selección.
 */

const KEY_PROVINCE_CODE = 'selectedProvince';
const KEY_PROVINCE_NAME = 'selectedProvinceName';
const KEY_CENTERS = 'selectedCenters';

export interface StoredSelection {
  code: string;
  name: string;
  centros: Centro[];
}

const CENTRO_TYPES: readonly CentroType[] = ['hospital', 'centro', 'colaborador'];

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === 'string');

const isNullableNumber = (value: unknown): value is number | null =>
  value === null || (typeof value === 'number' && Number.isFinite(value));

const isCentro = (value: unknown): value is Centro => {
  if (!isRecord(value)) return false;

  const textFields = [
    'id',
    'name',
    'province',
    'address',
    'fullAddress',
    'phone',
    'fax',
    'horarioAdmin',
    'horarioAsist',
  ];
  if (!textFields.every((field) => typeof value[field] === 'string')) return false;

  const id = value['id'];
  if (typeof id !== 'string' || id === '') return false;

  const type = value['type'];
  if (typeof type !== 'string' || !CENTRO_TYPES.includes(type as CentroType)) return false;

  if (!isStringArray(value['services'])) return false;
  if (!isNullableNumber(value['lat']) || !isNullableNumber(value['lng'])) return false;

  return Array.isArray(value['observaciones']);
};

const safeGet = (key: string): string | null => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const clearStoredSelection = (): void => {
  try {
    window.localStorage.removeItem(KEY_PROVINCE_CODE);
    window.localStorage.removeItem(KEY_PROVINCE_NAME);
    window.localStorage.removeItem(KEY_CENTERS);
  } catch {
    // Almacenamiento no disponible (modo privado, cuota): nada que limpiar.
  }
};

/** Devuelve la selección previa solo si las tres claves son coherentes. */
export const readStoredSelection = (): StoredSelection | null => {
  const code = safeGet(KEY_PROVINCE_CODE);
  const name = safeGet(KEY_PROVINCE_NAME);
  const rawCentros = safeGet(KEY_CENTERS);

  if (!code || !name || !rawCentros) return null;

  try {
    const parsed: unknown = JSON.parse(rawCentros);
    if (!Array.isArray(parsed) || !parsed.every(isCentro)) {
      clearStoredSelection();
      return null;
    }

    return { code, name, centros: parsed };
  } catch {
    clearStoredSelection();
    return null;
  }
};

export const saveStoredSelection = (code: string, name: string, centros: Centro[]): void => {
  try {
    window.localStorage.setItem(KEY_PROVINCE_CODE, code);
    window.localStorage.setItem(KEY_PROVINCE_NAME, name);
    window.localStorage.setItem(KEY_CENTERS, JSON.stringify(centros));
  } catch {
    // Sin almacenamiento la página funciona igual, solo pierde la persistencia.
  }
};
