import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import RecursosGestionSection from './RecursosGestionSection';

describe('RecursosGestionSection', () => {
  it('renders the first aid kit panel and the assistance form card', () => {
    render(
      <MemoryRouter>
        <RecursosGestionSection />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Recursos de gestión', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Botiquines', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Volante de Asistencia', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Solicitud botiquín' })).toBeInTheDocument();
  });

  it('keeps the assistance form copy even though its download is unavailable', () => {
    render(
      <MemoryRouter>
        <RecursosGestionSection />
      </MemoryRouter>,
    );

    expect(screen.getByText(/El volante de asistencia sanitaria es un documento/)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Volante de Asistencia' })).not.toBeInTheDocument();
  });
});
