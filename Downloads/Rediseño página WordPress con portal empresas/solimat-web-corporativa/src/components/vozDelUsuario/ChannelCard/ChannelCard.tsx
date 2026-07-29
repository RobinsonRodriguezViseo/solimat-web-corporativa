import type { ReactNode } from 'react';
import styles from './ChannelCard.module.css';

interface ChannelCardProps {
  icon: ReactNode;
  text: string;
  /** Si se indica, el texto de la tarjeta se convierte en un enlace externo. */
  href?: string;
  /** Ocupa el ancho completo de la rejilla. */
  wide?: boolean;
}

export default function ChannelCard({ icon, text, href, wide = false }: ChannelCardProps) {
  return (
    <div className={wide ? `${styles.card} ${styles.wide}` : styles.card}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.text}>
        {href ? (
          <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        ) : (
          text
        )}
      </div>
    </div>
  );
}
