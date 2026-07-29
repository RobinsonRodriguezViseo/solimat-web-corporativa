import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactNode } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { HOSPITAL_ID, rawCentroPayload } from '../../test/factories';
import CentroPage from './CentroPage';

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
  GoogleMap: ({ children, center }: { children?: ReactNode; center: { lat: number } }) => (
    <div data-testid="google-map" data-lat={String(center.lat)}>
      {children}
    </div>
  ),
  Marker: ({ title }: { title?: string }) => <div data-testid="marker" data-title={title} />,
  InfoWindow: ({ children }: { children?: ReactNode }) => <div>{children}</div>,
}));

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/red-de-centros/:id" element={<CentroPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  vi.stubEnv('VITE_REACT_APP_RED_CENTROS_PATH', 'https://centros.test');
  vi.stubEnv('VITE_REACT_APP_RED_CENTROS_KEY', 'centros-key');
  vi.stubEnv('VITE_REACT_APP_GOOGLE_MAPS_API_KEY', 'test-maps-key');
  vi.spyOn(console, 'error').mockImplementation(() => {});
  mocks.getCenter.mockResolvedValue({ data: rawCentroPayload() });
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
  vi.clearAllMocks();
});

describe('CentroPage', () => {
  it('asks the API for the guid in the route and renders the centro', async () => {
    renderAt(`/red-de-centros/${HOSPITAL_ID}`);

    expect(await screen.findByRole('heading', { level: 1, name: 'Hospital San José' })).toBeInTheDocument();
    expect(mocks.getCenter).toHaveBeenCalledWith(HOSPITAL_ID);
    expect(screen.getByText('Su centro de salud en Toledo')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '925 28 31 86' })).toHaveAttribute(
      'href',
      'tel:925283186',
    );
    expect(screen.getByTestId('google-map')).toHaveAttribute('data-lat', '39.8664');
    expect(screen.getByTestId('marker')).toHaveAttribute('data-title', 'Hospital San José');
    expect(screen.getByRole('heading', { level: 3, name: 'Servicios disponibles' })).toBeInTheDocument();
  });

  it('shows a loading state while the API answers', () => {
    mocks.getCenter.mockReturnValue(new Promise(() => {}));
    renderAt(`/red-de-centros/${HOSPITAL_ID}`);

    expect(screen.getByRole('heading', { level: 1, name: 'Cargando centro…' })).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('shows the hospital notice and the breadcrumb back to the listing', async () => {
    renderAt(`/red-de-centros/${HOSPITAL_ID}`);
    await screen.findByRole('heading', { level: 1, name: 'Hospital San José' });

    expect(screen.getByText(/Urgencias abierto las 24 horas los 365 días del año/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Red de centros' })).toHaveAttribute(
      'href',
      '/red-de-centros',
    );
    expect(screen.getByRole('link', { name: /Volver/ })).toHaveAttribute('href', '/red-de-centros');
  });

  it('shows the generic notice for a non-hospital centro', async () => {
    mocks.getCenter.mockResolvedValue({
      data: rawCentroPayload({
        Descripcion: 'Centro Asistencial Solimat Puertollano',
        TipoCentroId: 1,
        TipoCentroDescripcion: 'ASISTENCIAL (AMBULATORIO)',
      }),
    });

    renderAt(`/red-de-centros/${HOSPITAL_ID}`);

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Centro Asistencial Solimat Puertollano' }),
    ).toBeInTheDocument();
    expect(screen.getByText(/puedes dirigirte al Hospital San José \(Toledo\)/)).toBeInTheDocument();
  });

  it('renders the public notices of the centro instead of the generic one', async () => {
    mocks.getCenter.mockResolvedValue({
      data: rawCentroPayload({
        ObservacionesPublicas: [
          {
            ObservacionPublicaId: 47,
            Descripcion: 'El servicio de rehabilitación permanece cerrado en agosto.',
            FechaPublicacion: '2026-07-01T00:00:00',
            FechaCaducidad: null,
          },
        ],
      }),
    });

    renderAt(`/red-de-centros/${HOSPITAL_ID}`);

    expect(
      await screen.findByText('El servicio de rehabilitación permanece cerrado en agosto.'),
    ).toBeInTheDocument();
    expect(screen.queryByText(/Urgencias abierto las 24 horas/)).not.toBeInTheDocument();
  });

  it('renders a not-found message when the API does not know the guid', async () => {
    mocks.getCenter.mockRejectedValue({ response: { status: 404 } });
    renderAt(`/red-de-centros/${HOSPITAL_ID}`);

    expect(await screen.findByRole('heading', { name: 'Centro no encontrado' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Volver a Red de Centros/ })).toHaveAttribute(
      'href',
      '/red-de-centros',
    );
  });

  it('does not even call the API for an id that is not a guid', async () => {
    renderAt('/red-de-centros/1');

    expect(await screen.findByRole('heading', { name: 'Centro no encontrado' })).toBeInTheDocument();
    expect(mocks.getCenter).not.toHaveBeenCalled();
  });

  it('shows the error state with the emergency phone when the API fails', async () => {
    mocks.getCenter.mockRejectedValue({ response: { status: 500 } });
    renderAt(`/red-de-centros/${HOSPITAL_ID}`);

    const alert = await screen.findByRole('alert');
    expect(within(alert).getByRole('link', { name: '900 111 072' })).toHaveAttribute(
      'href',
      'tel:900111072',
    );
    // No se confunde con "no encontrado": el centro puede existir.
    expect(screen.queryByRole('heading', { name: 'Centro no encontrado' })).not.toBeInTheDocument();
  });

  it('retries the request when the user presses the retry button', async () => {
    mocks.getCenter.mockRejectedValueOnce({ response: { status: 500 } });
    renderAt(`/red-de-centros/${HOSPITAL_ID}`);

    await userEvent.click(await screen.findByRole('button', { name: 'Reintentar' }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1, name: 'Hospital San José' })).toBeInTheDocument();
    });
  });
});
