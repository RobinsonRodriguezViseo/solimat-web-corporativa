import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PageIndex from './PageIndex';

describe('PageIndex', () => {
  it('renders one anchor per item pointing to its hash', () => {
    render(
      <PageIndex
        items={[
          { id: 'asociate', label: 'Asóciate' },
          { id: 'creando-tu-empresa', label: 'Creando tu empresa', level: 'sub' },
        ]}
      />,
    );

    expect(screen.getByText('En esta página')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Asóciate' })).toHaveAttribute('href', '#asociate');
    expect(screen.getByRole('link', { name: 'Creando tu empresa' })).toHaveAttribute('href', '#creando-tu-empresa');
  });

  it('renders extra content passed as children', () => {
    render(
      <PageIndex items={[{ id: 'asociate', label: 'Asóciate' }]}>
        <p>Portal del Paciente</p>
      </PageIndex>,
    );

    expect(screen.getByText('Portal del Paciente')).toBeInTheDocument();
  });
});
