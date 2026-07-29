import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import NewsSection from './NewsSection';

describe('NewsSection', () => {
  it('renders the heading, the "Más noticias" link and the 3 featured news cards', () => {
    render(
      <MemoryRouter>
        <NewsSection />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Noticias' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Más noticias/ })).toHaveAttribute('href', '/noticias');

    expect(screen.getByRole('link', { name: /Asociación Española Contra el Cáncer/ })).toHaveAttribute(
      'href',
      '/noticias/1',
    );
    expect(screen.getByRole('link', { name: /Día Mundial de la Seguridad y Salud/ })).toHaveAttribute(
      'href',
      '/noticias/2',
    );
    expect(screen.getByRole('link', { name: /ISO 9001/ })).toHaveAttribute('href', '/noticias/3');
  });
});
