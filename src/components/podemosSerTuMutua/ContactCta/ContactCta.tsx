import formaParteImage from '../../../images/forma-parte-de-solimat.jpg';
import Button from '../../shared/Button';
import styles from './ContactCta.module.css';

export default function ContactCta() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <div className={styles.badge}>¡Te ayudamos!</div>
        <h2 className={styles.title}>Forma parte de Solimat</h2>
        <p className={styles.text}>
          Si quieres formar parte de Solimat, escríbenos un correo electrónico o llámanos y te acompañamos en todo
          el proceso.
        </p>
        <div className={styles.actions}>
          <Button href="mailto:web@solimat.com" size="lg" className={styles.emailButton}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            web@solimat.com
          </Button>
          <Button href="tel:925283780" size="lg" className={styles.phoneButton}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8.1 9.6a16 16 0 006 6l1.1-1.1a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" />
            </svg>
            925 28 37 80
          </Button>
        </div>
      </div>
      <div className={styles.media}>
        <img className={styles.image} src={formaParteImage} alt="Forma parte de Solimat" />
      </div>
    </div>
  );
}
