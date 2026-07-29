import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ContactSidebar from './ContactSidebar';

describe('ContactSidebar', () => {
  it('links to the centres page and to the direct contact channels', () => {
    render(
      <MemoryRouter>
        <ContactSidebar />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /Centros de atención/ })).toHaveAttribute('href', '/red-de-centros');
    expect(screen.getByRole('link', { name: '925 28 31 86' })).toHaveAttribute('href', 'tel:925283186');
    expect(screen.getByRole('link', { name: 'contigo@solimat.com' })).toHaveAttribute(
      'href',
      'mailto:contigo@solimat.com',
    );
    expect(screen.getByText('Sede Central')).toBeInTheDocument();
  });
});
