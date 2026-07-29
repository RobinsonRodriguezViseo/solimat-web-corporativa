import styles from './SideIndex.module.css';

export interface SideIndexItem {
  id: string;
  label: string;
}

interface SideIndexProps {
  items: SideIndexItem[];
  activeId: string;
  /**
   * Nombre accesible del landmark `<nav>`. Es obligatorio diferenciarlo cuando una página
   * monta varias instancias (p. ej. `TeamIndex`), para no repetir landmarks con el mismo nombre.
   */
  label?: string;
}

export default function SideIndex({ items, activeId, label = 'Índice de la página' }: SideIndexProps) {
  return (
    <nav className={styles.nav} aria-label={label}>
      {items.map((item) => (
        <a
          key={item.id}
          className={item.id === activeId ? `${styles.link} ${styles.active}` : styles.link}
          href={`#${item.id}`}
          aria-current={item.id === activeId ? 'true' : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
