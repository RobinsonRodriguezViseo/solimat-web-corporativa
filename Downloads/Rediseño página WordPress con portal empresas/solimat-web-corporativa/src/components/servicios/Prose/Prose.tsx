import type { ReactNode } from 'react';
import styles from './Prose.module.css';

interface ProseProps {
  children: ReactNode;
  className?: string;
}

/**
 * Bloque de texto largo de las páginas de Servicios: aplica la tipografía de
 * párrafos, listas, tablas y enlaces del diseño (`.as-body` / `.pp-body` / `.pe-body`).
 */
export default function Prose({ children, className }: ProseProps) {
  return <div className={className ? `${styles.prose} ${className}` : styles.prose}>{children}</div>;
}
