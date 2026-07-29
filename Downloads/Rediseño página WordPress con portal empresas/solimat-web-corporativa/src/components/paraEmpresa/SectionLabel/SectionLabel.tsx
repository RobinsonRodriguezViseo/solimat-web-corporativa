import type { ReactNode } from 'react';
import styles from './SectionLabel.module.css';

interface SectionLabelProps {
  children: ReactNode;
}

/** Etiqueta en versalitas de acento que introduce un bloque dentro de una tarjeta. */
export default function SectionLabel({ children }: SectionLabelProps) {
  return <span className={styles.label}>{children}</span>;
}
