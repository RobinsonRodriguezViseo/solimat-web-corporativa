import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import NuestrosDatosPage from './NuestrosDatosPage';

describe('NuestrosDatosPage', () => {
  it('renders the hero, the Ley 2/2011 intro and both section headings', () => {
    render(
      <MemoryRouter>
        <NuestrosDatosPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Nuestros datos', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Ley 2\/2011, de 4 de marzo, de Economía Sostenible/)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Últimas publicaciones' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Todos los informes' })).toBeInTheDocument();
  });

  it('never links a report to the old WordPress domain', () => {
    render(
      <MemoryRouter>
        <NuestrosDatosPage />
      </MemoryRouter>,
    );

    screen.getAllByRole('link').forEach((link) => {
      expect(link.getAttribute('href')).not.toMatch(/azurefd\.net/);
    });
  });
});
