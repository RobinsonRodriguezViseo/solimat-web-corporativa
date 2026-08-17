import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { makeCentro, makeCentroAsistencial } from '../../../test/factories';
import CentrosGrid from './CentrosGrid';

describe('CentrosGrid', () => {
  it('renders one card per centro', () => {
    render(
      <MemoryRouter>
        <CentrosGrid centros={[makeCentro(), makeCentroAsistencial()]} />
      </MemoryRouter>,
    );

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2);
  });

  it('shows the search empty state by default', () => {
    render(
      <MemoryRouter>
        <CentrosGrid centros={[]} />
      </MemoryRouter>,
    );

    expect(screen.getByText('No hay centros que coincidan con tu búsqueda.')).toBeInTheDocument();
    expect(screen.queryAllByRole('heading', { level: 3 })).toHaveLength(0);
  });

  it('accepts a specific empty message for a province without centros', () => {
    render(
      <MemoryRouter>
        <CentrosGrid centros={[]} emptyMessage="No hay centros para esta provincia." />
      </MemoryRouter>,
    );

    expect(screen.getByText('No hay centros para esta provincia.')).toBeInTheDocument();
  });
});
