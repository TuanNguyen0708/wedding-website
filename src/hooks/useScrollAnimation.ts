import { useState, useEffect, useCallback } from 'react';

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollDirection = useCallback(() => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > scrollY ? 'down' : 'up';
    
    // Calculate scroll progress (0 to 1)
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = currentScrollY / maxScroll;
    
    setScrollDirection(direction);
    setScrollY(currentScrollY);
    setScrollProgress(progress);
  }, [scrollY]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollDirection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial calculation
    updateScrollDirection();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [updateScrollDirection]);

  return { 
    scrollY, 
    scrollDirection,
    scrollProgress,
    isScrollingUp: scrollDirection === 'up',
    isScrollingDown: scrollDirection === 'down'
  };
} 