import styles from './FeaturedReport.module.css';

interface FeaturedReportProps {
  cover: string;
  eyebrow: string;
  title: string;
  pdf: string;
}

export default function FeaturedReport({ cover, eyebrow, title, pdf }: FeaturedReportProps) {
  return (
    <a className={styles.card} href={pdf} target="_blank" rel="noopener noreferrer">
      <div className={styles.coverWrapper}>
        <img className={styles.image} src={cover} alt={title} />
      </div>
      <div>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.button}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
          </svg>
          Descargar PDF
        </span>
      </div>
    </a>
  );
}
