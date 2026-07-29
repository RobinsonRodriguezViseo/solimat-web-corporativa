import type { ReactNode } from 'react';
import styles from './SplitPanel.module.css';

interface SplitPanelProps {
  image: string;
  imageAlt: string;
  /** `row` = texto e imagen a dos columnas; `column` = imagen arriba a todo el ancho. */
  orientation?: 'row' | 'column';
  imagePosition?: 'left' | 'right';
  imageFit?: 'cover' | 'contain';
  /** Ancho de la columna de imagen en `row`: `equal` = mitad del panel; `half` = la mitad de eso. */
  imageWidth?: 'equal' | 'half';
  children: ReactNode;
}

/** Panel blanco que combina un bloque de contenido con una imagen. */
export default function SplitPanel({
  image,
  imageAlt,
  orientation = 'row',
  imagePosition = 'right',
  imageFit = 'cover',
  imageWidth = 'equal',
  children,
}: SplitPanelProps) {
  const panelClassName = [
    styles.panel,
    orientation === 'column' ? styles.column : '',
    imagePosition === 'left' ? styles.imageFirst : '',
    orientation === 'row' && imageWidth === 'half' ? styles.halfImage : '',
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
