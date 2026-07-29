import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import ContactForm from './ContactForm';

function renderForm() {
  render(
    <MemoryRouter>
      <ContactForm />
    </MemoryRouter>,
  );
}

describe('ContactForm', () => {
  it('renders every field of the design', () => {
    renderForm();

    expect(screen.getByLabelText(/Nombre y Apellidos/)).toBeInTheDocument();
    expect(screen.getByLabelText('CIF / NIF')).toBeInTheDocument();
    expect(screen.getByLabelText('Código postal')).toBeInTheDocument();
    expect(screen.getByLabelText(/Teléfono de contacto/)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail de contacto/)).toBeInTheDocument();
    expect(screen.getByLabelText('Comentarios')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('keeps the typed value in a controlled field', () => {
    renderForm();

    const input = screen.getByLabelText(/Nombre y Apellidos/);
    fireEvent.change(input, { target: { value: 'Ana Pérez' } });

    expect(input).toHaveValue('Ana Pérez');
  });

  it('does not reload the page on submit and shows the confirmation panel', () => {
    renderForm();

    const form = screen.getByRole('form', { name: 'Formulario de contacto' });
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
    const preventDefault = vi.spyOn(submitEvent, 'preventDefault');

    fireEvent(form, submitEvent);

    expect(preventDefault).toHaveBeenCalled();
    expect(submitEvent.defaultPrevented).toBe(true);
    expect(screen.getByText('¡Solicitud enviada!')).toBeInTheDocument();
    expect(screen.queryByLabelText(/Nombre y Apellidos/)).not.toBeInTheDocument();
  });
});
