/**
 * Servicio para manejar noticias en memoria.
 * Preparado para persistencia en backend cuando esté listo.
 * Las noticias se pierden al recargar la página (sin localStorage).
 */

export interface News {
  id: string;
  title: string;
  content: string; // HTML con formato
  imageData: string; // Base64 de la imagen
  imageFileName: string; // Nombre del archivo para referencia
  status: 'pending' | 'published';
  createdAt: number;
  publishedAt?: number;
}

// Almacenamiento en memoria (se pierde al recargar la página)
let newsStore: News[] = [];

/**
 * Obtiene todas las noticias del almacenamiento
 */
export function getAllNews(): News[] {
  return [...newsStore];
}

/**
 * Obtiene solo las noticias publicadas (para mostrar en la página pública)
 */
export function getPublishedNews(): News[] {
  return newsStore
    .filter((news) => news.status === 'published')
    .sort((a, b) => (b.publishedAt || 0) - (a.publishedAt || 0));
}

/**
 * Obtiene solo las noticias pendientes (para el admin)
 */
export function getPendingNews(): News[] {
  return newsStore
    .filter((news) => news.status === 'pending')
    .sort((a, b) => b.createdAt - a.createdAt);
}

/**
 * Obtiene una noticia por ID
 */
export function getNewsById(id: string): News | undefined {
  return newsStore.find((news) => news.id === id);
}

/**
 * Crea una nueva noticia (estado pending)
 * TODO: Cuando el backend esté listo, cambiar a:
 * const response = await fetch('/api/news', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ title, content, imageData, imageFileName }),
 * });
 * const data = await response.json();
 * return data;
 */
export function createNews(
  title: string,
  content: string,
  imageData: string,
  imageFileName: string
): News {
  const news: News = {
    id: Date.now().toString(),
    title,
    content,
    imageData,
    imageFileName,
    status: 'pending',
    createdAt: Date.now(),
  };

  newsStore.push(news);

  // TODO: Backend - Guardar en src/images/noticias/ e src/data/noticias.json
  console.log('Noticia creada (pending):', news);

  return news;
}

/**
 * Aprueba una noticia (cambia estado a published)
 * TODO: Cuando el backend esté listo:
 * const response = await fetch(`/api/news/${id}/approve`, { method: 'POST' });
 */
export function approveNews(id: string): News | null {
  const news = newsStore.find((n) => n.id === id);

  if (news && news.status === 'pending') {
    news.status = 'published';
    news.publishedAt = Date.now();
    console.log('Noticia aprobada:', news);
    return news;
  }

  return null;
}

/**
 * Rechaza una noticia (la elimina)
 * TODO: Cuando el backend esté listo:
 * const response = await fetch(`/api/news/${id}`, { method: 'DELETE' });
 */
export function rejectNews(id: string): boolean {
  const index = newsStore.findIndex((n) => n.id === id);

  if (index !== -1) {
    const rejected = newsStore.splice(index, 1)[0];
    console.log('Noticia rechazada:', rejected);
    return true;
  }

  return false;
}

/**
 * Elimina una noticia publicada (solo admin)
 */
export function deleteNews(id: string): boolean {
  return rejectNews(id);
}

/**
 * Edita una noticia (solo si está en pending)
 */
export function updatePendingNews(
  id: string,
  title: string,
  content: string,
  imageData: string,
  imageFileName: string
): News | null {
  const news = newsStore.find((n) => n.id === id && n.status === 'pending');

  if (news) {
    news.title = title;
    news.content = content;
    news.imageData = imageData;
    news.imageFileName = imageFileName;
    console.log('Noticia actualizada:', news);
    return news;
  }

  return null;
}
