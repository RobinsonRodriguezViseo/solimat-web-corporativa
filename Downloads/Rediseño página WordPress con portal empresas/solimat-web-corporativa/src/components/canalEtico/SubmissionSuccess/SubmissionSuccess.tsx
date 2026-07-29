import styles from './SubmissionSuccess.module.css';

export default function SubmissionSuccess() {
  return (
    <div className={styles.panel} role="status">
      <div className={styles.icon}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <div>
        <h3 className={styles.title}>Comunicación enviada</h3>
        <p className={styles.text}>
          Gracias por tu comunicación. Recibirás un acuse de recibo en un plazo máximo de siete días.
        </p>
      </div>
    </div>
  );
}
