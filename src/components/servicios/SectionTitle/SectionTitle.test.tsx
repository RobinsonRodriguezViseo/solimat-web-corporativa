import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SectionTitle from './SectionTitle';

describe('SectionTitle', () => {
  it('renders the title as a level 2 heading', () => {
    render(<SectionTitle title="Hospital San José" withRule />);

    expect(screen.getByRole('heading', { name: 'Hospital San José', level: 2 })).toBeInTheDocument();
  });
});
