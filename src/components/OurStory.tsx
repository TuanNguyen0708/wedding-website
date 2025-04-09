'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const timeline = [
  {
    date: '01/01/2020',
    title: 'Gặp Gỡ',
    description: 'Chúng tôi gặp nhau lần đầu tiên tại một buổi họp mặt bạn bè.',
    image: '/images/timeline/meet.jpg',
  },
  {
    date: '15/06/2020',
    title: 'Hẹn Hò',
    description: 'Chúng tôi bắt đầu hẹn hò và khám phá những điểm chung.',
    image: '/images/timeline/date.jpg',
  },
  {
    date: '20/12/2021',
    title: 'Cầu Hôn',
    description: 'Anh ấy đã cầu hôn tôi tại bãi biển vào một buổi tối đẹp trời.',
    image: '/images/timeline/propose.jpg',
  },
  {
    date: '15/12/2024',
    title: 'Đám Cưới',
    description: 'Ngày trọng đại của chúng tôi sẽ diễn ra vào tháng 12 năm 2024.',
    image: '/images/timeline/wedding.jpg',
  },
];

export default function OurStory() {
  const { scrollDirection } = useScrollAnimation();

  return (
    <section id="story" className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Câu Chuyện Của Chúng Tôi
          </h2>
          <p className="font-cormorant text-lg md:text-xl text-gray-600">
            Hành trình yêu thương của chúng tôi
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-16">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                scrollDirection={scrollDirection}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index, scrollDirection }: { 
  item: any; 
  index: number;
  scrollDirection: 'up' | 'down';
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;
  const initialX = isEven ? 100 : -100;
  const animateX = scrollDirection === 'down' ? 0 : initialX;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative w-full"
    >
      <div className={`w-full md:w-5/12 ${isEven ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}`}>
        <motion.div 
          className="bg-white rounded-lg shadow-lg overflow-hidden transform-gpu hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative h-48 md:h-64">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <div className="p-4 md:p-6">
            <p className="text-sm text-gray-500 mb-2">{item.date}</p>
            <h3 className="font-playfair text-lg md:text-2xl font-bold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 