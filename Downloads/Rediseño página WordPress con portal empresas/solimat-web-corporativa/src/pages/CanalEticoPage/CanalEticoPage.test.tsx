import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import CanalEticoPage from './CanalEticoPage';

describe('CanalEticoPage', () => {
  it('renders the hero, the usage notice and the four main sections', () => {
    render(
      <MemoryRouter>
        <CanalEticoPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Canal Ético y de Información', level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Este Canal no se debe utilizar para:')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'El Canal', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Derechos', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Procedimientos', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Accede al Canal', level: 2 })).toBeInTheDocument();
  });

  it('renders the page index and the submission form', () => {
    render(
      <MemoryRouter>
        <CanalEticoPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('navigation', { name: 'Índice de la página' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Del informante' })).toHaveAttribute('href', '#del-informante');
    expect(
      screen.getByText('A través de este formulario puedes enviar una comunicación identificándote o de forma anónima:'),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar/ })).toBeInTheDocument();
  });
});
