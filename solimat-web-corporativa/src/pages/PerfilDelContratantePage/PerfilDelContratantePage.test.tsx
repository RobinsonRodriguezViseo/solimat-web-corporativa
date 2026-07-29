import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PerfilDelContratantePage from './PerfilDelContratantePage';

describe('PerfilDelContratantePage', () => {
  it('renders the hero title and the legal reference', () => {
    render(
      <MemoryRouter>
        <PerfilDelContratantePage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Perfil del contratante', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/artículo 347 de la Ley 9\/2017/)).toBeInTheDocument();
    expect(screen.getByText('Enlace al perfil de contratante')).toBeInTheDocument();
  });

  it('links to the public sector contracting platform in a new tab', () => {
    render(
      <MemoryRouter>
        <PerfilDelContratantePage />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: /Plataforma de Contratación del Sector Público/ });
    expect(link).toHaveAttribute(
      'href',
      'https://contrataciondelestado.es/wps/poc?uri=deeplink%3AperfilContratante&idBp=CW7ctwLmMCYQK2TEfXGy%2BA%3D%3D',
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
