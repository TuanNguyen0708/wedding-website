'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const events = [
  {
    title: 'Lễ Thành Hôn',
    date: '06/07/2025',
    time: '10:00 AM',
    location: 'Nhà Trai',
    address: 'Thôn Trung Phú 1, Phường Điện Minh, Thị Xã Điện Bàn, Tỉnh Quảng Nam',
    description: 'Chúng tôi sẽ tổ chức lễ thành hôn tại nhà trai',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d959.3592949726841!2d108.25823126962045!3d15.886151288932771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1svi!2s!4v1744119410725!5m2!1svi!2s',
  },
  {
    title: 'Tiệc Cưới',
    date: '06/07/2025',
    time: '12:00 PM',
    location: 'Nhà Hàng Tiệc Cưới Happy Palace',
    address: 'Đường Phan Khôi, TT. Vĩnh Điện, Thị Xã Điện Bàn, Tỉnh Quảng Nam',
    description: 'Tiệc cưới sẽ được tổ chức tại Nhà Hàng Tiệc Cưới Happy Palace',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.403683055102!2d108.24017289013838!3d15.893076186827377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420f88809385b7%3A0xa61a7c04590ced3d!2zTmjDoCBIw6BuZyBUaeG7h2MgQ8aw4bubaSBIYXBweSBQYWxhY2U!5e0!3m2!1svi!2s!4v1744119105664!5m2!1svi!2s',
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
          <h2 className="font-great-vibes text-4xl md:text-5xl font-bold text-gray-900 mb-4">
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