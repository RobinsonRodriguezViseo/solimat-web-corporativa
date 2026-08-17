import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AdhiereteSection from './AdhiereteSection';

describe('AdhiereteSection', () => {
  it('renders both adhesion scenarios and links the local forms', () => {
    render(<AdhiereteSection />);

    expect(screen.getByRole('heading', { name: 'Adhiérete', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Dándote de alta', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Cambiando de mutua', level: 3 })).toBeInTheDocument();
    expect(
      screen
        .getByRole('link', {
          name: 'TA. 521 – Solicitud de alta en el Régimen Especial de Trabajadores Autónomos (RETA)',
        })
        .getAttribute('href'),
    ).toContain('TA.0521');
  });
});
