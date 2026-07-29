import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import CentersBand from './CentersBand';

describe('CentersBand', () => {
  it('renders the headline and links to the centros network page', () => {
    render(
      <MemoryRouter>
        <CentersBand />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Abierto 24 horas los 365 días del año' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Ver red de centros/ })).toHaveAttribute('href', '/red-de-centros');
  });
});
