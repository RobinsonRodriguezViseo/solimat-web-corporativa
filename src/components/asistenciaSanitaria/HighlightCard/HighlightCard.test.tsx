import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HighlightCard from './HighlightCard';

describe('HighlightCard', () => {
  it('renders the title and every bullet', () => {
    render(<HighlightCard title="Apostamos por la innovación para:" items={['Primero', 'Segundo']} />);

    expect(screen.getByText('Apostamos por la innovación para:')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
