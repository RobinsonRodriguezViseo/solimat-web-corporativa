import { Link, useParams } from 'react-router-dom';
import ArticleBody from '../../components/noticia/ArticleBody';
import OtherNews from '../../components/noticia/OtherNews';
import ShareLinks from '../../components/noticia/ShareLinks';
import Breadcrumb from '../../components/shared/Breadcrumb';
import Button from '../../components/shared/Button';
import Container from '../../components/shared/Container';
import { getNoticiaById, noticias, type Block, type NoticiaPublica } from '../../data/noticias';
import { getNewsById, getPublishedNews, type News } from '../../services/newsService';
import styles from './NoticiaPage.module.css';

// Extraer texto plano del HTML
function extractPlainText(html: string): string {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || '';
}

const BackToNoticias = () => (
  <Link className={styles.backLink} to="/noticias">
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
    Volver a Noticias
  </Link>
);

export default function NoticiaPage() {
  const { id } = useParams<{ id: string }>();
  
  // Primero intentar obtener de newsService
  let noticia: News | (typeof noticias)[number] | undefined = id ? getNewsById(id) : undefined;
  let isFromNewsService = !!noticia;
  
  // Si no está en newsService, intentar como número en noticias estáticas
  if (!noticia) {
    const parsedId = Number.parseInt(id ?? '', 10);
    if (!Number.isNaN(parsedId)) {
      noticia = getNoticiaById(parsedId);
    }
  }

  if (!noticia) {
    return (
      <Container className={styles.notFound}>
        <h1 className={styles.notFoundTitle}>Noticia no encontrada</h1>
        <p className={styles.notFoundText}>La noticia que buscas no existe o ya no está disponible.</p>
        <Button href="/noticias">Volver a Noticias</Button>
      </Container>
    );
  }

  // Para noticias del newsService, usar el HTML completo
  // Para noticias estáticas, usar el sistema de blocks
  let formattedNoticia: NoticiaPublica;
  let fullHtmlContent: string | null = null;

  if (isFromNewsService) {
    const plainText = extractPlainText(noticia.content);
    const excerpt = plainText.substring(0, 150).trim() + (plainText.length > 150 ? '...' : '');
    
    formattedNoticia = {
      id: noticia.id,
      title: noticia.title,
      excerpt,
      image: noticia.imageData,
      date: new Date(noticia.publishedAt || noticia.createdAt).toLocaleDateString('es-ES'),
      blocks: undefined,
      url: undefined,
    };
    fullHtmlContent = noticia.content; // Guardar HTML completo
  } else {
    formattedNoticia = noticia;
  }

  const blocks: Block[] = formattedNoticia.blocks ?? [{ kind: 'p', text: formattedNoticia.excerpt }];
  const allNoticias: NoticiaPublica[] = [...noticias, ...getPublishedNews().map((n) => {
    const plainText = extractPlainText(n.content);
    const excerpt = plainText.substring(0, 150).trim() + (plainText.length > 150 ? '...' : '');
    
    return {
      id: n.id,
      title: n.title,
      excerpt,
      image: n.imageData,
      date: new Date(n.publishedAt || n.createdAt).toLocaleDateString('es-ES'),
    };
  })];
  const others = allNoticias.filter((item) => item.id !== formattedNoticia.id).slice(0, 3);

  return (
    <>
      <article className={styles.article}>
        <section className={styles.header}>
          <div className={styles.topRow}>
            <Breadcrumb
              tone="light"
              items={[{ label: 'Inicio', to: '/' }, { label: 'Noticias', to: '/noticias' }, { label: 'Noticia' }]}
            />
            <BackToNoticias />
          </div>

          <div className={styles.date}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {formattedNoticia.date}
          </div>
          <h1 className={styles.title}>{formattedNoticia.title}</h1>
        </section>

        <section className={styles.mediaSection}>
          <img className={styles.heroImage} src={formattedNoticia.image} alt={formattedNoticia.title} />
        </section>

        <section className={styles.bodySection}>
          {fullHtmlContent ? (
            // Para noticias del newsService, renderizar HTML completo
            <div 
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: fullHtmlContent }}
            />
          ) : (
            // Para noticias estáticas, usar ArticleBody con blocks
            <ArticleBody blocks={blocks} />
          )}

          {!formattedNoticia.blocks && formattedNoticia.url ? (
            <div className={styles.fullNotice}>
              <span className={styles.fullNoticeText}>Consulta la noticia completa en la web de Solimat.</span>
              <Button href={formattedNoticia.url} size="sm">
                Ver noticia completa
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </Button>
            </div>
          ) : null}
        </section>

        <section className={styles.shareSection}>
          <ShareLinks />
        </section>
      </article>

      <OtherNews noticias={others} />
    </>
  );
}
