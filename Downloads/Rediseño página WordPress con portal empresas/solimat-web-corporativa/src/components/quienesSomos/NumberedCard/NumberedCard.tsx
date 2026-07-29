import styles from './NumberedCard.module.css';

interface NumberedCardProps {
  number: number;
  text: string;
}

export default function NumberedCard({ number, text }: NumberedCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.number}>{number}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
