import type { Metadata } from "next";
import { Playfair_Display, Cormorant } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Đình Tuấn & Thị Lý - Wedding",
  description: "Wedding website for Đình Tuấn & Thị Lý",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
