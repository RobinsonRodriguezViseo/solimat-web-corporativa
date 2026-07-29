import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import NoticiaPage from './NoticiaPage';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/noticias/:id" element={<NoticiaPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('NoticiaPage', () => {
  it('renders the article matching the route id, with its body blocks', () => {
    renderAt('/noticias/1');

    expect(screen.getByRole('heading', { level: 1, name: /Asociación Española Contra el Cáncer/ })).toBeInTheDocument();
    expect(screen.getByText('12 mayo, 2025')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Sobre Solimat', level: 2 })).toBeInTheDocument();
    expect(screen.getByText(/José Ángel González, Director del Hospital Solimat/)).toBeInTheDocument();
  });

  it('shows the back link, share block and related news', () => {
    renderAt('/noticias/2');

    expect(screen.getByRole('link', { name: /Volver a Noticias/ })).toHaveAttribute('href', '/noticias');
    expect(screen.getByText('Comparte:')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Otras noticias' })).toBeInTheDocument();
  });

  it('falls back to the excerpt and shows the original-source CTA for articles without blocks', () => {
    renderAt('/noticias/5');

    expect(screen.getByText('Consulta la noticia completa en la web de Solimat.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Ver noticia completa/ })).toHaveAttribute('target', '_blank');
  });

  it('renders a not-found message for an unknown id', () => {
    renderAt('/noticias/999');

    expect(screen.getByRole('heading', { name: 'Noticia no encontrada' })).toBeInTheDocument();
  });
});
