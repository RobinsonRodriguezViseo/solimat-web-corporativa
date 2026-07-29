import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import TopBar from './TopBar';

describe('TopBar', () => {
  it('shows the emergency phone numbers and links to the centros page', () => {
    render(
      <MemoryRouter>
        <TopBar />
      </MemoryRouter>,
    );

    expect(screen.getByText('Urgencias 24h')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '900 111 072' })).toHaveAttribute('href', 'tel:900111072');
    expect(screen.getByRole('link', { name: /34 925 72 72 72/ })).toHaveAttribute('href', 'tel:+34925727272');
    // Va a la página real, no al ancla `#centros` que heredamos del prototipo.
    expect(screen.getByRole('link', { name: /Centros de atención/ })).toHaveAttribute(
      'href',
      '/red-de-centros',
    );
  });
});
