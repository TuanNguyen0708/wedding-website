import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 md:mb-16 relative py-8"
    >
      <div 
        className="absolute inset-0 bg-contain bg-center opacity-30"
        style={{ 
          backgroundImage: 'url("/images/sec-title-flower.jpg")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%'
        }}
      />
      <h2 className="font-dancing-script text-3xl md:text-5xl font-bold text-gray-900 mb-4 relative z-10">
        {title}
      </h2>
      {subtitle && (
        <p className="font-cormorant text-lg md:text-xl text-gray-600 relative z-10">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
} 