import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WeddingDetails from "@/components/WeddingDetails";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import HeartAnimation from "@/components/HeartAnimation";
import AttendanceForm from "@/components/AttendanceForm";
import GuestbookForm from "@/components/GuestbookForm";
import WeddingGift from "@/components/WeddingGift";
import ThankYouMessage from "@/components/ThankYouMessage";
import InvitationCalendar from "@/components/InvitationCalendar";

export default function Home() {
  return (
    <main className="relative">
      <HeartAnimation />
      <Header />
      <Hero />
      <InvitationCalendar />
      <WeddingDetails />
      <Gallery />
      <AttendanceForm />
      <GuestbookForm />
      <WeddingGift />
      <ThankYouMessage />
      <Footer />
    </main>
  );
}
