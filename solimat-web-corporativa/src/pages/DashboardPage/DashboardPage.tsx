import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import Button from '../../components/shared/Button';
import type { News } from '../../services/newsService';
import { getPendingNews, getPublishedNews, approveNews, rejectNews } from '../../services/newsService';
import styles from './DashboardPage.module.css';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [pendingNews, setPendingNews] = useState<News[]>([]);
  const [publishedNews, setPublishedNews] = useState<News[]>([]);
  const [activeTab, setActiveTab] = useState<'create' | 'pending' | 'published'>('create');

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = () => {
    setPendingNews(getPendingNews());
    setPublishedNews(getPublishedNews());
  };

  const handleApproveNews = (id: string) => {
    approveNews(id);
    loadNews();
  };

  const handleRejectNews = (id: string) => {
    if (window.confirm('¿Está seguro que desea rechazar esta noticia?')) {
      rejectNews(id);
      loadNews();
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Dashboard' }]}
        title="Panel de administración"
        subtitle="Bienvenido al dashboard de Solimat"
      />

      <Container>
        <div className={styles.dashboard}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'create' ? styles.active : ''}`}
              onClick={() => setActiveTab('create')}
            >
              ➕ Crear noticia
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'pending' ? styles.active : ''}`}
              onClick={() => setActiveTab('pending')}
            >
              ⏳ Pendientes ({pendingNews.length})
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'published' ? styles.active : ''}`}
              onClick={() => setActiveTab('published')}
            >
              ✅ Publicadas ({publishedNews.length})
            </button>
          </div>

          {activeTab === 'create' && (
            <div className={styles.section}>
              <h2>Crear nueva noticia</h2>
              <p className={styles.sectionDescription}>
                Completa el formulario para crear una nueva noticia. Será enviada a revisión antes de publicarse.
              </p>
              <Button onClick={() => navigate('/dashboard/crear-noticia')}>
                Ir al creador de noticias
              </Button>
            </div>
          )}

          {activeTab === 'pending' && (
            <div className={styles.section}>
              <h2>Noticias pendientes de aprobación</h2>
              {pendingNews.length === 0 ? (
                <p className={styles.empty}>No hay noticias pendientes</p>
              ) : (
                <div className={styles.newsList}>
                  {pendingNews.map((news) => (
                    <div key={news.id} className={styles.newsCard}>
                      {news.imageData && (
                        <div className={styles.newsImage}>
                          <img src={news.imageData} alt={news.title} />
                        </div>
                      )}
                      <div className={styles.newsContent}>
                        <h3>{news.title}</h3>
                        <p className={styles.date}>
                          Creada: {formatDate(news.createdAt)}
                        </p>
                        <div
                          className={styles.excerpt}
                          dangerouslySetInnerHTML={{
                            __html: news.content.substring(0, 150) + '...',
                          }}
                        />
                        <div className={styles.actions}>
                          <Button
                            type="button"
                            onClick={() => handleApproveNews(news.id)}
                          >
                            ✅ Aprobar
                          </Button>
                          <Button
                            type="button"
                            onClick={() => handleRejectNews(news.id)}
                            variant="soft"
                          >
                            ❌ Rechazar
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'published' && (
            <div className={styles.section}>
              <h2>Noticias publicadas</h2>
              {publishedNews.length === 0 ? (
                <p className={styles.empty}>No hay noticias publicadas</p>
              ) : (
                <div className={styles.newsList}>
                  {publishedNews.map((news) => (
                    <div key={news.id} className={styles.newsCard}>
                      {news.imageData && (
                        <div className={styles.newsImage}>
                          <img src={news.imageData} alt={news.title} />
                        </div>
                      )}
                      <div className={styles.newsContent}>
                        <h3>{news.title}</h3>
                        <p className={styles.date}>
                          Publicada: {formatDate(news.publishedAt || news.createdAt)}
                        </p>
                        <div
                          className={styles.excerpt}
                          dangerouslySetInnerHTML={{
                            __html: news.content.substring(0, 150) + '...',
                          }}
                        />
                        <Button
                          onClick={() => navigate(`/noticias/${news.id}`)}
                          variant="soft"
                        >
                          Ver detalle
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
