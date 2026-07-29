import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import FeaturedArticle from './FeaturedArticle';

describe('FeaturedArticle', () => {
  it('renders the featured badge, date, title, excerpt and link', () => {
    render(
      <MemoryRouter>
        <FeaturedArticle
          to="/noticias/1"
          image="/noticia.png"
          date="12 mayo, 2025"
          title="Solimat colabora con la AECC"
          excerpt="Un extracto de la noticia destacada."
        />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /Solimat colabora con la AECC/ })).toHaveAttribute(
      'href',
      '/noticias/1',
    );
    expect(screen.getByText('Destacada')).toBeInTheDocument();
    expect(screen.getByText('12 mayo, 2025')).toBeInTheDocument();
    expect(screen.getByText('Un extracto de la noticia destacada.')).toBeInTheDocument();
  });
});
