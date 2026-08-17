/**
 * Contrato del API de Red de Centros, verificado contra el entorno de
 * desarrollo. Estos tipos describen la respuesta *ya validada* por
 * `src/services/validation.ts`: los campos de texto llegan normalizados a
 * `string | null` (nunca `''`) y las colecciones nunca son `undefined`.
 *
 * Solo `Id` y `Descripcion` son obligatorios; el resto se trata como opcional
 * para que un centro incompleto no tumbe la página entera.
 */

/** `GET {MAESTROS_PATH}/api/v2/provincias` */
export interface ProvinciaDto {
  Id: string;
  Codigo: string;
  Descripcion: string;
}

/** `TipoHorario`: 0 = Administrativo, 1 = Asistencial. */
export const TIPO_HORARIO = {
  ADMINISTRATIVO: 0,
  ASISTENCIAL: 1,
} as const;

export interface HorarioDto {
  TipoHorario: number | null;
  TipoHorarioDesc: string | null;
  /** "08:00:00" */
  HoraInicio: string | null;
  /** "15:00:00" */
  HoraFin: string | null;
  /** "Lunes, Martes, Miércoles, Jueves, Viernes" */
  DiasSemana: string | null;
}

export interface ServicioOfrecidoDto {
  ServicioOfrecidoId: number | null;
  Codigo: string | null;
  Nombre: string | null;
}

export interface ObservacionPublicaDto {
  ObservacionPublicaId: number | null;
  Descripcion: string | null;
  FechaPublicacion: string | null;
  FechaCaducidad: string | null;
}

/**
 * `GET {RED_CENTROS_PATH}/api/v2/centros/provincia/{Codigo}` y
 * `GET {RED_CENTROS_PATH}/api/v2/centro/{Id}`.
 */
export interface CentroDto {
  Id: string;
  CentroId: number | null;
  Descripcion: string;
  Codigo: string | null;
  Cif: string | null;
  EsCentroPropio: boolean | null;
  EsCentroAsistencial: boolean | null;

  NombreCalle: string | null;
  Portal: string | null;
  NumeroCalle: string | null;
  Bloque: string | null;
  Letra: string | null;
  Piso: string | null;
  Puerta: string | null;
  CodigoPostal: string | null;
  CodigoTipoVia: string | null;
  TipoViaDescripcion: string | null;
  CodigoLocalidad: string | null;
  LocalidadDescripcion: string | null;
  CodigoProvincia: string | null;
  ProvinciaDescripcion: string | null;
  Latitud: number | null;
  Longitud: number | null;

  CorreoElectronico: string | null;
  SitioWeb: string | null;
  Telefono: string | null;
  Movil: string | null;
  Fax: string | null;

  DireccionProvincialId: string | null;
  DireccionProvincialDescripcion: string | null;
  TipoCentroId: number | null;
  TipoCentroDescripcion: string | null;
  TitularidadId: number | null;
  TitularidadDescripcion: string | null;

  ServiciosOfrecidos: ServicioOfrecidoDto[];
  Horarios: HorarioDto[];
  ObservacionesPublicas: ObservacionPublicaDto[];
}
