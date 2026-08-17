import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TeamCard from './TeamCard';

describe('TeamCard', () => {
  it('renders the category badge, the title, every paragraph and the image', () => {
    render(
      <TeamCard
        id="medicos"
        category="sanitario"
        title="Médicos/as"
        paragraphs={['Primer párrafo', 'Segundo párrafo']}
        image="medicos.jpg"
        imageAlt="Médicos/as"
        imagePosition="right"
        imageMinHeight={340}
      />,
    );

    expect(screen.getByText('Sanitario')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Médicos/as', level: 3 })).toBeInTheDocument();
    expect(screen.getByText('Primer párrafo')).toBeInTheDocument();
    expect(screen.getByText('Segundo párrafo')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Médicos/as' })).toHaveAttribute('src', 'medicos.jpg');
  });

  it('renders the footer content when provided', () => {
    render(
      <TeamCard
        id="gestores"
        category="gestion"
        title="Gestores"
        paragraphs={['Texto']}
        image="gestores.jpg"
        imageAlt="Gestores"
        imagePosition="left"
        imageMinHeight={300}
        footer={<p>Funciones del gestor</p>}
      />,
    );

    expect(screen.getByText('Gestión')).toBeInTheDocument();
    expect(screen.getByText('Funciones del gestor')).toBeInTheDocument();
  });
});
