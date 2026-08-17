import type { ReactNode } from 'react';
import type { Centro } from '../../../types/centro';
import { getCentroTypeLabel, getTelHref } from '../../../utils/centro';
import CentroTypeIcon from '../../shared/CentroTypeIcon';
import CentroServices from '../CentroServices';
import styles from './CentroInfoCard.module.css';

interface CentroInfoCardProps {
  centro: Centro;
}

interface InfoRowProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}

function InfoRow({ icon, label, children }: InfoRowProps) {
  return (
    <div className={styles.row}>
      <span className={styles.rowIcon}>{icon}</span>
      <div>
        <div className={styles.rowLabel}>{label}</div>
        {children}
      </div>
    </div>
  );
}

const phoneIcon = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8.1 9.6a16 16 0 006 6l1.1-1.1a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" />
  </svg>
);

const faxIcon = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="6" y="9" width="12" height="7" rx="1" />
    <path d="M6 9V3h12v6M6 14h12v7H6z" />
  </svg>
);

const calendarIcon = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const clockIcon = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export default function CentroInfoCard({ centro }: CentroInfoCardProps) {
  return (
    <div className={styles.card}>
      {/* Mismo icono que la tarjeta del listado, para que ambas vistas coincidan. */}
      <div className={styles.typeTag}>
        <CentroTypeIcon type={centro.type} size={13} strokeWidth={1.8} />
        {getCentroTypeLabel(centro.type)}
      </div>

      <h2 className={styles.name}>{centro.name}</h2>
      <div className={styles.address}>{centro.fullAddress}</div>

      <div className={styles.rows}>
        {centro.phone ? (
          <InfoRow icon={phoneIcon} label="Teléfono">
            <a className={styles.phone} href={getTelHref(centro.phone)}>
              {centro.phone}
            </a>
          </InfoRow>
        ) : null}

        {centro.fax ? (
          <InfoRow icon={faxIcon} label="Fax">
            <div className={styles.rowValue}>{centro.fax}</div>
          </InfoRow>
        ) : null}

        <InfoRow icon={calendarIcon} label="Horario Administrativo">
          <div className={styles.rowSchedule}>{centro.horarioAdmin}</div>
        </InfoRow>

        <InfoRow icon={clockIcon} label="Horario Asistencial">
          <div className={styles.rowSchedule}>{centro.horarioAsist}</div>
        </InfoRow>
      </div>

      <CentroServices services={centro.services} />
    </div>
  );
}
