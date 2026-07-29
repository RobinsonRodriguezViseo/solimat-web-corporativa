import type { ReactNode } from 'react';
import styles from './SplitPanel.module.css';

interface SplitPanelProps {
  image: string;
  imageAlt: string;
  /** `row` = texto e imagen a dos columnas; `column` = imagen arriba a todo el ancho. */
  orientation?: 'row' | 'column';
  imagePosition?: 'left' | 'right';
  imageFit?: 'cover' | 'contain';
  children: ReactNode;
}

/** Panel blanco que combina un bloque de contenido con una imagen. */
export default function SplitPanel({
  image,
  imageAlt,
  orientation = 'row',
  imagePosition = 'right',
  imageFit = 'cover',
  children,
}: SplitPanelProps) {
  const panelClassName = [
    styles.panel,
    orientation === 'column' ? styles.column : '',
    imagePosition === 'left' ? styles.imageFirst : '',
  ]
    .filter(Boolean)
    .join(' ');
  const imageClassName = imageFit === 'contain' ? `${styles.image} ${styles.contain}` : styles.image;

  return (
    <div className={panelClassName}>
      <div className={styles.content}>{children}</div>
      <img className={imageClassName} src={image} alt={imageAlt} />
    </div>
  );
}
