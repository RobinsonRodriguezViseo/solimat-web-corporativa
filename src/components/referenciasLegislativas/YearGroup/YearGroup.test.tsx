import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import YearGroup from './YearGroup';

describe('YearGroup', () => {
  it('renders the year heading and every reference of the group', () => {
    render(
      <YearGroup
        group={{
          id: 'y2019',
          year: 2019,
          items: [
            { title: 'Real Decreto Ley 8/2019', description: 'De medidas urgentes.', url: 'https://boe.es/a.pdf' },
            { title: 'Real Decreto Ley 6/2019', description: 'De igualdad de trato.', url: 'https://boe.es/b.pdf' },
          ],
        }}
      />,
    );

    expect(screen.getByRole('heading', { name: '2019', level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Real Decreto Ley 8/2019' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Real Decreto Ley 6/2019' })).toBeInTheDocument();
  });
});
