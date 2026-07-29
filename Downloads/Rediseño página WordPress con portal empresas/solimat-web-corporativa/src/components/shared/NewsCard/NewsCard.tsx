import { Link } from 'react-router-dom';
import styles from './NewsCard.module.css';

interface NewsCardProps {
  to: string;
  image: string;
  date: string;
  title: string;
  tag?: string;
}

export default function NewsCard({ to, image, date, title, tag }: NewsCardProps) {
  return (
    <Link className={styles.card} to={to}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={title} />
        {tag ? <span className={styles.tag}>{tag}</span> : null}
      </div>
      <div className={styles.body}>
        <div className={styles.date}>{date}</div>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.arrow}>Leer más →</span>
      </div>
    </Link>
  );
}
