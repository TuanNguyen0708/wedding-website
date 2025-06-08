'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "@/components/SectionTitle";

const CoupleSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mb-2 md:mb-3 lg:mb-4 mx-auto px-4 text-center">
        <SectionTitle title="Cặp Đôi" subtitle="Thông tin cặp đôi"/>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >

          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* Groom Card */}
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-4xl transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-dancing-script text-gray-800 mb-4">
                Chú Rể
              </h3>
              <div className="relative w-64 h-80 mx-auto mb-4  overflow-hidden border-4 border-pink-200">
                <Image
                  src="/images/couple/1.jpg" // Placeholder image
                  alt="Chú Rể"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-xl font-dancing-script text-gray-700">Nguyễn Đình Tuấn</p>
            </div>

            {/* Heart Image */}
            <div className="w-48 h-48 transform ">
            <Image
                  src="/images/couple/heart.jpg" // Placeholder image
                  alt="Cô Dâu"
                  layout="fill"
                  objectFit="cover"
                />
            </div>

            {/* Bride Card */}
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-4xl transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-dancing-script text-gray-800 mb-4">
                Cô Dâu
              </h3>
              <div className="relative w-64 h-80 mx-auto mb-4 overflow-hidden border-4 border-pink-200">
                <Image
                  src="/images/couple/2.jpg" // Placeholder image
                  alt="Cô Dâu"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-xl font-dancing-script text-gray-700">Nguyễn Thị Lý</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection; 