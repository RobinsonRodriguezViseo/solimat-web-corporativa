import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import InterestSection from './InterestSection';

describe('InterestSection', () => {
  it('renders the "De interés" heading and the four cards', () => {
    render(
      <MemoryRouter>
        <InterestSection />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'De interés' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Promoción de la Prevención/ })).toHaveAttribute(
      'href',
      '/promocion-de-la-prevencion',
    );
    expect(screen.getByRole('link', { name: /Canal Ético y de Información/ })).toHaveAttribute(
      'href',
      '/canal-etico-y-de-informacion',
    );
  });
});
