import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PageIndex from './PageIndex';

const items = [
  { id: 'el-canal', label: 'El Canal', level: 'main' as const },
  { id: 'introduccion', label: 'Introducción', level: 'sub' as const },
];

describe('PageIndex', () => {
  it('renders an anchor per entry pointing to its hash', () => {
    render(<PageIndex items={items} activeId="el-canal" />);

    expect(screen.getByRole('link', { name: 'El Canal' })).toHaveAttribute('href', '#el-canal');
    expect(screen.getByRole('link', { name: 'Introducción' })).toHaveAttribute('href', '#introduccion');
  });

  it('marks only the active entry with aria-current', () => {
    render(<PageIndex items={items} activeId="introduccion" />);

    expect(screen.getByRole('link', { name: 'Introducción' })).toHaveAttribute('aria-current', 'true');
    expect(screen.getByRole('link', { name: 'El Canal' })).not.toHaveAttribute('aria-current');
  });
});
