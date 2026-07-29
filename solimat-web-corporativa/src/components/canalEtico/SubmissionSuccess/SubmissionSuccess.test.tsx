import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SubmissionSuccess from './SubmissionSuccess';

describe('SubmissionSuccess', () => {
  it('announces the confirmation message', () => {
    render(<SubmissionSuccess />);

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Comunicación enviada' })).toBeInTheDocument();
    expect(
      screen.getByText('Gracias por tu comunicación. Recibirás un acuse de recibo en un plazo máximo de siete días.'),
    ).toBeInTheDocument();
  });
});
