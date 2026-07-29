import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import OrgLogo from './OrgLogo';

describe('OrgLogo', () => {
  it('renders the organisation logo inside an external link', () => {
    render(<OrgLogo name="INSST" href="https://www.insst.es/" logo="/insst.png" />);

    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.insst.es/');
    expect(screen.getByRole('img', { name: 'INSST' })).toHaveAttribute('src', '/insst.png');
  });
});
