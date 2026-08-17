import type { CanalEticoIndexItem } from '../../../data/canalEtico';
import styles from './PageIndex.module.css';

interface PageIndexProps {
  items: CanalEticoIndexItem[];
  activeId: string;
}

export default function PageIndex({ items, activeId }: PageIndexProps) {
  return (
    <nav className={styles.nav} aria-label="Índice de la página">
      <div className={styles.heading}>En esta página</div>
      {items.map((item) => {
        const levelClass = item.level === 'main' ? styles.main : styles.sub;
        const isActive = item.id === activeId;

        return (
          <a
            key={item.id}
            className={isActive ? `${levelClass} ${styles.active}` : levelClass}
            href={`#${item.id}`}
            aria-current={isActive ? 'true' : undefined}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
