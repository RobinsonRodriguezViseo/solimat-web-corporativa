import { Link } from 'react-router-dom';
import styles from './ContactSidebar.module.css';

export default function ContactSidebar() {
  return (
    <aside className={styles.sidebar}>
      <Link className={styles.centersCard} to="/red-de-centros">
        <span className={styles.centersIcon} aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </span>
        <span>
          <span className={styles.centersTitle}>Centros de atención</span>
          <span className={styles.centersText}>Encuentra tu centro más cercano</span>
        </span>
      </Link>

      <div className={styles.panel}>
        <div className={styles.panelTitle}>Contacto directo</div>
        <div className={styles.rows}>
          <div className={styles.row}>
            <span className={styles.rowIcon} aria-hidden="true">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8.1 9.6a16 16 0 006 6l1.1-1.1a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" />
              </svg>
            </span>
            <div>
              <div className={styles.rowLabel}>Teléfono</div>
              <a className={styles.rowLink} href="tel:925283186">
                925 28 31 86
              </a>
            </div>
          </div>

          <div className={styles.row}>
            <span className={styles.rowIcon} aria-hidden="true">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </span>
            <div>
              <div className={styles.rowLabel}>E-mail</div>
              <a className={styles.rowLink} href="mailto:contigo@solimat.com">
                contigo@solimat.com
              </a>
            </div>
          </div>

          <div className={`${styles.row} ${styles.rowTop}`}>
            <span className={styles.rowIcon} aria-hidden="true">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div>
              <div className={styles.rowLabel}>Sede Central</div>
              <div className={styles.rowAddress}>
                C/ Berna, 1 — 4ª planta
                <br />
                45003 Toledo
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
