import RichContent from '../../servicios/RichContent';
import type { RichBlock } from '../../servicios/RichContent';
import styles from './FeatureCard.module.css';

export interface Feature {
  title: string;
  blocks: RichBlock[];
}

type FeatureCardProps = Feature;

export default function FeatureCard({ title, blocks }: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>
        <RichContent blocks={blocks} />
      </div>
    </div>
  );
}
