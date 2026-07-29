import { describe, expect, it } from 'vitest';
import {
  CENTER_TYPE,
  CENTER_TYPES_TABLE,
  HOSPITALARIO_TIPO_CENTRO_ID,
  type SortableCenter,
  sortCentersByPriority,
} from './centerSorting';

const center = (overrides: SortableCenter): SortableCenter => ({
  EsCentroPropio: false,
  TipoCentroId: CENTER_TYPE.ASISTENCIAL_AMBULATORIO.id,
  Descripcion: 'Centro',
  ...overrides,
});

describe('CENTER_TYPE table', () => {
  it('keeps the ids of the Portal de Pacientes', () => {
    expect(HOSPITALARIO_TIPO_CENTRO_ID).toBe(4);
    expect(CENTER_TYPES_TABLE).toHaveLength(9);
    expect(CENTER_TYPES_TABLE.map((type) => type.id)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe('sortCentersByPriority', () => {
  it('ranks own+hospital, then own, then hospital, then the rest', () => {
    const items = [
      center({ Descripcion: 'Colaborador', EsCentroPropio: false, TipoCentroId: 1 }),
      center({ Descripcion: 'Hospital ajeno', EsCentroPropio: false, TipoCentroId: 4 }),
      center({ Descripcion: 'Centro propio', EsCentroPropio: true, TipoCentroId: 1 }),
      center({ Descripcion: 'Hospital propio', EsCentroPropio: true, TipoCentroId: 4 }),
    ];

    expect(sortCentersByPriority(items).map((item) => item.Descripcion)).toEqual([
      'Hospital propio',
      'Centro propio',
      'Hospital ajeno',
      'Colaborador',
    ]);
  });

  it('breaks ties by Descripcion with Spanish collation', () => {
    const items = [
      center({ Descripcion: 'Zamora', EsCentroPropio: true }),
      center({ Descripcion: 'Ávila', EsCentroPropio: true }),
      center({ Descripcion: 'Albacete', EsCentroPropio: true }),
    ];

    expect(sortCentersByPriority(items).map((item) => item.Descripcion)).toEqual([
      'Albacete',
      'Ávila',
      'Zamora',
    ]);
  });

  it('accepts the truthy variants of EsCentroPropio sent by the backend', () => {
    const items = [
      center({ Descripcion: 'B', EsCentroPropio: 'true' }),
      center({ Descripcion: 'A', EsCentroPropio: false }),
      center({ Descripcion: 'C', EsCentroPropio: 1 }),
      center({ Descripcion: 'D', EsCentroPropio: '1' }),
    ];

    expect(sortCentersByPriority(items).map((item) => item.Descripcion)).toEqual([
      'B',
      'C',
      'D',
      'A',
    ]);
  });

  it('falls back to TipoCentroDescripcion when there is no TipoCentroId', () => {
    const items = [
      center({ Descripcion: 'Ambulatorio', TipoCentroId: null, TipoCentroDescripcion: 'AMBULATORIO' }),
      center({ Descripcion: 'Hospital', TipoCentroId: null, TipoCentroDescripcion: ' hospitalario ' }),
    ];

    expect(sortCentersByPriority(items).map((item) => item.Descripcion)).toEqual([
      'Hospital',
      'Ambulatorio',
    ]);
  });

  it('does not mutate the input and tolerates missing fields', () => {
    const items = [center({ Descripcion: 'B' }), center({ Descripcion: 'A' })];
    const sorted = sortCentersByPriority(items);

    expect(items.map((item) => item.Descripcion)).toEqual(['B', 'A']);
    expect(sorted).not.toBe(items);
    expect(sortCentersByPriority([{}, {}])).toHaveLength(2);
    expect(sortCentersByPriority([])).toEqual([]);
  });
});
