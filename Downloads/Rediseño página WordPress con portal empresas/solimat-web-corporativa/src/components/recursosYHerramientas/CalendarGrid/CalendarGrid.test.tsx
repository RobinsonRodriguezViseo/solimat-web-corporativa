import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CALENDARIOS_LABORALES_2026 } from '../../../data/recursos';
import CalendarGrid from './CalendarGrid';

describe('CalendarGrid', () => {
  it('renders one link per calendar', () => {
    render(<CalendarGrid calendarios={CALENDARIOS_LABORALES_2026} />);

    expect(screen.getAllByRole('link')).toHaveLength(CALENDARIOS_LABORALES_2026.length);
    expect(screen.getByRole('link', { name: 'Calendario laboral Castilla-La Mancha' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Calendario laboral general/nacional' })).toBeInTheDocument();
  });

  it('points every calendar at a local bundled PDF, never the old WordPress', () => {
    render(<CalendarGrid calendarios={CALENDARIOS_LABORALES_2026} />);

    screen.getAllByRole('link').forEach((link) => {
      const href = link.getAttribute('href');
      expect(href).not.toMatch(/azurefd\.net/);
      expect(href).toMatch(/\.pdf/);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
