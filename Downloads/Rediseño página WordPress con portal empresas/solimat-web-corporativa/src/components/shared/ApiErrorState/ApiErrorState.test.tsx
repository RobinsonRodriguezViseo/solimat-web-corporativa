import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import ApiErrorState from './ApiErrorState';

describe('ApiErrorState', () => {
  it('is announced as an alert and always offers the emergency phone', () => {
    render(<ApiErrorState />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'No podemos mostrar esta información ahora mismo' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '900 111 072' })).toHaveAttribute(
      'href',
      'tel:900111072',
    );
  });

  it('renders the custom message and no retry button when there is no handler', () => {
    render(<ApiErrorState message="No hemos podido cargar los centros." />);

    expect(screen.getByText('No hemos podido cargar los centros.')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Reintentar' })).not.toBeInTheDocument();
  });

  it('calls onRetry when the retry button is pressed', async () => {
    const onRetry = vi.fn();
    render(<ApiErrorState onRetry={onRetry} />);

    await userEvent.click(screen.getByRole('button', { name: 'Reintentar' }));

    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
