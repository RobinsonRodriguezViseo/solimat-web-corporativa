import { Link } from 'react-router-dom';
import styles from './FeaturedArticle.module.css';

interface FeaturedArticleProps {
  to: string;
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

export default function FeaturedArticle({ to, image, date, title, excerpt }: FeaturedArticleProps) {
  return (
    <Link className={styles.card} to={to}>
      <div className={styles.media}>
        <img className={styles.image} src={image} alt={title} />
        <span className={styles.badge}>Destacada</span>
      </div>
      <div className={styles.body}>
        <div className={styles.date}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          {date}
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
        <span className={styles.more}>
          Leer más
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
