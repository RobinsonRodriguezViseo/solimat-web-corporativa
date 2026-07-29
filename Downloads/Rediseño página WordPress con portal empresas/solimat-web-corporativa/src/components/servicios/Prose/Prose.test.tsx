import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Prose from './Prose';

describe('Prose', () => {
  it('renders its children', () => {
    render(
      <Prose>
        <p>Los pilares de nuestro Modelo Asistencial son:</p>
      </Prose>,
    );

    expect(screen.getByText('Los pilares de nuestro Modelo Asistencial son:')).toBeInTheDocument();
  });
});
