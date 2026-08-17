import styles from './PrincipleCard.module.css';

interface PrincipleCardProps {
  title: string;
  text: string;
}

export default function PrincipleCard({ title, text }: PrincipleCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
