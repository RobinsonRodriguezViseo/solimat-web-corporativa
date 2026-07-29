import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import type { Provincia } from '../../../types/centro';
import ProvinceSelector from './ProvinceSelector';

const provinces: Provincia[] = [
  { id: 'p-45', code: '45', name: 'Toledo' },
  { id: 'p-13', code: '13', name: 'Ciudad Real' },
  { id: 'p-16', code: '16', name: 'Cuenca' },
];

describe('ProvinceSelector', () => {
  it('renders one option per province and selects it by code', () => {
    render(<ProvinceSelector provinces={provinces} value="16" onChange={() => {}} />);

    expect(screen.getByRole('heading', { name: '¿Dónde quieres ser atendido?' })).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(3);
    // Se muestra la Descripcion y el valor es el Codigo, como en el maestro.
    expect(screen.getByRole('option', { name: 'Cuenca' })).toHaveValue('16');
    expect(screen.getByLabelText('Provincia')).toHaveValue('16');
  });

  it('reports the code of the selected province', async () => {
    const onChange = vi.fn();
    render(<ProvinceSelector provinces={provinces} value="45" onChange={onChange} />);

    await userEvent.selectOptions(screen.getByLabelText('Provincia'), '13');

    expect(onChange).toHaveBeenCalledWith('13');
  });

  it('can be disabled while the maestro has not answered yet', () => {
    render(<ProvinceSelector provinces={[]} value="45" onChange={() => {}} disabled />);

    expect(screen.getByLabelText('Provincia')).toBeDisabled();
    expect(screen.queryAllByRole('option')).toHaveLength(0);
  });
});
