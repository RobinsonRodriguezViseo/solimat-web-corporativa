import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FormField from './FormField';

describe('FormField', () => {
  it('associates the label with the input', () => {
    render(<FormField label="DNI del informante" name="dni" />);

    const input = screen.getByLabelText('DNI del informante');
    expect(input.tagName).toBe('INPUT');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('name', 'dni');
  });

  it('renders a textarea when multiline is set', () => {
    render(<FormField label="Descripción" name="descripcion" multiline />);
    expect(screen.getByLabelText('Descripción').tagName).toBe('TEXTAREA');
  });
});
