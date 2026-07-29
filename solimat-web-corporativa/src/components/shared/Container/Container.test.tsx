import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Container from './Container';

describe('Container', () => {
  it('renders children inside a div with the global container class', () => {
    render(<Container>contenido</Container>);
    const div = screen.getByText('contenido');
    expect(div.tagName).toBe('DIV');
    expect(div).toHaveClass('container');
  });

  it('renders as a different element and merges extra classes', () => {
    render(
      <Container as="section" className="hero" id="top">
        seccion
      </Container>,
    );
    const section = screen.getByText('seccion');
    expect(section.tagName).toBe('SECTION');
    expect(section).toHaveClass('container', 'hero');
    expect(section).toHaveAttribute('id', 'top');
  });
});
