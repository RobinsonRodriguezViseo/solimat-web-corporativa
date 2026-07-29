import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import AccidenteTrabajoCard from './AccidenteTrabajoCard';

describe('AccidenteTrabajoCard', () => {
  it('renders the heading and the Solimat commitments', () => {
    render(
      <MemoryRouter>
        <AccidenteTrabajoCard />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Accidente de trabajo', level: 3 })).toBeInTheDocument();
    expect(screen.getByText('¿Qué hace Solimat por ti?')).toBeInTheDocument();
  });

  it('keeps the assistance form guidance text even though the download is unavailable', () => {
    render(
      <MemoryRouter>
        <AccidenteTrabajoCard />
      </MemoryRouter>,
    );

    expect(screen.getByText(/El volante de asistencia sanitaria es un documento/)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Volante de Asistencia' })).not.toBeInTheDocument();
  });
});
