import { Link } from 'react-router-dom';
import Container from '../Container';
import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <Container className={styles.bar}>
        <div className={styles.left}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.label}>Urgencias 24h</span>
          <a className={styles.link} href="tel:900111072">
            900 111 072
          </a>
          <span className={styles.divider}>·</span>
          <a className={styles.linkMuted} href="tel:+34925727272">
            +34 925 72 72 72 <span className={styles.hint}>(fuera de España)</span>
          </a>
        </div>
        <Link className={styles.centros} to="/red-de-centros">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Centros de atención
        </Link>
      </Container>
    </div>
  );
}
