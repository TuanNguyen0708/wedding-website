'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const events = [
  {
    title: 'Lễ Thành Hôn',
    date: '15/12/2024',
    time: '10:00 AM',
    location: 'Nhà thờ Đức Bà Sài Gòn',
    address: '01 Công xã Paris, Bến Nghé, Quận 1, TP.HCM',
    description: 'Chúng tôi sẽ tổ chức lễ thành hôn tại nhà thờ Đức Bà Sài Gòn, nơi chúng tôi đã gặp nhau lần đầu tiên.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424314981505!2d106.6999929!3d10.7797385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b7b1d3c3d%3A0x2c1c3e1e3e3e3e3e!2sNh%C3%A0%20th%E1%BB%9D%20%C4%90%E1%BB%A9c%20B%C3%A0%20S%C3%A0i%20G%C3%B2n!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s',
  },
  {
    title: 'Tiệc Cưới',
    date: '15/12/2024',
    time: '6:00 PM',
    location: 'Khách sạn Rex',
    address: '141 Nguyễn Huệ, Bến Nghé, Quận 1, TP.HCM',
    description: 'Tiệc cưới sẽ được tổ chức tại khách sạn Rex với không gian sang trọng và ấm cúng.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424314981505!2d106.6999929!3d10.7797385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b7b1d3c3d%3A0x2c1c3e1e3e3e3e3e!2sKh%C3%A1ch%20s%E1%BA%A1n%20Rex!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s',
  },
];

export default function WeddingDetails() {
  const { scrollDirection } = useScrollAnimation();

  return (
    <section id="details" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thông Tin Lễ Cưới
          </h2>
          <p className="font-cormorant text-xl text-gray-600">
            Chúng tôi rất mong được gặp bạn trong ngày trọng đại
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              index={index}
              scrollDirection={scrollDirection}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index, scrollDirection }: { 
  event: any; 
  index: number;
  scrollDirection: 'up' | 'down';
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
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
          {event.title}
        </h3>
        <div className="space-y-4">
          <div className="flex items-center text-gray-600">
            <FaCalendarAlt className="mr-3 text-primary-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaClock className="mr-3 text-primary-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-3 text-primary-500" />
            <span>{event.location}</span>
          </div>
          <p className="text-gray-600 mt-4">{event.description}</p>
        </div>
      </div>
      <div className="h-64">
        <iframe
          src={event.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.div>
  );
} 