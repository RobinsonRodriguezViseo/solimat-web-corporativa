import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import StatCard from './StatCard';

describe('StatCard', () => {
  it('renders the value and its label', () => {
    render(<StatCard value="150.000" label="Trabajadores protegidos" />);

    expect(screen.getByText('150.000')).toBeInTheDocument();
    expect(screen.getByText('Trabajadores protegidos')).toBeInTheDocument();
  });
});
