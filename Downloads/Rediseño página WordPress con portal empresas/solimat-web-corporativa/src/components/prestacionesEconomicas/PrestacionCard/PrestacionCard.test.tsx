import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PrestacionCard from './PrestacionCard';

describe('PrestacionCard', () => {
  it('renders the heading, the header intro and the body', () => {
    render(
      <MemoryRouter>
        <PrestacionCard
          id="contingencias-comunes"
          title="Contingencias Comunes"
          headerBlocks={[{ kind: 'p', text: ['Abonamos la prestación económica.'] }]}
        >
          <p>Cuerpo de la prestación.</p>
        </PrestacionCard>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Contingencias Comunes', level: 2 })).toBeInTheDocument();
    expect(screen.getByText('Abonamos la prestación económica.')).toBeInTheDocument();
    expect(screen.getByText('Cuerpo de la prestación.')).toBeInTheDocument();
  });

  it('renders tabs when they are provided', () => {
    render(
      <MemoryRouter>
        <PrestacionCard
          id="contingencias-profesionales"
          title="Contingencias Profesionales"
          tabs={[{ id: 'ajena', label: 'Cuenta ajena', blocks: [] }]}
        />
      </MemoryRouter>,
    );

    expect(screen.getByRole('tab', { name: 'Cuenta ajena' })).toBeInTheDocument();
  });
});
