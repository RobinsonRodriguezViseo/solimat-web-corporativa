import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CentroInfoCard from '../../components/centro/CentroInfoCard';
import CentroMap from '../../components/centro/CentroMap';
import CentroNotice from '../../components/centro/CentroNotice';
import ApiErrorState from '../../components/shared/ApiErrorState';
import Breadcrumb from '../../components/shared/Breadcrumb';
import Button from '../../components/shared/Button';
import Container from '../../components/shared/Container';
import LoadingState from '../../components/shared/LoadingState';
import useGetCenter from '../../services/company/useGetCenter';
import type { Centro } from '../../types/centro';
import { formatUpdatedAt, getCentroAviso, isGuid } from '../../utils/centro';
import styles from './CentroPage.module.css';

const BackToCentros = () => (
  <Link className={styles.backLink} to="/red-de-centros">
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
    Volver
  </Link>
);

export default function CentroPage() {
  const { id } = useParams<{ id: string }>();
  const centroId = id ?? '';

  const { getCenter, loadingGetCenter, errorGetCenter } = useGetCenter();
  const [centro, setCentro] = useState<Centro | null>(null);
  const [notFound, setNotFound] = useState(false);

  const loadCentro = useCallback(async () => {
    setNotFound(false);

    // El :id viene de la URL: si no es un guid no se llega a llamar al API.
    if (!isGuid(centroId)) {
      setCentro(null);
      setNotFound(true);
      return;
    }

    const data = await getCenter(centroId);
    if (data === undefined) return; // el fallo lo refleja errorGetCenter

    setCentro(data);
    setNotFound(data === null);
  }, [centroId, getCenter]);

  useEffect(() => {
    // Mismo caso que en RedDeCentrosPage: carga inicial contra el API, no
    // estado derivado. `loadCentro` marca el estado antes del primer await.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadCentro();
  }, [loadCentro]);

  if (notFound) {
    return (
      <Container className={styles.notFound}>
        <h1 className={styles.notFoundTitle}>Centro no encontrado</h1>
        <p className={styles.notFoundText}>El centro que buscas no existe o ya no está disponible.</p>
        <Button href="/red-de-centros">Volver a Red de Centros</Button>
      </Container>
    );
  }

  if (errorGetCenter) {
    return (
      <Container className={styles.notFound}>
        <h1 className={styles.notFoundTitle}>No podemos mostrar este centro</h1>
        <ApiErrorState
          title="La información del centro no está disponible"
          message="Estamos teniendo problemas para conectar con nuestros sistemas. Inténtalo de nuevo en unos minutos."
          onRetry={() => void loadCentro()}
        />
      </Container>
    );
  }

  if (loadingGetCenter || centro === null) {
    return (
      <Container className={styles.notFound}>
        <h1 className={styles.notFoundTitle}>Cargando centro…</h1>
        <LoadingState message="Estamos consultando los datos del centro." />
      </Container>
    );
  }

  const avisos =
    centro.observaciones.length > 0
      ? centro.observaciones.map((observacion) => ({
          key: String(observacion.id),
          text: observacion.text,
          updatedAt: formatUpdatedAt(observacion.publishedAt),
        }))
      : [{ key: 'aviso-generico', text: getCentroAviso(centro), updatedAt: formatUpdatedAt(null) }];

  return (
    <>
      <Container as="section" className={styles.headSection}>
        <div className={styles.headRow}>
          <div>
            <div className={styles.breadcrumb}>
              <Breadcrumb
                tone="light"
                items={[
                  { label: 'Inicio', to: '/' },
                  { label: 'Red de centros', to: '/red-de-centros' },
                  { label: centro.name },
                ]}
              />
            </div>
            <h1 className={styles.title}>{centro.name}</h1>
            <p className={styles.subtitle}>Su centro de salud en {centro.province}</p>
          </div>
          <BackToCentros />
        </div>
      </Container>

      <Container as="section" className={styles.noticeSection}>
        <div className={styles.notices}>
          {avisos.map((aviso) => (
            <CentroNotice key={aviso.key} text={aviso.text} updatedAt={aviso.updatedAt} />
          ))}
        </div>
      </Container>

      <Container as="section" className={styles.detailSection}>
        <div className={styles.detailGrid}>
          <CentroInfoCard centro={centro} />
          <CentroMap centro={centro} />
        </div>
      </Container>
    </>
  );
}
