import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AsociateSection from './AsociateSection';

describe('AsociateSection', () => {
  it('renders the four association scenarios', () => {
    render(<AsociateSection />);

    expect(screen.getByRole('heading', { name: 'Asóciate', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Creando tu empresa', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Asociada a otra mutua', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Asociada al INSS', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Reanudando la actividad', level: 3 })).toBeInTheDocument();
  });

  it('links the association documents to the local PDFs', () => {
    render(<AsociateSection />);

    const propuesta = screen.getAllByRole('link', { name: 'Propuesta de asociación de Solimat' });
    expect(propuesta).toHaveLength(2);
    expect(propuesta[0]?.getAttribute('href')).toContain('PROPUESTA-ASOCIACION-SOLIMAT');
  });
});
