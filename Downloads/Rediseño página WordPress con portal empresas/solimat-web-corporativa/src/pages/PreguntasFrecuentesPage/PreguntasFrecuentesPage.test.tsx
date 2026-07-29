import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { PREGUNTAS_FRECUENTES } from '../../data/preguntasFrecuentes';
import PreguntasFrecuentesPage from './PreguntasFrecuentesPage';

function renderPage() {
  render(
    <MemoryRouter>
      <PreguntasFrecuentesPage />
    </MemoryRouter>,
  );
}

describe('PreguntasFrecuentesPage', () => {
  it('renders the hero and every question of the design', () => {
    renderPage();

    expect(screen.getByRole('heading', { name: 'Preguntas frecuentes', level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(PREGUNTAS_FRECUENTES.length);
    expect(screen.getByRole('button', { name: /¿Qué es el Portal de Servicios\?/ })).toBeInTheDocument();
  });

  it('links its two infographics to local bundled PDFs', async () => {
    const user = userEvent.setup();
    renderPage();

    await user.click(screen.getByRole('button', { name: /¿Qué debo hacer en caso de accidente laboral\?/ }));
    expect(screen.getByRole('link', { name: 'infografía' }).getAttribute('href')).toMatch(/\.pdf/);

    await user.click(screen.getByRole('button', { name: /¿Qué hacer ante desplazamientos al extranjero por trabajo\?/ }));
    expect(screen.getByRole('link', { name: 'Aquí' }).getAttribute('href')).toMatch(/\.pdf/);
  });

  it('never links anything to the old WordPress domain', async () => {
    const user = userEvent.setup();
    renderPage();

    for (const entry of PREGUNTAS_FRECUENTES) {
      await user.click(screen.getByRole('button', { name: entry.question }));

      screen.queryAllByRole('link').forEach((link) => {
        expect(link.getAttribute('href')).not.toMatch(/azurefd\.net/);
      });
    }
  });
});
