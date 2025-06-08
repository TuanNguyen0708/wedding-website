'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";

const InvitationCalendar: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="calendar" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <SectionTitle 
          title="Tiệc Mừng Lễ Vu Quy"
          subtitle="Chúng mình rất mong được gặp bạn trong ngày trọng đại"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl text-gray-600 mb-2 font-dancing-script">Chủ Nhật</p>
          {/* Date */}
          <div className="flex justify-center items-center text-2xl mb-2 gap-2 font-dancing-script">
            <span className="text-gray-600">Ngày 6</span>
            <span className="text-gray-600">Tháng 7</span>
            <span className="text-gray-600">2025</span>
          </div>

          {/* Lunar Date */}
          <p className="text-md text-gray-500 mb-12 font-dancing-script">
            (Tức Ngày 16 Tháng 10 Năm Giáp Thìn)
          </p>

          {/* Calendar Grid */}
          <div className="w-full">
            <div className="relative w-full h-[600px]">
              <Image
                src="/images/calendar/calendar1.jpg"
                alt="Calendar"
                fill
                className="object-contain hidden md:block"
                priority
              />
              <Image
                src="/images/calendar/calendar2.jpg"
                alt="Calendar"
                fill
                className="object-contain md:hidden"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationCalendar;
