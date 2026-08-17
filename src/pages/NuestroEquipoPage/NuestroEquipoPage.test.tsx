import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import NuestroEquipoPage from './NuestroEquipoPage';

class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  takeRecords = vi.fn();
}

function renderPage() {
  render(
    <MemoryRouter>
      <NuestroEquipoPage />
    </MemoryRouter>,
  );
}

describe('NuestroEquipoPage', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  it('renders the hero and the two group headings', () => {
    renderPage();

    expect(screen.getByRole('heading', { name: 'Nuestro equipo', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Sanitario', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Gestión', level: 2 })).toBeInTheDocument();
  });

  it('renders the seven team sections', () => {
    renderPage();

    expect(screen.getByRole('heading', { name: 'Médicos/as', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Enfermeros/as', level: 3 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Técnicos/as de diagnóstico por imagen (TSID)', level: 3 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Fisioterapeutas', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Servicios Centrales', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Gestores', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Promoción de la Prevención', level: 3 })).toBeInTheDocument();
  });

  it('renders the side index links and the gestor functions block', () => {
    renderPage();

    expect(screen.getByRole('link', { name: 'Fisioterapeutas' })).toHaveAttribute('href', '#fisioterapeutas');
    expect(screen.getByText('Entre sus principales funciones están las de:')).toBeInTheDocument();
    expect(
      screen.getByText('Tramitación de Prestaciones, gestión de Bajas y solicitud de botiquines.'),
    ).toBeInTheDocument();
  });
});
