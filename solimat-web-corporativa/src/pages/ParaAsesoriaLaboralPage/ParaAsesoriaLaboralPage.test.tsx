import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ParaAsesoriaLaboralPage from './ParaAsesoriaLaboralPage';

describe('ParaAsesoriaLaboralPage', () => {
  it('renders the hero and the main sections', () => {
    render(
      <MemoryRouter>
        <ParaAsesoriaLaboralPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Para Asesoría Laboral', level: 1 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Forma parte de nuestra red de colaboradores', level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Asocia a empresas', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Adhiere a autónomos', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Portal de Servicios', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Recursos de gestión', level: 2 })).toBeInTheDocument();
  });

  it('renders the collaborator form and the page index', () => {
    render(
      <MemoryRouter>
        <ParaAsesoriaLaboralPage />
      </MemoryRouter>,
    );

    expect(screen.getByLabelText('Nº de RED')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Recursos de gestión' })).toHaveAttribute('href', '#recursos-gestion');
  });
});
