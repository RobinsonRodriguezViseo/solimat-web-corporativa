import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import NavDropdown from './NavDropdown';

const items = [
  { label: 'Quiénes somos', href: '/quienes-somos' },
  { label: 'Portal de Servicios', href: 'http://portal.solimat.com/' },
];

describe('NavDropdown', () => {
  it('toggles the menu open state when the trigger is clicked', () => {
    render(
      <MemoryRouter>
        <NavDropdown label="Conócenos" items={items} />
      </MemoryRouter>,
    );

    const trigger = screen.getByRole('button', { name: /Conócenos/ });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders internal items as router links and external items as plain anchors', () => {
    render(
      <MemoryRouter>
        <NavDropdown label="Conócenos" items={items} />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: /Conócenos/ }));

    expect(screen.getByRole('link', { name: 'Quiénes somos' })).toHaveAttribute('href', '/quienes-somos');
    const external = screen.getByRole('link', { name: 'Portal de Servicios' });
    expect(external).toHaveAttribute('target', '_blank');
    expect(external).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
