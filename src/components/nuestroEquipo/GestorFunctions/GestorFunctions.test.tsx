import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import GestorFunctions from './GestorFunctions';

describe('GestorFunctions', () => {
  it('renders the title, every numbered function and the footnote', () => {
    render(
      <GestorFunctions
        title="Entre sus principales funciones están las de:"
        functions={[
          { number: 1, strong: 'Informar de nuestros servicios y actividades.', text: ' Proporcionamos información.' },
          { number: 2, strong: 'Tramitación de Prestaciones.', fullWidth: true },
        ]}
        footnote="El Gestor constituye una garantía de servicio."
      />,
    );

    expect(screen.getByText('Entre sus principales funciones están las de:')).toBeInTheDocument();
    expect(screen.getByText('Informar de nuestros servicios y actividades.')).toBeInTheDocument();
    expect(screen.getByText('Tramitación de Prestaciones.')).toBeInTheDocument();
    expect(screen.getByText('El Gestor constituye una garantía de servicio.')).toBeInTheDocument();
  });
});
