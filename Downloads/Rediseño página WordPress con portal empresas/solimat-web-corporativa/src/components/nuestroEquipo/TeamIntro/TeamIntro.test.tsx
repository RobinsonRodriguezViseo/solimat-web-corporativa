import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TeamIntro from './TeamIntro';

describe('TeamIntro', () => {
  it('renders the lead, the text and the image', () => {
    render(<TeamIntro lead="Más de 200 profesionales" text="Nuestro objetivo" image="equipo.jpg" imageAlt="Equipo Solimat" />);

    expect(screen.getByText('Más de 200 profesionales')).toBeInTheDocument();
    expect(screen.getByText('Nuestro objetivo')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Equipo Solimat' })).toHaveAttribute('src', 'equipo.jpg');
  });
});
