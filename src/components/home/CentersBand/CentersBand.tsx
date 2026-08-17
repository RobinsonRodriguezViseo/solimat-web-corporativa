import hospitalImage from '../../../images/Hospital_San_Jose_de_Solimat.jpg';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import styles from './CentersBand.module.css';

export default function CentersBand() {
  return (
    <section id="centros" className={styles.band}>
      <img className={styles.image} src={hospitalImage} alt="Hospital San José de Solimat" />
      <div className={styles.overlay} />
      <Container className={styles.content}>
        <div className={styles.textBlock}>
          <div className={styles.eyebrow}>Único hospital laboral en Castilla-La Mancha</div>
          <h2 className={styles.title}>Abierto 24 horas los 365 días del año</h2>
          <p className={styles.description}>
            Tecnología de última generación y grandes profesionales del sector sanitario, comprometidos con la
            mejora continua y la calidad asistencial.
          </p>
          <Button href="/red-de-centros" size="lg" className={styles.cta}>
            Ver red de centros
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Button>
        </div>
      </Container>
    </section>
  );
}
