/**
 * Tipos de dominio de la Red de Centros.
 *
 * Son independientes del contrato del API (ver `src/services/dto.ts`): la UI
 * solo conoce estos tipos, de forma que un cambio en el backend se absorbe en
 * `src/services/mapCentro.ts` sin tocar componentes ni páginas.
 */

export type CentroType = 'hospital' | 'centro' | 'colaborador';

/** Provincia seleccionable en el listado. */
export interface Provincia {
  /** Guid de la provincia en el maestro. */
  id: string;
  /** Código de provincia ("45" = Toledo). Es lo que espera el API de centros. */
  code: string;
  name: string;
}

/** Observación pública vigente publicada para un centro. */
export interface CentroObservacion {
  id: number;
  text: string;
  /** Fecha de publicación en ISO-8601, o `null` si el API no la informa. */
  publishedAt: string | null;
}

export interface Centro {
  /** Guid del centro; es el segmento `:id` de `/red-de-centros/:id`. */
  id: string;
  name: string;
  province: string;
  type: CentroType;
  /** Dirección corta, tal y como aparece en las tarjetas del listado. */
  address: string;
  /** Dirección completa con código postal y localidad, para la ficha de detalle. */
  fullAddress: string;
  phone: string;
  fax: string;
  horarioAdmin: string;
  horarioAsist: string;
  services: string[];
  /** Coordenadas del centro; se usan para el mapa cuando el API las informa. */
  lat: number | null;
  lng: number | null;
  /** Observaciones públicas no caducadas. */
  observaciones: CentroObservacion[];
}
