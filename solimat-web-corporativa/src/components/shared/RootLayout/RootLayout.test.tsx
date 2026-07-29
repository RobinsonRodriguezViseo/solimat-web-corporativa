import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import RootLayout from './RootLayout';

describe('RootLayout', () => {
  it('renders TopBar, Header, Footer and the routed page content', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<div>Contenido de la página</div>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText('Urgencias 24h')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Solimat' })).toBeInTheDocument();
    expect(screen.getByText('Contenido de la página')).toBeInTheDocument();
    expect(screen.getByText(/Sede Central/)).toBeInTheDocument();
  });
});
