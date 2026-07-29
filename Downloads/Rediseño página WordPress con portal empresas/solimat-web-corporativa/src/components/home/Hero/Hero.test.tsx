import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Hero from './Hero';

describe('Hero', () => {
  it('renders the first slide title and the CTA buttons', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Mejoramos la experiencia del Portal del Paciente' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Asóciate con nosotros/ })).toHaveAttribute('href', '/para-empresa');
    expect(screen.getByRole('link', { name: 'Asistencia Sanitaria' })).toHaveAttribute(
      'href',
      '/asistencia-sanitaria',
    );
  });

  it('switches slide content when a dot is clicked', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: /Único hospital laboral en Castilla-La Mancha/ }));
    expect(
      screen.getByRole('heading', { name: 'Único hospital laboral en Castilla-La Mancha' }),
    ).toBeInTheDocument();
  });
});
