import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import DesplazamientoExtranjeroCard from './DesplazamientoExtranjeroCard';

describe('DesplazamientoExtranjeroCard', () => {
  it('renders the heading and the previous procedures label', () => {
    render(<DesplazamientoExtranjeroCard />);

    expect(screen.getByRole('heading', { name: 'Desplazamiento al extranjero', level: 3 })).toBeInTheDocument();
    expect(screen.getByText('Trámites previos al desplazamiento')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Accidente laboral en el extranjero', level: 4 })).toBeInTheDocument();
  });
});
