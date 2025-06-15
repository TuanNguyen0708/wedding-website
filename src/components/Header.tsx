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
    { href: "#calendar", label: "Thư mời" },
    { href: "#details", label: "Thông Tin" },
    { href: "#gallery", label: "Ảnh Cưới" },
    { href: "#attendance", label: "Xác Nhận" },
    { href: "#guestbook", label: "Sổ Lưu bút" },
    { href: "#gift", label: "Mừng cưới" },
    { href: "#thanks", label: "Lời cảm ơn" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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
              className={`text-2xl font-dancing-script font-bold ${
                scrollY > 50 ? "text-pink-500" : "text-white"
              } hover:text-pink-500 transition-colors duration-300`}
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
                  className={`text-lg font-medium transition-colors font-dancing-script ${
                    scrollY > 50
                      ? "text-gray-900 hover:text-pink-500"
                      : "text-white hover:text-pink-500"
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
              } hover:text-pink-500 transition-colors duration-300`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
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
          {isOpen && (
            <div
              className={`md:hidden absolute left-0 right-0 ${
                scrollY > 50 ? "bg-white" : "bg-black/40 backdrop-blur-sm"
              }`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-3 py-2 rounded-md text-base font-dancing-script ${
                      scrollY > 50
                        ? "text-gray-900 hover:text-pink-500"
                        : "text-white hover:text-pink-500"
                    } transition-colors duration-300`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.header>
    </>
  );
}
