import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import WeddingDetails from '@/components/WeddingDetails';
import Gallery from '@/components/Gallery';
import RSVPForm from '@/components/RSVPForm';
import Footer from '@/components/Footer';
import FlowerAnimation from '@/components/FlowerAnimation';

export default function Home() {
  return (
    <main className="relative">
      <FlowerAnimation />
      <Header />
      <Hero />
      <OurStory />
      <WeddingDetails />
      <Gallery />
      <RSVPForm />
      <Footer />
    </main>
  );
}
