"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "./SectionTitle";

const images = [
  {
    src: "/images/gallery/1.jpg",
    alt: "Our first date",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/2.jpg",
    alt: "Our first trip together",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/3.jpg",
    alt: "Our engagement",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "Our favorite place",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "Our first home",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/6.jpg",
    alt: "Our proposal",
    width: 600,
    height: 800,
  },
];

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { scrollDirection } = useScrollAnimation();

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Khoảnh Khắc Của Chúng Tôi"
          subtitle="Những khoảnh khắc đáng nhớ trong hành trình yêu thương"
        />

        <div className="columns-2 md:columns-2 lg:columns-3 gap-2 md:gap-3 lg:gap-4">
          {images.map((image, index) => (
            <GalleryItem
              key={index}
              image={image}
              index={index}
              scrollDirection={scrollDirection}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full h-full"
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

function GalleryItem({
  image,
  index,
  scrollDirection,
  onClick,
}: {
  image: GalleryImage;
  index: number;
  scrollDirection: "up" | "down";
  onClick: () => void;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const initialY = 50;
  const animateY = scrollDirection === "down" ? 0 : initialY;

  // Calculate row span based on image aspect ratio
  const isWide = image.width / image.height > 1.5; // 16:9 is wider than 4:3
  const aspectRatio = isWide ? 'aspect-[16/9]' : 'aspect-[4/3]';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY }}
      animate={inView ? { opacity: 1, y: animateY } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative ${aspectRatio} mb-2 md:mb-3 lg:mb-4 overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity`}
      onClick={onClick}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
      />
    </motion.div>
  );
}
