import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useHeroSlider } from './useHeroSlider';

describe('useHeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts at index 0 and advances automatically on an interval', () => {
    const { result } = renderHook(() => useHeroSlider(3, 1000));
    expect(result.current.activeIndex).toBe(0);

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current.activeIndex).toBe(1);

    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(result.current.activeIndex).toBe(0);
  });

  it('lets goTo jump directly to a slide', () => {
    const { result } = renderHook(() => useHeroSlider(5, 1000));

    act(() => {
      result.current.goTo(3);
    });
    expect(result.current.activeIndex).toBe(3);
  });

  it('stops advancing while paused and resumes afterwards', () => {
    const { result } = renderHook(() => useHeroSlider(3, 1000));

    act(() => {
      result.current.pause();
      vi.advanceTimersByTime(3000);
    });
    expect(result.current.activeIndex).toBe(0);

    act(() => {
      result.current.resume();
      vi.advanceTimersByTime(1000);
    });
    expect(result.current.activeIndex).toBe(1);
  });
});
