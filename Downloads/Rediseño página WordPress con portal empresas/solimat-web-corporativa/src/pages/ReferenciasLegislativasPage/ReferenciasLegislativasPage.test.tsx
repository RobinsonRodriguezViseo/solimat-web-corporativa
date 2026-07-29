import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { REFERENCIAS_LEGISLATIVAS } from '../../data/referenciasLegislativas';
import ReferenciasLegislativasPage from './ReferenciasLegislativasPage';

describe('ReferenciasLegislativasPage', () => {
  it('renders the hero and one heading per year', () => {
    render(
      <MemoryRouter>
        <ReferenciasLegislativasPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Referencias legislativas', level: 1 })).toBeInTheDocument();
    REFERENCIAS_LEGISLATIVAS.forEach((group) => {
      expect(screen.getByRole('heading', { name: String(group.year), level: 2 })).toBeInTheDocument();
    });
  });

  it('renders every legislative reference with a link to the BOE', () => {
    render(
      <MemoryRouter>
        <ReferenciasLegislativasPage />
      </MemoryRouter>,
    );

    const total = REFERENCIAS_LEGISLATIVAS.reduce((count, group) => count + group.items.length, 0);
    expect(screen.getAllByRole('link', { name: /Ver texto completo \(BOE\)/ })).toHaveLength(total);
    expect(screen.getByRole('heading', { name: 'Ley 3/2023, de empleo' })).toBeInTheDocument();
  });
});
