import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import QuickAccessGrid from './QuickAccessGrid';

describe('QuickAccessGrid', () => {
  it('renders the four quick access tiles', () => {
    render(
      <MemoryRouter>
        <QuickAccessGrid />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /Portal de Servicios/ })).toHaveAttribute(
      'href',
      'http://portal.solimat.com/',
    );
    expect(screen.getByRole('link', { name: /Portal del Paciente/ })).toHaveAttribute(
      'href',
      'https://pacientes.solimat.com/',
    );
    expect(screen.getByRole('link', { name: /Red de Centros/ })).toHaveAttribute('href', '/red-de-centros');
    expect(screen.getByRole('link', { name: /Recursos y Herramientas/ })).toHaveAttribute(
      'href',
      '/recursos-y-herramientas',
    );
  });
});
