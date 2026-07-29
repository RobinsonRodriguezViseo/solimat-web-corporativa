import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SectionTitle from './SectionTitle';

describe('SectionTitle', () => {
  it('renders the title as a level 2 heading', () => {
    render(<SectionTitle title="El Canal" />);
    expect(screen.getByRole('heading', { name: 'El Canal', level: 2 })).toBeInTheDocument();
  });

  it('forwards the id to the heading so it can be referenced', () => {
    render(<SectionTitle title="Derechos" id="derechos-title" />);
    expect(screen.getByRole('heading', { name: 'Derechos' })).toHaveAttribute('id', 'derechos-title');
  });
});
