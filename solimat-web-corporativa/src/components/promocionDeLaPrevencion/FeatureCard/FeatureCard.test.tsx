import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import FeatureCard from './FeatureCard';

describe('FeatureCard', () => {
  it('renders the feature name and description', () => {
    render(
      <MemoryRouter>
        <FeatureCard
          title="STOP Riesgos Laborales"
          blocks={[{ kind: 'p', text: ['Línea telefónica de atención al público.'] }]}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('STOP Riesgos Laborales')).toBeInTheDocument();
    expect(screen.getByText('Línea telefónica de atención al público.')).toBeInTheDocument();
  });
});
