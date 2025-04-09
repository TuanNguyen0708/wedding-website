"use client";

import { motion } from "framer-motion";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section id="dashboard" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/hero-bg.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <h2 className="text-lg sm:text-xl tracking-[0.2em] font-light">THE WEDDING OF</h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl mb-10 border-y border-white/40 py-5 animate-[fadeIn_1.5s_ease-in]">Đình Tuấn & Thị Lý</h1>
        </motion.div>
        <Countdown />
      </div>
    </section>
  );
}
