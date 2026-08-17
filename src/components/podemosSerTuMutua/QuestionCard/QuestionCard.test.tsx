import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import QuestionCard from './QuestionCard';

describe('QuestionCard', () => {
  it('renders the question as a heading', () => {
    render(<QuestionCard icon={<svg aria-hidden="true" />} question="¿Tienes una asesoría laboral?" />);

    expect(screen.getByRole('heading', { name: '¿Tienes una asesoría laboral?' })).toBeInTheDocument();
  });
});
