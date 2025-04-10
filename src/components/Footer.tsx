"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY } = useScrollAnimation();

  useEffect(() => {
    setShowBackToTop(scrollY > 300);
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-transparent text-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-white/80">
            &copy; 2024 Đình Tuấn & Thị Lý. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-pink-600 text-white p-3 rounded-full shadow-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 z-50"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
}
