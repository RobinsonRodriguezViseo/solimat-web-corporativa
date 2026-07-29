import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ActionButton from './ActionButton';

describe('ActionButton', () => {
  it('renders an external link that opens in a new tab', () => {
    render(
      <MemoryRouter>
        <ActionButton href="https://portal.solimat.com/" icon="arrow">
          Portal de Servicios
        </ActionButton>
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: 'Portal de Servicios' });
    expect(link).toHaveAttribute('href', 'https://portal.solimat.com/');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders a submit button when no href is given', () => {
    render(
      <MemoryRouter>
        <ActionButton type="submit">Enviar</ActionButton>
      </MemoryRouter>,
    );

    expect(screen.getByRole('button', { name: 'Enviar' })).toHaveAttribute('type', 'submit');
  });
});
