import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import DownloadGrid from './DownloadGrid';

describe('DownloadGrid', () => {
  it('renders a titled group with one link per item', () => {
    render(
      <DownloadGrid
        id="gestion-prevencion"
        title="Gestión de la Prevención"
        items={[
          { label: 'Integración de la Prevención', href: '/integracion.pdf' },
          { label: 'Recurso Preventivo', href: '/recurso.pdf' },
        ]}
      />,
    );

    expect(screen.getByRole('heading', { name: 'Gestión de la Prevención', level: 3 })).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});
