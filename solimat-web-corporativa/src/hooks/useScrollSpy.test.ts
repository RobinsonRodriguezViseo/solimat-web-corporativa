import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useScrollSpy } from './useScrollSpy';

type ObserverCallback = (entries: Array<{ isIntersecting: boolean; target: { id: string } }>) => void;

let latestCallback: ObserverCallback | null = null;
const observe = vi.fn();
const disconnect = vi.fn();

class MockIntersectionObserver {
  constructor(callback: ObserverCallback) {
    latestCallback = callback;
  }
  observe = observe;
  disconnect = disconnect;
  unobserve = vi.fn();
  takeRecords = vi.fn();
}

describe('useScrollSpy', () => {
  beforeEach(() => {
    latestCallback = null;
    observe.mockClear();
    disconnect.mockClear();
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

    document.body.innerHTML = `
      <section id="las-mutuas"></section>
      <section id="nuestra-historia"></section>
    `;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    document.body.innerHTML = '';
  });

  it('defaults to the first section and observes every section element', () => {
    const { result } = renderHook(() => useScrollSpy(['las-mutuas', 'nuestra-historia']));

    expect(result.current).toBe('las-mutuas');
    expect(observe).toHaveBeenCalledTimes(2);
  });

  it('disconnects the observer on unmount', () => {
    const { unmount } = renderHook(() => useScrollSpy(['las-mutuas', 'nuestra-historia']));

    unmount();
    expect(disconnect).toHaveBeenCalled();
  });

  it('exposes the intersecting section as active', () => {
    const { result } = renderHook(() => useScrollSpy(['las-mutuas', 'nuestra-historia']));

    expect(latestCallback).not.toBeNull();
    expect(result.current).toBe('las-mutuas');
  });
});
