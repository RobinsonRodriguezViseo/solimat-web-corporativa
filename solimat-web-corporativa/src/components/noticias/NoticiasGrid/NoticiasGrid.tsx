import { Link } from 'react-router-dom';
import { getExcerptListado, type NoticiaPublica } from '../../../data/noticias';
import styles from './NoticiasGrid.module.css';

interface NoticiasGridProps {
  noticias: NoticiaPublica[];
}

export default function NoticiasGrid({ noticias }: NoticiasGridProps) {
  return (
    <div className={styles.grid}>
      {noticias.map((noticia) => (
        <Link key={noticia.id} className={styles.card} to={`/noticias/${noticia.id}`}>
          <div className={styles.thumb}>
            <img className={styles.image} src={noticia.image} alt={noticia.title} />
            <span className={styles.date}>{noticia.date}</span>
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>{noticia.title}</h3>
            <p className={styles.excerpt}>{getExcerptListado(noticia)}</p>
            <span className={styles.more}>
              Leer más
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
