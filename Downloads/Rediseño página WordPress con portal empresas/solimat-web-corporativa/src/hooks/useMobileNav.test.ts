import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useMobileNav } from './useMobileNav';

describe('useMobileNav', () => {
  it('starts closed and toggles open/closed', () => {
    const { result } = renderHook(() => useMobileNav());
    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('open() and close() set the state explicitly', () => {
    const { result } = renderHook(() => useMobileNav());

    act(() => {
      result.current.open();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.close();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('closes when Escape is pressed while open', () => {
    const { result } = renderHook(() => useMobileNav());

    act(() => {
      result.current.open();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    });
    expect(result.current.isOpen).toBe(false);
  });
});
