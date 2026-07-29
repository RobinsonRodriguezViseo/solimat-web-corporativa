import { useEffect, useState } from 'react';
import FeaturedArticle from '../../components/noticias/FeaturedArticle';
import NoticiasGrid from '../../components/noticias/NoticiasGrid';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import { getExcerptListado, noticias as staticNoticias } from '../../data/noticias';
import { getPublishedNews } from '../../services/newsService';
import type { News } from '../../services/newsService';
import styles from './NoticiasPage.module.css';

// Extraer texto plano del HTML
function extractPlainText(html: string): string {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || '';
}

// Convertir noticia del newsService al formato de la página
function convertNewsToNoticia(news: News) {
  // Extraer texto plano y luego tomar los primeros 150 caracteres
  const plainText = extractPlainText(news.content);
  const excerpt = plainText.substring(0, 150).trim() + (plainText.length > 150 ? '...' : '');
  
  return {
    id: news.id,
    title: news.title,
    excerpt,
    image: news.imageData,
    date: new Date(news.publishedAt || news.createdAt).toLocaleDateString('es-ES'),
    content: news.content,
  };
}

export default function NoticiasPage() {
  const [allNoticias, setAllNoticias] = useState([...staticNoticias]);

  useEffect(() => {
    // Obtener noticias publicadas del newsService
    const publishedNews = getPublishedNews();
    const convertedNews = publishedNews.map(convertNewsToNoticia);
    
    // Combinar noticias estáticas con las nuevas publicadas
    setAllNoticias([...staticNoticias, ...convertedNews]);
  }, []);

  const [featured, ...rest] = allNoticias;

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Conócenos' }, { label: 'Noticias' }]}
        title="Noticias"
        subtitle="Actualidad de Solimat: compromiso, prevención, calidad y las personas en el centro de nuestra gestión."
      />

      {featured ? (
        <Container as="section" className={styles.featuredSection}>
          <FeaturedArticle
            to={`/noticias/${featured.id}`}
            image={featured.image}
            date={featured.date}
            title={featured.title}
            excerpt={getExcerptListado(featured)}
          />
        </Container>
      ) : null}

      <Container as="section" className={styles.gridSection}>
        <NoticiasGrid noticias={rest} />
      </Container>
    </>
  );
}
