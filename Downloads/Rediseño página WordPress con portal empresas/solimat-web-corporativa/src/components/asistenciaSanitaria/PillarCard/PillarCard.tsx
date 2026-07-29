import type { ReactNode } from 'react';
import styles from './PillarCard.module.css';

export type PillarIcon = 'heart' | 'team' | 'star' | 'shield';

interface PillarCardProps {
  icon: PillarIcon;
  text: string;
}

const ICONS: Record<PillarIcon, ReactNode> = {
  heart: <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z" />,
  team: (
    <>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
    </>
  ),
  star: <path d="M12 2l2.4 5.3 5.6.6-4.2 3.9 1.2 5.7L12 14.8 7 17.5l1.2-5.7L4 7.9l5.6-.6z" />,
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
};

export default function PillarCard({ icon, text }: PillarCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          {ICONS[icon]}
        </svg>
      </span>
      <div className={styles.text}>{text}</div>
    </div>
  );
}
