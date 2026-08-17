import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import CollaboratorForm from './CollaboratorForm';

describe('CollaboratorForm', () => {
  it('renders every labelled field and the submit button', () => {
    render(
      <MemoryRouter>
        <CollaboratorForm />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Solicitud de alta como colaborador', level: 3 })).toBeInTheDocument();
    expect(screen.getByLabelText('Nombre y Apellidos')).toBeInTheDocument();
    expect(screen.getByLabelText('Nº de RED')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail de contacto')).toHaveAttribute('type', 'email');
    expect(screen.getByLabelText('Comentarios').tagName).toBe('TEXTAREA');
    expect(screen.getByRole('checkbox')).toBeRequired();
    expect(screen.getByRole('button', { name: 'Enviar' })).toHaveAttribute('type', 'submit');
  });
});
