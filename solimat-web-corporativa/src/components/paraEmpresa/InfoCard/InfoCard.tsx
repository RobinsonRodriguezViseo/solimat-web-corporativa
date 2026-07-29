import type { ReactNode } from 'react';
import Prose from '../Prose';
import styles from './InfoCard.module.css';

interface InfoCardProps {
  /** Ancla usada por el índice lateral de la página. */
  id?: string;
  title?: string;
  /** `h2` para tarjetas que abren sección; `h3` para pasos dentro de una sección. */
  titleLevel?: 'h2' | 'h3';
  children: ReactNode;
}

/** Tarjeta blanca de contenido con la tipografía de cuerpo ya aplicada. */
export default function InfoCard({ id, title, titleLevel = 'h3', children }: InfoCardProps) {
  return (
    <div className={styles.card} id={id}>
      {title && titleLevel === 'h2' ? <h2 className={styles.titleLg}>{title}</h2> : null}
      {title && titleLevel === 'h3' ? <h3 className={styles.title}>{title}</h3> : null}
      <Prose>{children}</Prose>
    </div>
  );
}
