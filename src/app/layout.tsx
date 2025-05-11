import type { Metadata } from "next";
import { Playfair_Display, Cormorant, Great_Vibes, Dancing_Script, Cinzel, Alex_Brush } from "next/font/google";
import "./globals.css";
import ClientLayout from './ClientLayout';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
});

export const metadata: Metadata = {
  title: 'Tuấn & Lý | Mời Bạn Đến Chia Vui',
  description: 'Mời bạn đến tham dự lễ cưới của chúng tôi. Hãy cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại này.',
  openGraph: {
    title: 'Tuấn & Lý | Mời Bạn Đến Chia Vui',
    description: 'Mời bạn đến tham dự lễ cưới của chúng tôi. Hãy cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại này.',
    images: ['https://tuan-ly.love/images/slider/1.jpg'],
    url: 'https://tuan-ly.love',
    type: 'website',
    siteName: 'Tuấn & Lý Wedding',
  },
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${greatVibes.variable} ${dancingScript.variable} ${cinzel.variable} ${alexBrush.variable}`}>
      <head> 
      <meta property="fb:app_id" content="668117552682185" />
      </head>
      <body className="min-h-screen bg-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
