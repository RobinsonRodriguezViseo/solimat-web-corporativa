import type { CentroDto } from '../services/dto';
import type { Centro } from '../types/centro';

/**
 * Fixtures compartidos por los tests. Sustituyen al antiguo `src/data/centros.ts`,
 * que se ha eliminado al pasar la Red de Centros al API.
 */

export const HOSPITAL_ID = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
export const CENTRO_ID = '7b1d4f2e-9c3a-4f5b-8d6e-1a2b3c4d5e6f';

/** Payload tal cual lo devuelve el API (sin validar). */
export const rawCentroPayload = (overrides: Record<string, unknown> = {}): Record<string, unknown> => ({
  Id: HOSPITAL_ID,
  CentroId: 1,
  Descripcion: 'Hospital San José',
  Codigo: 'HSJ',
  Cif: 'G45000000',
  EsCentroPropio: true,
  EsCentroAsistencial: true,
  NombreCalle: 'Barber',
  Portal: null,
  NumeroCalle: '26',
  Bloque: null,
  Letra: null,
  Piso: null,
  Puerta: null,
  CodigoPostal: '45004',
  CodigoTipoVia: 'AV',
  TipoViaDescripcion: 'Avenida',
  CodigoLocalidad: '45168',
  LocalidadDescripcion: 'Toledo',
  CodigoProvincia: '45',
  ProvinciaDescripcion: 'Toledo',
  Latitud: 39.8664,
  Longitud: -4.0299,
  CorreoElectronico: 'info@solimat.com',
  SitioWeb: 'https://www.solimat.com',
  Telefono: '925 28 31 86',
  Movil: null,
  Fax: '925 28 37 92',
  DireccionProvincialId: null,
  DireccionProvincialDescripcion: 'Toledo',
  TipoCentroId: 4,
  TipoCentroDescripcion: 'HOSPITALARIO',
  TitularidadId: 1,
  TitularidadDescripcion: 'PROPIO',
  ServiciosOfrecidos: [
    { ServicioOfrecidoId: 1, Codigo: 'U.1', Nombre: 'MEDICINA GENERAL' },
    { ServicioOfrecidoId: 2, Codigo: 'U.2', Nombre: 'TRAUMATOLOGÍA' },
  ],
  Horarios: [
    {
      TipoHorario: 0,
      TipoHorarioDesc: 'Horario Administrativo',
      HoraInicio: '08:00:00',
      HoraFin: '15:00:00',
      DiasSemana: 'Lunes, Martes, Miércoles, Jueves, Viernes',
    },
    {
      TipoHorario: 1,
      TipoHorarioDesc: 'Horario Asistencial',
      HoraInicio: '08:00:00',
      HoraFin: '20:00:00',
      DiasSemana: 'Lunes, Martes, Miércoles, Jueves, Viernes',
    },
  ],
  ObservacionesPublicas: [],
  ...overrides,
});

/** DTO ya validado. */
export const makeCentroDto = (overrides: Partial<CentroDto> = {}): CentroDto => ({
  Id: HOSPITAL_ID,
  CentroId: 1,
  Descripcion: 'Hospital San José',
  Codigo: 'HSJ',
  Cif: null,
  EsCentroPropio: true,
  EsCentroAsistencial: true,
  NombreCalle: 'Barber',
  Portal: null,
  NumeroCalle: '26',
  Bloque: null,
  Letra: null,
  Piso: null,
  Puerta: null,
  CodigoPostal: '45004',
  CodigoTipoVia: 'AV',
  TipoViaDescripcion: 'Avenida',
  CodigoLocalidad: '45168',
  LocalidadDescripcion: 'Toledo',
  CodigoProvincia: '45',
  ProvinciaDescripcion: 'Toledo',
  Latitud: 39.8664,
  Longitud: -4.0299,
  CorreoElectronico: null,
  SitioWeb: null,
  Telefono: '925 28 31 86',
  Movil: null,
  Fax: '925 28 37 92',
  DireccionProvincialId: null,
  DireccionProvincialDescripcion: null,
  TipoCentroId: 4,
  TipoCentroDescripcion: 'HOSPITALARIO',
  TitularidadId: 1,
  TitularidadDescripcion: 'PROPIO',
  ServiciosOfrecidos: [{ ServicioOfrecidoId: 1, Codigo: 'U.1', Nombre: 'MEDICINA GENERAL' }],
  Horarios: [],
  ObservacionesPublicas: [],
  ...overrides,
});

/** Centro de dominio, ya mapeado. */
export const makeCentro = (overrides: Partial<Centro> = {}): Centro => ({
  id: HOSPITAL_ID,
  name: 'Hospital San José',
  province: 'Toledo',
  type: 'hospital',
  address: 'Avenida Barber 26',
  fullAddress: 'Avenida Barber 26, 45004 Toledo',
  phone: '925 28 31 86',
  fax: '925 28 37 92',
  horarioAdmin: 'Lunes a Viernes de 08:00 a 15:00',
  horarioAsist: 'Lunes a Viernes de 08:00 a 20:00',
  services: ['MEDICINA GENERAL', 'TRAUMATOLOGÍA'],
  lat: 39.8664,
  lng: -4.0299,
  observaciones: [],
  ...overrides,
});

export const makeCentroAsistencial = (overrides: Partial<Centro> = {}): Centro =>
  makeCentro({
    id: CENTRO_ID,
    name: 'Centro Asistencial Solimat Talavera',
    type: 'centro',
    address: 'Calle Gregorio Marañón 2',
    fullAddress: 'Calle Gregorio Marañón 2, 45600 Talavera de la Reina',
    phone: '925 80 00 00',
    services: ['MEDICINA GENERAL'],
    ...overrides,
  });

export const provinciasPayload = [
  { Id: 'f09ad3ae-0000-0000-0000-000000000045', Codigo: '45', Descripcion: 'Toledo' },
  { Id: 'f09ad3ae-0000-0000-0000-000000000013', Codigo: '13', Descripcion: 'Ciudad Real' },
  { Id: 'f09ad3ae-0000-0000-0000-000000000099', Codigo: '99', Descripcion: 'No asignada' },
];
