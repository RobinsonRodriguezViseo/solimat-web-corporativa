import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SplitPanel from './SplitPanel';

describe('SplitPanel', () => {
  it('renders the image and the content side by side', () => {
    render(
      <SplitPanel image="/prevencion-10.jpg" imageAlt="Prevención 10">
        <p>Es un servicio público de asesoramiento.</p>
      </SplitPanel>,
    );

    expect(screen.getByRole('img', { name: 'Prevención 10' })).toHaveAttribute('src', '/prevencion-10.jpg');
    expect(screen.getByText('Es un servicio público de asesoramiento.')).toBeInTheDocument();
  });
});
