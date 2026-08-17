import { useCallback, useEffect, useRef, useState } from 'react';

const DEFAULT_INTERVAL_MS = 5500;

export interface UseHeroSliderResult {
  activeIndex: number;
  goTo: (index: number) => void;
  pause: () => void;
  resume: () => void;
}

export function useHeroSlider(
  slideCount: number,
  intervalMs: number = DEFAULT_INTERVAL_MS,
): UseHeroSliderResult {
  const [activeIndex, setActiveIndex] = useState(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    if (slideCount <= 1) return;

    const timer = window.setInterval(() => {
      if (isPausedRef.current) return;
      setActiveIndex((current) => (current + 1) % slideCount);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [slideCount, intervalMs]);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const pause = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const resume = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  return { activeIndex, goTo, pause, resume };
}
