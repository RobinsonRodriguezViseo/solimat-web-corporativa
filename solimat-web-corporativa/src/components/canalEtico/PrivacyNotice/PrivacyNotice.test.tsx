import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PrivacyNotice from './PrivacyNotice';

describe('PrivacyNotice', () => {
  it('renders the data protection summary and the LOPD mailbox', () => {
    render(<PrivacyNotice />);

    expect(screen.getByText('Tratamiento de los datos por Solimat')).toBeInTheDocument();
    expect(screen.getByText('Legitimación:')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'lopd@solimat.com' })).toHaveAttribute(
      'href',
      'mailto:lopd@solimat.com',
    );
  });
});
