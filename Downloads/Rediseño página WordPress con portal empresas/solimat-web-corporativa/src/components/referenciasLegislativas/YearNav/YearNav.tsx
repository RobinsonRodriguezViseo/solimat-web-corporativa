import styles from './YearNav.module.css';

export interface YearNavItem {
  id: string;
  year: number;
}

interface YearNavProps {
  items: YearNavItem[];
}

export default function YearNav({ items }: YearNavProps) {
  return (
    <nav className={styles.nav} aria-label="Índice por año">
      {items.map((item) => (
        <a key={item.id} className={styles.chip} href={`#${item.id}`}>
          {item.year}
        </a>
      ))}
    </nav>
  );
}
