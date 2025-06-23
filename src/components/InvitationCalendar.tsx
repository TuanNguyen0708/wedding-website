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
    <section id="calendar" className="pt-12 md:pt-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <SectionTitle 
          title="Thư Mời"
          subtitle="Tham dự Lễ Cưới Của Tuấn & Lý"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center px-4">
              <p className="text-base md:text-xl text-gray-700 mb-1">VÀO LÚC</p>
              <p className="text-2xl md:text-4xl text-red-800 font-bold">11:00</p>
            </div>
            <div className="h-16 md:h-20 w-px bg-gray-300 mx-4"></div> {/* Vertical separator */}
            <div className="flex flex-col items-center px-4">
              <p className="text-base md:text-xl text-gray-700 mb-1">CHỦ NHẬT</p>
              <p className="text-2xl md:text-4xl text-red-800 font-bold">06.07.2025</p>
            </div>
          </div>

          {/* Lunar Date */}
          <p className="text-sm md:text-md text-gray-500 mb-5 md:mb-0">
            (Nhằm Ngày 12 Tháng 06 Năm Ất Tỵ)
          </p>

          {/* Calendar Grid */}
          <div className="w-full">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/calendar/calendar1.jpg"
                alt="Calendar"
                fill
                className="object-contain hidden md:block"
                priority
              />
              <Image
                src="/images/calendar/calendar2-1.svg"
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
