import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { HOSPITAL_ID, makeCentro, makeCentroAsistencial } from '../../../test/factories';
import type { Centro } from '../../../types/centro';
import CentroCard from './CentroCard';

const renderCard = (centro: Centro) => {
  const { container } = render(
    <MemoryRouter>
      <CentroCard centro={centro} />
    </MemoryRouter>,
  );

  return { card: screen.getByRole('article'), container };
};

describe('CentroCard', () => {
  it('links to the centro detail route by guid and shows province, address and phone', () => {
    renderCard(makeCentro());

    expect(screen.getByRole('link', { name: /Hospital San José/ })).toHaveAttribute(
      'href',
      `/red-de-centros/${HOSPITAL_ID}`,
    );
    expect(screen.getByText('Toledo')).toBeInTheDocument();
    expect(screen.getByText('Avenida Barber 26')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '925 28 31 86' })).toHaveAttribute(
      'href',
      'tel:925283186',
    );
  });

  it('renders the heading with the centro name', () => {
    renderCard(makeCentroAsistencial());

    expect(
      screen.getByRole('heading', { level: 3, name: 'Centro Asistencial Solimat Talavera' }),
    ).toBeInTheDocument();
  });

  it('omits the phone link when the API does not inform one', () => {
    renderCard(makeCentro({ phone: '' }));

    expect(screen.getAllByRole('link')).toHaveLength(1);
  });

  it('keeps the phone outside the main link so no anchor is nested', () => {
    renderCard(makeCentro());

    const cardLink = screen.getByRole('link', { name: /Hospital San José/ });
    const phoneLink = screen.getByRole('link', { name: '925 28 31 86' });

    expect(cardLink).not.toContainElement(phoneLink);
    expect(phoneLink).toHaveAttribute('href', 'tel:925283186');
  });

  it('uses the hospital variant with a dark header for hospital centros', () => {
    const { card, container } = renderCard(makeCentro({ name: 'Hospital San José' }));

    expect(card).toHaveAttribute('data-variant', 'hospital');
    expect(card).toHaveAttribute('data-hospital', 'true');
    expect(container.querySelector('img')).toBeNull();
  });

  it('uses the Solimat logo and a light header for a Solimat centro that is not a hospital', () => {
    const { card, container } = renderCard(makeCentroAsistencial());

    expect(card).toHaveAttribute('data-variant', 'solimat');
    expect(card).toHaveAttribute('data-hospital', 'false');
    expect(container.querySelector('img')).not.toBeNull();
  });

  it('keeps the dark hospital header when the centro is both Solimat and a hospital', () => {
    const { card, container } = renderCard(
      makeCentro({ name: 'Hospital Solimat San José', type: 'hospital' }),
    );

    // El logo manda para el icono, pero la cabecera oscura de hospital se queda.
    expect(card).toHaveAttribute('data-variant', 'solimat');
    expect(card).toHaveAttribute('data-hospital', 'true');
    expect(container.querySelector('img')).not.toBeNull();
  });

  it('falls back to the plain type icon for the rest of centros', () => {
    const { card, container } = renderCard(
      makeCentro({ name: 'Clínica Los Olivos', type: 'colaborador' }),
    );

    expect(card).toHaveAttribute('data-variant', 'colaborador');
    expect(card).toHaveAttribute('data-hospital', 'false');
    expect(container.querySelector('img')).toBeNull();
  });

  it('matches the Solimat name regardless of casing', () => {
    const { card } = renderCard(makeCentro({ name: 'CENTRO SOLIMAT CUENCA', type: 'centro' }));

    expect(card).toHaveAttribute('data-variant', 'solimat');
  });
});
