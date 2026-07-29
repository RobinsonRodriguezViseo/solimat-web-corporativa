import type { CSSProperties, ReactNode } from 'react';
import styles from './SplitPanel.module.css';

interface SplitPanelProps {
  image: string;
  imageAlt: string;
  /** Lado en el que se coloca la imagen. */
  imagePosition?: 'left' | 'right';
  /** Alto mínimo de la imagen en escritorio (px), tal y como fija el diseño. */
  imageMinHeight?: number;
  /** Sin borde, radio ni sombra: para anidarlo dentro de otra tarjeta. */
  bare?: boolean;
  contentClassName?: string;
  children: ReactNode;
}

export default function SplitPanel({
  image,
  imageAlt,
  imagePosition = 'right',
  imageMinHeight = 320,
  bare = false,
  contentClassName,
  children,
}: SplitPanelProps) {
  const panelClassName = bare ? `${styles.panel} ${styles.bare}` : styles.panel;
  const imageStyle: CSSProperties = { minHeight: `${imageMinHeight}px` };
  const picture = <img className={styles.image} style={imageStyle} src={image} alt={imageAlt} />;

  return (
    <div className={panelClassName}>
      {imagePosition === 'left' ? picture : null}
      <div className={contentClassName ? `${styles.content} ${contentClassName}` : styles.content}>{children}</div>
      {imagePosition === 'right' ? picture : null}
    </div>
  );
}
