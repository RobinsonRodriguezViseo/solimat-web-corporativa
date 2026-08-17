import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SistemaDeltaCard from './SistemaDeltaCard';

describe('SistemaDeltaCard', () => {
  it('renders the heading and the three labelled blocks', () => {
    render(<SistemaDeltaCard />);

    expect(screen.getByRole('heading', { name: 'Sistema Delta', level: 2 })).toBeInTheDocument();
    expect(screen.getByText('Usuarios')).toBeInTheDocument();
    expect(screen.getByText('Requisitos')).toBeInTheDocument();
    expect(screen.getByText(/Código de la Mutua que, en nuestro caso, es Nº 072/)).toBeInTheDocument();
  });

  it('opens the official external references in a new tab and never links the old WordPress', () => {
    render(<SistemaDeltaCard />);

    expect(screen.getByRole('link', { name: 'aquí' })).toHaveAttribute('href', 'https://www.cert.fnmt.es/');
    expect(screen.getByRole('link', { name: 'Sistema Delta' })).toHaveAttribute(
      'href',
      'https://delta.mites.gob.es/Delta2Web/main/principal.jsp',
    );

    screen.getAllByRole('link').forEach((link) => {
      expect(link.getAttribute('href')).not.toMatch(/azurefd\.net/);
    });
  });
});
