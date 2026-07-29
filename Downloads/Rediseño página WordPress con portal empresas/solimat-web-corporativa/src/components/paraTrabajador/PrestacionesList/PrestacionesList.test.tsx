import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PrestacionesList from './PrestacionesList';

describe('PrestacionesList', () => {
  it('renders the five benefit cards', () => {
    render(
      <MemoryRouter>
        <PrestacionesList />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Contingencia Profesional', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contingencia Común', level: 2 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Riesgo durante el embarazo y la lactancia natural', level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Cuidado de hijos menores afectados por enfermedad grave', level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Prestaciones Complementarias', level: 2 })).toBeInTheDocument();
  });
});
