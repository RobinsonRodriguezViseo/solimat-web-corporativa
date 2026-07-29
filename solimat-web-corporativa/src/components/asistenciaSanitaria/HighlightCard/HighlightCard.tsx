import Prose from '../../servicios/Prose';
import styles from './HighlightCard.module.css';

interface HighlightCardProps {
  title: string;
  items: string[];
}

export default function HighlightCard({ title, items }: HighlightCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <Prose>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Prose>
    </div>
  );
}
