import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ProfilesSection from './ProfilesSection';

describe('ProfilesSection', () => {
  it('renders the heading and the four profile cards', () => {
    render(
      <MemoryRouter>
        <ProfilesSection />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: '¿Cómo podemos ayudarte?' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Empresa' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Trabajador' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Autónomo' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Asesoría Laboral' })).toBeInTheDocument();
  });
});
