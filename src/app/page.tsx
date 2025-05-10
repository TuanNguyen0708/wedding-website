import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import WeddingDetails from "@/components/WeddingDetails";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import HeartAnimation from "@/components/HeartAnimation";
import AttendanceForm from "@/components/AttendanceForm";
import GuestbookForm from "@/components/GuestbookForm";
import WeddingGift from "@/components/WeddingGift";
import ThankYouMessage from "@/components/ThankYouMessage";

export default function Home() {
  return (
    <>
      <head>
        <title>Tuấn & Lý | Mời Bạn Đến Chia Vui</title>
        <meta
          name="description"
          content="Mời bạn đến tham dự lễ cưới của chúng tôi. Hãy cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại này."
        />
        <meta property="og:title" content="Tuấn & Lý | Mời Bạn Đến Chia Vui" />
        <meta
          property="og:description"
          content="Mời bạn đến tham dự lễ cưới của chúng tôi. Hãy cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại này."
        />
        <meta property="og:image" content="/images/slider/1.jpg" />
        <meta property="og:url" content="https://tuan-ly.love" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <main className="relative">
        <HeartAnimation />
        <Header />
        <Hero />
        <OurStory />
        <Gallery />
        <WeddingDetails />
        <AttendanceForm />
        <GuestbookForm />
        <WeddingGift />
        <ThankYouMessage />
        <Footer />
      </main>
    </>
  );
}
