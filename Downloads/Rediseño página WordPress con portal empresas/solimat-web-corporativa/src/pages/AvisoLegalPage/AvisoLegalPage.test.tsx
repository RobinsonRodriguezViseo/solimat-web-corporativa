import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import AvisoLegalPage from './AvisoLegalPage';

describe('AvisoLegalPage', () => {
  it('renders the page with title', () => {
    render(
      <MemoryRouter>
        <AvisoLegalPage />
      </MemoryRouter>,
    );

    // Por rol: "Aviso legal" aparece dos veces, en el <h1> y en el breadcrumb.
    expect(screen.getByRole('heading', { level: 1, name: 'Aviso legal' })).toBeInTheDocument();
  });

  it('renders the legal content paragraphs', () => {
    render(
      <MemoryRouter>
        <AvisoLegalPage />
      </MemoryRouter>,
    );

    expect(screen.getByText(/El presente aviso e información legales/)).toBeInTheDocument();
    expect(screen.getByText(/La utilización del Portal atribuye la condición/)).toBeInTheDocument();
  });

  it('renders the breadcrumb navigation', () => {
    render(
      <MemoryRouter>
        <AvisoLegalPage />
      </MemoryRouter>,
    );

    // Se acota al landmark del breadcrumb para no chocar con el <h1>.
    const breadcrumb = within(screen.getByRole('navigation', { name: 'Ruta de navegación' }));
    expect(breadcrumb.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/');
    expect(breadcrumb.getByText('Aviso legal')).toHaveAttribute('aria-current', 'page');
  });
});
