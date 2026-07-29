import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import type { FaqEntry } from '../../../data/preguntasFrecuentes';
import FaqItem from './FaqItem';

const ENTRY: FaqEntry = {
  id: 'demo',
  question: '¿Qué es una mutua?',
  answer: [{ kind: 'paragraph', content: [{ kind: 'text', text: 'Una asociación privada de empresarios.' }] }],
};

describe('FaqItem', () => {
  it('exposes the collapsed state through aria-expanded and hides the answer', () => {
    render(
      <MemoryRouter>
        <FaqItem entry={ENTRY} isOpen={false} onToggle={() => {}} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('button', { name: /¿Qué es una mutua\?/ })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText('Una asociación privada de empresarios.')).not.toBeInTheDocument();
  });

  it('shows the answer in a labelled region when open', () => {
    render(
      <MemoryRouter>
        <FaqItem entry={ENTRY} isOpen onToggle={() => {}} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('button', { name: /¿Qué es una mutua\?/ })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('region', { name: /¿Qué es una mutua\?/ })).toHaveTextContent(
      'Una asociación privada de empresarios.',
    );
  });

  it('calls onToggle when the question button is activated', async () => {
    const onToggle = vi.fn();
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <FaqItem entry={ENTRY} isOpen={false} onToggle={onToggle} />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole('button', { name: /¿Qué es una mutua\?/ }));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
