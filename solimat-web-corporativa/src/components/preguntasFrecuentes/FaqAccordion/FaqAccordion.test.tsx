import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { PREGUNTAS_FRECUENTES } from '../../../data/preguntasFrecuentes';
import FaqAccordion from './FaqAccordion';

function renderAccordion() {
  render(
    <MemoryRouter>
      <FaqAccordion entries={PREGUNTAS_FRECUENTES} />
    </MemoryRouter>,
  );
}

describe('FaqAccordion', () => {
  it('renders one question button per entry with the first one open', () => {
    renderAccordion();

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(PREGUNTAS_FRECUENTES.length);
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens a question, closes the previous one and closes itself on a second click', async () => {
    const user = userEvent.setup();
    renderAccordion();

    const first = screen.getByRole('button', { name: /¿Qué es una mutua y qué servicios ofrece Solimat\?/ });
    const second = screen.getByRole('button', { name: /¿Cómo puedo afiliarme a Solimat como trabajador autónomo\?/ });

    await user.click(second);
    expect(second).toHaveAttribute('aria-expanded', 'true');
    expect(first).toHaveAttribute('aria-expanded', 'false');

    await user.click(second);
    expect(second).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryAllByRole('region')).toHaveLength(0);
  });
});
