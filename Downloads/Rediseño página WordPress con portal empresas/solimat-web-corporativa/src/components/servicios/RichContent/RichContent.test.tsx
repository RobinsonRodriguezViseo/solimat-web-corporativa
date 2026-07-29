import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import RichContent from './RichContent';

describe('RichContent', () => {
  it('renders paragraphs, labels, nested lists and tables', () => {
    render(
      <MemoryRouter>
        <RichContent
          blocks={[
            { kind: 'p', text: ['Cuantía: ', { kind: 'strong', text: '75% de la base reguladora' }, '.'] },
            { kind: 'label', text: 'Periodo' },
            {
              kind: 'list',
              items: [
                {
                  text: ['Temporal:'],
                  items: [{ text: ['Total: comporta la interrupción de todas las actividades.'] }],
                },
              ],
            },
            {
              kind: 'table',
              head: ['Situación', 'Fecha de efectos'],
              rows: [[['Fuerza mayor'], ['Día que se acredite la concurrencia de la fuerza mayor']]],
            },
          ]}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('75% de la base reguladora')).toBeInTheDocument();
    expect(screen.getByText('Periodo')).toBeInTheDocument();
    expect(screen.getByText('Total: comporta la interrupción de todas las actividades.')).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Fecha de efectos' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Fuerza mayor' })).toBeInTheDocument();
  });

  it('renders internal links as router links and external ones in a new tab', () => {
    render(
      <MemoryRouter>
        <RichContent
          blocks={[
            { kind: 'p', text: [{ kind: 'link', text: 'aquí', href: '/red-de-centros' }] },
            { kind: 'p', text: [{ kind: 'link', text: 'BOE', href: 'https://www.boe.es/' }] },
          ]}
        />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'aquí' })).toHaveAttribute('href', '/red-de-centros');
    expect(screen.getByRole('link', { name: 'BOE' })).toHaveAttribute('target', '_blank');
  });
});
