import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AdhiereAutonomosSection from './AdhiereAutonomosSection';

describe('AdhiereAutonomosSection', () => {
  it('renders both adhesion scenarios', () => {
    render(<AdhiereAutonomosSection />);

    expect(screen.getByRole('heading', { name: 'Adhiere a autónomos', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Dar de alta', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Cambiar de mutua', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Denuncia' }).getAttribute('href')).toContain(
      'Denuncia-del-documento-de-adhesion',
    );
  });
});
