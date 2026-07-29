import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import IntroCard from './IntroCard';

describe('IntroCard', () => {
  it('renders the Voz del Usuario logo and the introduction text', () => {
    render(<IntroCard />);

    expect(screen.getByRole('img', { name: 'Voz del Usuario' })).toBeInTheDocument();
    expect(screen.getByText(/La Voz del Usuario nace fruto de la relación entre empleados y usuarios/)).toBeInTheDocument();
    expect(screen.getByText(/nos encargamos de escuchar a nuestros usuarios a través de:/)).toBeInTheDocument();
  });
});
