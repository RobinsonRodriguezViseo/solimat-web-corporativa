import FaqAccordion from '../../components/preguntasFrecuentes/FaqAccordion';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import { PREGUNTAS_FRECUENTES } from '../../data/preguntasFrecuentes';
import styles from './PreguntasFrecuentesPage.module.css';

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Preguntas frecuentes' }]}
        title="Preguntas frecuentes"
        subtitle="Respuestas a las dudas más habituales sobre Solimat, sus servicios y trámites."
      />

      <Container as="section" className={styles.section}>
        <div className={styles.inner}>
          <FaqAccordion entries={PREGUNTAS_FRECUENTES} />
        </div>
      </Container>
    </>
  );
}
