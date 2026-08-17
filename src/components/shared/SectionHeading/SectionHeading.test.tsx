import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SectionHeading from './SectionHeading';

describe('SectionHeading', () => {
  it('renders the title as a heading and omits optional parts when not provided', () => {
    render(<SectionHeading title="Noticias" />);
    expect(screen.getByRole('heading', { name: 'Noticias', level: 2 })).toBeInTheDocument();
  });

  it('renders the eyebrow and description when provided', () => {
    render(
      <SectionHeading
        eyebrow="Estamos contigo"
        title="¿Cómo podemos ayudarte?"
        description="Elige tu perfil y accede a la información que necesitas."
      />,
    );
    expect(screen.getByText('Estamos contigo')).toBeInTheDocument();
    expect(screen.getByText('Elige tu perfil y accede a la información que necesitas.')).toBeInTheDocument();
  });
});
