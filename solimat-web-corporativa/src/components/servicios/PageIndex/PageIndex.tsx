import type { ReactNode } from 'react';
import styles from './PageIndex.module.css';

export interface PageIndexItem {
  id: string;
  label: string;
  /** `sub` pinta el ítem como subsección indentada del índice. */
  level?: 'main' | 'sub';
}

interface PageIndexProps {
  items: PageIndexItem[];
  activeId?: string;
  /** Contenido opcional bajo el índice (p. ej. la tarjeta de Urgencias 24h). */
  children?: ReactNode;
}

export default function PageIndex({ items, activeId, children }: PageIndexProps) {
  return (
    <aside className={styles.aside}>
      <nav aria-label="Índice de la página">
        <div className={styles.title}>En esta página</div>
        {items.map((item) => {
          const isActive = item.id === activeId;
          const base = item.level === 'sub' ? styles.sub : styles.link;

          return (
            <a
              key={item.id}
              className={isActive ? `${base} ${styles.active}` : base}
              href={`#${item.id}`}
              aria-current={isActive ? 'true' : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
      {children ? <div className={styles.extra}>{children}</div> : null}
    </aside>
  );
}
