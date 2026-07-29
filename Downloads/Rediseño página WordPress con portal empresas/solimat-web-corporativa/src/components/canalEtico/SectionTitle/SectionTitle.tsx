import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  id?: string;
}

export default function SectionTitle({ title, id }: SectionTitleProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.bar} aria-hidden="true" />
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
    </div>
  );
}
