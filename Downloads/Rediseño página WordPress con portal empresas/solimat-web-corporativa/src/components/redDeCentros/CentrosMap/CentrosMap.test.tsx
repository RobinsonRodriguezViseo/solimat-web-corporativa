import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { makeCentro, makeCentroAsistencial } from '../../../test/factories';
import CentrosMap from './CentrosMap';

/**
 * `@react-google-maps/api` se sustituye por completo: los tests nunca cargan el
 * script de Google ni salen a la red. Los dobles exponen las props relevantes
 * como atributos `data-*` para poder aseverar sobre ellas.
 */
const maps = vi.hoisted(() => ({
  isLoaded: true,
  map: { setCenter: vi.fn(), setZoom: vi.fn(), fitBounds: vi.fn() },
}));

interface LatLng {
  lat: number;
  lng: number;
}

interface GoogleMapStubProps {
  children?: ReactNode;
  center: LatLng;
  zoom: number;
  options: Record<string, boolean>;
  onLoad?: (map: unknown) => void;
  onUnmount?: () => void;
}

interface MarkerStubProps {
  position: LatLng;
  title?: string;
  onClick?: () => void;
}

interface InfoWindowStubProps {
  children?: ReactNode;
  position: LatLng;
  onCloseClick?: () => void;
}

vi.mock('@react-google-maps/api', () => ({
  useJsApiLoader: () => ({ isLoaded: maps.isLoaded }),

  GoogleMap: ({ children, center, zoom, options, onLoad }: GoogleMapStubProps) => {
    useEffect(() => {
      onLoad?.(maps.map);
    }, [onLoad]);

    return (
      <div
        data-testid="google-map"
        data-center={`${center.lat},${center.lng}`}
        data-zoom={String(zoom)}
        data-options={JSON.stringify(options)}
      >
        {children}
      </div>
    );
  },

  Marker: ({ position, title, onClick }: MarkerStubProps) => (
    <button
      type="button"
      data-testid="marker"
      data-lat={String(position.lat)}
      data-lng={String(position.lng)}
      onClick={onClick}
    >
      {title}
    </button>
  ),

  InfoWindow: ({ children, position, onCloseClick }: InfoWindowStubProps) => (
    <div data-testid="info-window" data-lat={String(position.lat)} data-lng={String(position.lng)}>
      {children}
      <button type="button" onClick={onCloseClick}>
        Cerrar
      </button>
    </div>
  ),
}));

/** Doble de `google.maps.LatLngBounds`: guarda los puntos para poder contarlos. */
class FakeLatLngBounds {
  points: LatLng[] = [];

  extend(point: LatLng): this {
    this.points.push(point);
    return this;
  }
}

const TOLEDO = makeCentro();
const TALAVERA = makeCentroAsistencial({ lat: 39.9635, lng: -4.8305 });

beforeEach(() => {
  vi.stubEnv('VITE_REACT_APP_GOOGLE_MAPS_API_KEY', 'test-maps-key');
  vi.stubGlobal('google', { maps: { LatLngBounds: FakeLatLngBounds } });
  maps.isLoaded = true;
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});

describe('CentrosMap', () => {
  it('renders one marker per centro and applies the shared map options', () => {
    render(<CentrosMap centros={[TOLEDO, TALAVERA]} />);

    const markers = screen.getAllByTestId('marker');
    expect(markers).toHaveLength(2);
    expect(markers[0]).toHaveAttribute('data-lat', '39.8664');
    expect(markers[0]).toHaveTextContent('Hospital San José');

    expect(JSON.parse(screen.getByTestId('google-map').dataset.options ?? '{}')).toEqual({
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: true,
      zoomControl: true,
    });
  });

  it('fits the bounds to every visible marker', () => {
    render(<CentrosMap centros={[TOLEDO, TALAVERA]} />);

    expect(maps.map.fitBounds).toHaveBeenCalled();
    const [bounds, padding] = maps.map.fitBounds.mock.calls[0] ?? [];
    expect(bounds).toBeInstanceOf(FakeLatLngBounds);
    expect((bounds as FakeLatLngBounds).points).toEqual([
      { lat: 39.8664, lng: -4.0299 },
      { lat: 39.9635, lng: -4.8305 },
    ]);
    expect(padding).toBe(60);
    expect(maps.map.setZoom).not.toHaveBeenCalled();
  });

  it('centers and zooms in instead of fitting bounds when only one centro is visible', () => {
    render(<CentrosMap centros={[TOLEDO]} />);

    expect(maps.map.setCenter).toHaveBeenCalledWith({ lat: 39.8664, lng: -4.0299 });
    expect(maps.map.setZoom).toHaveBeenCalledWith(14);
    expect(maps.map.fitBounds).not.toHaveBeenCalled();
  });

  it('ignores the centros the API sends without coordinates', () => {
    render(<CentrosMap centros={[TOLEDO, makeCentroAsistencial({ lat: null, lng: null })]} />);

    expect(screen.getAllByTestId('marker')).toHaveLength(1);
    expect(screen.getByTestId('marker')).toHaveTextContent('Hospital San José');
    // Un solo marcador pintable: se centra, no se encuadra.
    expect(maps.map.setZoom).toHaveBeenCalledWith(14);
  });

  it('does not touch the map when no centro has coordinates', () => {
    render(<CentrosMap centros={[makeCentro({ lat: null, lng: null })]} />);

    expect(screen.queryByTestId('marker')).not.toBeInTheDocument();
    expect(maps.map.fitBounds).not.toHaveBeenCalled();
    expect(maps.map.setCenter).not.toHaveBeenCalled();
  });

  it('opens an InfoWindow with the name, address and dialable phone of the centro', async () => {
    render(<CentrosMap centros={[TOLEDO, TALAVERA]} />);

    expect(screen.queryByTestId('info-window')).not.toBeInTheDocument();

    await userEvent.click(screen.getAllByTestId('marker')[0] as HTMLElement);

    const info = screen.getByTestId('info-window');
    expect(info).toHaveAttribute('data-lat', '39.8664');
    expect(within(info).getByText('Hospital San José')).toBeInTheDocument();
    expect(within(info).getByText('Avenida Barber 26')).toBeInTheDocument();
    expect(within(info).getByRole('link', { name: '925 28 31 86' })).toHaveAttribute(
      'href',
      'tel:925283186',
    );

    await userEvent.click(screen.getByRole('button', { name: 'Cerrar' }));
    expect(screen.queryByTestId('info-window')).not.toBeInTheDocument();
  });

  it('closes the InfoWindow when its centro stops being visible', async () => {
    const { rerender } = render(<CentrosMap centros={[TOLEDO, TALAVERA]} />);
    await userEvent.click(screen.getAllByTestId('marker')[0] as HTMLElement);
    expect(screen.getByTestId('info-window')).toBeInTheDocument();

    rerender(<CentrosMap centros={[TALAVERA]} />);

    expect(screen.queryByTestId('info-window')).not.toBeInTheDocument();
  });

  it('shows the loading state while the Maps JavaScript API loads', () => {
    maps.isLoaded = false;
    render(<CentrosMap centros={[TOLEDO]} />);

    expect(screen.getByRole('status')).toHaveTextContent('Cargando mapa…');
    expect(screen.queryByTestId('google-map')).not.toBeInTheDocument();
  });

  it('renders nothing at all when the API key is missing', () => {
    vi.stubEnv('VITE_REACT_APP_GOOGLE_MAPS_API_KEY', '');
    const { container } = render(<CentrosMap centros={[TOLEDO]} />);

    expect(container).toBeEmptyDOMElement();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
});
