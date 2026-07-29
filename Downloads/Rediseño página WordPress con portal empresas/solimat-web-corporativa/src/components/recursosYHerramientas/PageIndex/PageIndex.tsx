import type { SeccionRecurso } from '../../../data/recursos';
import styles from './PageIndex.module.css';

interface PageIndexProps {
  secciones: SeccionRecurso[];
}

export default function PageIndex({ secciones }: PageIndexProps) {
  return (
    <aside className={styles.index}>
      <nav aria-label="En esta página">
        <div className={styles.heading}>En esta página</div>
        {secciones.map((seccion) => (
          <a key={seccion.id} className={styles.link} href={`#${seccion.id}`}>
            {seccion.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
