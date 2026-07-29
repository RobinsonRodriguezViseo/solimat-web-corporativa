import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PodemosAyudartePage from './PodemosAyudartePage';

function renderPage() {
  render(
    <MemoryRouter>
      <PodemosAyudartePage />
    </MemoryRouter>,
  );
}

describe('PodemosAyudartePage', () => {
  it('renders the hero, the form and the contact sidebar', () => {
    renderPage();

    expect(screen.getByRole('heading', { name: '¿Podemos ayudarte?', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Cuéntanos qué necesitas', level: 2 })).toBeInTheDocument();
    expect(screen.getByText('Contacto directo')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Centros de atención/ })).toHaveAttribute('href', '/red-de-centros');
  });

  it('lets the user type in the form fields', () => {
    renderPage();

    const email = screen.getByLabelText(/E-mail de contacto/);
    fireEvent.change(email, { target: { value: 'ana@example.com' } });

    expect(email).toHaveValue('ana@example.com');
  });
});
