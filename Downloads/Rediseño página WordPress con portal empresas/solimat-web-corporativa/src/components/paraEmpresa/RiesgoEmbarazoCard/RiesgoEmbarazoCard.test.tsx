import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RiesgoEmbarazoCard from './RiesgoEmbarazoCard';

describe('RiesgoEmbarazoCard', () => {
  it('renders the heading and the employer duties blocks', () => {
    render(<RiesgoEmbarazoCard />);

    expect(
      screen.getByRole('heading', { name: 'Riesgo durante el embarazo y/o lactancia natural', level: 3 }),
    ).toBeInTheDocument();
    expect(screen.getByText('Cometidos de la empresa')).toBeInTheDocument();
    expect(screen.getByText('Beneficios para la empresa')).toBeInTheDocument();
  });

  it('keeps the required paperwork copy even though the downloads are unavailable', () => {
    render(<RiesgoEmbarazoCard />);

    expect(screen.getByText(/declaración empresarial sobre descripción y exposición REL/)).toBeInTheDocument();
    expect(screen.getByText(/certificado de empresa de datos económicos/)).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
