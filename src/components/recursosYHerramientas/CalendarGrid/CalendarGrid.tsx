import type { CalendarioLaboral } from '../../../data/recursos';
import styles from './CalendarGrid.module.css';

interface CalendarGridProps {
  calendarios: CalendarioLaboral[];
}

export default function CalendarGrid({ calendarios }: CalendarGridProps) {
  return (
    <div className={styles.grid}>
      {calendarios.map((calendario) => (
        <a
          key={calendario.label}
          className={styles.item}
          href={calendario.pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <path d="M14 2v6h6" />
          </svg>
          {calendario.label}
        </a>
      ))}
    </div>
  );
}
