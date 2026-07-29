import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { makeCentro } from '../../../test/factories';
import CentroInfoCard from './CentroInfoCard';

describe('CentroInfoCard', () => {
  it('shows the type label, address, contact data and schedules', () => {
    render(<CentroInfoCard centro={makeCentro()} />);

    expect(screen.getByText('Hospital')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Hospital San José' })).toBeInTheDocument();
    expect(screen.getByText('Avenida Barber 26, 45004 Toledo')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '925 28 31 86' })).toHaveAttribute(
      'href',
      'tel:925283186',
    );
    expect(screen.getByText('925 28 37 92')).toBeInTheDocument();
    expect(screen.getByText('Lunes a Viernes de 08:00 a 15:00')).toBeInTheDocument();
    expect(screen.getByText('Lunes a Viernes de 08:00 a 20:00')).toBeInTheDocument();
  });

  it('lists the services of the centro', () => {
    render(
      <CentroInfoCard
        centro={makeCentro({
          type: 'centro',
          services: ['Medicina General', 'Enfermería', 'Fisioterapia', 'Unidad Administrativa'],
        })}
      />,
    );

    expect(screen.getByText('Centro Asistencial')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  });

  it('hides the phone, fax and services rows the API does not inform', () => {
    render(<CentroInfoCard centro={makeCentro({ phone: '', fax: '', services: [] })} />);

    expect(screen.queryByText('Teléfono')).not.toBeInTheDocument();
    expect(screen.queryByText('Fax')).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Servicios disponibles' })).not.toBeInTheDocument();
    // Los horarios siempre se muestran, aunque sea con "No disponible".
    expect(screen.getByText('Horario Administrativo')).toBeInTheDocument();
  });
});
