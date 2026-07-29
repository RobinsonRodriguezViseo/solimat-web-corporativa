import type { ReactNode } from 'react';
import styles from './ValuesList.module.css';

interface ValueItem {
  label: string;
  icon: ReactNode;
}

const VALUES: ValueItem[] = [
  {
    label: 'Vocación de servicio',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M12 21s-8-4.5-8-11a4 4 0 018-1 4 4 0 018 1c0 6.5-8 11-8 11z" />
      </svg>
    ),
  },
  {
    label: 'Compromiso',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: 'Ganas de crecer',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    label: 'Trabajo en equipo',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </svg>
    ),
  },
];

export default function ValuesList() {
  return (
    <div className={styles.grid}>
      {VALUES.map((value) => (
        <div key={value.label} className={styles.card}>
          <div className={styles.icon}>{value.icon}</div>
          <div className={styles.label}>{value.label}</div>
        </div>
      ))}
    </div>
  );
}
