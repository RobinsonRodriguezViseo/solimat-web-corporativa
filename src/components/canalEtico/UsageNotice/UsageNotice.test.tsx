import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import UsageNotice from './UsageNotice';

describe('UsageNotice', () => {
  it('lists the three forbidden uses of the channel', () => {
    render(<UsageNotice />);

    expect(screen.getByText('Este Canal no se debe utilizar para:')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('links the alternative mailboxes', () => {
    render(<UsageNotice />);

    expect(screen.getByRole('link', { name: 'QRSA@SOLIMAT.es' })).toHaveAttribute('href', 'mailto:QRSA@SOLIMAT.es');
    expect(screen.getByRole('link', { name: 'dpd@SOLIMAT.es' })).toHaveAttribute('href', 'mailto:dpd@SOLIMAT.es');
    expect(screen.getByRole('link', { name: 'web@solimat.es' })).toHaveAttribute('href', 'mailto:web@solimat.es');
  });
});
