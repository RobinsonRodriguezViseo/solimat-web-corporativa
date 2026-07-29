import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import IntroBlock from './IntroBlock';

describe('IntroBlock', () => {
  it('renders the two intro paragraphs and the team image', () => {
    render(<IntroBlock />);

    expect(screen.getByText('Nuestro equipo')).toBeInTheDocument();
    expect(screen.getByText(/detrás de cada servicio de calidad, hay un equipo comprometido/)).toBeInTheDocument();
    expect(screen.getByText(/buscamos personas comprometidas y con ganas de crecer/)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Trabaja con nosotros' })).toBeInTheDocument();
  });
});
