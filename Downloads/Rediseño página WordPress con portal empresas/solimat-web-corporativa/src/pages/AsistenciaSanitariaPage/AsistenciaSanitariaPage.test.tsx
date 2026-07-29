import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import AsistenciaSanitariaPage from './AsistenciaSanitariaPage';

class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  takeRecords = vi.fn();
}

function renderPage() {
  return render(
    <MemoryRouter>
      <AsistenciaSanitariaPage />
    </MemoryRouter>,
  );
}

describe('AsistenciaSanitariaPage', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  it('renders the hero and the four sections', () => {
    renderPage();

    expect(screen.getByRole('heading', { name: 'Asistencia Sanitaria', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Nuestro Modelo Asistencial', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Asistencia Sanitaria 24 horas', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Hospital San José', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Red de Centros', level: 2 })).toBeInTheDocument();
  });

  it('renders the four pillars of the care model', () => {
    renderPage();

    expect(screen.getByText('Atención cercana y personalizada.')).toBeInTheDocument();
    expect(screen.getByText('Acompañamiento en el proceso sanitario.')).toBeInTheDocument();
    expect(screen.getByText('Profesionales especializados y experimentados.')).toBeInTheDocument();
    expect(screen.getByText('Calidad asistencial y seguridad del paciente.')).toBeInTheDocument();
  });

  it('renders the hospital units and the network services', () => {
    renderPage();

    expect(
      screen.getByRole('heading', { name: 'Unidad de Urgencias y Medicina Asistencial', level: 4 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Unidad del Dolor', level: 4 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Unidad de Valoración Funcional o Biomecánica', level: 4 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Curas sucesivas', level: 4 })).toBeInTheDocument();
  });

  it('links the patient rights PDF locally and never to the old WordPress', () => {
    renderPage();

    const link = screen.getByRole('link', {
      name: 'Aquí puedes conocer tus Derechos y Deberes como paciente',
    });
    expect(link.getAttribute('href')).not.toContain('azurefd.net');
    expect(link.getAttribute('href')).toContain('derechos-deberes');
  });
});
