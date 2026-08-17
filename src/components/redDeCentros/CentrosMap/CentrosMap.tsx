import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Centro } from '../../../types/centro';
import { getTelHref } from '../../../utils/centro';
import LoadingState from '../../shared/LoadingState';
import styles from './CentrosMap.module.css';

/**
 * Mapa del listado (Maps JavaScript API). No se geocodifica nada: el API de
 * centros ya devuelve `Latitud`/`Longitud`, así que se usan tal cual — es más
 * preciso que buscar la dirección por texto y no gasta cuota de Geocoding.
 */

/** Centro con coordenadas garantizadas: es lo único que se puede pintar. */
interface CentroMarker {
  centro: Centro;
  lat: number;
  lng: number;
}

/** Encuadre inicial mientras no hay marcadores a los que ajustarse. */
const SPAIN_CENTER = { lat: 40.4168, lng: -3.7038 };
const SPAIN_ZOOM = 6;
/** Con un único centro no hay bounds útil: se centra y se acerca. */
const SINGLE_MARKER_ZOOM = 14;
/** Margen en px para que los marcadores no queden pegados al borde. */
const BOUNDS_PADDING = 60;

const MAP_OPTIONS = {
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: true,
  zoomControl: true,
};

const toMarkers = (centros: Centro[]): CentroMarker[] =>
  centros.flatMap((centro) =>
    centro.lat === null || centro.lng === null
      ? []
      : [{ centro, lat: centro.lat, lng: centro.lng }],
  );

const fitToMarkers = (map: google.maps.Map, markers: CentroMarker[]): void => {
  const [first] = markers;
  if (first === undefined) return;

  if (markers.length === 1) {
    map.setCenter({ lat: first.lat, lng: first.lng });
    map.setZoom(SINGLE_MARKER_ZOOM);
    return;
  }

  const bounds = new google.maps.LatLngBounds();
  markers.forEach((marker) => bounds.extend({ lat: marker.lat, lng: marker.lng }));
  map.fitBounds(bounds, BOUNDS_PADDING);
};

interface CentrosMapProps {
  /**
   * Centros visibles (ya filtrados por el buscador). Se pinta un marcador por
   * cada uno que traiga coordenadas y el mapa se reencuadra a ellos.
   */
  centros: Centro[];
}

export default function CentrosMap({ centros }: CentrosMapProps) {
  const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY ?? '';

  // Sin clave no se monta el mapa (ni un contenedor vacío): la página sigue
  // funcionando y no se carga un script de Google que iba a fallar.
  if (apiKey === '') return null;

  return <CentrosMapView apiKey={apiKey} centros={centros} />;
}

interface CentrosMapViewProps extends CentrosMapProps {
  apiKey: string;
}

function CentrosMapView({ apiKey, centros }: CentrosMapViewProps) {
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: apiKey });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const markers = useMemo(() => toMarkers(centros), [centros]);

  // Se reencuadra cuando el mapa está listo y cada vez que cambia el conjunto
  // visible (cambio de provincia o búsqueda en el listado).
  useEffect(() => {
    if (map === null) return;
    fitToMarkers(map, markers);
  }, [map, markers]);

  const onLoad = useCallback((instance: google.maps.Map) => setMap(instance), []);
  const onUnmount = useCallback(() => setMap(null), []);

  // Si el centro abierto deja de estar visible, la ventana se cierra sola.
  const active = markers.find((marker) => marker.centro.id === activeId) ?? null;

  if (!isLoaded) {
    return (
      <div className={styles.frame}>
        <div className={styles.loading}>
          <LoadingState message="Cargando mapa…" />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.frame}>
      <GoogleMap
        mapContainerClassName={styles.map}
        center={SPAIN_CENTER}
        zoom={SPAIN_ZOOM}
        options={MAP_OPTIONS}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.centro.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.centro.name}
            onClick={() => setActiveId(marker.centro.id)}
          />
        ))}

        {active !== null ? (
          <InfoWindow
            position={{ lat: active.lat, lng: active.lng }}
            options={{ maxWidth: 260 }}
            onCloseClick={() => setActiveId(null)}
          >
            <div className={styles.info}>
              <p className={styles.infoName}>{active.centro.name}</p>
              <p className={styles.infoAddress}>{active.centro.address}</p>
              {active.centro.phone !== '' ? (
                <a className={styles.infoPhone} href={getTelHref(active.centro.phone)}>
                  {active.centro.phone}
                </a>
              ) : null}
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
