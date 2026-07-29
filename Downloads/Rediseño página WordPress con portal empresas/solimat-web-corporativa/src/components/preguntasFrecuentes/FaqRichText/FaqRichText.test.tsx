import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import type { FaqBlock } from '../../../data/preguntasFrecuentes';
import FaqRichText from './FaqRichText';

const BLOCKS: FaqBlock[] = [
  {
    kind: 'paragraph',
    content: [
      { kind: 'text', text: 'Consulta el ' },
      { kind: 'route', text: 'enlace', to: '/para-autonomo' },
      { kind: 'text', text: ' o esta ' },
      { kind: 'external', text: 'infografía', href: '/assets/infografia.pdf' },
      { kind: 'text', text: ' o llama a tu ' },
      { kind: 'placeholder', text: 'Dirección Provincial' },
    ],
  },
  { kind: 'list', items: [[{ kind: 'text', text: 'Primer beneficio' }]] },
];

describe('FaqRichText', () => {
  it('renders routes as router links and externals in a new tab', () => {
    render(
      <MemoryRouter>
        <FaqRichText blocks={BLOCKS} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'enlace' })).toHaveAttribute('href', '/para-autonomo');

    const external = screen.getByRole('link', { name: 'infografía' });
    expect(external).toHaveAttribute('href', '/assets/infografia.pdf');
    expect(external).toHaveAttribute('target', '_blank');
    expect(external).toHaveAttribute('rel', 'noopener noreferrer');

    expect(screen.getByRole('link', { name: 'Dirección Provincial' })).toHaveAttribute('href', '#');
    expect(screen.getByRole('listitem')).toHaveTextContent('Primer beneficio');
  });
});
