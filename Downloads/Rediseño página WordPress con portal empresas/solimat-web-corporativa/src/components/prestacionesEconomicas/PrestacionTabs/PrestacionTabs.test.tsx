import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PrestacionTabs from './PrestacionTabs';

const TABS = [
  { id: 'ajena', label: 'Cuenta ajena', blocks: [{ kind: 'p' as const, text: ['Prestación por cuenta ajena.'] }] },
  { id: 'propia', label: 'Cuenta propia', blocks: [{ kind: 'p' as const, text: ['Prestación por cuenta propia.'] }] },
];

describe('PrestacionTabs', () => {
  it('shows the first tab by default', () => {
    render(
      <MemoryRouter>
        <PrestacionTabs tabs={TABS} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('tab', { name: 'Cuenta ajena' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Prestación por cuenta ajena.')).toBeInTheDocument();
    expect(screen.queryByText('Prestación por cuenta propia.')).not.toBeInTheDocument();
  });

  it('switches the panel when another tab is clicked', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <PrestacionTabs tabs={TABS} />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole('tab', { name: 'Cuenta propia' }));

    expect(screen.getByRole('tab', { name: 'Cuenta propia' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Prestación por cuenta propia.')).toBeInTheDocument();
  });
});
