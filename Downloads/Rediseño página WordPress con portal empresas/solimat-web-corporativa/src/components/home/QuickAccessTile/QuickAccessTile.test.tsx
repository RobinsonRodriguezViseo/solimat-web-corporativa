import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import QuickAccessTile from './QuickAccessTile';

describe('QuickAccessTile', () => {
  it('renders an internal router link', () => {
    render(
      <MemoryRouter>
        <QuickAccessTile
          href="/recursos-y-herramientas"
          icon={<svg aria-hidden="true" />}
          title="Recursos y Herramientas"
          description="Documentos, formularios y guías de gestión."
        />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: /Recursos y Herramientas/ })).toHaveAttribute(
      'href',
      '/recursos-y-herramientas',
    );
  });

  it('renders an external link with target=_blank', () => {
    render(
      <MemoryRouter>
        <QuickAccessTile
          href="http://portal.solimat.com/"
          icon={<svg aria-hidden="true" />}
          title="Portal de Servicios"
          description="Gestiona tus trámites como empresa, autónomo o asesoría."
        />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /Portal de Servicios/ });
    expect(link).toHaveAttribute('target', '_blank');
  });
});
