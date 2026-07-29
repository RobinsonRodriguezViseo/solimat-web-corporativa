import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ValuePoster from './ValuePoster';

describe('ValuePoster', () => {
  it('renders a prose poster (Misión / Visión)', () => {
    render(<ValuePoster image="/mision.jpg" title="Misión" text="Gestionar las prestaciones encomendadas." />);

    expect(screen.getByText('Misión')).toBeInTheDocument();
    expect(screen.getByText('Gestionar las prestaciones encomendadas.')).toBeInTheDocument();
  });

  it('renders a checklist poster (Valores)', () => {
    render(
      <ValuePoster
        image="/valores.jpg"
        title="Valores"
        items={['Confianza y compromiso', 'Orientación a la persona']}
      />,
    );

    expect(screen.getByText('Confianza y compromiso')).toBeInTheDocument();
    expect(screen.getByText('Orientación a la persona')).toBeInTheDocument();
  });
});
