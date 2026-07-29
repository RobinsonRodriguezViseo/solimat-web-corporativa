import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import DownloadLink from './DownloadLink';

describe('DownloadLink', () => {
  it('renders a link that opens in a new tab', () => {
    render(<DownloadLink label="Protección auditiva" href="/assets/proteccion-auditiva.pdf" />);

    const link = screen.getByRole('link', { name: 'Protección auditiva' });
    expect(link).toHaveAttribute('href', '/assets/proteccion-auditiva.pdf');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
