import styles from './CentroServices.module.css';

interface CentroServicesProps {
  services: string[];
}

export default function CentroServices({ services }: CentroServicesProps) {
  // El API puede no devolver servicios para un centro; el bloque desaparece.
  if (services.length === 0) return null;

  return (
    <div className={styles.block}>
      <div className={styles.head}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
        <h3 className={styles.title}>Servicios disponibles</h3>
      </div>
      <ul className={styles.list}>
        {services.map((service) => (
          <li key={service} className={styles.item}>
            <span className={styles.dot} aria-hidden="true" />
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}
