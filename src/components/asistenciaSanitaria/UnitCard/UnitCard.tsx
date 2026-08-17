import type { ReactNode } from 'react';
import Prose from '../../servicios/Prose';
import RichContent from '../../servicios/RichContent';
import type { RichBlock } from '../../servicios/RichContent';
import styles from './UnitCard.module.css';

export type UnitIcon = 'heart' | 'chart' | 'plus';

export interface Unit {
  title: string;
  blocks: RichBlock[];
  image?: string;
  imageAlt?: string;
  icon?: UnitIcon;
  /** Ocupa las dos columnas de la rejilla. */
  wide?: boolean;
}

type UnitCardProps = Unit;

const ICONS: Record<UnitIcon, ReactNode> = {
  heart: <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z" />,
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l3-4 3 3 4-6" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
};

export default function UnitCard({ title, blocks, image, imageAlt, icon, wide = false }: UnitCardProps) {
  return (
    <div className={wide ? `${styles.card} ${styles.wide}` : styles.card}>
      {image ? <img className={styles.image} src={image} alt={imageAlt ?? title} /> : null}
      <Prose className={image ? styles.body : styles.bodyIconOnly}>
        {icon ? (
          <span className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              {ICONS[icon]}
            </svg>
          </span>
        ) : null}
        <h4 className={styles.title}>{title}</h4>
        <RichContent blocks={blocks} />
      </Prose>
    </div>
  );
}
