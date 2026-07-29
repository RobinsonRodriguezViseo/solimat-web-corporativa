import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import PromocionDeLaPrevencionPage from './PromocionDeLaPrevencionPage';

class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  takeRecords = vi.fn();
}

function renderPage() {
  return render(
    <MemoryRouter>
      <PromocionDeLaPrevencionPage />
    </MemoryRouter>,
  );
}

describe('PromocionDeLaPrevencionPage', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  it('renders the hero and every main section', () => {
    renderPage();

    expect(screen.getByRole('heading', { name: 'Promoción de la Prevención', level: 1 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Plan General de Actividades Preventivas', level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Plan de Reducción de la Siniestralidad', level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Divulgación de Buenas Prácticas', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Prevención 10', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Códigos de Buenas Prácticas', level: 2 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Canal de Consultas y Solicitudes', level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Enlaces de Interés', level: 2 })).toBeInTheDocument();
  });

  it('renders the four Prevención 10 functionalities', () => {
    renderPage();

    expect(screen.getByText('evalua-t®')).toBeInTheDocument();
    expect(screen.getByText('autopreven-t®')).toBeInTheDocument();
    expect(screen.getByText('instruye-t®')).toBeInTheDocument();
    expect(screen.getByText('STOP Riesgos Laborales')).toBeInTheDocument();
  });

  it('links every publication to a local PDF, never to the old WordPress', () => {
    renderPage();

    const ergonomia = screen.getByRole('link', { name: 'Ergonomía postural' });
    expect(ergonomia.getAttribute('href')).toContain('ergonomia-postural');
    expect(ergonomia.getAttribute('href')).not.toContain('azurefd.net');

    expect(screen.getByRole('link', { name: 'Niebla' })).toHaveAttribute('target', '_blank');
  });

  it('points every web@solimat.com link to the mailto address', () => {
    renderPage();

    const emailLinks = screen.getAllByRole('link', { name: 'web@solimat.com' });
    expect(emailLinks).toHaveLength(2);
    emailLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', 'mailto:web@solimat.com');
    });
  });
});
