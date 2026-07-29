import { useId } from 'react';
import styles from './CentrosSearch.module.css';

interface CentrosSearchProps {
  value: string;
  onChange: (query: string) => void;
}

const PLACEHOLDER = 'Buscar por dirección o nombre del centro…';

export default function CentrosSearch({ value, onChange }: CentrosSearchProps) {
  const inputId = useId();

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={inputId}>
        {PLACEHOLDER}
      </label>
      <svg
        className={styles.icon}
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
      <input
        id={inputId}
        className={styles.input}
        type="search"
        placeholder={PLACEHOLDER}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
