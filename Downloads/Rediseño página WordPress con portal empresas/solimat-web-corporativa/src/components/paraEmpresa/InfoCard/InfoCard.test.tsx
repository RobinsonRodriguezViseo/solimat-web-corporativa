import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import InfoCard from './InfoCard';

describe('InfoCard', () => {
  it('renders the title as a level 3 heading by default', () => {
    render(
      <InfoCard title="Creando tu empresa">
        <p>Contenido</p>
      </InfoCard>,
    );

    expect(screen.getByRole('heading', { name: 'Creando tu empresa', level: 3 })).toBeInTheDocument();
    expect(screen.getByText('Contenido')).toBeInTheDocument();
  });

  it('renders a level 2 heading when titleLevel is h2', () => {
    render(
      <InfoCard title="Contingencia Común" titleLevel="h2">
        <p>Contenido</p>
      </InfoCard>,
    );

    expect(screen.getByRole('heading', { name: 'Contingencia Común', level: 2 })).toBeInTheDocument();
  });
});
