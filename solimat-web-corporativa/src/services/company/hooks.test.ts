import { act, renderHook, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { provinciasPayload, rawCentroPayload } from '../../test/factories';
import type { Centro, Provincia } from '../../types/centro';
import useGetCenter from './useGetCenter';
import useGetCentersByProvince from './useGetCentersByProvince';
import useGetProvinces from './useGetProvinces';

/**
 * El paquete `@solimat/solimat-web-endpoint` se sustituye por completo: los
 * tests NUNCA deben salir a la red. `vi.hoisted` permite compartir los espías
 * con las factorías, que `vi.mock` eleva por encima de los imports.
 */
const mocks = vi.hoisted(() => ({
  getProvinces: vi.fn(),
  getCentersByProvince: vi.fn(),
  getCenter: vi.fn(),
  centerConstructor: vi.fn(),
  utilsConstructor: vi.fn(),
}));

// Se mockean las SUBRUTAS con forma `default`, que es como publica el paquete
// (CommonJS) y como las consume `services/solimatEndpoint`.
vi.mock('@solimat/solimat-web-endpoint/lib/company', () => ({
  default: {
    Center: class {
      constructor(baseUrl: string, functionsKey: string) {
        mocks.centerConstructor(baseUrl, functionsKey);
      }
      getProvinces = mocks.getProvinces;
    },
  },
}));

vi.mock('@solimat/solimat-web-endpoint/lib/utils', () => ({
  default: {
    UtilsService: class {
      constructor(baseUrl: string, functionsKey: string) {
        mocks.utilsConstructor(baseUrl, functionsKey);
      }
      getCentersByProvince = mocks.getCentersByProvince;
      getCenter = mocks.getCenter;
    },
  },
}));

const CENTRO_GUID = '3fa85f64-5717-4562-b3fc-2c963f66afa6';

beforeEach(() => {
  vi.stubEnv('VITE_REACT_APP_MAESTROS_PATH', 'https://maestros.test');
  vi.stubEnv('VITE_REACT_APP_MAESTROS_KEY', 'maestros-key');
  vi.stubEnv('VITE_REACT_APP_RED_CENTROS_PATH', 'https://centros.test');
  vi.stubEnv('VITE_REACT_APP_RED_CENTROS_KEY', 'centros-key');
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
  vi.clearAllMocks();
});

describe('useGetProvinces', () => {
  it('loads, validates and maps the provinces, dropping the "99" one', async () => {
    mocks.getProvinces.mockResolvedValue({ data: provinciasPayload });

    const { result } = renderHook(() => useGetProvinces());

    let provincias: Provincia[] | undefined;
    await act(async () => {
      provincias = await result.current.getProvinces();
    });

    expect(mocks.centerConstructor).toHaveBeenCalledWith('https://maestros.test', 'maestros-key');
    expect(provincias).toEqual([
      { id: 'f09ad3ae-0000-0000-0000-000000000013', code: '13', name: 'Ciudad Real' },
      { id: 'f09ad3ae-0000-0000-0000-000000000045', code: '45', name: 'Toledo' },
    ]);

    await waitFor(() => {
      expect(result.current.successGetProvinces).toBe(true);
    });
    expect(result.current.errorGetProvinces).toBe(false);
    expect(result.current.loadingGetProvinces).toBe(false);
  });

  it('flags the error and returns undefined when the request fails', async () => {
    mocks.getProvinces.mockRejectedValue(new Error('network down'));

    const { result } = renderHook(() => useGetProvinces());

    let provincias: Provincia[] | undefined;
    await act(async () => {
      provincias = await result.current.getProvinces();
    });

    expect(provincias).toBeUndefined();
    await waitFor(() => {
      expect(result.current.errorGetProvinces).toBe(true);
    });
    expect(result.current.successGetProvinces).toBe(false);
  });

  it('fails with a clear error when the environment variable is missing', async () => {
    vi.stubEnv('VITE_REACT_APP_MAESTROS_PATH', '');
    const consoleError = vi.mocked(console.error);

    const { result } = renderHook(() => useGetProvinces());
    await act(async () => {
      await result.current.getProvinces();
    });

    expect(mocks.getProvinces).not.toHaveBeenCalled();
    expect(consoleError.mock.calls[0]?.[0]).toMatchObject({
      name: 'ApiConfigError',
      message: expect.stringContaining('VITE_REACT_APP_MAESTROS_PATH') as unknown as string,
    });
    await waitFor(() => {
      expect(result.current.errorGetProvinces).toBe(true);
    });
  });

  it('rejects a response that does not honour the contract', async () => {
    mocks.getProvinces.mockResolvedValue({ data: [{ Id: 'x', Descripcion: 'Toledo' }] });

    const { result } = renderHook(() => useGetProvinces());
    await act(async () => {
      await result.current.getProvinces();
    });

    await waitFor(() => {
      expect(result.current.errorGetProvinces).toBe(true);
    });
  });
});

describe('useGetCentersByProvince', () => {
  it('asks for the province code and returns the centres already sorted', async () => {
    mocks.getCentersByProvince.mockResolvedValue({
      data: [
        rawCentroPayload({
          Id: '11111111-1111-1111-1111-111111111111',
          Descripcion: 'Centro colaborador',
          EsCentroPropio: false,
          TipoCentroId: 1,
        }),
        rawCentroPayload({
          Id: '22222222-2222-2222-2222-222222222222',
          Descripcion: 'Centro propio',
          EsCentroPropio: true,
          TipoCentroId: 1,
        }),
        rawCentroPayload({
          Id: '33333333-3333-3333-3333-333333333333',
          Descripcion: 'Hospital San José',
          EsCentroPropio: true,
          TipoCentroId: 4,
        }),
      ],
    });

    const { result } = renderHook(() => useGetCentersByProvince());

    let centros: Centro[] | undefined;
    await act(async () => {
      centros = await result.current.getCentersByProvince('45');
    });

    expect(mocks.utilsConstructor).toHaveBeenCalledWith('https://centros.test', 'centros-key');
    expect(mocks.getCentersByProvince).toHaveBeenCalledWith('45');
    expect(centros).toBeDefined();
    expect(centros?.map((centro) => centro.name)).toEqual([
      'Hospital San José',
      'Centro propio',
      'Centro colaborador',
    ]);
    expect(centros?.[0]?.type).toBe('hospital');
    expect(centros?.[2]?.type).toBe('colaborador');
  });

  it('returns an empty list for a province without centres', async () => {
    mocks.getCentersByProvince.mockResolvedValue({ data: [] });

    const { result } = renderHook(() => useGetCentersByProvince());

    let centros: Centro[] | undefined;
    await act(async () => {
      centros = await result.current.getCentersByProvince('16');
    });

    expect(centros).toEqual([]);
    await waitFor(() => {
      expect(result.current.successGetCentersByProvince).toBe(true);
    });
    expect(result.current.errorGetCentersByProvince).toBe(false);
  });

  it('flags the error when the service is unreachable', async () => {
    mocks.getCentersByProvince.mockRejectedValue(new Error('timeout'));

    const { result } = renderHook(() => useGetCentersByProvince());

    let centros: Centro[] | undefined;
    await act(async () => {
      centros = await result.current.getCentersByProvince('45');
    });

    expect(centros).toBeUndefined();
    await waitFor(() => {
      expect(result.current.errorGetCentersByProvince).toBe(true);
    });
  });
});

describe('useGetCenter', () => {
  it('returns the mapped centre', async () => {
    mocks.getCenter.mockResolvedValue({ data: rawCentroPayload() });

    const { result } = renderHook(() => useGetCenter());

    let centro: Centro | null | undefined;
    await act(async () => {
      centro = await result.current.getCenter(CENTRO_GUID);
    });

    expect(mocks.getCenter).toHaveBeenCalledWith(CENTRO_GUID);
    expect(centro).toMatchObject({
      name: 'Hospital San José',
      type: 'hospital',
      horarioAdmin: 'Lunes a Viernes de 08:00 a 15:00',
      horarioAsist: 'Lunes a Viernes de 08:00 a 20:00',
    });
  });

  it('returns null (not an error) when the API answers 404', async () => {
    mocks.getCenter.mockRejectedValue({ response: { status: 404 } });

    const { result } = renderHook(() => useGetCenter());

    let centro: Centro | null | undefined;
    await act(async () => {
      centro = await result.current.getCenter(CENTRO_GUID);
    });

    expect(centro).toBeNull();
    await waitFor(() => {
      expect(result.current.successGetCenter).toBe(true);
    });
    expect(result.current.errorGetCenter).toBe(false);
  });

  it('treats an empty body as a centre that does not exist', async () => {
    mocks.getCenter.mockResolvedValue({ data: '' });

    const { result } = renderHook(() => useGetCenter());

    let centro: Centro | null | undefined;
    await act(async () => {
      centro = await result.current.getCenter(CENTRO_GUID);
    });

    expect(centro).toBeNull();
    expect(result.current.errorGetCenter).toBe(false);
  });

  it('flags the error for any other HTTP failure', async () => {
    mocks.getCenter.mockRejectedValue({ response: { status: 500 } });

    const { result } = renderHook(() => useGetCenter());

    let centro: Centro | null | undefined;
    await act(async () => {
      centro = await result.current.getCenter(CENTRO_GUID);
    });

    expect(centro).toBeUndefined();
    await waitFor(() => {
      expect(result.current.errorGetCenter).toBe(true);
    });
  });
});
