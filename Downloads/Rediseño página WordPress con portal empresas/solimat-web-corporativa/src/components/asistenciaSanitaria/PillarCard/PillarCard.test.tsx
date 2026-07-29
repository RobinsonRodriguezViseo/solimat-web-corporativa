import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PillarCard from './PillarCard';

describe('PillarCard', () => {
  it('renders its text', () => {
    render(<PillarCard icon="heart" text="Atención cercana y personalizada." />);

    expect(screen.getByText('Atención cercana y personalizada.')).toBeInTheDocument();
  });
});
