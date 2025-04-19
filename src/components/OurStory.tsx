"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";

interface TimelineItem {
  title: string;
  description: string;
  image: string;
}

const timeline: TimelineItem[] = [
  {
    title: "Tình Yêu Đầu Tiên",
    description:
      "Từ cái nhìn đầu tiên, chúng tôi đã biết rằng đây là mối tình đặc biệt. Những khoảnh khắc đầu tiên bên nhau luôn là những kỷ niệm đẹp nhất.",
    image: "/images/timeline/meet.jpg",
  },
  {
    title: "Hạnh Phúc Bên Nhau",
    description:
      "Mỗi ngày bên nhau là một ngày hạnh phúc. Chúng tôi học cách thấu hiểu, chia sẻ và yêu thương nhau nhiều hơn.",
    image: "/images/timeline/date.jpg",
  },
  {
    title: "Lời Hứa Trọn Đời",
    description:
      "Chúng tôi hứa sẽ luôn bên nhau, cùng nhau vượt qua mọi khó khăn, cùng nhau xây dựng tổ ấm hạnh phúc.",
    image: "/images/timeline/propose.jpg",
  },
  {
    title: "Tương Lai Tươi Sáng",
    description:
      "Chúng tôi tin rằng tình yêu của mình sẽ mãi bền vững, cùng nhau viết tiếp những trang mới của cuộc đời.",
    image: "/images/timeline/wedding.jpg",
  },
];

export default function OurStory() {
  const { scrollDirection } = useScrollAnimation();

  return (
    <section id="story" className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Câu Chuyện Của Chúng Tôi"
          subtitle="Hành trình yêu thương của chúng tôi"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-16">
            {timeline.map((item, index) => (
              <TimelineItemComponent key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
}

function TimelineItemComponent({ item, index }: TimelineItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;
  const initialX = isEven ? 100 : -100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative w-full flex flex-col md:flex-row items-center px-4 md:px-0"
    >
      {/* Image container */}
      <div
        className={`w-full max-w-md mx-auto md:w-1/2 ${
          isEven ? "md:order-1 md:pr-8" : "md:order-2 md:pl-8"
        }`}
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform-gpu hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative h-56 md:h-64">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </motion.div>
      </div>

      {/* Text container */}
      <div
        className={`w-full max-w-md mx-auto md:w-1/2 ${
          isEven ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8"
        }`}
      >
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-dancing-script">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base font-dancing-script">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
