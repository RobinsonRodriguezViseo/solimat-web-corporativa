import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import CanalEticoForm from './CanalEticoForm';

describe('CanalEticoForm', () => {
  it('renders the communication fields and the optional identity fields', () => {
    render(<CanalEticoForm />);

    expect(screen.getByLabelText('Fecha')).toHaveAttribute('type', 'date');
    expect(
      screen.getByLabelText(
        'Descripción de la comunicación (hechos, fechas, lugares, personas involucradas, departamentos, etc.)',
      ),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Nombre del informante')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail del informante')).toHaveAttribute('type', 'email');
    expect(screen.getByRole('button', { name: /Enviar/ })).toHaveAttribute('type', 'submit');
  });

  it('shows the confirmation panel once the required checkboxes are accepted and the form is sent', async () => {
    const user = userEvent.setup();
    render(<CanalEticoForm />);

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(2);
    for (const checkbox of checkboxes) {
      await user.click(checkbox);
    }

    await user.click(screen.getByRole('button', { name: /Enviar/ }));

    expect(screen.getByRole('heading', { name: 'Comunicación enviada' })).toBeInTheDocument();
    expect(screen.queryByLabelText('Fecha')).not.toBeInTheDocument();
  });
});
