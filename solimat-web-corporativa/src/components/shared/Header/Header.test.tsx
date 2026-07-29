import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders the logo link and the three nav groups', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Solimat' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('button', { name: /Conócenos/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Servicios/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Trámites/ })).toBeInTheDocument();
  });

  it('renders the portal action buttons with the correct external hrefs', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Portal del Paciente' })).toHaveAttribute(
      'href',
      'https://pacientes.solimat.com/',
    );
    expect(screen.getByRole('link', { name: /Portal de Servicios/ })).toHaveAttribute(
      'href',
      'http://portal.solimat.com/',
    );
  });

  it('toggles the mobile menu button state on click', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const menuButton = screen.getByRole('button', { name: 'Abrir menú' });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuButton);
    expect(screen.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute('aria-expanded', 'true');
  });
});
