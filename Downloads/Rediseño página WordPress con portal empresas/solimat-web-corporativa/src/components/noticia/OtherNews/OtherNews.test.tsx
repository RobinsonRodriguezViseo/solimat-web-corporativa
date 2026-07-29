import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { noticias } from '../../../data/noticias';
import OtherNews from './OtherNews';

describe('OtherNews', () => {
  it('renders the heading and one card per noticia', () => {
    render(
      <MemoryRouter>
        <OtherNews noticias={noticias.slice(1, 4)} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Otras noticias' })).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  it('renders nothing when there are no related noticias', () => {
    const { container } = render(
      <MemoryRouter>
        <OtherNews noticias={[]} />
      </MemoryRouter>,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
