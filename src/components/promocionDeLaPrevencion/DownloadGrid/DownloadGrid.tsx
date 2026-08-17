import DownloadLink from '../DownloadLink';
import type { DownloadLinkItem } from '../DownloadLink';
import styles from './DownloadGrid.module.css';

interface DownloadGridProps {
  items: DownloadLinkItem[];
  /** Cuando se indica, el grupo se envuelve en una sección con título e id de anclaje. */
  id?: string;
  title?: string;
}

export default function DownloadGrid({ items, id, title }: DownloadGridProps) {
  const grid = (
    <div className={styles.grid}>
      {items.map((item) => (
        <DownloadLink key={item.label} label={item.label} href={item.href} icon={item.icon} />
      ))}
    </div>
  );

  if (!title) return grid;

  return (
    <div className={styles.group} id={id}>
      <h3 className={styles.title}>{title}</h3>
      {grid}
    </div>
  );
}
