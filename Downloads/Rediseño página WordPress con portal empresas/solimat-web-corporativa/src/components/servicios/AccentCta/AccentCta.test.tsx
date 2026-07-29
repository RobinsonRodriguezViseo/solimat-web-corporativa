import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import AccentCta from './AccentCta';

describe('AccentCta', () => {
  it('renders an internal route as a router link', () => {
    render(
      <MemoryRouter>
        <AccentCta href="/quienes-somos/podemos-ayudarte" icon="arrow">
          ¿Quieres tramitar esta prestación? Te ayudamos
        </AccentCta>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('link', { name: '¿Quieres tramitar esta prestación? Te ayudamos' }),
    ).toHaveAttribute('href', '/quienes-somos/podemos-ayudarte');
  });

  it('opens external links in a new tab', () => {
    render(
      <MemoryRouter>
        <AccentCta href="https://campus.solimat.com/index.php">Accede a nuestro Campus</AccentCta>
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: 'Accede a nuestro Campus' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
