import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HospitalContact from './HospitalContact';

describe('HospitalContact', () => {
  it('renders the address, the phone link and the map', () => {
    render(
      <HospitalContact
        street="Calle San Pedro el Verde, 35"
        city="45004 Toledo"
        phone="925 21 52 67"
        phoneHref="tel:925215267"
        mapSrc="https://www.google.com/maps/embed?pb=1"
        mapTitle="Mapa Hospital San José"
      />,
    );

    expect(screen.getByText('Calle San Pedro el Verde, 35')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '925 21 52 67' })).toHaveAttribute('href', 'tel:925215267');
    expect(screen.getByTitle('Mapa Hospital San José')).toBeInTheDocument();
  });
});
