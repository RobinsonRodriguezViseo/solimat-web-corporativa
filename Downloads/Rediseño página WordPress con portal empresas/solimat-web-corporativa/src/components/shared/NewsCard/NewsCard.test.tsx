import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import NewsCard from './NewsCard';

describe('NewsCard', () => {
  it('links to the detail route and shows date, title and tag', () => {
    render(
      <MemoryRouter>
        <NewsCard to="/noticias/1" image="/noticia.png" date="12 mayo 2025" title="Título de la noticia" tag="Solidaridad" />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: /Título de la noticia/ });
    expect(link).toHaveAttribute('href', '/noticias/1');
    expect(screen.getByText('12 mayo 2025')).toBeInTheDocument();
    expect(screen.getByText('Solidaridad')).toBeInTheDocument();
    expect(screen.getByText('Leer más →')).toBeInTheDocument();
  });
});
