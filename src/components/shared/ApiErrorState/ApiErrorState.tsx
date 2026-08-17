import { EMERGENCY_PHONE, getTelHref } from '../../../utils/centro';
import styles from './ApiErrorState.module.css';

interface ApiErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

const DEFAULT_TITLE = 'No podemos mostrar esta información ahora mismo';
const DEFAULT_MESSAGE =
  'Estamos teniendo problemas para conectar con nuestros sistemas. Inténtalo de nuevo en unos minutos.';

/**
 * Estado de error del API. Se muestra en lugar de los datos: nunca se recurre a
 * un listado estático de respaldo, porque unas señas o un teléfono desfasados de
 * un centro sanitario son peores que decir que ahora mismo no hay información.
 */
export default function ApiErrorState({
  title = DEFAULT_TITLE,
  message = DEFAULT_MESSAGE,
  onRetry,
}: ApiErrorStateProps) {
  return (
    <div className={styles.wrapper} role="alert">
      <span className={styles.icon} aria-hidden="true">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v5M12 16h.01" />
        </svg>
      </span>

      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>

      <p className={styles.emergency}>
        Si necesitas asistencia urgente, llámanos al{' '}
        <a className={styles.phone} href={getTelHref(EMERGENCY_PHONE)}>
          {EMERGENCY_PHONE}
        </a>
        .
      </p>

      {onRetry ? (
        <button className={styles.retry} type="button" onClick={onRetry}>
          Reintentar
        </button>
      ) : null}
    </div>
  );
}
