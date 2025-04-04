'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  scale: number;
  rotation: number;
}

export default function FlowerAnimation() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Create initial petals
    const initialPetals = Array.from({ length: 30 }, (_, i) => createPetal(i));
    setPetals(initialPetals);

    // Add new petals periodically
    const interval = setInterval(() => {
      setPetals(currentPetals => {
        const newPetals = currentPetals
          .filter(petal => petal.id < Date.now()) // Remove old petals
          .concat(createPetal(Date.now())); // Add new petal
        return newPetals.slice(-30); // Keep max 30 petals
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  function createPetal(id: number): Petal {
    return {
      id,
      x: Math.random() * window.innerWidth,
      delay: Math.random() * 2,
      duration: 10 + Math.random() * 15,
      scale: 0.3 + Math.random() * 0.7,
      rotation: Math.random() * 360,
    };
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {petals.map(petal => (
          <motion.div
            key={petal.id}
            initial={{
              opacity: 0,
              x: petal.x,
              y: -50,
              rotate: petal.rotation,
              scale: petal.scale,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [petal.x, petal.x + Math.sin(petal.id) * 200],
              y: ['0vh', '100vh'],
              rotate: [petal.rotation, petal.rotation + 360],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              ease: 'linear',
            }}
            exit={{ opacity: 0 }}
            className="absolute"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="text-pink-200 fill-current"
            >
              <path d="M10 0C7.35 0 5.2 2.15 5.2 4.8c0 1.45.65 2.75 1.65 3.65-1 .9-1.65 2.2-1.65 3.65C5.2 14.75 7.35 16.9 10 16.9s4.8-2.15 4.8-4.8c0-1.45-.65-2.75-1.65-3.65 1-.9 1.65-2.2 1.65-3.65C14.8 2.15 12.65 0 10 0zm0 2.4c1.35 0 2.4 1.05 2.4 2.4s-1.05 2.4-2.4 2.4-2.4-1.05-2.4-2.4 1.05-2.4 2.4-2.4zm0 7.2c1.35 0 2.4 1.05 2.4 2.4s-1.05 2.4-2.4 2.4-2.4-1.05-2.4-2.4 1.05-2.4 2.4-2.4z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
} 