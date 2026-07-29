import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ParaTrabajadorPage from './ParaTrabajadorPage';

describe('ParaTrabajadorPage', () => {
  it('renders the hero, the benefits and the patient portal section', () => {
    render(
      <MemoryRouter>
        <ParaTrabajadorPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Para Trabajador', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contingencia Profesional', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Portal del Paciente', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'App Portal Paciente', level: 3 })).toBeInTheDocument();
  });

  it('links each benefit to its detail on the economic benefits page', () => {
    render(
      <MemoryRouter>
        <ParaTrabajadorPage />
      </MemoryRouter>,
    );

    const links = screen.getAllByRole('link', { name: 'Ampliar información' });
    expect(links).toHaveLength(5);
    expect(links[0]).toHaveAttribute('href', '/prestaciones-economicas#contingencias-profesionales');
  });
});
