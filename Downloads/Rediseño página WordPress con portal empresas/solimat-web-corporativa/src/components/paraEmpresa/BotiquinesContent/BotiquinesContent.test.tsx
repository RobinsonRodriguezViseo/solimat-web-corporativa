import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import BotiquinesContent from './BotiquinesContent';

describe('BotiquinesContent', () => {
  it('links the request form to the local PDF', () => {
    render(
      <MemoryRouter>
        <BotiquinesContent />
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: 'Solicitud botiquín' });
    expect(link.getAttribute('href')).toContain('Solicitud-de-botiquin-de-primeros-auxilios-2024-autorrellenable');
    expect(
      screen.getByText('Nos encargamos de tramitarla y, en unos días, lo recibirás en la dirección que nos indiques.'),
    ).toBeInTheDocument();
  });

  it('renders an optional heading', () => {
    render(
      <MemoryRouter>
        <BotiquinesContent title="Botiquines" />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Botiquines', level: 3 })).toBeInTheDocument();
  });
});
