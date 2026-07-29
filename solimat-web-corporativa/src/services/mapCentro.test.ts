import { describe, expect, it } from 'vitest';
import { makeCentroDto } from '../test/factories';
import type { HorarioDto } from './dto';
import { TIPO_HORARIO } from './dto';
import {
  NO_SCHEDULE,
  buildAddress,
  buildFullAddress,
  formatDiasSemana,
  formatHora,
  formatHorarios,
  mapCentro,
  mapProvincias,
  resolveCentroType,
} from './mapCentro';
import { parseProvincias } from './validation';

const horario = (overrides: Partial<HorarioDto> = {}): HorarioDto => ({
  TipoHorario: TIPO_HORARIO.ASISTENCIAL,
  TipoHorarioDesc: 'Horario Asistencial',
  HoraInicio: '08:00:00',
  HoraFin: '15:00:00',
  DiasSemana: 'Lunes, Martes, Miércoles, Jueves, Viernes',
  ...overrides,
});

describe('mapProvincias', () => {
  it('drops the "99" province and sorts the rest in Spanish', () => {
    const provincias = mapProvincias(
      parseProvincias([
        { Id: 'a', Codigo: '45', Descripcion: 'Toledo' },
        { Id: 'b', Codigo: '99', Descripcion: 'No asignada' },
        { Id: 'c', Codigo: '02', Descripcion: 'Albacete' },
      ]),
    );

    expect(provincias.map((province) => province.code)).toEqual(['02', '45']);
    expect(provincias[0]).toEqual({ id: 'c', code: '02', name: 'Albacete' });
  });
});

describe('formatDiasSemana', () => {
  it('collapses a run of three or more consecutive days', () => {
    expect(formatDiasSemana('Lunes, Martes, Miércoles, Jueves, Viernes')).toBe('Lunes a Viernes');
    expect(formatDiasSemana('Sábado, Domingo')).toBe('Sábado y Domingo');
    expect(formatDiasSemana('Lunes')).toBe('Lunes');
  });

  it('enumerates non consecutive days in week order', () => {
    expect(formatDiasSemana('Viernes, Lunes, Miércoles')).toBe('Lunes, Miércoles y Viernes');
  });

  it('is tolerant with accents, casing and spacing', () => {
    expect(formatDiasSemana('lunes,MARTES ,  miercoles')).toBe('Lunes a Miércoles');
  });

  it('keeps unknown labels as they come', () => {
    expect(formatDiasSemana('Festivos, Lunes')).toBe('Festivos y Lunes');
    expect(formatDiasSemana(null)).toBe('');
    expect(formatDiasSemana('  ')).toBe('');
  });
});

describe('formatHora', () => {
  it('drops the seconds and pads the hour', () => {
    expect(formatHora('08:00:00')).toBe('08:00');
    expect(formatHora('8:30')).toBe('08:30');
    expect(formatHora(null)).toBe('');
    expect(formatHora('no es una hora')).toBe('');
  });
});

describe('formatHorarios', () => {
  it('builds a readable range per schedule type', () => {
    const horarios = [
      horario({ TipoHorario: TIPO_HORARIO.ADMINISTRATIVO, HoraFin: '15:00:00' }),
      horario({ TipoHorario: TIPO_HORARIO.ASISTENCIAL, HoraFin: '20:00:00' }),
    ];

    expect(formatHorarios(horarios, TIPO_HORARIO.ADMINISTRATIVO)).toBe(
      'Lunes a Viernes de 08:00 a 15:00',
    );
    expect(formatHorarios(horarios, TIPO_HORARIO.ASISTENCIAL)).toBe(
      'Lunes a Viernes de 08:00 a 20:00',
    );
  });

  it('chains several ranges of the same type', () => {
    const horarios = [
      horario({ DiasSemana: 'Lunes, Martes, Miércoles, Jueves, Viernes' }),
      horario({ DiasSemana: 'Sábado', HoraInicio: '09:00:00', HoraFin: '13:00:00' }),
    ];

    expect(formatHorarios(horarios, TIPO_HORARIO.ASISTENCIAL)).toBe(
      'Lunes a Viernes de 08:00 a 15:00; Sábado de 09:00 a 13:00',
    );
  });

  it('falls back to "No disponible" when the API sends nothing usable', () => {
    expect(formatHorarios([], TIPO_HORARIO.ADMINISTRATIVO)).toBe(NO_SCHEDULE);
    expect(
      formatHorarios([horario({ DiasSemana: null, HoraInicio: null, HoraFin: null })], TIPO_HORARIO.ASISTENCIAL),
    ).toBe(NO_SCHEDULE);
  });

  it('renders days without hours and hours without days', () => {
    expect(formatHorarios([horario({ HoraInicio: null })], TIPO_HORARIO.ASISTENCIAL)).toBe(
      'Lunes a Viernes',
    );
    expect(formatHorarios([horario({ DiasSemana: null })], TIPO_HORARIO.ASISTENCIAL)).toBe(
      'de 08:00 a 15:00',
    );
  });
});

describe('resolveCentroType', () => {
  it('marks an own HOSPITALARIO or HOSPITAL DE DIA centre as hospital', () => {
    expect(resolveCentroType(makeCentroDto({ EsCentroPropio: true, TipoCentroId: 4 }))).toBe(
      'hospital',
    );
    expect(resolveCentroType(makeCentroDto({ EsCentroPropio: true, TipoCentroId: 5 }))).toBe(
      'hospital',
    );
  });

  it('marks any other own centre as centro', () => {
    expect(resolveCentroType(makeCentroDto({ EsCentroPropio: true, TipoCentroId: 1 }))).toBe(
      'centro',
    );
    expect(resolveCentroType(makeCentroDto({ EsCentroPropio: true, TipoCentroId: 6 }))).toBe(
      'centro',
    );
  });

  // A diferencia del Portal de Pacientes, aquí el tipo también rotula la ficha y
  // elige el aviso: un hospital ajeno no puede quedar como "Hospital".
  it('marks a centre that is not ours as colaborador, even if it is a hospital', () => {
    expect(resolveCentroType(makeCentroDto({ EsCentroPropio: false, TipoCentroId: 4 }))).toBe(
      'colaborador',
    );
    expect(resolveCentroType(makeCentroDto({ EsCentroPropio: false, TipoCentroId: 5 }))).toBe(
      'colaborador',
    );
    expect(resolveCentroType(makeCentroDto({ EsCentroPropio: null }))).toBe('colaborador');
  });

  it('falls back to the description when TipoCentroId is missing', () => {
    expect(
      resolveCentroType(
        makeCentroDto({ TipoCentroId: null, TipoCentroDescripcion: ' hospitalario ' }),
      ),
    ).toBe('hospital');
    expect(
      resolveCentroType(
        makeCentroDto({ TipoCentroId: null, TipoCentroDescripcion: 'hospital de dia' }),
      ),
    ).toBe('hospital');
    expect(
      resolveCentroType(makeCentroDto({ TipoCentroId: null, TipoCentroDescripcion: null })),
    ).toBe('centro');
  });
});

describe('buildAddress', () => {
  it('joins street type, name and number', () => {
    expect(buildAddress(makeCentroDto())).toBe('Avenida Barber 26');
    expect(buildFullAddress(makeCentroDto())).toBe('Avenida Barber 26, 45004 Toledo');
  });

  it('skips the parts the API does not inform', () => {
    const dto = makeCentroDto({ TipoViaDescripcion: null, NumeroCalle: null, CodigoPostal: null });

    expect(buildAddress(dto)).toBe('Barber');
    expect(buildFullAddress(dto)).toBe('Barber, Toledo');
  });

  it('does not leave dangling separators when there is no address at all', () => {
    const dto = makeCentroDto({
      TipoViaDescripcion: null,
      NombreCalle: null,
      NumeroCalle: null,
      CodigoPostal: null,
      LocalidadDescripcion: null,
    });

    expect(buildAddress(dto)).toBe('');
    expect(buildFullAddress(dto)).toBe('');
  });
});

describe('mapCentro', () => {
  const now = new Date('2026-07-28T00:00:00.000Z');

  it('maps the DTO onto the domain model used by the UI', () => {
    const centro = mapCentro(
      makeCentroDto({
        Horarios: [
          horario({ TipoHorario: TIPO_HORARIO.ADMINISTRATIVO }),
          horario({ TipoHorario: TIPO_HORARIO.ASISTENCIAL, HoraFin: '20:00:00' }),
        ],
        ServiciosOfrecidos: [
          { ServicioOfrecidoId: 1, Codigo: 'U.1', Nombre: 'MEDICINA GENERAL' },
          { ServicioOfrecidoId: 2, Codigo: 'U.2', Nombre: null },
        ],
      }),
      now,
    );

    expect(centro).toMatchObject({
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      name: 'Hospital San José',
      province: 'Toledo',
      type: 'hospital',
      address: 'Avenida Barber 26',
      fullAddress: 'Avenida Barber 26, 45004 Toledo',
      phone: '925 28 31 86',
      fax: '925 28 37 92',
      horarioAdmin: 'Lunes a Viernes de 08:00 a 15:00',
      horarioAsist: 'Lunes a Viernes de 08:00 a 20:00',
      lat: 39.8664,
      lng: -4.0299,
    });
    // Los servicios sin nombre no llegan a la ficha.
    expect(centro.services).toEqual(['MEDICINA GENERAL']);
  });

  it('turns the missing optional fields into empty strings', () => {
    const centro = mapCentro(
      makeCentroDto({ Telefono: null, Fax: null, ProvinciaDescripcion: null }),
      now,
    );

    expect(centro.phone).toBe('');
    expect(centro.fax).toBe('');
    expect(centro.province).toBe('');
    expect(centro.horarioAdmin).toBe(NO_SCHEDULE);
  });

  it('keeps only the public notices that have not expired', () => {
    const centro = mapCentro(
      makeCentroDto({
        ObservacionesPublicas: [
          {
            ObservacionPublicaId: 47,
            Descripcion: 'Vigente',
            FechaPublicacion: '2026-07-01T00:00:00',
            FechaCaducidad: '2026-08-31T00:00:00Z',
          },
          {
            ObservacionPublicaId: 48,
            Descripcion: 'Caducada',
            FechaPublicacion: '2026-01-01T00:00:00',
            FechaCaducidad: '2026-02-01T00:00:00Z',
          },
          {
            ObservacionPublicaId: 49,
            Descripcion: 'Sin caducidad',
            FechaPublicacion: null,
            FechaCaducidad: null,
          },
          {
            ObservacionPublicaId: 50,
            Descripcion: null,
            FechaPublicacion: null,
            FechaCaducidad: null,
          },
        ],
      }),
      now,
    );

    expect(centro.observaciones.map((observacion) => observacion.text)).toEqual([
      'Vigente',
      'Sin caducidad',
    ]);
    expect(centro.observaciones[0]?.id).toBe(47);
  });
});
