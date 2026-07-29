import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import CentrosGrid from '../../components/redDeCentros/CentrosGrid';
import CentrosMap from '../../components/redDeCentros/CentrosMap';
import CentrosSearch from '../../components/redDeCentros/CentrosSearch';
import ProvinceSelector from '../../components/redDeCentros/ProvinceSelector';
import ApiErrorState from '../../components/shared/ApiErrorState';
import Container from '../../components/shared/Container';
import LoadingState from '../../components/shared/LoadingState';
import PageHero from '../../components/shared/PageHero';
import { readStoredSelection, saveStoredSelection } from '../../services/centrosStorage';
import useGetCentersByProvince from '../../services/company/useGetCentersByProvince';
import useGetProvinces from '../../services/company/useGetProvinces';
import type { Centro, Provincia } from '../../types/centro';
import { DEFAULT_PROVINCE_CODE, DEFAULT_PROVINCE_NAME, filterCentros } from '../../utils/centro';
import styles from './RedDeCentrosPage.module.css';

const EMPTY_PROVINCE_MESSAGE = 'No hay centros para esta provincia.';

export default function RedDeCentrosPage() {
  // Selección previa persistida (mismas claves que el Portal de Pacientes).
  const [restored] = useState(readStoredSelection);

  const [provinces, setProvinces] = useState<Provincia[]>([]);
  const [provinceCode, setProvinceCode] = useState(restored?.code ?? DEFAULT_PROVINCE_CODE);
  const [centros, setCentros] = useState<Centro[]>(restored?.centros ?? []);
  const [query, setQuery] = useState('');

  const { getProvinces, loadingGetProvinces, errorGetProvinces } = useGetProvinces();
  const { getCentersByProvince, loadingGetCentersByProvince, errorGetCentersByProvince } =
    useGetCentersByProvince();

  // El rótulo visible sale del maestro en cuanto carga; hasta entonces, del
  // valor persistido o del de por defecto (Toledo).
  const provinceName = useMemo(() => {
    const fromMaestro = provinces.find((province) => province.code === provinceCode)?.name;
    if (fromMaestro) return fromMaestro;
    if (restored && provinceCode === restored.code) return restored.name;
    return provinceCode === DEFAULT_PROVINCE_CODE ? DEFAULT_PROVINCE_NAME : '';
  }, [provinceCode, provinces, restored]);

  const provinceNameRef = useRef(provinceName);
  useEffect(() => {
    provinceNameRef.current = provinceName;
  }, [provinceName]);

  const loadProvinces = useCallback(async () => {
    const data = await getProvinces();
    if (data) setProvinces(data);
  }, [getProvinces]);

  useEffect(() => {
    // El hook marca `loadingGetProvinces` antes del primer await, así que la
    // regla lo ve como un setState síncrono. Es el patrón de carga inicial
    // contra un sistema externo (el API), no estado derivado: un render extra
    // en el montaje a cambio de poder pintar el estado de carga.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadProvinces();
  }, [loadProvinces]);

  const loadCentros = useCallback(
    async (code: string) => {
      const data = await getCentersByProvince(code);
      if (!data) return; // el fallo lo refleja errorGetCentersByProvince

      setCentros(data);
      saveStoredSelection(code, provinceNameRef.current, data);
    },
    [getCentersByProvince],
  );

  // Stale-while-revalidate: la selección persistida se pinta de inmediato (evita
  // el salto visual al volver), pero SIEMPRE se refresca contra el API. El Portal
  // de Pacientes restaura la caché y no vuelve a pedir la lista; aquí no vale,
  // porque son direcciones y teléfonos de centros sanitarios y la caché no caduca.
  useEffect(() => {
    // Mismo caso que la carga de provincias: el hook marca su `loading` antes del
    // primer await, así que la regla lo interpreta como setState síncrono. Es una
    // carga contra un sistema externo, no estado derivado.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadCentros(provinceCode);
  }, [loadCentros, provinceCode]);

  const visibleCentros = useMemo(() => filterCentros(centros, query), [centros, query]);
  const isSearching = query.trim() !== '';
  const showScope = provinceName !== '' && !errorGetCentersByProvince;

  const renderSelector = () => {
    if (errorGetProvinces) {
      return (
        <ApiErrorState
          message="No hemos podido cargar el listado de provincias."
          onRetry={() => void loadProvinces()}
        />
      );
    }

    if (loadingGetProvinces && provinces.length === 0) {
      return <LoadingState message="Cargando provincias…" />;
    }

    return (
      <ProvinceSelector
        provinces={provinces}
        value={provinceCode}
        onChange={setProvinceCode}
        disabled={provinces.length === 0}
      />
    );
  };

  const renderCentros = () => {
    if (errorGetCentersByProvince) {
      return (
        <ApiErrorState
          message="No hemos podido cargar los centros de esta provincia."
          onRetry={() => void loadCentros(provinceCode)}
        />
      );
    }

    return (
      <>
        <div className={styles.search}>
          <CentrosSearch value={query} onChange={setQuery} />
        </div>

        {/* Con datos en pantalla (caché o provincia anterior) se refresca sin
            sustituirlos por el loader: solo se muestra cuando no hay nada que pintar. */}
        {loadingGetCentersByProvince && centros.length === 0 ? (
          <LoadingState message="Cargando centros…" />
        ) : (
          <CentrosGrid
            centros={visibleCentros}
            emptyMessage={isSearching ? undefined : EMPTY_PROVINCE_MESSAGE}
          />
        )}
      </>
    );
  };

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Red de Centros' }]}
        title="Red de Centros"
        subtitle="Encuentra tu centro asistencial más cercano. Selecciona una provincia o busca por localidad."
      />

      <Container as="section" className={styles.selectorSection}>
        {renderSelector()}

        {showScope ? (
          <div className={styles.scope}>
            <span className={styles.scopeBar} aria-hidden="true" />
            <h2 className={styles.scopeTitle}>{provinceName}</h2>
            <span className={styles.scopeCount}>{visibleCentros.length} centros</span>
          </div>
        ) : null}
      </Container>

      {showScope ? (
        <Container as="section" className={styles.mapSection}>
          <CentrosMap centros={visibleCentros} />
        </Container>
      ) : null}

      <Container as="section" className={styles.listSection}>
        {renderCentros()}
      </Container>
    </>
  );
}
