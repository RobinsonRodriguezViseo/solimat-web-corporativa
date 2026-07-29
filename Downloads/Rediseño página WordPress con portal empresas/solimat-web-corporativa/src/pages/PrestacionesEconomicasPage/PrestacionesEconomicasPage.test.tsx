import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import PrestacionesEconomicasPage from './PrestacionesEconomicasPage';

class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  takeRecords = vi.fn();
}

function renderPage() {
  return render(
    <MemoryRouter>
      <PrestacionesEconomicasPage />
    </MemoryRouter>,
  );
}

describe('PrestacionesEconomicasPage', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  it('renders the hero and the nine benefit sections', () => {
    renderPage();

    expect(screen.getByRole('heading', { name: 'Prestaciones económicas', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contingencias Profesionales', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contingencias Comunes', level: 2 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Riesgo durante el embarazo y la lactancia natural', level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: 'Cuidado de menores afectados por cáncer u otra enfermedad grave',
        level: 2,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Cese de actividad de los trabajadores autónomos', level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Mecanismo RED', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Prestaciones complementarias', level: 2 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Prestación económica por Incapacidad Permanente e invalidez', level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Prestación económica por muerte y supervivencia', level: 2 }),
    ).toBeInTheDocument();
  });

  it('shows "Cuenta ajena" content by default and switches to "Cuenta propia"', async () => {
    const user = userEvent.setup();
    renderPage();

    const ajenaTabs = screen.getAllByRole('tab', { name: 'Cuenta ajena' });
    expect(ajenaTabs).toHaveLength(4);
    ajenaTabs.forEach((tab) => expect(tab).toHaveAttribute('aria-selected', 'true'));

    expect(screen.queryByText('Presentar parte de accidente')).not.toBeInTheDocument();

    const propiaTab = screen.getAllByRole('tab', { name: 'Cuenta propia' })[0];
    if (!propiaTab) throw new Error('No se ha encontrado la pestaña "Cuenta propia"');
    await user.click(propiaTab);

    expect(propiaTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Presentar parte de accidente')).toBeInTheDocument();
  });

  it('renders the Mecanismo RED modalities and the incapacity grades', () => {
    renderPage();

    expect(screen.getByRole('tab', { name: 'Modalidad Cíclica' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Modalidad Sectorial' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Gran invalidez', level: 3 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Lesiones permanentes no invalidantes', level: 3 }),
    ).toBeInTheDocument();
  });

  it('points every "Te ayudamos" CTA to the internal help page', () => {
    renderPage();

    const ctas = screen.getAllByRole('link', { name: '¿Quieres tramitar esta prestación? Te ayudamos' });
    expect(ctas).toHaveLength(7);
    ctas.forEach((cta) => expect(cta).toHaveAttribute('href', '/quienes-somos/podemos-ayudarte'));
  });
});
