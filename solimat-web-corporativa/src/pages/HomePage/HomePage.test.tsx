import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders every section of the home page in order', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Mejoramos la experiencia del Portal del Paciente' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '¿Cómo podemos ayudarte?' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Abierto 24 horas los 365 días del año' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'De interés' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Noticias' })).toBeInTheDocument();
  });
});
