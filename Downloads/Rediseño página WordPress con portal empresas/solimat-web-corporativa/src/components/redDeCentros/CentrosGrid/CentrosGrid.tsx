import type { Centro } from '../../../types/centro';
import CentroCard from '../CentroCard';
import styles from './CentrosGrid.module.css';

interface CentrosGridProps {
  centros: Centro[];
  /** Texto del estado vacío; distingue "sin resultados" de "provincia sin centros". */
  emptyMessage?: string;
}

const DEFAULT_EMPTY_MESSAGE = 'No hay centros que coincidan con tu búsqueda.';

export default function CentrosGrid({
  centros,
  emptyMessage = DEFAULT_EMPTY_MESSAGE,
}: CentrosGridProps) {
  if (centros.length === 0) {
    return (
      <div className={styles.empty}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <p className={styles.emptyText}>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {centros.map((centro) => (
        <CentroCard key={centro.id} centro={centro} />
      ))}
    </div>
  );
}
