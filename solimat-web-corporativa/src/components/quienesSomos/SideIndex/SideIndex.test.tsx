import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SideIndex from './SideIndex';

const items = [
  { id: 'las-mutuas', label: 'Las Mutuas' },
  { id: 'nuestra-historia', label: 'Nuestra historia' },
];

describe('SideIndex', () => {
  it('renders an anchor per section pointing to its hash', () => {
    render(<SideIndex items={items} activeId="las-mutuas" />);

    expect(screen.getByRole('link', { name: 'Las Mutuas' })).toHaveAttribute('href', '#las-mutuas');
    expect(screen.getByRole('link', { name: 'Nuestra historia' })).toHaveAttribute('href', '#nuestra-historia');
  });

  it('marks only the active section with aria-current', () => {
    render(<SideIndex items={items} activeId="nuestra-historia" />);

    expect(screen.getByRole('link', { name: 'Nuestra historia' })).toHaveAttribute('aria-current', 'true');
    expect(screen.getByRole('link', { name: 'Las Mutuas' })).not.toHaveAttribute('aria-current');
  });

  it('names the navigation landmark "Índice de la página" by default', () => {
    render(<SideIndex items={items} activeId="las-mutuas" />);

    expect(screen.getByRole('navigation', { name: 'Índice de la página' })).toBeInTheDocument();
  });

  it('uses the custom label for the navigation landmark when provided', () => {
    render(<SideIndex items={items} activeId="las-mutuas" label="Índice: Sanitario" />);

    expect(screen.getByRole('navigation', { name: 'Índice: Sanitario' })).toBeInTheDocument();
    expect(screen.queryByRole('navigation', { name: 'Índice de la página' })).not.toBeInTheDocument();
  });
});
