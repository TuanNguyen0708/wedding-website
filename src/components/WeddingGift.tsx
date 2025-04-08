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
    <section id="gift" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mừng Cưới
          </h2>
          <p className="font-cormorant text-xl text-gray-600">
            Gửi mừng cưới đến cô dâu, chú rể
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {qrCodes.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedQR(item)}
                    className="relative w-64 h-64 rounded-lg overflow-hidden shadow-md mb-6"
                  >
                    <Image
                      src={item.qrCode}
                      alt={`QR Code for ${item.name}`}
                      fill
                      className="object-cover"
                    />
                  </motion.button>

                  <div className="text-center space-y-4">
                    <h3 className="font-playfair text-2xl font-bold text-pink-600">
                      {item.name}
                    </h3>
                    
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="font-medium">Tên tài khoản:</span>
                        <span>{item.bankInfo.accountName}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="font-medium">Số tài khoản:</span>
                        <span className="font-mono">{item.bankInfo.accountNumber}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="font-medium">Ngân hàng:</span>
                        <span>{item.bankInfo.bankName}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="font-medium">Chi nhánh:</span>
                        <span>{item.bankInfo.branch}</span>
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
