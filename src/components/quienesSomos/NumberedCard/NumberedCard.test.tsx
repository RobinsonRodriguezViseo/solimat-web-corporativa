import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NumberedCard from './NumberedCard';

describe('NumberedCard', () => {
  it('renders its number and text', () => {
    render(<NumberedCard number={2} text="La gestión de la prestación económica por incapacidad temporal." />);

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(
      screen.getByText('La gestión de la prestación económica por incapacidad temporal.'),
    ).toBeInTheDocument();
  });
});
