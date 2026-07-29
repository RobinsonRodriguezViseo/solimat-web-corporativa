import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import GradeCard from './GradeCard';

describe('GradeCard', () => {
  it('renders the grade name and its bullets', () => {
    render(
      <MemoryRouter>
        <GradeCard
          title="Gran invalidez"
          blocks={[{ kind: 'list', items: [{ text: ['Forma de pago: pensión vitalicia.'] }] }]}
        />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Gran invalidez', level: 3 })).toBeInTheDocument();
    expect(screen.getByText('Forma de pago: pensión vitalicia.')).toBeInTheDocument();
  });
});
