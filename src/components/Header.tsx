"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScrollAnimation();
  const { scrollToSection } = useSmoothScroll();

  const navItems = [
    { href: "#dashboard", label: "Trang Chủ" },
    { href: "#story", label: "Câu Chuyện" },
    { href: "#details", label: "Thông Tin" },
    { href: "#gallery", label: "Ảnh Cưới" },
    { href: "#attendance", label: "Xác Nhận" },
    { href: "#guestbook", label: "Lời chúc" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-colors duration-300 ${
          scrollY > 50 ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "#dashboard")}
              className={`text-2xl font-great-vibes font-bold ${
                scrollY > 50 ? "text-pink-500" : "text-white"
              }`}
            >
              T & L
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-lg font-medium transition-colors font-great-vibes ${
                    scrollY > 50
                      ? "text-gray-900 hover:text-pink-500"
                      : "text-white hover:text-primary-200"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Navigation Button */}
            <button
              className={`md:hidden ${
                scrollY > 50 ? "text-gray-900" : "text-white"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={
              isOpen
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            transition={{ duration: 0.3 }}
            className={`md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
          >
            <div className={`px-2 pt-2 pb-3 space-y-1 ${
              scrollY > 50 ? 'bg-white' : 'bg-black/40 backdrop-blur-sm'
            }`}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-3 py-2 rounded-md text-base font-great-vibes ${
                    scrollY > 50 
                      ? 'text-gray-900 hover:text-pink-500' 
                      : 'text-white hover:text-primary-200'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
}
