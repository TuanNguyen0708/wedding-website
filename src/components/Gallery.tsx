'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const images = [
  {
    src: '/wedding-website/images/gallery/1.jpg',
    alt: 'Our first date',
    width: 800,
    height: 600,
  },
  {
    src: '/wedding-website/images/gallery/2.jpg',
    alt: 'Our first trip together',
    width: 600,
    height: 800,
  },
  {
    src: '/wedding-website/images/gallery/3.jpg',
    alt: 'Our engagement',
    width: 800,
    height: 600,
  },
  {
    src: '/wedding-website/images/gallery/4.jpg',
    alt: 'Our favorite place',
    width: 600,
    height: 800,
  },
  {
    src: '/wedding-website/images/gallery/5.jpg',
    alt: 'Our first home',
    width: 800,
    height: 600,
  },
  {
    src: '/wedding-website/images/gallery/6.jpg',
    alt: 'Our proposal',
    width: 600,
    height: 800,
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { scrollDirection } = useScrollAnimation();

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Khoảnh Khắc Của Chúng Tôi
          </h2>
          <p className="font-cormorant text-xl text-gray-600">
            Những khoảnh khắc đáng nhớ trong hành trình yêu thương
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

function GalleryItem({ image, index, scrollDirection, onClick }: { 
  image: any; 
  index: number;
  scrollDirection: 'up' | 'down';
  onClick: () => void;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const initialY = 50;
  const animateY = scrollDirection === 'down' ? 0 : initialY;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY }}
      animate={inView ? { opacity: 1, y: animateY } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
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