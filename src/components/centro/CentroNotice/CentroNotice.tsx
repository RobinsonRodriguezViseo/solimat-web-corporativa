import styles from './CentroNotice.module.css';

interface CentroNoticeProps {
  text: string;
  updatedAt: string;
}

export default function CentroNotice({ text, updatedAt }: CentroNoticeProps) {
  return (
    <div className={styles.notice} role="note">
      <div className={styles.row}>
        <span className={styles.tag}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L14.7 3.9a2 2 0 00-3.4 0z" />
          </svg>
          Aviso
        </span>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.updated}>Información actualizada el {updatedAt}</div>
    </div>
  );
}
