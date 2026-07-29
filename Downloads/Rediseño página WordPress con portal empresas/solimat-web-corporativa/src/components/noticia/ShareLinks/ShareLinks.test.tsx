import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ShareLinks from './ShareLinks';

describe('ShareLinks', () => {
  it('renders the three share networks as external links', () => {
    render(<ShareLinks />);

    expect(screen.getByText('Comparte:')).toBeInTheDocument();

    const linkedin = screen.getByRole('link', { name: 'LinkedIn' });
    expect(linkedin).toHaveAttribute('target', '_blank');
    expect(linkedin).toHaveAttribute('rel', 'noopener noreferrer');

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'X' })).toHaveAttribute('href', 'https://twitter.com/Solimat72');
  });
});
