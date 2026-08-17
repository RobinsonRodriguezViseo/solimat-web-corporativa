import type { ReactNode } from 'react';
import ActionButton from '../../paraEmpresa/ActionButton';
import InfoCard from '../../paraEmpresa/InfoCard';
import styles from './PrestacionCard.module.css';

const PORTAL_PACIENTE_URL = 'https://pacientes.solimat.com/';

interface PrestacionCardProps {
  /** Ancla usada por el índice lateral. */
  id: string;
  title: string;
  /** Sección de "Prestaciones económicas" que amplía la información. */
  moreInfoHref: string;
  children: ReactNode;
}

/** Tarjeta de prestación con los dos CTA fijos: ampliar información y solicitar en el portal. */
export default function PrestacionCard({ id, title, moreInfoHref, children }: PrestacionCardProps) {
  return (
    <InfoCard id={id} title={title} titleLevel="h2">
      {children}
      <div className={styles.actions}>
        <ActionButton href={moreInfoHref} icon="arrow">
          Ampliar información
        </ActionButton>
        <ActionButton href={PORTAL_PACIENTE_URL} tone="outline">
          Solicitar en el Portal del Paciente
        </ActionButton>
      </div>
    </InfoCard>
  );
}
