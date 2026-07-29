import type { Centro, CentroType } from '../types/centro';

/** Teléfono de urgencias de Solimat; se ofrece cuando el API no responde. */
export const EMERGENCY_PHONE = '900 111 072';

/** Provincia preseleccionada en el listado (la de la sede central). */
export const DEFAULT_PROVINCE_CODE = '45';
export const DEFAULT_PROVINCE_NAME = 'Toledo';

const GUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** El `:id` de la ruta llega del usuario: se valida antes de pedirlo al API. */
export const isGuid = (value: string): boolean => GUID_PATTERN.test(value);

export const getCentroTypeLabel = (type: CentroType): string => {
  if (type === 'hospital') return 'Hospital';
  if (type === 'colaborador') return 'Centro Colaborador';
  return 'Centro Asistencial';
};

export const getTelHref = (phone: string): string => `tel:${phone.replace(/[^\d+]/g, '')}`;

const AVISO_HOSPITAL =
  'El Hospital San José dispone de servicio de Urgencias abierto las 24 horas los 365 días del año. Para consultas administrativas, acuda en horario de 8:00 a 15:00.';

const AVISO_CENTRO =
  'Si precisas asistencia urgente fuera del horario asistencial de este centro, puedes dirigirte al Hospital San José (Toledo), con apertura 24 horas de nuestra red. Gracias.';

export const getCentroAviso = (centro: Centro): string =>
  centro.type === 'hospital' ? AVISO_HOSPITAL : AVISO_CENTRO;

/** Filtra en cliente por texto libre (nombre, provincia o dirección). */
export function filterCentros(centros: Centro[], query: string): Centro[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return centros;

  return centros.filter((centro) =>
    `${centro.name} ${centro.province} ${centro.address}`.toLowerCase().includes(normalized),
  );
}

/** Fecha legible para el pie de los avisos; hoy si el API no informa una. */
export const formatUpdatedAt = (isoDate: string | null): string => {
  if (isoDate !== null) {
    const date = new Date(isoDate);
    if (!Number.isNaN(date.getTime())) return date.toLocaleDateString('es-ES');
  }

  return new Date().toLocaleDateString('es-ES');
};
