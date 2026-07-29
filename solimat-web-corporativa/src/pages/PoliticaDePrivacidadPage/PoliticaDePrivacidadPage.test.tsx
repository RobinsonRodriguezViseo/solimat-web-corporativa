import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PoliticaDePrivacidadPage from './PoliticaDePrivacidadPage';

describe('PoliticaDePrivacidadPage', () => {
  it('renders the page with title', () => {
    render(
      <MemoryRouter>
        <PoliticaDePrivacidadPage />
      </MemoryRouter>,
    );

    expect(screen.getByText('Política de Privacidad')).toBeInTheDocument();
  });

  it('renders the content sections', () => {
    render(
      <MemoryRouter>
        <PoliticaDePrivacidadPage />
      </MemoryRouter>,
    );

    expect(screen.getByText(/¿Quién es el responsable del tratamiento/)).toBeInTheDocument();
    expect(screen.getByText(/¿Qué datos recopilamos a través de la Web/)).toBeInTheDocument();
    expect(screen.getByText(/¿Qué Derechos tienes/)).toBeInTheDocument();
  });

  it('renders the breadcrumb navigation', () => {
    render(
      <MemoryRouter>
        <PoliticaDePrivacidadPage />
      </MemoryRouter>,
    );

    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Política de privacidad')).toBeInTheDocument();
  });

  it('renders company contact information', () => {
    render(
      <MemoryRouter>
        <PoliticaDePrivacidadPage />
      </MemoryRouter>,
    );

    // El nombre de la entidad aparece varias veces en el texto legal, así que se
    // comprueba que esté presente, no que sea único.
    expect(screen.getAllByText(/SOLIMAT MUTUA COLABORADORA/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/lopd@solimat.com/).length).toBeGreaterThan(0);
  });
});
