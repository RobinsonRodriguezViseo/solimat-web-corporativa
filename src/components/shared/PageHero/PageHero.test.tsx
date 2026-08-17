import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PageHero from './PageHero';

describe('PageHero', () => {
  it('renders the title, subtitle and breadcrumb', () => {
    render(
      <MemoryRouter>
        <PageHero
          breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Quiénes somos' }]}
          title="Quiénes somos"
          subtitle="Una mutua nacida en Castilla-La Mancha en 1933."
        />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Quiénes somos', level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Una mutua nacida en Castilla-La Mancha en 1933.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/');
  });

  it('omits the subtitle when not provided', () => {
    render(
      <MemoryRouter>
        <PageHero breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Noticias' }]} title="Noticias" />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Noticias', level: 1 })).toBeInTheDocument();
  });

  it('renders the default background image when no image is given', () => {
    const { container } = render(
      <MemoryRouter>
        <PageHero breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Noticias' }]} title="Noticias" />
      </MemoryRouter>,
    );

    expect(container.querySelector('img')).toBeInTheDocument();
  });

  it('renders a flat gradient hero without any image when image is null', () => {
    const { container } = render(
      <MemoryRouter>
        <PageHero
          breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Voz del Usuario' }]}
          title="Voz del Usuario"
          image={null}
        />
      </MemoryRouter>,
    );

    expect(container.querySelector('img')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Voz del Usuario', level: 1 })).toBeInTheDocument();
  });
});
