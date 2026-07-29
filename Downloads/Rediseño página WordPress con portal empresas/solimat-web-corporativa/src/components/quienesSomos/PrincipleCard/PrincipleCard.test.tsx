import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PrincipleCard from './PrincipleCard';

describe('PrincipleCard', () => {
  it('renders its title and description', () => {
    render(<PrincipleCard title="Cercanía" text="Constante seguimiento y estrecha relación." />);

    expect(screen.getByText('Cercanía')).toBeInTheDocument();
    expect(screen.getByText('Constante seguimiento y estrecha relación.')).toBeInTheDocument();
  });
});
