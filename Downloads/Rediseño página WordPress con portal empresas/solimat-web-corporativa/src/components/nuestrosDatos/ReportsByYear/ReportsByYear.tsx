import type { InformesPorAnio } from '../../../data/informes';
import styles from './ReportsByYear.module.css';

interface ReportsByYearProps {
  grupos: InformesPorAnio[];
}

export default function ReportsByYear({ grupos }: ReportsByYearProps) {
  return (
    <>
      {grupos.map((grupo) => (
        <div key={grupo.year} className={styles.group}>
          <div className={styles.yearRow}>
            <span className={styles.year}>{grupo.year}</span>
            <span className={styles.rule} aria-hidden="true" />
          </div>
          <div className={styles.grid}>
            {grupo.informes.map((informe) => (
              <a
                key={informe.title}
                className={styles.row}
                href={informe.pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M4 4a2 2 0 012-2h8l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
                    <path d="M14 2v6h6" />
                  </svg>
                </span>
                <span className={styles.title}>{informe.title}</span>
                <span className={styles.badge}>PDF</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
