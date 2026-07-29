import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import YearNav from './YearNav';

describe('YearNav', () => {
  it('renders one anchor per year pointing to its section', () => {
    render(
      <YearNav
        items={[
          { id: 'y2023', year: 2023 },
          { id: 'y2022', year: 2022 },
        ]}
      />,
    );

    expect(screen.getByRole('link', { name: '2023' })).toHaveAttribute('href', '#y2023');
    expect(screen.getByRole('link', { name: '2022' })).toHaveAttribute('href', '#y2022');
  });
});
