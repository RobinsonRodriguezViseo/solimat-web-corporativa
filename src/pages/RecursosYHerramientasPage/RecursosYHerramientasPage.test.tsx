import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { CALENDARIOS_LABORALES_2026 } from '../../data/recursos';
import RecursosYHerramientasPage from './RecursosYHerramientasPage';

function renderPage() {
  render(
    <MemoryRouter>
      <RecursosYHerramientasPage />
    </MemoryRouter>,
  );
}

describe('RecursosYHerramientasPage', () => {
  it('renders the hero and both sections', () => {
    renderPage();

    expect(screen.getByRole('heading', { name: 'Recursos y herramientas', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Sistema Delta', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Calendarios laborales', level: 2 })).toBeInTheDocument();
    expect(
      screen.getByText(
        'Tienes a tu disposición los calendarios laborales de 2026, organizados por comunidades y ciudades autónomas.',
      ),
    ).toBeInTheDocument();
  });

  it('links every 2026 calendar to a local bundled PDF', () => {
    renderPage();

    const pdfLinks = screen
      .getAllByRole('link')
      .filter((link) => (link.getAttribute('href') ?? '').includes('.pdf'));

    expect(pdfLinks).toHaveLength(CALENDARIOS_LABORALES_2026.length);
  });

  it('never links anything to the old WordPress domain', () => {
    renderPage();

    screen.getAllByRole('link').forEach((link) => {
      expect(link.getAttribute('href')).not.toMatch(/azurefd\.net/);
    });
  });
});
