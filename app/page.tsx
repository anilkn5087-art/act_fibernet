import HeroBanner from '@/components/HeroBanner';
import OffersSection from '@/components/OffersSection';
import InstallationGallery from '@/components/InstallationGallery';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroBanner />
      <OffersSection />
      <InstallationGallery />
    </div>
  );
}
