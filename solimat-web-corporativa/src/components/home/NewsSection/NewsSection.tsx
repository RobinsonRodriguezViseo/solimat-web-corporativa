import { getNoticiaById } from '../../../data/noticias';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import NewsCard from '../../shared/NewsCard';
import styles from './NewsSection.module.css';

interface FeaturedNoticia {
  id: number;
  tag: string;
}

const FEATURED: FeaturedNoticia[] = [
  { id: 1, tag: 'Solidaridad' },
  { id: 2, tag: 'Prevención' },
  { id: 3, tag: 'Calidad' },
];

export default function NewsSection() {
  return (
    <Container as="section" id="noticias" className={styles.section}>
      <div className={styles.headerRow}>
        <div>
          <div className={styles.eyebrow}>Actualidad</div>
          <h2 className={styles.title}>Noticias</h2>
        </div>
        <Button href="/noticias" variant="ghost">
          Más noticias
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Button>
      </div>
      <div className={styles.grid}>
        {FEATURED.map(({ id, tag }) => {
          const noticia = getNoticiaById(id);
          if (!noticia) return null;

          return (
            <NewsCard
              key={id}
              to={`/noticias/${id}`}
              image={noticia.image}
              date={noticia.date}
              title={noticia.title}
              tag={tag}
            />
          );
        })}
      </div>
    </Container>
  );
}
