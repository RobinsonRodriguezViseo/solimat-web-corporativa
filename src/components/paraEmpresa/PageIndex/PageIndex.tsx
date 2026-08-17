import type { ReactNode } from 'react';
import styles from './PageIndex.module.css';

export interface PageIndexItem {
  /** Id de la sección/ancla a la que apunta. */
  id: string;
  label: string;
  /** `sub` para los apartados anidados dentro de una sección. */
  level?: 'main' | 'sub';
}

interface PageIndexProps {
  items: PageIndexItem[];
  /** Contenido extra bajo el índice (por ejemplo, la tarjeta de acceso al portal). */
  children?: ReactNode;
}

/** Índice lateral fijo "En esta página" de las páginas de trámites. */
export default function PageIndex({ items, children }: PageIndexProps) {
  return (
    <aside className={styles.aside}>
      <nav aria-label="Índice de la página">
        <div className={styles.heading}>En esta página</div>
        {items.map((item) => (
          <a key={item.id} className={item.level === 'sub' ? styles.sub : styles.link} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
      {children}
    </aside>
  );
}
