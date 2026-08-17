import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { TeamIndexGroup } from '../../../data/nuestroEquipo';
import TeamIndex from './TeamIndex';

const groups: TeamIndexGroup[] = [
  { label: 'Sanitario', items: [{ id: 'medicos', label: 'Médicos/as' }] },
  { label: 'Gestión', items: [{ id: 'gestores', label: 'Gestores' }] },
];

describe('TeamIndex', () => {
  it('renders the group labels and one anchor per section', () => {
    render(<TeamIndex groups={groups} activeId="medicos" />);

    expect(screen.getByText('En esta página')).toBeInTheDocument();
    expect(screen.getByText('Sanitario')).toBeInTheDocument();
    expect(screen.getByText('Gestión')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Médicos/as' })).toHaveAttribute('href', '#medicos');
    expect(screen.getByRole('link', { name: 'Gestores' })).toHaveAttribute('href', '#gestores');
  });

  it('marks only the active section', () => {
    render(<TeamIndex groups={groups} activeId="gestores" />);

    expect(screen.getByRole('link', { name: 'Gestores' })).toHaveAttribute('aria-current', 'true');
    expect(screen.getByRole('link', { name: 'Médicos/as' })).not.toHaveAttribute('aria-current');
  });

  it('gives each group navigation landmark a distinct accessible name', () => {
    render(<TeamIndex groups={groups} activeId="medicos" />);

    expect(screen.getByRole('navigation', { name: 'Índice: Sanitario' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Índice: Gestión' })).toBeInTheDocument();
  });
});
