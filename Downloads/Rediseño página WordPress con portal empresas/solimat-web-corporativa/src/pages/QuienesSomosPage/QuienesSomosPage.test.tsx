import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import QuienesSomosPage from './QuienesSomosPage';

class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  takeRecords = vi.fn();
}

describe('QuienesSomosPage', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  it('renders the hero and all five sections', () => {
    render(
      <MemoryRouter>
        <QuienesSomosPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Quiénes somos', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Las Mutuas', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Nuestra historia', level: 2 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Una mutua referente en Castilla-La Mancha', level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Principios y Valores', level: 2 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Sostenibilidad y Responsabilidad Social Corporativa', level: 2 }),
    ).toBeInTheDocument();
  });

  it('renders the six numbered mutua activities and the stats band', () => {
    render(
      <MemoryRouter>
        <QuienesSomosPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByText('Las demás actividades de la Seguridad Social que le sean atribuidas legalmente.'),
    ).toBeInTheDocument();
    expect(screen.getByText('150.000')).toBeInTheDocument();
    expect(screen.getByText('Empresas asociadas')).toBeInTheDocument();
  });

  it('renders the Misión / Visión / Valores posters', () => {
    render(
      <MemoryRouter>
        <QuienesSomosPage />
      </MemoryRouter>,
    );

    expect(screen.getByText('Misión')).toBeInTheDocument();
    expect(screen.getByText('Visión')).toBeInTheDocument();
    expect(screen.getByText('Valores')).toBeInTheDocument();
    expect(screen.getByText('Confianza y compromiso')).toBeInTheDocument();
  });
});
