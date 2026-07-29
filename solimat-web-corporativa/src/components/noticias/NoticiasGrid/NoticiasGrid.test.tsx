import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { noticias } from '../../../data/noticias';
import NoticiasGrid from './NoticiasGrid';

describe('NoticiasGrid', () => {
  it('renders a card per noticia linking to its detail route', () => {
    render(
      <MemoryRouter>
        <NoticiasGrid noticias={noticias.slice(0, 3)} />
      </MemoryRouter>,
    );

    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getByRole('link', { name: /Asociación Española Contra el Cáncer/ })).toHaveAttribute(
      'href',
      '/noticias/1',
    );
    expect(screen.getByRole('link', { name: /ISO 9001/ })).toHaveAttribute('href', '/noticias/3');
  });

  it('uses the longer listing excerpt from the design reference', () => {
    render(
      <MemoryRouter>
        <NoticiasGrid noticias={noticias.slice(0, 1)} />
      </MemoryRouter>,
    );

    expect(screen.getByText(/una mesa informativa que tiene como objetivo…/)).toBeInTheDocument();
  });
});
