"use client";

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
    title: "Lần Đầu Gặp Nhau",
    description:
      "Ngay từ lần đầu gặp, chúng mình đã cảm thấy có điều gì đó rất đặc biệt. Những ngày đầu tiên luôn đầy bỡ ngỡ nhưng cũng rất đáng nhớ.",
    image: "/images/timeline/1.jpg",
  },
  {
    title: "Những Điều Nhỏ Bé",
    description:
      "Từ ly cà phê buổi sáng, chiếc ô khi trời mưa, đến những cái ôm bất chợt – những điều nhỏ ấy tạo nên cả một hành trình đầy ý nghĩa.",
    image: "/images/timeline/2.jpg",
  },
  {
    title: "Những Ngày Bình Yên",
    description:
      "Cùng nhau trải qua từng ngày bình dị – những bữa ăn đơn giản, những buổi tối trò chuyện – chính là điều khiến chúng mình thêm gắn bó.",
    image: "/images/timeline/3.jpg",
  },
  {
    title: "Cùng Nhau Trưởng Thành",
    description:
      "Chúng mình học cách lắng nghe, chia sẻ và đồng hành qua những thay đổi trong cuộc sống. Không phải lúc nào cũng dễ dàng, nhưng luôn có nhau.",
    image: "/images/timeline/4.jpg",
  },
  {
    title: "Nhìn Về Phía Trước",
    description:
      "Chúng mình tin rằng tương lai sẽ còn nhiều điều đẹp đẽ đang chờ, miễn là cùng nhau bước tiếp, dù chậm rãi hay nhanh chóng.",
    image: "/images/timeline/5.jpg",
  },
  {
    title: "Viết Tiếp Câu Chuyện",
    description:
      "Không cần gì lớn lao, chỉ cần mỗi ngày vẫn chọn ở lại bên nhau – đó là cách chúng mình viết tiếp câu chuyện của mình.",
    image: "/images/timeline/6.jpg",
  },
];


export default function OurStory() {

  return (
    <section id="story" className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Câu Chuyện Của Chúng mình"
          subtitle="Hành trình yêu thương của chúng mình"
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
          <div className="relative h-[500px] md:h-[600px]">
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
          <p className="text-gray-600 text-base md:text-xl font-dancing-script">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
