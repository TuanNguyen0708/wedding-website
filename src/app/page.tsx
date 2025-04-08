import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import WeddingDetails from '@/components/WeddingDetails';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import HeartAnimation from '@/components/HeartAnimation';
import AttendanceForm from '@/components/AttendanceForm';
import GuestbookForm from '@/components/GuestbookForm';

export default function Home() {
  return (
    <main className="relative">
      <HeartAnimation />
      <Header />
      <Hero />
      <OurStory />
      <WeddingDetails />
      <Gallery />
      <AttendanceForm />
      <GuestbookForm />
      <Footer />
    </main>
  );
}
