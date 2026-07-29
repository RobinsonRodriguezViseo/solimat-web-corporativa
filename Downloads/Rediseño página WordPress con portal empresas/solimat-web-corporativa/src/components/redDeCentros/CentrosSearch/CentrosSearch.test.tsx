import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import CentrosSearch from './CentrosSearch';

describe('CentrosSearch', () => {
  it('renders an accessible search box with the current query', () => {
    render(<CentrosSearch value="talavera" onChange={() => {}} />);

    expect(screen.getByRole('searchbox', { name: /Buscar por dirección o nombre del centro/ })).toHaveValue(
      'talavera',
    );
  });

  it('reports every keystroke', async () => {
    const onChange = vi.fn();
    render(<CentrosSearch value="" onChange={onChange} />);

    await userEvent.type(screen.getByRole('searchbox'), 'ab');

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenLastCalledWith('b');
  });
});
