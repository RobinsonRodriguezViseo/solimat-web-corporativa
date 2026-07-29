import styles from './HospitalContact.module.css';

interface HospitalContactProps {
  street: string;
  city: string;
  phone: string;
  phoneHref: string;
  mapSrc: string;
  mapTitle: string;
}

export default function HospitalContact({
  street,
  city,
  phone,
  phoneHref,
  mapSrc,
  mapTitle,
}: HospitalContactProps) {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.addressRow}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className={styles.pin}
            aria-hidden="true"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <div className={styles.address}>
            {street}
            <br />
            <span className={styles.city}>{city}</span>
          </div>
        </div>
        <div className={styles.phoneRow}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className={styles.pin}
            aria-hidden="true"
          >
            <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8.1 9.6a16 16 0 006 6l1.1-1.1a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" />
          </svg>
          <div className={styles.phone}>
            Teléfono:{' '}
            <a className={styles.phoneLink} href={phoneHref}>
              {phone}
            </a>
          </div>
        </div>
      </div>
      <div className={styles.mapBox}>
        <iframe
          className={styles.map}
          src={mapSrc}
          title={mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
