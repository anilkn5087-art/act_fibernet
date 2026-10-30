import HeroBanner from '@/components/HeroBanner';
import OffersSection from '@/components/OffersSection';
import InstallationGallery from '@/components/InstallationGallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroBanner />
      <OffersSection />
      <InstallationGallery />
    </div>
  );
}
