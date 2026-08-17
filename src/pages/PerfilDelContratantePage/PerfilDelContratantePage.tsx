import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import styles from './PerfilDelContratantePage.module.css';

const PLATAFORMA_CONTRATACION_URL =
  'https://contrataciondelestado.es/wps/poc?uri=deeplink%3AperfilContratante&idBp=CW7ctwLmMCYQK2TEfXGy%2BA%3D%3D';

export default function PerfilDelContratantePage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Perfil del contratante' }]}
        title="Perfil del contratante"
        image={null}
      />

      <Container as="section" className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.card}>
            <p className={styles.paragraph}>
              Según lo establecido en el artículo 347 de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector
              Público, establece en su apartado 2 que los perfiles de contratante de los órganos de contratación de
              todas las entidades del sector público estatal deberán alojarse de manera obligatoria en la Plataforma
              de Contratación del Sector Público, gestionándose y difundiéndose exclusivamente a través de la misma.
            </p>
            <p className={styles.paragraph}>
              En todo caso, los perfiles de contratante de los órganos de contratación del sector público estatal
              deberán integrarse en esa plataforma, gestionándose y difundiéndose exclusivamente a través de la
              misma. En las sedes electrónicas se incluirá un enlace a su perfil de contratante situado en la
              plataforma de contratación del Sector Público.
            </p>
            <p className={`${styles.paragraph} ${styles.lastParagraph}`}>
              <strong className={styles.strong}>
                En las páginas web institucionales se incluirá un enlace a su perfil de contratante situado en la
                Plataforma de Contratación del Sector Público.
              </strong>
            </p>

            <div className={styles.eyebrow}>Enlace al perfil de contratante</div>
            <a className={styles.cta} href={PLATAFORMA_CONTRATACION_URL} target="_blank" rel="noopener noreferrer">
              Plataforma de Contratación del Sector Público
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <path d="M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
