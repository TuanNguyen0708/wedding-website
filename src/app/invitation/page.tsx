"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import InvitationCard from "./InvitationCard";

export default function Invitation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-pink-800 font-dancing-script">
          Save The Date
        </h1>
        <p className="text-lg md:text-3xl text-gray-600 mt-2 font-dancing-script">
          Trân trọng kính mời bạn đến chung vui cùng chúng mình.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col xl:flex-row items-center justify-center space-y-6 xl:space-y-0 xl:space-x-8 p-8"
      >
        <InvitationCard
          src="images/invitation/1.png"
          alt="Thiệp mời 1"
          width={400}
          height={600}
          textPositionClass="bottom-[4%] -translate-x-1/2 left-1/2"
        />
        <Image
          src="images/invitation/2.png"
          alt="Thiệp mời 2"
          width={400}
          height={600}
          className="w-full max-w-sm h-auto xl:w-auto xl:h-full object-contain rounded-lg shadow-lg"
        />
        <InvitationCard
          src="images/invitation/3.png"
          alt="Thiệp mời 3"
          width={400}
          height={600}
          textPositionClass="top-[36%] left-[54%]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-200 font-dancing-script"
        >
          ← Quay lại trang chủ
        </Link>
      </motion.div>
    </div>
  );
}
