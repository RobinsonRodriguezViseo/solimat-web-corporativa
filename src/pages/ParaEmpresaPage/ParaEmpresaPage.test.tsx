import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ParaEmpresaPage from './ParaEmpresaPage';

describe('ParaEmpresaPage', () => {
  it('renders the hero and the main sections', () => {
    render(
      <MemoryRouter>
        <ParaEmpresaPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Para Empresa', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Asóciate', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Certificado de asociación', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'En caso de…', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Portal de Servicios', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Botiquines', level: 2 })).toBeInTheDocument();
  });

  it('renders the page index with an anchor per section', () => {
    render(
      <MemoryRouter>
        <ParaEmpresaPage />
      </MemoryRouter>,
    );

    const index = screen.getByRole('navigation', { name: 'Índice de la página' });
    expect(index).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Riesgo embarazo/lactancia' })).toHaveAttribute('href', '#riesgo-embarazo');
  });
});
