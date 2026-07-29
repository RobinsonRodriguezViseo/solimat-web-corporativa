import type { ReactNode } from 'react';
import Prose from '../../servicios/Prose';
import RichContent from '../../servicios/RichContent';
import type { RichBlock } from '../../servicios/RichContent';
import PrestacionTabs from '../PrestacionTabs';
import type { PrestacionTab } from '../PrestacionTabs';
import styles from './PrestacionCard.module.css';

interface PrestacionCardProps {
  id: string;
  title: string;
  /** Introducción dentro de la cabecera con degradado. */
  headerBlocks?: RichBlock[];
  /** Apostilla destacada bajo el título (p. ej. "Nueva regulación Cese de Actividad"). */
  headerNote?: string;
  /** Cuando se indica, el cuerpo se organiza en pestañas. */
  tabs?: PrestacionTab[];
  children?: ReactNode;
}

export default function PrestacionCard({
  id,
  title,
  headerBlocks,
  headerNote,
  tabs,
  children,
}: PrestacionCardProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={headerNote ? `${styles.title} ${styles.titleWithNote}` : styles.title}>{title}</h2>
          {headerNote ? <div className={styles.note}>{headerNote}</div> : null}
          {headerBlocks ? (
            <Prose>
              <RichContent blocks={headerBlocks} />
            </Prose>
          ) : null}
        </div>
        {tabs ? (
          <PrestacionTabs tabs={tabs}>{children}</PrestacionTabs>
        ) : (
          <Prose className={styles.body}>{children}</Prose>
        )}
      </div>
    </section>
  );
}
