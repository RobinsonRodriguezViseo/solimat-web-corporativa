import { Link } from 'react-router-dom';
import type { Noticia } from '../../../data/noticias';
import Container from '../../shared/Container';
import styles from './OtherNews.module.css';

interface OtherNewsProps {
  noticias: Noticia[];
}

export default function OtherNews({ noticias }: OtherNewsProps) {
  if (noticias.length === 0) return null;

  return (
    <Container as="section" className={styles.section}>
      <h2 className={styles.heading}>Otras noticias</h2>
      <div className={styles.grid}>
        {noticias.map((noticia) => (
          <Link key={noticia.id} className={styles.card} to={`/noticias/${noticia.id}`}>
            <div className={styles.thumb}>
              <img className={styles.image} src={noticia.image} alt={noticia.title} />
              <span className={styles.date}>{noticia.date}</span>
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{noticia.title}</h3>
              <span className={styles.more}>
                Leer más
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
