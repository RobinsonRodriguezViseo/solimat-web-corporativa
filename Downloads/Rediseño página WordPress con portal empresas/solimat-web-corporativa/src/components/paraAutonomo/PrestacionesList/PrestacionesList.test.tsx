import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PrestacionesList from './PrestacionesList';

describe('PrestacionesList (autónomo)', () => {
  it('renders the five benefit cards', () => {
    render(
      <MemoryRouter>
        <PrestacionesList />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Prestación económica por Contingencia Profesional', level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Prestación económica por Contingencia Común', level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Prestaciones Complementarias', level: 2 })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Ampliar información' })).toHaveLength(5);
  });
});
