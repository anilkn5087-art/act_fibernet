import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import OffersSection from '@/components/OffersSection';
import InstallationGallery from '@/components/InstallationGallery';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden">
      <Header />
      <HeroCarousel />
      <OffersSection />
      <InstallationGallery />
      <Footer />
      <FloatingContact />
    </main>
  );
}
