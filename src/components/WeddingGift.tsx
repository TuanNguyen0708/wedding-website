"use client";

import { motion } from 'framer-motion';
import { useState } from "react";
import Image from "next/image";
import QRDialog from "./QRDialog";

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
        accountNumber: "1234567890",
        bankName: "Vietcombank",
        branch: "Chi nhánh Hoi An",
      },
    },
    {
      name: "Chú Rể",
      qrCode: "/images/qr-code/qr-groom.jpg",
      bankInfo: {
        accountName: "NGUYEN DINH TUAN",
        accountNumber: "0987654321",
        bankName: "Vietcombank",
        branch: "Chi nhánh Da Nang",
      },
    },
  ];

  return (
    <div className="bg-white py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
              Mừng cưới
            </h2>
            <p className="font-cormorant text-lg sm:text-xl text-gray-600">
              Gửi mừng cưới đến cô dâu, chú rễ
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {qrCodes.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="flex flex-col items-center w-full md:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedQR(item)}
                  className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
                >
                  <Image
                    src={item.qrCode}
                    alt={`QR Code for ${item.name}`}
                    fill
                    className="object-cover"
                  />
                </motion.button>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className="mt-4 text-center w-full max-w-xs"
                >
                  <p className="font-playfair text-xl font-bold text-primary-600 mb-2">
                    {item.name}
                  </p>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">
                    {item.bankInfo.accountName}
                  </p>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">
                    {item.bankInfo.accountNumber}
                  </p>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">
                    {item.bankInfo.bankName}
                  </p>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">
                    {item.bankInfo.branch}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedQR && (
        <QRDialog
          isOpen={!!selectedQR}
          onClose={() => setSelectedQR(null)}
          qrCode={selectedQR.qrCode}
          name={selectedQR.name}
        />
      )}
    </div>
  );
}
