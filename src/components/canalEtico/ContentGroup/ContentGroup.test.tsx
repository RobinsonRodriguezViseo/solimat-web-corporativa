import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ContentGroup from './ContentGroup';

describe('ContentGroup', () => {
  it('renders the section title and each subsection', () => {
    render(
      <ContentGroup
        group={{
          id: 'derechos',
          title: 'Derechos',
          subsections: [
            { id: 'del-informante', title: 'Del informante', card: true, blocks: [] },
            { id: 'de-la-persona-afectada', title: 'De la persona afectada', card: true, blocks: [] },
          ],
        }}
      />,
    );

    expect(screen.getByRole('heading', { name: 'Derechos', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Del informante', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'De la persona afectada', level: 3 })).toBeInTheDocument();
  });

  it('omits the section title when the group has none', () => {
    render(
      <ContentGroup
        group={{ id: 'comunicacion', subsections: [{ title: 'Comunicación', card: true, blocks: [] }] }}
      />,
    );

    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Comunicación', level: 3 })).toBeInTheDocument();
  });
});
