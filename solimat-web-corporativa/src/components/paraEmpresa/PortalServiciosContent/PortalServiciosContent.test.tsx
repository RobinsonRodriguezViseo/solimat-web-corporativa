import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PortalServiciosContent from './PortalServiciosContent';

describe('PortalServiciosContent', () => {
  it('renders the registration steps and the portal link', () => {
    render(
      <MemoryRouter>
        <PortalServiciosContent />
      </MemoryRouter>,
    );

    expect(screen.getByText('Pincha en la imagen y regístrate como nuevo usuario.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Portal de Servicios' })).toHaveAttribute(
      'href',
      'https://portal.solimat.com/',
    );
  });
});
