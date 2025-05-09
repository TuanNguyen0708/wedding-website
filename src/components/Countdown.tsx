'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeUnit {
  value: number;
  label: string;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [_, setPrevTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-07-06T07:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setPrevTime(timeLeft);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const timeUnits: TimeUnit[] = [
    { value: timeLeft.days, label: 'NGÀY' },
    { value: timeLeft.hours, label: 'GIỜ' },
    { value: timeLeft.minutes, label: 'PHÚT' },
    { value: timeLeft.seconds, label: 'GIÂY' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-2xl mx-auto px-4"
    >
      <div className="grid grid-cols-4 gap-4 sm:gap-6">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="relative bg-black/40  rounded-sm aspect-square w-full max-w-[100px] sm:max-w-[120px] mx-auto mb-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={unit.value}
                  initial={{ rotateX: -90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  exit={{ rotateX: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    {unit.value.toString().padStart(2, '0')}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="text-sm sm:text-base tracking-wider text-white font-light">{unit.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 