import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Breadcrumb from './Breadcrumb';

describe('Breadcrumb', () => {
  it('renders links for items with a route and plain text for the rest', () => {
    render(
      <MemoryRouter>
        <Breadcrumb
          items={[{ label: 'Inicio', to: '/' }, { label: 'Conócenos' }, { label: 'Quiénes somos' }]}
        />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/');
    expect(screen.getByText('Conócenos')).toBeInTheDocument();
    expect(screen.getByText('Quiénes somos')).toHaveAttribute('aria-current', 'page');
  });

  it('renders one separator fewer than the number of items', () => {
    const { container } = render(
      <MemoryRouter>
        <Breadcrumb items={[{ label: 'Inicio', to: '/' }, { label: 'Noticias' }]} />
      </MemoryRouter>,
    );

    expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(1);
  });
});
