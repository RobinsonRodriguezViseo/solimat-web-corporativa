import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import VozDelUsuarioPage from './VozDelUsuarioPage';

describe('VozDelUsuarioPage', () => {
  it('renders the hero and the three listening channels', () => {
    render(
      <MemoryRouter>
        <VozDelUsuarioPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Voz del Usuario', level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Encuestas de satisfacción que encontrarás en nuestros centros.')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Formularios de Sugerencias, Agradecimientos y Reclamaciones disponibles en nuestros centros.',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: 'La Oficina Virtual de Reclamaciones de la Dirección General de Ordenación de la Seguridad Social.',
      }),
    ).toHaveAttribute('href', 'https://www.ovrmatepss.es/virtual/');
  });

  it('lists the commitments without offering form downloads', () => {
    render(
      <MemoryRouter>
        <VozDelUsuarioPage />
      </MemoryRouter>,
    );

    expect(screen.getByText('Favorecer la creación de propuestas de mejora.')).toBeInTheDocument();
    // El diseño indica que los formularios están "disponibles en nuestros centros": no se enlazan.
    expect(screen.queryByRole('link', { name: /^Formulario de/ })).not.toBeInTheDocument();
  });
});
