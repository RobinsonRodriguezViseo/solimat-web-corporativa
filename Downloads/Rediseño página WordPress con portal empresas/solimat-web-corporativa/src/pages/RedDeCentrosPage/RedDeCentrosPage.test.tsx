import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { provinciasPayload, rawCentroPayload } from '../../test/factories';
import RedDeCentrosPage from './RedDeCentrosPage';

/** El paquete de endpoints se sustituye: los tests no salen a la red. */
const mocks = vi.hoisted(() => ({
  getProvinces: vi.fn(),
  getCentersByProvince: vi.fn(),
  getCenter: vi.fn(),
}));

// Se mockean las SUBRUTAS con forma `default`, que es como publica el paquete
// (CommonJS) y como las consume `services/solimatEndpoint`.
vi.mock('@solimat/solimat-web-endpoint/lib/company', () => ({
  default: {
    Center: class {
      getProvinces = mocks.getProvinces;
    },
  },
}));

vi.mock('@solimat/solimat-web-endpoint/lib/utils', () => ({
  default: {
    UtilsService: class {
      getCentersByProvince = mocks.getCentersByProvince;
      getCenter = mocks.getCenter;
    },
  },
}));

/** El mapa no carga la Maps JavaScript API: se sustituye por dobles inertes. */
vi.mock('@react-google-maps/api', () => ({
  useJsApiLoader: () => ({ isLoaded: true }),
  GoogleMap: ({ children }: { children?: ReactNode }) => (
    <div data-testid="google-map">{children}</div>
  ),
  Marker: ({ position, title }: { position: { lat: number; lng: number }; title?: string }) => (
    <div data-testid="marker" data-lat={String(position.lat)} data-title={title} />
  ),
  InfoWindow: ({ children }: { children?: ReactNode }) => <div>{children}</div>,
}));

const toledoCentros = [
  rawCentroPayload({
    Id: '11111111-1111-1111-1111-111111111111',
    Descripcion: 'Hospital San José',
    EsCentroPropio: true,
    TipoCentroId: 4,
  }),
  rawCentroPayload({
    Id: '22222222-2222-2222-2222-222222222222',
    Descripcion: 'Centro Asistencial Solimat Talavera',
    EsCentroPropio: true,
    TipoCentroId: 1,
    NombreCalle: 'Gregorio Marañón',
    LocalidadDescripcion: 'Talavera de la Reina',
  }),
];

const ciudadRealCentros = [
  rawCentroPayload({
    Id: '33333333-3333-3333-3333-333333333333',
    Descripcion: 'Centro Asistencial Solimat Puertollano',
    ProvinciaDescripcion: 'Ciudad Real',
    LocalidadDescripcion: 'Puertollano',
  }),
];

function renderPage() {
  return render(
    <MemoryRouter>
      <RedDeCentrosPage />
    </MemoryRouter>,
  );
}

beforeEach(() => {
  vi.stubEnv('VITE_REACT_APP_MAESTROS_PATH', 'https://maestros.test');
  vi.stubEnv('VITE_REACT_APP_MAESTROS_KEY', 'maestros-key');
  vi.stubEnv('VITE_REACT_APP_RED_CENTROS_PATH', 'https://centros.test');
  vi.stubEnv('VITE_REACT_APP_RED_CENTROS_KEY', 'centros-key');
  vi.stubEnv('VITE_REACT_APP_GOOGLE_MAPS_API_KEY', 'test-maps-key');
  vi.spyOn(console, 'error').mockImplementation(() => {});

  mocks.getProvinces.mockResolvedValue({ data: provinciasPayload });
  mocks.getCentersByProvince.mockImplementation((codigo: string) =>
    Promise.resolve({ data: codigo === '13' ? ciudadRealCentros : toledoCentros }),
  );
});

afterEach(() => {
  window.localStorage.clear();
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
  vi.clearAllMocks();
});

describe('RedDeCentrosPage', () => {
  it('loads the provinces from the maestro and Toledo centros on mount', async () => {
    renderPage();

    expect(screen.getByRole('heading', { level: 1, name: 'Red de Centros' })).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 2, name: 'Toledo' })).toBeInTheDocument();
    });

    expect(mocks.getCentersByProvince).toHaveBeenCalledWith('45');
    expect(screen.getByText('2 centros')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2);
  });

  it('offers every province of the maestro except the "99" one', async () => {
    renderPage();

    await waitFor(() => {
      expect(screen.getAllByRole('option').length).toBeGreaterThan(0);
    });

    const options = screen.getAllByRole('option').map((option) => option.textContent);
    expect(options).toEqual(['Ciudad Real', 'Toledo']);
    expect(options).not.toContain('No asignada');
  });

  it('asks for the centros of the province chosen by the user', async () => {
    renderPage();
    await screen.findByRole('heading', { level: 2, name: 'Toledo' });

    await userEvent.selectOptions(screen.getByLabelText('Provincia'), '13');

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 2, name: 'Ciudad Real' })).toBeInTheDocument();
    });
    expect(mocks.getCentersByProvince).toHaveBeenLastCalledWith('13');
    expect(screen.getByRole('heading', { level: 3, name: /Puertollano/ })).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { level: 3, name: /Hospital San José/ }),
    ).not.toBeInTheDocument();
    // El mapa se repinta con los centros de la nueva provincia, no con su nombre.
    const markers = screen.getAllByTestId('marker');
    expect(markers).toHaveLength(1);
    expect(markers[0]).toHaveAttribute('data-title', 'Centro Asistencial Solimat Puertollano');
  });

  it('sorts the centros by priority: own hospital first', async () => {
    renderPage();

    await waitFor(() => {
      expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2);
    });

    const names = screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent);
    expect(names).toEqual(['Hospital San José', 'Centro Asistencial Solimat Talavera']);
  });

  it('filters in the client with the search box, without asking the API again', async () => {
    renderPage();
    await screen.findByRole('heading', { level: 2, name: 'Toledo' });
    const callsBefore = mocks.getCentersByProvince.mock.calls.length;

    const search = screen.getByRole('searchbox');
    await userEvent.type(search, 'talavera');

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 3, name: /Talavera/ })).toBeInTheDocument();
    // El mapa sigue al buscador: solo queda el marcador del centro visible.
    expect(screen.getAllByTestId('marker')).toHaveLength(1);

    await userEvent.clear(search);
    await userEvent.type(search, 'zzz');

    expect(screen.getByText('No hay centros que coincidan con tu búsqueda.')).toBeInTheDocument();
    expect(mocks.getCentersByProvince.mock.calls).toHaveLength(callsBefore);
  });

  it('shows the specific empty state for a province without centros', async () => {
    mocks.getCentersByProvince.mockResolvedValue({ data: [] });
    renderPage();

    await waitFor(() => {
      expect(screen.getByText('No hay centros para esta provincia.')).toBeInTheDocument();
    });
  });

  it('links every card to its detail route by guid', async () => {
    renderPage();

    await waitFor(() => {
      expect(screen.getByRole('link', { name: /Hospital San José/ })).toHaveAttribute(
        'href',
        '/red-de-centros/11111111-1111-1111-1111-111111111111',
      );
    });
  });

  it('shows the error state with the emergency phone when the centros fail', async () => {
    mocks.getCentersByProvince.mockRejectedValue(new Error('network down'));
    renderPage();

    const alert = await screen.findByRole('alert');
    expect(
      within(alert).getByText('No hemos podido cargar los centros de esta provincia.'),
    ).toBeInTheDocument();
    expect(within(alert).getByRole('link', { name: '900 111 072' })).toHaveAttribute(
      'href',
      'tel:900111072',
    );
    // Nunca se cae a un listado estático de respaldo.
    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
  });

  it('retries the centros when the user presses the retry button', async () => {
    mocks.getCentersByProvince.mockRejectedValueOnce(new Error('network down'));
    renderPage();

    await userEvent.click(await screen.findByRole('button', { name: 'Reintentar' }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 3, name: /Hospital San José/ })).toBeInTheDocument();
    });
  });

  it('shows the error state when the provinces fail', async () => {
    mocks.getProvinces.mockRejectedValue(new Error('maestro down'));
    renderPage();

    expect(
      await screen.findByText('No hemos podido cargar el listado de provincias.'),
    ).toBeInTheDocument();
    expect(screen.queryByLabelText('Provincia')).not.toBeInTheDocument();
  });

  it('restores the persisted selection and still revalidates it against the API', async () => {
    const { unmount } = renderPage();
    await screen.findByRole('heading', { level: 2, name: 'Toledo' });

    await userEvent.selectOptions(screen.getByLabelText('Provincia'), '13');
    await screen.findByRole('heading', { level: 2, name: 'Ciudad Real' });

    expect(window.localStorage.getItem('selectedProvince')).toBe('13');
    expect(window.localStorage.getItem('selectedProvinceName')).toBe('Ciudad Real');

    unmount();
    mocks.getCentersByProvince.mockClear();
    renderPage();

    // La caché se pinta de inmediato: sin salto visual ni loader.
    expect(screen.getByRole('heading', { level: 2, name: 'Ciudad Real' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Puertollano/ })).toBeInTheDocument();

    // …pero se refresca siempre: son direcciones y teléfonos de centros
    // sanitarios y la caché no caduca, así que nunca se sirve solo de ella.
    await waitFor(() => {
      expect(mocks.getCentersByProvince).toHaveBeenCalledWith('13');
    });
  });
});
