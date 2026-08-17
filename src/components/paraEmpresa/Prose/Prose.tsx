import type { ReactNode } from 'react';
import styles from './Prose.module.css';

interface ProseProps {
  children: ReactNode;
}

/** Tipografía de cuerpo de las páginas de trámites (párrafos, listas, enlaces y énfasis). */
export default function Prose({ children }: ProseProps) {
  return <div className={styles.prose}>{children}</div>;
}
