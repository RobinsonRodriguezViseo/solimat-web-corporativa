import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CentroServices from './CentroServices';

describe('CentroServices', () => {
  it('renders every service as a list item', () => {
    render(<CentroServices services={['Medicina General', 'Enfermería', 'Fisioterapia']} />);

    expect(screen.getByRole('heading', { level: 3, name: 'Servicios disponibles' })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByText('Enfermería')).toBeInTheDocument();
  });
});
