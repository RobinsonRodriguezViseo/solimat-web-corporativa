import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ReferenceItem from './ReferenceItem';

describe('ReferenceItem', () => {
  it('renders the title, description and an external BOE link', () => {
    render(
      <ReferenceItem
        title="Ley 3/2023, de empleo"
        description="De 28 de febrero, de Empleo."
        url="https://boe.es/boe/dias/2023/03/01/pdfs/BOE-A-2023-5365.pdf"
      />,
    );

    expect(screen.getByRole('heading', { name: 'Ley 3/2023, de empleo' })).toBeInTheDocument();
    expect(screen.getByText('De 28 de febrero, de Empleo.')).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /Ver texto completo \(BOE\)/ });
    expect(link).toHaveAttribute('href', 'https://boe.es/boe/dias/2023/03/01/pdfs/BOE-A-2023-5365.pdf');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
