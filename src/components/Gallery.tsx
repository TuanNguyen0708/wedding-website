"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionTitle from "./SectionTitle";

const images = [
  {
    src: "/images/gallery/8.jpg",
    alt: "gallery",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/1.jpg",
    alt: "gallery",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/2.jpg",
    alt: "gallery",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "gallery",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "gallery",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/6.jpg",
    alt: "gallery",
    width: 600,
    height: 800,
  },
    
  {
    src: "/images/gallery/3.jpg",
    alt: "gallery",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/13.jpg",
    alt: "gallery",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/9.jpg",
    alt: "gallery",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/10.jpg",
    alt: "gallery",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/11.jpg",
    alt: "gallery",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/12.jpg",
    alt: "gallery",
    width: 600,
    height: 800,
  },

  {
    src: "/images/gallery/7.jpg",
    alt: "gallery",
    width: 800,
    height: 600,
  },
  {
    src: "/images/gallery/15.jpg",
    alt: "gallery",
    width: 800,
    height: 600,
  },
  
  {
    src: "/images/gallery/14.jpg",
    alt: "gallery",
    width: 600,
    height: 800,
  },
  
  {
    src: "/images/gallery/17.jpg",
    alt: "gallery",
    width: 800,
    height: 600,
  },

  {
    src: "/images/gallery/18.jpg",
    alt: "gallery",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/16.jpg",
    alt: "gallery",
    width: 600,
    height: 800,
  },
  {
    src: "/images/gallery/19.jpg",
    alt: "gallery",
    width: 800,
    height: 600,
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
          title="Khoảnh Khắc Của Chúng Mình"
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY }}
      animate={inView ? { opacity: 1, y: animateY } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative mb-2 md:mb-3 lg:mb-4 overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity break-inside-avoid"
      onClick={onClick}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="w-full h-auto object-cover"
      />
    </motion.div>
  );
}
