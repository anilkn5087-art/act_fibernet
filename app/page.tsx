import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import OffersSection from '@/components/OffersSection';
import InstallationGallery from '@/components/InstallationGallery';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Header />
      <HeroCarousel />
      <OffersSection />
      <InstallationGallery />
      <Footer />
      <FloatingContact />
    </main>
  );
}
