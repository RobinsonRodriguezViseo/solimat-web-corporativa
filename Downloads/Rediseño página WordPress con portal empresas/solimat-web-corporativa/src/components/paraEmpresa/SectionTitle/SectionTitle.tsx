import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
}

/** Título de sección con la barra de acento a la izquierda. */
export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.bar} aria-hidden="true" />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
