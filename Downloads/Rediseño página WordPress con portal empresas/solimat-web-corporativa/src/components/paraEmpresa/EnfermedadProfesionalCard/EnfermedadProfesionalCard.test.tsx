import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import EnfermedadProfesionalCard from './EnfermedadProfesionalCard';

describe('EnfermedadProfesionalCard', () => {
  it('renders the heading and links the official disease table', () => {
    render(<EnfermedadProfesionalCard />);

    expect(screen.getByRole('heading', { name: 'Enfermedad profesional', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'RD 1299/2006 de 10 de noviembre' })).toHaveAttribute(
      'href',
      'https://boe.es/buscar/act.php?id=BOE-A-2006-22169',
    );
  });

  it('keeps the required-information copy even though its download is unavailable', () => {
    render(<EnfermedadProfesionalCard />);

    expect(screen.getByText(/facilita a Solimat la información necesaria/)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'información necesaria' })).not.toBeInTheDocument();
  });
});
