import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PortalPromoCard from './PortalPromoCard';

describe('PortalPromoCard', () => {
  it('links to the patient portal', () => {
    render(<PortalPromoCard />);

    expect(screen.getByText('Solicita tus prestaciones y consulta tu proceso online.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Acceder →' })).toHaveAttribute('href', 'https://pacientes.solimat.com/');
  });
});
