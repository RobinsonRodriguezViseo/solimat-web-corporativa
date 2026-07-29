import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SectionLabel from './SectionLabel';

describe('SectionLabel', () => {
  it('renders its label text', () => {
    render(<SectionLabel>¿Qué hace Solimat por ti?</SectionLabel>);

    expect(screen.getByText('¿Qué hace Solimat por ti?')).toBeInTheDocument();
  });
});
