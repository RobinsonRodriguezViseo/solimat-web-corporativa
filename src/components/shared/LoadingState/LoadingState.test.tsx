import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LoadingState from './LoadingState';

describe('LoadingState', () => {
  it('announces the default message through a live region', () => {
    render(<LoadingState />);

    const status = screen.getByRole('status');
    expect(status).toHaveAttribute('aria-live', 'polite');
    expect(screen.getByText('Cargando…')).toBeInTheDocument();
  });

  it('renders the custom message', () => {
    render(<LoadingState message="Cargando centros…" />);

    expect(screen.getByText('Cargando centros…')).toBeInTheDocument();
  });
});
