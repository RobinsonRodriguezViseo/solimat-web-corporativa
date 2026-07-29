import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AsociaEmpresasSection from './AsociaEmpresasSection';

describe('AsociaEmpresasSection', () => {
  it('renders the four company scenarios', () => {
    render(<AsociaEmpresasSection />);

    expect(screen.getByRole('heading', { name: 'Asocia a empresas', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Creando una empresa', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Asociada a otra mutua colaboradora', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Asociada a INSS', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Reanudando la actividad', level: 3 })).toBeInTheDocument();
  });

  it('links the association forms to the local PDFs', () => {
    render(<AsociaEmpresasSection />);

    const bajaLinks = screen.getAllByRole('link', { name: 'solicitud de baja' });
    expect(bajaLinks[0]?.getAttribute('href')).toContain('ESCRITO-DENUNCIA-CONVENIO-ASOCIACION-GENERICA');
  });
});
