import RichContent from '../../servicios/RichContent';
import type { RichBlock } from '../../servicios/RichContent';
import styles from './GradeCard.module.css';

export interface Grade {
  title: string;
  blocks: RichBlock[];
  /** Ocupa las dos columnas de la rejilla. */
  wide?: boolean;
}

type GradeCardProps = Grade;

export default function GradeCard({ title, blocks, wide = false }: GradeCardProps) {
  return (
    <div className={wide ? `${styles.card} ${styles.wide}` : styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <RichContent blocks={blocks} />
    </div>
  );
}
