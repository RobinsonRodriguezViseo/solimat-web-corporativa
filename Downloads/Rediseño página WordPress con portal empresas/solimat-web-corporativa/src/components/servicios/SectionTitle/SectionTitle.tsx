import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  /** `lg` (28px) para Asistencia Sanitaria, `md` (27px) para Promoción de la Prevención. */
  size?: 'md' | 'lg';
  /** Línea fina que continúa el título hasta el borde derecho. */
  withRule?: boolean;
}

export default function SectionTitle({ title, size = 'lg', withRule = false }: SectionTitleProps) {
  const titleClassName = size === 'lg' ? `${styles.title} ${styles.titleLg}` : `${styles.title} ${styles.titleMd}`;

  return (
    <div className={styles.row}>
      <span className={styles.bar} aria-hidden="true" />
      <h2 className={titleClassName}>{title}</h2>
      {withRule ? <span className={styles.rule} aria-hidden="true" /> : null}
    </div>
  );
}
