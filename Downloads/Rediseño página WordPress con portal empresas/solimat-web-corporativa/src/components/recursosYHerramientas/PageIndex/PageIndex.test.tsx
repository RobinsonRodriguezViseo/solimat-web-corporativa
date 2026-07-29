import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SECCIONES_RECURSOS } from '../../../data/recursos';
import PageIndex from './PageIndex';

describe('PageIndex', () => {
  it('renders one anchor link per section inside a labelled nav', () => {
    render(<PageIndex secciones={SECCIONES_RECURSOS} />);

    expect(screen.getByRole('navigation', { name: 'En esta página' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sistema Delta' })).toHaveAttribute('href', '#sistema-delta');
    expect(screen.getByRole('link', { name: 'Calendarios laborales' })).toHaveAttribute(
      'href',
      '#calendarios-laborales',
    );
  });
});
