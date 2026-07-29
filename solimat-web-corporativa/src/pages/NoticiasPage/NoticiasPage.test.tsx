import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { noticias } from '../../data/noticias';
import NoticiasPage from './NoticiasPage';

describe('NoticiasPage', () => {
  it('renders the hero and marks the first noticia as featured', () => {
    render(
      <MemoryRouter>
        <NoticiasPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Noticias', level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Destacada')).toBeInTheDocument();
  });

  it('lists the remaining noticias in the grid', () => {
    render(
      <MemoryRouter>
        <NoticiasPage />
      </MemoryRouter>,
    );

    // 1 destacada + el resto de la rejilla + el enlace "Inicio" del breadcrumb
    expect(screen.getAllByRole('link')).toHaveLength(noticias.length + 1);
    expect(screen.getByRole('link', { name: /Día Mundial contra el Cáncer de Mama/ })).toHaveAttribute(
      'href',
      '/noticias/24',
    );
  });
});
