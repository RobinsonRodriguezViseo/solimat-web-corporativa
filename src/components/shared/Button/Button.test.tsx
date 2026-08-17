import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('renders a router Link for internal hrefs', () => {
    render(
      <MemoryRouter>
        <Button href="/noticias">Más noticias</Button>
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: 'Más noticias' });
    expect(link).toHaveAttribute('href', '/noticias');
    expect(link).not.toHaveAttribute('target');
  });

  it('renders a plain anchor with target=_blank for external hrefs', () => {
    render(<Button href="https://portal.solimat.com/">Portal de Servicios</Button>);
    const link = screen.getByRole('link', { name: 'Portal de Servicios' });
    expect(link).toHaveAttribute('href', 'https://portal.solimat.com/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders a plain anchor without target for tel: links', () => {
    render(<Button href="tel:900111072">900 111 072</Button>);
    const link = screen.getByRole('link', { name: '900 111 072' });
    expect(link).not.toHaveAttribute('target');
  });

  it('renders a native button and forwards onClick when no href is given', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Enviar</Button>);
    const button = screen.getByRole('button', { name: 'Enviar' });
    expect(button).toHaveAttribute('type', 'button');
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant, size and block modifier classes', () => {
    render(<Button variant="ghost" size="lg" block>Grande</Button>);
    const button = screen.getByRole('button', { name: 'Grande' });
    expect(button.className.split(' ')).toEqual(
      expect.arrayContaining(['btn', 'btn--ghost', 'btn--lg', 'btn--block']),
    );
  });
});
