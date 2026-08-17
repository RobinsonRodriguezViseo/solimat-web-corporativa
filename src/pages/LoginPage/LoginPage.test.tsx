import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders the login form with all required fields', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Acceso Administrador' })).toBeInTheDocument();
    expect(screen.getByLabelText('DNI/NIE/PAS')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'INICIAR SESIÓN' })).toBeInTheDocument();
    expect(screen.getByText('¿Olvidó la contraseña?')).toBeInTheDocument();
  });

  it('shows error when DNI field is empty on submit', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    const submitButton = screen.getByRole('button', { name: 'INICIAR SESIÓN' });
    fireEvent.click(submitButton);

    expect(screen.getByText('Por favor ingresa tu DNI, NIE o PAS')).toBeInTheDocument();
  });

  it('shows error when password field is empty on submit', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    const dniInput = screen.getByLabelText('DNI/NIE/PAS');
    fireEvent.change(dniInput, { target: { value: '12345678A' } });

    const submitButton = screen.getByRole('button', { name: 'INICIAR SESIÓN' });
    fireEvent.click(submitButton);

    expect(screen.getByText('Por favor ingresa tu contraseña')).toBeInTheDocument();
  });

  it('updates form data when inputs change', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    const dniInput = screen.getByLabelText('DNI/NIE/PAS') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Contraseña') as HTMLInputElement;

    fireEvent.change(dniInput, { target: { value: '12345678A' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(dniInput.value).toBe('12345678A');
    expect(passwordInput.value).toBe('password123');
  });

  it('clears error message when user starts typing', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    const submitButton = screen.getByRole('button', { name: 'INICIAR SESIÓN' });
    fireEvent.click(submitButton);

    expect(screen.getByText('Por favor ingresa tu DNI, NIE o PAS')).toBeInTheDocument();

    const dniInput = screen.getByLabelText('DNI/NIE/PAS');
    fireEvent.change(dniInput, { target: { value: 'a' } });

    expect(screen.queryByText('Por favor ingresa tu DNI, NIE o PAS')).not.toBeInTheDocument();
  });

  it('disables inputs and button while loading', async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    const dniInput = screen.getByLabelText('DNI/NIE/PAS') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Contraseña') as HTMLInputElement;

    fireEvent.change(dniInput, { target: { value: '12345678A' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const submitButton = screen.getByRole('button', { name: 'INICIAR SESIÓN' });
    fireEvent.click(submitButton);

    // El botón debe estar deshabilitado mientras se procesa
    expect(submitButton).toBeDisabled();
  });
});
