import Button from '../../components/shared/Button';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import IntroBlock from '../../components/trabajaConNosotros/IntroBlock';
import ValuesList from '../../components/trabajaConNosotros/ValuesList';
import trabajaImage from '../../images/trabaja-con-nosotros.jpg';
import styles from './TrabajaConNosotrosPage.module.css';

export default function TrabajaConNosotrosPage() {
  return (
    <>
      <PageHero
        image={trabajaImage}
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Conócenos' }, { label: 'Trabaja con nosotros' }]}
        title="Trabaja con nosotros"
        subtitle="Un equipo comprometido y apasionado detrás de cada servicio de calidad. Crece con nosotros."
      />

      <Container as="section" className={styles.introSection}>
        <IntroBlock />
      </Container>

      <Container as="section" className={styles.valuesSection}>
        <ValuesList />
      </Container>

      <Container as="section" className={styles.ctaSection}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>¿Quieres formar parte de nuestro equipo?</h2>
          <p className={styles.ctaText}>
            Si deseas unirte a nuestro equipo, envía tu CV a web@solimat.com. Si en algún momento necesitamos un
            perfil similar al tuyo, nos pondremos en contacto contigo.
          </p>
          <Button href="mailto:web@solimat.com" size="lg" className={styles.ctaButton}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            Enviar mi CV a web@solimat.com
          </Button>
        </div>
      </Container>
    </>
  );
}
