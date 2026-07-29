import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { INFORMES_POR_ANIO } from '../../../data/informes';
import ReportsByYear from './ReportsByYear';

describe('ReportsByYear', () => {
  it('renders a group per year with its reports', () => {
    render(<ReportsByYear grupos={INFORMES_POR_ANIO} />);

    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(6);
  });

  it('points every report at a local bundled PDF, never the old WordPress', () => {
    render(<ReportsByYear grupos={INFORMES_POR_ANIO} />);

    screen.getAllByRole('link').forEach((link) => {
      expect(link.getAttribute('href')).not.toMatch(/azurefd\.net/);
      expect(link).toHaveAttribute('target', '_blank');
    });
  });
});
