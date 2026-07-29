import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CommitmentsCard from './CommitmentsCard';

describe('CommitmentsCard', () => {
  it('renders the four commitments', () => {
    render(<CommitmentsCard />);

    expect(screen.getByText('Y nos comprometemos a')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    expect(screen.getByText('Ser nexo de unión entre usuarios y empleados.')).toBeInTheDocument();
  });
});
