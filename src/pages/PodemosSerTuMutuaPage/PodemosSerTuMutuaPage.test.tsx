import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PodemosSerTuMutuaPage from './PodemosSerTuMutuaPage';

describe('PodemosSerTuMutuaPage', () => {
  it('renders the hero and the three qualifying questions', () => {
    render(
      <MemoryRouter>
        <PodemosSerTuMutuaPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Podemos ser tu mutua', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '¿Tienes una empresa o vas a crearla?' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '¿Eres autónomo o estás pensando en montar tu propio negocio?' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '¿Tienes una asesoría laboral?' })).toBeInTheDocument();
  });

  it('renders the contact CTA with email and phone', () => {
    render(
      <MemoryRouter>
        <PodemosSerTuMutuaPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /web@solimat.com/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /925 28 37 80/ })).toBeInTheDocument();
  });
});
