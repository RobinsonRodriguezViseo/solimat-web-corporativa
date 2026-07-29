import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContentCard from './ContentCard';

describe('ContentCard', () => {
  it('renders the subsection title, paragraphs and lists', () => {
    render(
      <ContentCard
        subsection={{
          id: 'investigacion',
          title: 'Investigación',
          card: true,
          blocks: [
            { kind: 'paragraph', text: '**Admisión de la denuncia:** hechos denunciables.' },
            { kind: 'list', items: ['El equipo investigador está conformado por el Comité.'] },
          ],
        }}
      />,
    );

    expect(screen.getByRole('heading', { name: 'Investigación', level: 3 })).toBeInTheDocument();
    expect(screen.getByText('Admisión de la denuncia:').tagName).toBe('STRONG');
    expect(screen.getByRole('listitem')).toHaveTextContent('El equipo investigador está conformado por el Comité.');
  });
});
