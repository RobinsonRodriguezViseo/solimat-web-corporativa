import { describe, expect, it } from 'vitest';
import { provinciasPayload, rawCentroPayload } from '../test/factories';
import { ApiValidationError } from './errors';
import {
  extractResponseData,
  isEmptyPayload,
  parseCentro,
  parseCentros,
  parseProvincias,
} from './validation';

describe('extractResponseData', () => {
  it('unwraps the axios response envelope', () => {
    expect(extractResponseData({ data: [1, 2], status: 200 })).toEqual([1, 2]);
  });

  it('returns the payload untouched when there is no envelope', () => {
    expect(extractResponseData([1, 2])).toEqual([1, 2]);
  });
});

describe('parseProvincias', () => {
  it('validates every province of the maestro', () => {
    const provincias = parseProvincias(provinciasPayload);

    expect(provincias).toHaveLength(3);
    expect(provincias[0]).toEqual({
      Id: 'f09ad3ae-0000-0000-0000-000000000045',
      Codigo: '45',
      Descripcion: 'Toledo',
    });
  });

  it('treats an empty response as an empty list', () => {
    expect(parseProvincias(null)).toEqual([]);
    expect(parseProvincias('')).toEqual([]);
    expect(parseProvincias([])).toEqual([]);
  });

  it('rejects a payload that is not a list', () => {
    expect(() => parseProvincias({ Id: '1' })).toThrow(ApiValidationError);
  });

  it('rejects a province without Codigo', () => {
    expect(() => parseProvincias([{ Id: 'x', Descripcion: 'Toledo' }])).toThrow(
      /falta el campo obligatorio "Codigo"/,
    );
  });
});

describe('parseCentro', () => {
  it('keeps the contract fields and normalises the optional ones', () => {
    const centro = parseCentro(rawCentroPayload());

    expect(centro.Id).toBe('3fa85f64-5717-4562-b3fc-2c963f66afa6');
    expect(centro.Descripcion).toBe('Hospital San José');
    expect(centro.EsCentroPropio).toBe(true);
    expect(centro.Latitud).toBeCloseTo(39.8664);
    expect(centro.Horarios).toHaveLength(2);
    expect(centro.ServiciosOfrecidos).toHaveLength(2);
  });

  it('turns blank and missing text into null instead of empty strings', () => {
    const centro = parseCentro(rawCentroPayload({ Fax: '   ', Telefono: undefined }));

    expect(centro.Fax).toBeNull();
    expect(centro.Telefono).toBeNull();
  });

  it('accepts numeric values on text fields such as NumeroCalle', () => {
    const centro = parseCentro(rawCentroPayload({ NumeroCalle: 26, CodigoPostal: 45004 }));

    expect(centro.NumeroCalle).toBe('26');
    expect(centro.CodigoPostal).toBe('45004');
  });

  it('defaults the collections to empty arrays when the API omits them', () => {
    const centro = parseCentro(
      rawCentroPayload({
        ServiciosOfrecidos: undefined,
        Horarios: null,
        ObservacionesPublicas: 'nope',
      }),
    );

    expect(centro.ServiciosOfrecidos).toEqual([]);
    expect(centro.Horarios).toEqual([]);
    expect(centro.ObservacionesPublicas).toEqual([]);
  });

  it('rejects a centro without Id, because its detail could not be linked', () => {
    expect(() => parseCentro(rawCentroPayload({ Id: null }))).toThrow(ApiValidationError);
    expect(() => parseCentro('not an object')).toThrow(/se esperaba un objeto/);
  });
});

describe('parseCentros', () => {
  it('validates the list and supports the empty province', () => {
    expect(parseCentros([rawCentroPayload()])).toHaveLength(1);
    expect(parseCentros([])).toEqual([]);
    expect(parseCentros(null)).toEqual([]);
  });

  it('rejects a malformed list', () => {
    expect(() => parseCentros({ centros: [] })).toThrow(ApiValidationError);
  });
});

describe('isEmptyPayload', () => {
  it('detects the responses with no content', () => {
    expect(isEmptyPayload(null)).toBe(true);
    expect(isEmptyPayload(undefined)).toBe(true);
    expect(isEmptyPayload('')).toBe(true);
    expect(isEmptyPayload([])).toBe(false);
  });
});
