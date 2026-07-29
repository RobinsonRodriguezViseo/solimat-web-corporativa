import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { Block } from '../../../data/noticias';
import ArticleBody from './ArticleBody';

const blocks: Block[] = [
  { kind: 'p', text: 'Un párrafo del cuerpo.' },
  { kind: 'h', text: 'Sobre Solimat' },
  { kind: 'quote', text: 'Una cita destacada.', author: 'José Ángel González' },
];

describe('ArticleBody', () => {
  it('renders paragraphs, headings and quotes with their author', () => {
    render(<ArticleBody blocks={blocks} />);

    expect(screen.getByText('Un párrafo del cuerpo.')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Sobre Solimat', level: 2 })).toBeInTheDocument();
    expect(screen.getByText('Una cita destacada.')).toBeInTheDocument();
    expect(screen.getByText('José Ángel González')).toBeInTheDocument();
  });

  it('renders a quote without an author', () => {
    render(<ArticleBody blocks={[{ kind: 'quote', text: 'Cita sin autor.' }]} />);

    expect(screen.getByText('Cita sin autor.')).toBeInTheDocument();
  });
});
