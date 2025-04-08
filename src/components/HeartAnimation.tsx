'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Heart {
  id: number;
  x: number;
  delay: number;
  duration: number;
  scale: number;
  rotation: number;
}

export default function HeartAnimation() {
  const { scrollDirection, scrollProgress } = useScrollAnimation();
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: 20 }, (_, i) => createHeart(i));
    setHearts(initialHearts);

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts(currentHearts => {
        const newHearts = currentHearts
          .filter(heart => heart.id < Date.now())
          .concat(createHeart(Date.now()));
        return newHearts.slice(-20);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function createHeart(id: number): Heart {
    return {
      id,
      x: Math.random() * window.innerWidth,
      delay: Math.random() * 2,
      duration: 15 + Math.random() * 10,
      scale: 0.4 + Math.random() * 0.6,
      rotation: Math.random() * 30 - 15,
    };
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{
              opacity: 0,
              x: heart.x,
              y: -50,
              rotate: heart.rotation,
              scale: heart.scale,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [heart.x, heart.x + Math.sin(heart.id) * 100],
              y: ['0vh', '100vh'],
              rotate: [heart.rotation, heart.rotation + 15],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              ease: 'linear',
            }}
            exit={{ opacity: 0 }}
            className="absolute"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-red-400 fill-current"
              style={{
                filter: `drop-shadow(0 0 2px rgba(255, 0, 0, 0.3))`,
              }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
} 