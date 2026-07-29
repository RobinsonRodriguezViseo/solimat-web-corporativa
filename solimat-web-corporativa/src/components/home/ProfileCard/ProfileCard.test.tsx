import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {
  it('renders title, description, menu links and the CTA', () => {
    render(
      <MemoryRouter>
        <ProfileCard
          image="/empresa.jpg"
          title="Empresa"
          description="Protegemos a tus trabajadores."
          links={[
            { label: 'Asistencia Sanitaria', href: '/asistencia-sanitaria' },
            { label: 'Red de centros', href: '/red-de-centros' },
          ]}
          ctaHref="/para-empresa"
        />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Empresa' })).toBeInTheDocument();
    expect(screen.getByText('Protegemos a tus trabajadores.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Asistencia Sanitaria' })).toHaveAttribute(
      'href',
      '/asistencia-sanitaria',
    );
    expect(screen.getByRole('link', { name: 'Más información' })).toHaveAttribute('href', '/para-empresa');
  });
});
