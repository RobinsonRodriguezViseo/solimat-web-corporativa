import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import TrabajaConNosotrosPage from './TrabajaConNosotrosPage';

describe('TrabajaConNosotrosPage', () => {
  it('renders the hero, intro, values and CV call to action', () => {
    render(
      <MemoryRouter>
        <TrabajaConNosotrosPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Trabaja con nosotros', level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Nuestro equipo')).toBeInTheDocument();
    expect(screen.getByText('Vocación de servicio')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '¿Quieres formar parte de nuestro equipo?' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Enviar mi CV a web@solimat.com/ })).toHaveAttribute(
      'href',
      'mailto:web@solimat.com',
    );
  });
});
