import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FeaturedReport from './FeaturedReport';

describe('FeaturedReport', () => {
  it('links to the local PDF asset and opens it in a new tab', () => {
    render(
      <FeaturedReport
        cover="/portada.jpg"
        eyebrow="Ejercicio 2024"
        title="Informe de Gobierno Corporativo"
        pdf="/assets/informe-2024.pdf"
      />,
    );

    const link = screen.getByRole('link', { name: /Informe de Gobierno Corporativo/ });
    expect(link).toHaveAttribute('href', '/assets/informe-2024.pdf');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByText('Descargar PDF')).toBeInTheDocument();
  });
});
