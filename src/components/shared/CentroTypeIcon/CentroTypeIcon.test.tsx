import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { CentroType } from '../../../types/centro';
import CentroTypeIcon from './CentroTypeIcon';

const renderIcon = (type: CentroType, size?: number) => {
  const { container } = render(<CentroTypeIcon type={type} {...(size ? { size } : {})} />);
  const svg = container.querySelector('svg');
  expect(svg).not.toBeNull();

  return svg as SVGSVGElement;
};

describe('CentroTypeIcon', () => {
  it('draws a different glyph per centro type', () => {
    const glyphs = (['hospital', 'colaborador', 'centro'] as const).map((type) =>
      renderIcon(type).innerHTML,
    );

    expect(new Set(glyphs).size).toBe(3);
  });

  it('is decorative and honours the requested size', () => {
    const svg = renderIcon('hospital', 40);

    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).toHaveAttribute('width', '40');
    expect(svg).toHaveAttribute('height', '40');
  });

  it('falls back to the generic centro glyph', () => {
    expect(renderIcon('centro').innerHTML).toBe(renderIcon('centro', 26).innerHTML);
  });
});
