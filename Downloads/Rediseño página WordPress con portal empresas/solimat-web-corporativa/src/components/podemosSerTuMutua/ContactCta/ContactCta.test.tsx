import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ContactCta from './ContactCta';

describe('ContactCta', () => {
  it('renders the email and phone CTAs with the right protocols', () => {
    render(
      <MemoryRouter>
        <ContactCta />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Forma parte de Solimat' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /web@solimat.com/ })).toHaveAttribute(
      'href',
      'mailto:web@solimat.com',
    );
    expect(screen.getByRole('link', { name: /925 28 37 80/ })).toHaveAttribute('href', 'tel:925283780');
  });

  it('does not open mailto/tel links in a new tab', () => {
    render(
      <MemoryRouter>
        <ContactCta />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /web@solimat.com/ })).not.toHaveAttribute('target');
  });
});
