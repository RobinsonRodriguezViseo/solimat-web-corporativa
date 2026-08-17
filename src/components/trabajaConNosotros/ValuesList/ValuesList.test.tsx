import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ValuesList from './ValuesList';

describe('ValuesList', () => {
  it('renders the four values Solimat looks for', () => {
    render(<ValuesList />);

    expect(screen.getByText('Vocación de servicio')).toBeInTheDocument();
    expect(screen.getByText('Compromiso')).toBeInTheDocument();
    expect(screen.getByText('Ganas de crecer')).toBeInTheDocument();
    expect(screen.getByText('Trabajo en equipo')).toBeInTheDocument();
  });
});
