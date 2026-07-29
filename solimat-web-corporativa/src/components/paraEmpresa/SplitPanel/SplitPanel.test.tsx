import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SplitPanel from './SplitPanel';

describe('SplitPanel', () => {
  it('renders the image and the content side by side', () => {
    render(
      <SplitPanel image="/botiquin.jpg" imageAlt="Botiquín">
        <p>Solicita tu botiquín</p>
      </SplitPanel>,
    );

    expect(screen.getByRole('img', { name: 'Botiquín' })).toHaveAttribute('src', '/botiquin.jpg');
    expect(screen.getByText('Solicita tu botiquín')).toBeInTheDocument();
  });
});
