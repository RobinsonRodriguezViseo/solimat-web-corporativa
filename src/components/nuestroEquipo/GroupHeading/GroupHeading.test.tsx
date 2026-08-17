import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import GroupHeading from './GroupHeading';

describe('GroupHeading', () => {
  it('renders a level 2 heading anchored by its id', () => {
    const { container } = render(<GroupHeading id="sanitario" title="Sanitario" />);

    expect(screen.getByRole('heading', { name: 'Sanitario', level: 2 })).toBeInTheDocument();
    expect(container.querySelector('#sanitario')).not.toBeNull();
  });
});
