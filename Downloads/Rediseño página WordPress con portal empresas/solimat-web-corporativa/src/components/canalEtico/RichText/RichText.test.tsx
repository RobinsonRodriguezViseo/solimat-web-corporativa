import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RichText from './RichText';

describe('RichText', () => {
  it('renders plain text unchanged', () => {
    render(<RichText text="Texto sin énfasis." />);
    expect(screen.getByText('Texto sin énfasis.')).toBeInTheDocument();
  });

  it('wraps the fragments delimited by ** in <strong>', () => {
    const { container } = render(<RichText text="Plazo máximo de **tres meses** desde la recepción." />);

    expect(container.querySelectorAll('strong')).toHaveLength(1);
    expect(screen.getByText('tres meses').tagName).toBe('STRONG');
    expect(container).toHaveTextContent('Plazo máximo de tres meses desde la recepción.');
  });

  it('does not interpret HTML present in the text', () => {
    const { container } = render(<RichText text="<script>alert(1)</script>" />);
    expect(container.querySelector('script')).toBeNull();
    expect(container).toHaveTextContent('<script>alert(1)</script>');
  });
});
