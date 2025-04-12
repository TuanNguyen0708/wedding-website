"use client";

import { motion } from "framer-motion";
import Countdown from "./Countdown";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/bundle';

const slides = [
  {
    image: "/images/slider/hero-bg.jpg",
    alt: "Wedding background 1"
  },
  {
    image: "/images/slider/propose.jpg",
    alt: "Wedding background 2"
  },
  {
    image: "/images/slider/wedding.jpg",
    alt: "Wedding background 3"
  }
];

export default function Hero() {
  return (
    <section id="dashboard" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={3000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} style={{ width: '100%', height: '100%' }}>
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  width: '100%',
                  height: '100%'
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Overlay above slider */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <h2 className="text-lg sm:text-xl tracking-[0.2em] font-cinzel">THE WEDDING OF</h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl mb-10 border-y border-white/40 py-5 font-alex-brush animate-[fadeIn_1.5s_ease-in] font-greatVibes">Đình Tuấn & Thị Lý</h1>
        </motion.div>
        <Countdown />
      </div>
    </section>
  );
}
