import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import FormField from './FormField';

describe('FormField', () => {
  it('links the label to the input and reports every change', () => {
    const onChange = vi.fn();
    render(<FormField label="Nombre y Apellidos" value="" onChange={onChange} required />);

    const input = screen.getByLabelText(/Nombre y Apellidos/);
    fireEvent.change(input, { target: { value: 'Ana' } });

    expect(input).toBeRequired();
    expect(onChange).toHaveBeenCalledWith('Ana');
  });

  it('renders a textarea when multiline is set', () => {
    render(<FormField label="Comentarios" value="Hola" onChange={vi.fn()} multiline />);

    expect(screen.getByLabelText('Comentarios').tagName).toBe('TEXTAREA');
  });
});
