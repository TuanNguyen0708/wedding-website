"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";

const ThankYouMessage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="thanks" className="py-16 bg-[#fafafa]">
      <div className="container mx-auto px-4">
        <SectionTitle title="Lời Cảm Ơn" />
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed font-dancing-script">
            Chúng mình xin chân thành cảm ơn tất cả mọi người đã đến tham dự và chia sẻ niềm vui trong ngày trọng đại của chúng mình. 
            Những lời chúc phúc, những món quà và sự hiện diện của quý khách đã làm cho ngày cưới của chúng mình thêm ý nghĩa và trọn vẹn. 
            Chúng mình sẽ mãi ghi nhớ những khoảnh khắc đẹp đẽ này và hy vọng sẽ có dịp đáp đền tấm lòng của mọi người.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouMessage; 