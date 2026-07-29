import styles from './GroupHeading.module.css';

interface GroupHeadingProps {
  id: string;
  title: string;
}

export default function GroupHeading({ id, title }: GroupHeadingProps) {
  return (
    <div className={styles.wrapper} id={id}>
      <span className={styles.bar} aria-hidden="true" />
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.rule} aria-hidden="true" />
    </div>
  );
}
