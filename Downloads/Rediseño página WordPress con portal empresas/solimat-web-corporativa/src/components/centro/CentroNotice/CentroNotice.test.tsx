import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CentroNotice from './CentroNotice';

describe('CentroNotice', () => {
  it('renders the notice text and the update date', () => {
    render(<CentroNotice text="Urgencias 24 horas." updatedAt="28/7/2026" />);

    expect(screen.getByRole('note')).toBeInTheDocument();
    expect(screen.getByText('Aviso')).toBeInTheDocument();
    expect(screen.getByText('Urgencias 24 horas.')).toBeInTheDocument();
    expect(screen.getByText('Información actualizada el 28/7/2026')).toBeInTheDocument();
  });
});
