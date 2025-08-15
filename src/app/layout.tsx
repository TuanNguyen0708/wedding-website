import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant,
  Great_Vibes,
  Dancing_Script,
  Cinzel,
  Alex_Brush,
} from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

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
  title: "Tuấn & Lý | Mời Bạn Đến Chung Vui",
  description:
    "Mời bạn đến tham dự lễ cưới của chúng mình. Hãy cùng chúng mình chia sẻ niềm vui trong ngày trọng đại này.",
  openGraph: {
    title: "Tuấn & Lý | Mời Bạn Đến Chung Vui",
    description:
      "Mời bạn đến tham dự lễ cưới của chúng mình. Hãy cùng chúng mình chia sẻ niềm vui trong ngày trọng đại này.",
    images: ["https://tuan-ly.love/images/slider/1.jpg"],
    url: "https://tuan-ly.love",
    type: "website",
    siteName: "Tuấn & Lý Wedding",
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${greatVibes.variable} ${dancingScript.variable} ${cinzel.variable} ${alexBrush.variable}`}
    >
      <head>
        <script src="https://nextdev.akabot.io/chat-widget/bootstrap.js" data-widget="eyJ3aWRnZXRJZCI6IjEwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsInRlbmFudElkIjoiZGRlOTNiNDAtZDFiYS00MDI5LTg5NmMtNDc3ZTg4MWI1YmI3In0" async defer></script>
        <meta property="fb:app_id" content="668117552682185" />
        <title>Tuấn &amp; Lý | Mời Bạn Đến Chung Vui</title>
        <meta
          name="description"
          content="Mời bạn đến tham dự lễ cưới của chúng mình. Hãy cùng chúng mình chia sẻ niềm vui trong ngày trọng đại này."
        />
        <meta
          property="og:title"
          content="Tuấn &amp; Lý | Mời Bạn Đến Chung Vui"
        />
        <meta
          property="og:description"
          content="Mời bạn đến tham dự lễ cưới của chúng mình. Hãy cùng chúng mình chia sẻ niềm vui trong ngày trọng đại này."
        />
        <meta
          property="og:image"
          content="https://tuan-ly.love/images/slider/1.jpg"
        />
        <meta property="og:url" content="https://tuan-ly.love" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tuấn &amp; Lý Wedding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico"></link>
      </head>
      <body className="min-h-screen bg-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
