import type { ReactNode } from 'react';
import styles from './QuestionCard.module.css';

interface QuestionCardProps {
  icon: ReactNode;
  question: string;
}

export default function QuestionCard({ icon, question }: QuestionCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{question}</h3>
    </div>
  );
}
