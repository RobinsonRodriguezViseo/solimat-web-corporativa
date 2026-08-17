import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  size?: 'lg' | 'md';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  size = 'lg',
}: SectionHeadingProps) {
  const wrapperClassName = align === 'center' ? `${styles.wrapper} ${styles.center}` : styles.wrapper;
  const titleClassName = size === 'lg' ? `${styles.title} ${styles.titleLg}` : `${styles.title} ${styles.titleMd}`;

  return (
    <div className={wrapperClassName}>
      {eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}
      <h2 className={titleClassName}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
