import CalendarGrid from '../../components/recursosYHerramientas/CalendarGrid';
import PageIndex from '../../components/recursosYHerramientas/PageIndex';
import SistemaDeltaCard from '../../components/recursosYHerramientas/SistemaDeltaCard';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import { CALENDARIOS_LABORALES_2026, SECCIONES_RECURSOS } from '../../data/recursos';
import styles from './RecursosYHerramientasPage.module.css';

export default function RecursosYHerramientasPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Recursos y herramientas' }]}
        title="Recursos y herramientas"
        subtitle="Sistema Delta y calendarios laborales de 2026, listos para consultar y descargar."
      />

      <Container as="section" className={styles.section}>
        <div className={styles.layout}>
          <PageIndex secciones={SECCIONES_RECURSOS} />

          <div>
            <section id="sistema-delta" className={styles.block}>
              <SistemaDeltaCard />
            </section>

            <section id="calendarios-laborales" className={styles.lastBlock}>
              <div className={styles.blockHeader}>
                <span className={styles.bar} aria-hidden="true" />
                <h2 className={styles.blockTitle}>Calendarios laborales</h2>
              </div>
              <p className={styles.blockIntro}>
                Tienes a tu disposición los calendarios laborales de 2026, organizados por comunidades y ciudades
                autónomas.
              </p>
              <CalendarGrid calendarios={CALENDARIOS_LABORALES_2026} />
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
