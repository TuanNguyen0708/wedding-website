"use client";

import { motion } from 'framer-motion';
import { useState } from "react";
import Image from "next/image";
import QRDialog from "./QRDialog";
import SectionTitle from './SectionTitle';
import { FaUser, FaCreditCard, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

interface BankInfo {
  accountName: string;
  accountNumber: string;
  bankName: string;
  branch: string;
}

interface QRCodeItem {
  name: string;
  qrCode: string;
  bankInfo: BankInfo;
}

export default function WeddingGift() {
  const [selectedQR, setSelectedQR] = useState<QRCodeItem | null>(null);

  const qrCodes: QRCodeItem[] = [
    {
      name: "Cô Dâu",
      qrCode: "/images/qr-code/qr-bride.jpg",
      bankInfo: {
        accountName: "NGUYEN THI LY",
        accountNumber: "44768626868",
        bankName: "TPBank",
        branch: "Hội An",
      },
    },
    {
      name: "Chú Rể",
      qrCode: "/images/qr-code/qr-groom.jpg",
      bankInfo: {
        accountName: "NGUYEN DINH TUAN",
        accountNumber: "99607081996",
        bankName: "TPBank",
        branch: "Đà Nẵng",
      },
    },
  ];

  return (
    <section id="gift" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Mừng Cưới"
          subtitle="Gửi mừng cưới đến cô dâu, chú rể"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {qrCodes.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 max-w-sm mx-auto w-full hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <h3 className="text-3xl font-bold text-pink-600 mb-6 font-great-vibes">
                    {item.name}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedQR(item)}
                    className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md mb-6 ring-2 ring-pink-200 hover:ring-pink-400 transition-all duration-300"
                  >
                    <Image
                      src={item.qrCode}
                      alt={`QR Code for ${item.name}`}
                      fill
                      className="object-cover"
                    />
                  </motion.button>

                  <div className="space-y-1 text-gray-700 text-left">
                    <div className="flex items-center space-x-3">
                      <FaUser className="text-pink-500 text-xl flex-shrink-0" />
                      <div>
                        <span className="font-medium block text-sm text-gray-500">Tên tài khoản</span>
                        <span className="font-semibold">{item.bankInfo.accountName}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaCreditCard className="text-pink-500 text-xl flex-shrink-0" />
                      <div>
                        <span className="font-medium block text-sm text-gray-500">Số tài khoản</span>
                        <span className="font-mono font-semibold">{item.bankInfo.accountNumber}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaBuilding className="text-pink-500 text-xl flex-shrink-0" />
                      <div>
                        <span className="font-medium block text-sm text-gray-500">Ngân hàng</span>
                        <span className="font-semibold">{item.bankInfo.bankName}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaMapMarkerAlt className="text-pink-500 text-xl flex-shrink-0" />
                      <div>
                        <span className="font-medium block text-sm text-gray-500">Chi nhánh</span>
                        <span className="font-semibold">{item.bankInfo.branch}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedQR && (
        <QRDialog
          isOpen={!!selectedQR}
          onClose={() => setSelectedQR(null)}
          qrCode={selectedQR.qrCode}
          name={selectedQR.name}
        />
      )}
    </section>
  );
}
