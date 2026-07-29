import styles from './LoadingState.module.css';

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({ message = 'Cargando…' }: LoadingStateProps) {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <p className={styles.text}>{message}</p>
    </div>
  );
}
