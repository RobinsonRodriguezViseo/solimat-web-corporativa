import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useMemo } from 'react';
import type { Centro } from '../../../types/centro';
import LoadingState from '../../shared/LoadingState';
import styles from './CentroMap.module.css';

/**
 * Mapa de la ficha (Maps JavaScript API). Se usan las coordenadas que ya
 * devuelve el API (`Latitud`/`Longitud`); sin ellas se omite el mapa, pero la
 * dirección del pie —que forma parte del diseño— se sigue mostrando.
 */

const CENTRO_ZOOM = 16;

const MAP_OPTIONS = {
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: true,
  zoomControl: true,
};

interface CentroMapProps {
  centro: Centro;
}

export default function CentroMap({ centro }: CentroMapProps) {
  const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY ?? '';

  return (
    <div className={styles.sticky}>
      <div className={styles.frame}>
        {/* Sin clave o sin coordenadas se omite el mapa, nunca la dirección. */}
        {apiKey !== '' && centro.lat !== null && centro.lng !== null ? (
          <CentroMapView apiKey={apiKey} name={centro.name} lat={centro.lat} lng={centro.lng} />
        ) : null}
        <div className={styles.foot}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className={styles.address}>{centro.fullAddress}</span>
        </div>
      </div>
    </div>
  );
}

interface CentroMapViewProps {
  apiKey: string;
  name: string;
  lat: number;
  lng: number;
}

function CentroMapView({ apiKey, name, lat, lng }: CentroMapViewProps) {
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: apiKey });
  const position = useMemo(() => ({ lat, lng }), [lat, lng]);

  if (!isLoaded) {
    return (
      <div className={styles.loading}>
        <LoadingState message="Cargando mapa…" />
      </div>
    );
  }

  return (
    <div className={styles.mapWrap}>
      <GoogleMap
        mapContainerClassName={styles.map}
        center={position}
        zoom={CENTRO_ZOOM}
        options={MAP_OPTIONS}
      >
        <Marker position={position} title={name} />
      </GoogleMap>
    </div>
  );
}
