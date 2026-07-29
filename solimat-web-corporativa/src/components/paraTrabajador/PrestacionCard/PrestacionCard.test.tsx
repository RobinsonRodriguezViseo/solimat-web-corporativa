import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PrestacionCard from './PrestacionCard';

describe('PrestacionCard', () => {
  it('renders the title, the body and both calls to action', () => {
    render(
      <MemoryRouter>
        <PrestacionCard
          id="contingencia-comun"
          title="Contingencia Común"
          moreInfoHref="/prestaciones-economicas#contingencias-comunes"
        >
          <p>Detalle de la prestación</p>
        </PrestacionCard>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Contingencia Común', level: 2 })).toBeInTheDocument();
    expect(screen.getByText('Detalle de la prestación')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ampliar información' })).toHaveAttribute(
      'href',
      '/prestaciones-economicas#contingencias-comunes',
    );
    expect(screen.getByRole('link', { name: 'Solicitar en el Portal del Paciente' })).toHaveAttribute(
      'href',
      'https://pacientes.solimat.com/',
    );
  });
});
