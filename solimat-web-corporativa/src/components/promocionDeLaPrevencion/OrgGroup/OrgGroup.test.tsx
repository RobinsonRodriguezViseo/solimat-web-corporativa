import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import OrgGroup from './OrgGroup';

describe('OrgGroup', () => {
  it('renders the group title and each organisation logo', () => {
    render(
      <OrgGroup
        title="Organismos internacionales"
        organismos={[
          { name: 'EASHW', href: 'https://osha.europa.eu/es', logo: '/eashw.png' },
          { name: 'OIT', href: 'https://www.ilo.org/', logo: '/oit.png' },
        ]}
      />,
    );

    expect(screen.getByText('Organismos internacionales')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'EASHW' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'OIT' })).toBeInTheDocument();
  });
});
