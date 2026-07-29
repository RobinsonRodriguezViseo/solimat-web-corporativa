import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { makeCentro } from '../../../test/factories';
import CentroMap from './CentroMap';

/**
 * `@react-google-maps/api` se sustituye por completo: los tests nunca cargan el
 * script de Google ni salen a la red.
 */
const maps = vi.hoisted(() => ({ isLoaded: true }));

interface LatLng {
  lat: number;
  lng: number;
}

interface GoogleMapStubProps {
  children?: ReactNode;
  center: LatLng;
  zoom: number;
  options: Record<string, boolean>;
}

interface MarkerStubProps {
  position: LatLng;
  title?: string;
}

vi.mock('@react-google-maps/api', () => ({
  useJsApiLoader: () => ({ isLoaded: maps.isLoaded }),

  GoogleMap: ({ children, center, zoom, options }: GoogleMapStubProps) => (
    <div
      data-testid="google-map"
      data-center={`${center.lat},${center.lng}`}
      data-zoom={String(zoom)}
      data-options={JSON.stringify(options)}
    >
      {children}
    </div>
  ),

  Marker: ({ position, title }: MarkerStubProps) => (
    <div
      data-testid="marker"
      data-lat={String(position.lat)}
      data-lng={String(position.lng)}
      data-title={title}
    />
  ),

  InfoWindow: ({ children }: { children?: ReactNode }) => <div>{children}</div>,
}));

const ADDRESS = 'Avenida Barber 26, 45004 Toledo';

beforeEach(() => {
  vi.stubEnv('VITE_REACT_APP_GOOGLE_MAPS_API_KEY', 'test-maps-key');
  maps.isLoaded = true;
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.clearAllMocks();
});

describe('CentroMap', () => {
  it('centers a single marker on the coordinates of the centro and repeats its address', () => {
    render(<CentroMap centro={makeCentro()} />);

    const map = screen.getByTestId('google-map');
    expect(map).toHaveAttribute('data-center', '39.8664,-4.0299');
    expect(map).toHaveAttribute('data-zoom', '16');
    expect(JSON.parse(map.dataset.options ?? '{}')).toEqual({
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: true,
      zoomControl: true,
    });

    const marker = screen.getByTestId('marker');
    expect(marker).toHaveAttribute('data-lat', '39.8664');
    expect(marker).toHaveAttribute('data-lng', '-4.0299');
    expect(marker).toHaveAttribute('data-title', 'Hospital San José');

    expect(screen.getByText(ADDRESS)).toBeInTheDocument();
  });

  it('omits the map but keeps the address when the centro has no coordinates', () => {
    render(<CentroMap centro={makeCentro({ lat: null, lng: null })} />);

    expect(screen.queryByTestId('google-map')).not.toBeInTheDocument();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByText(ADDRESS)).toBeInTheDocument();
  });

  it('shows the loading state, and the address, while the Maps JavaScript API loads', () => {
    maps.isLoaded = false;
    render(<CentroMap centro={makeCentro()} />);

    expect(screen.getByRole('status')).toHaveTextContent('Cargando mapa…');
    expect(screen.queryByTestId('google-map')).not.toBeInTheDocument();
    expect(screen.getByText(ADDRESS)).toBeInTheDocument();
  });

  it('omits the map but keeps the address when the API key is missing', () => {
    vi.stubEnv('VITE_REACT_APP_GOOGLE_MAPS_API_KEY', '');
    render(<CentroMap centro={makeCentro()} />);

    expect(screen.queryByTestId('google-map')).not.toBeInTheDocument();
    expect(screen.getByText(ADDRESS)).toBeInTheDocument();
  });
});
