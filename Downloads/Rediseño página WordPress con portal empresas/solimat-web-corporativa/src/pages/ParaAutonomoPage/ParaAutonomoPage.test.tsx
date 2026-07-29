import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ParaAutonomoPage from './ParaAutonomoPage';

describe('ParaAutonomoPage', () => {
  it('renders the hero and the main sections', () => {
    render(
      <MemoryRouter>
        <ParaAutonomoPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Para Autónomo', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Adhiérete', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Certificado de Adhesión', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Mecanismo RED', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Botiquines', level: 2 })).toBeInTheDocument();
  });

  it('renders every index entry as an anchor', () => {
    render(
      <MemoryRouter>
        <ParaAutonomoPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Cese de actividad' })).toHaveAttribute('href', '#cese-actividad');
    expect(screen.getAllByRole('link', { name: 'Solicitar en el Portal del Paciente' })).toHaveLength(7);
  });
});
