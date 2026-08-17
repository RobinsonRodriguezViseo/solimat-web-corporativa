import { describe, expect, it } from 'vitest';
import { makeCentro, makeCentroAsistencial } from '../test/factories';
import {
  DEFAULT_PROVINCE_CODE,
  EMERGENCY_PHONE,
  filterCentros,
  formatUpdatedAt,
  getCentroAviso,
  getCentroTypeLabel,
  getTelHref,
  isGuid,
} from './centro';

describe('constants', () => {
  it('keeps Toledo as the default province and the emergency phone', () => {
    expect(DEFAULT_PROVINCE_CODE).toBe('45');
    expect(EMERGENCY_PHONE).toBe('900 111 072');
  });
});

describe('isGuid', () => {
  it('accepts a guid and rejects anything else', () => {
    expect(isGuid('3fa85f64-5717-4562-b3fc-2c963f66afa6')).toBe(true);
    expect(isGuid('3FA85F64-5717-4562-B3FC-2C963F66AFA6')).toBe(true);
    expect(isGuid('1')).toBe(false);
    expect(isGuid('abc')).toBe(false);
    expect(isGuid('')).toBe(false);
    expect(isGuid('../../etc/passwd')).toBe(false);
  });
});

describe('getCentroTypeLabel', () => {
  it('labels every centro type', () => {
    expect(getCentroTypeLabel('hospital')).toBe('Hospital');
    expect(getCentroTypeLabel('centro')).toBe('Centro Asistencial');
    expect(getCentroTypeLabel('colaborador')).toBe('Centro Colaborador');
  });
});

describe('getTelHref', () => {
  it('strips everything that is not a digit', () => {
    expect(getTelHref('925 28 31 86')).toBe('tel:925283186');
    expect(getTelHref('925-28-31-86')).toBe('tel:925283186');
    expect(getTelHref('+34 925 28 31 86')).toBe('tel:+34925283186');
  });
});

describe('getCentroAviso', () => {
  it('picks the hospital notice only for hospitals', () => {
    expect(getCentroAviso(makeCentro())).toMatch(/24 horas los 365 días del año/);
    expect(getCentroAviso(makeCentroAsistencial())).toMatch(/puedes dirigirte al Hospital San José/);
  });
});

describe('filterCentros', () => {
  const centros = [makeCentro(), makeCentroAsistencial()];

  it('returns everything when the query is blank', () => {
    expect(filterCentros(centros, '')).toHaveLength(2);
    expect(filterCentros(centros, '   ')).toHaveLength(2);
  });

  it('matches name, province and address regardless of casing', () => {
    expect(filterCentros(centros, 'talavera')).toHaveLength(1);
    expect(filterCentros(centros, 'BARBER').map((centro) => centro.name)).toEqual([
      'Hospital San José',
    ]);
    // Ambos centros son de la provincia de Toledo.
    expect(filterCentros(centros, 'Toledo')).toHaveLength(2);
    expect(filterCentros(centros, 'zzz')).toEqual([]);
  });

  it('matches the province even when it is not part of the address', () => {
    const cuenca = makeCentro({
      id: 'cuenca',
      name: 'Centro Asistencial Solimat',
      province: 'Cuenca',
      address: 'Calle Colón 1',
    });

    expect(filterCentros([...centros, cuenca], 'cuenca').map((centro) => centro.id)).toEqual([
      'cuenca',
    ]);
  });
});

describe('formatUpdatedAt', () => {
  it('formats an ISO date in Spanish', () => {
    expect(formatUpdatedAt('2026-07-28T10:00:00Z')).toBe(
      new Date('2026-07-28T10:00:00Z').toLocaleDateString('es-ES'),
    );
  });

  it('falls back to today when the date is missing or unreadable', () => {
    const today = new Date().toLocaleDateString('es-ES');

    expect(formatUpdatedAt(null)).toBe(today);
    expect(formatUpdatedAt('no es una fecha')).toBe(today);
  });
});
