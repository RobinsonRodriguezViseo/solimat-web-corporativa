import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import CeseActividadList from './CeseActividadList';

describe('CeseActividadList', () => {
  it('renders both benefit cards', () => {
    render(
      <MemoryRouter>
        <CeseActividadList />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Prestación Económica por cese de actividad', level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Mecanismo RED', level: 2 })).toBeInTheDocument();
  });
});
