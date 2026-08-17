import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SectionTitle from './SectionTitle';

describe('SectionTitle', () => {
  it('renders the title as a level 2 heading', () => {
    render(<SectionTitle title="Asóciate" />);

    expect(screen.getByRole('heading', { name: 'Asóciate', level: 2 })).toBeInTheDocument();
  });
});
