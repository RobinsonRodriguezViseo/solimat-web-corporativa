import type { ReactNode } from 'react';
import OrgLogo from '../OrgLogo';
import type { Organismo } from '../OrgLogo';
import styles from './OrgGroup.module.css';

interface OrgGroupProps {
  title: string;
  organismos: Organismo[];
  /** Enlaces adicionales bajo la rejilla de logotipos. */
  children?: ReactNode;
}

export default function OrgGroup({ title, organismos, children }: OrgGroupProps) {
  return (
    <div className={styles.group}>
      <div className={styles.title}>{title}</div>
      <div className={children ? `${styles.grid} ${styles.gridWithLinks}` : styles.grid}>
        {organismos.map((organismo) => (
          <OrgLogo key={organismo.name} {...organismo} />
        ))}
      </div>
      {children}
    </div>
  );
}
