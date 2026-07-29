import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the current year in the copyright line', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${year} Solimat`))).toBeInTheDocument();
  });

  it('renders contact details and internal/external links correctly', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByText('C/ Berna, 1 — 4ª planta')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '925 28 31 86' })).toHaveAttribute('href', 'tel:925283186');
    expect(screen.getByRole('link', { name: 'Preguntas Frecuentes' })).toHaveAttribute(
      'href',
      '/preguntas-frecuentes',
    );
    expect(screen.getByRole('link', { name: 'BOE' })).toHaveAttribute('href', 'https://www.boe.es/');
  });
});
