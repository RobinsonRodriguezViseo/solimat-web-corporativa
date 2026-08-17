import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import InterestCard from './InterestCard';

describe('InterestCard', () => {
  it('renders an internal router link', () => {
    render(
      <MemoryRouter>
        <InterestCard
          href="/voz-del-usuario"
          title="Voz del Usuario"
          description="Nuestro compromiso con las personas."
          icon={<svg aria-hidden="true" />}
        />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: /Voz del Usuario/ })).toHaveAttribute('href', '/voz-del-usuario');
  });

  it('renders an external link with target=_blank', () => {
    render(
      <MemoryRouter>
        <InterestCard
          href="http://transparencia.solimat.com/web/index.html"
          title="Portal de Transparencia"
          description="Acceso a la información pública."
          icon={<svg aria-hidden="true" />}
        />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: /Portal de Transparencia/ })).toHaveAttribute('target', '_blank');
  });
});
