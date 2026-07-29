import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PortalPacientePanel from './PortalPacientePanel';

describe('PortalPacientePanel', () => {
  it('renders the portal screenshot, the CTA and the mobile app block', () => {
    render(
      <MemoryRouter>
        <PortalPacientePanel />
      </MemoryRouter>,
    );

    expect(screen.getByRole('img', { name: 'Portal del Paciente' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Portal del Paciente' })).toHaveAttribute(
      'href',
      'https://pacientes.solimat.com/',
    );
    expect(screen.getByRole('heading', { name: 'App Portal Paciente', level: 3 })).toBeInTheDocument();
  });
});
