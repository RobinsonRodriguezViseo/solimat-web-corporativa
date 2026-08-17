import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PageIndex from './PageIndex';

describe('PageIndex', () => {
  it('renders one anchor per item and marks the active one', () => {
    render(
      <PageIndex
        items={[
          { id: 'uno', label: 'Uno' },
          { id: 'dos', label: 'Dos', level: 'sub' },
        ]}
        activeId="dos"
      />,
    );

    expect(screen.getByText('En esta página')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Uno' })).toHaveAttribute('href', '#uno');

    const active = screen.getByRole('link', { name: 'Dos' });
    expect(active).toHaveAttribute('href', '#dos');
    expect(active).toHaveAttribute('aria-current', 'true');
  });

  it('renders extra content below the index', () => {
    render(<PageIndex items={[{ id: 'uno', label: 'Uno' }]}>Urgencias 24h</PageIndex>);

    expect(screen.getByText('Urgencias 24h')).toBeInTheDocument();
  });
});
