import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import UnitCard from './UnitCard';

describe('UnitCard', () => {
  it('renders the unit title and its content', () => {
    render(
      <MemoryRouter>
        <UnitCard
          title="Unidad del Dolor"
          blocks={[{ kind: 'p', text: ['Equipo de profesionales especializados.'] }]}
          icon="heart"
        />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Unidad del Dolor', level: 4 })).toBeInTheDocument();
    expect(screen.getByText('Equipo de profesionales especializados.')).toBeInTheDocument();
  });

  it('renders the image when provided', () => {
    render(
      <MemoryRouter>
        <UnitCard title="Consultas" blocks={[]} image="/consultas.jpg" imageAlt="Consultas" />
      </MemoryRouter>,
    );

    expect(screen.getByRole('img', { name: 'Consultas' })).toHaveAttribute('src', '/consultas.jpg');
  });
});
