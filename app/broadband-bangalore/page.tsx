import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Zap, Wifi, Router } from 'lucide-react';
import  JsonLd from '../../components/JsonLd'
import { zones, allAreas, areaHref, PHONE_NUMBERS, SITE_URL } from '@/lib/areas';
import { plans, speeds } from '@/lib/plans';

const startingPrice = Math.min(...plans[0].prices);

export const metadata: Metadata = {
  title: 'ACT Fibernet New Connection in Bangalore – Areas & PIN Codes',
  description: `Get an ACT Fibernet broadband connection anywhere in Bangalore – South, East, West and North. Check your area and PIN code, plans from ₹${startingPrice}/month, 50 Mbps to 1 Gbps.`,
  alternates: { canonical: '/broadband-bangalore' },
};

const faqs = [
  {
    q: 'How do I get a new ACT Fibernet connection in Bangalore?',
    a: `Call or WhatsApp us on ${PHONE_NUMBERS.join(', ')} with your address and PIN code. We check availability in your building, help you pick a plan and book the installation.`,
  },
  {
    q: 'Which internet speeds are available?',
    a: `Home and office broadband plans are available in ${speeds.join(', ')}, starting at ₹${startingPrice}/month. Mesh WiFi plans with 2 routers are available in 200, 400 and 500 Mbps.`,
  },
  {
    q: 'Which areas of Bangalore do you cover?',
    a: `We help customers across ${zones.map((z) => z.name).join(', ')} – including ${allAreas.slice(0, 6).map((a) => a.name).join(', ')} and many more localities listed on this page.`,
  },
  {
    q: 'Is my PIN code covered?',
    a: 'The PIN codes listed here are indicative – some localities are served by more than one post office. Share your exact installation address and we will confirm availability.',
  },
];

export default function BroadbandBangalorePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-10 sm:py-14">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'ACT Fibernet Bangalore',
          url: SITE_URL,
          telephone: PHONE_NUMBERS.map((n) => `+91${n}`),
          address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' },
          areaServed: allAreas.map((a) => ({ '@type': 'Place', name: `${a.name}, Bengaluru` })),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-red-600">Home</Link> <span aria-hidden>/</span>{' '}
          <span className="text-gray-700 font-semibold">Broadband in Bangalore</span>
        </nav>

        {/* Hero */}
        <header className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            ACT Fibernet Broadband Connection in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Bangalore</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            High speed fiber internet for homes and offices across Bengaluru. Get a new ACT Fibernet connection,
            WiFi installation and broadband support in your area – unlimited plans from{' '}
            <strong className="text-gray-900">₹{startingPrice}/month</strong>.
          </p>
        </header>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-12">
          {[
            { icon: Zap, title: '50 Mbps to 1 Gbps', text: 'Unlimited fiber broadband plans' },
            { icon: Wifi, title: 'Mesh WiFi plans', text: 'End to end coverage with 2 routers' },
            { icon: Router, title: 'Home & office', text: 'New connections and installation' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
              <Icon className="w-8 h-8 p-1.5 rounded-lg bg-red-50 text-red-600 shrink-0" />
              <div>
                <p className="font-bold">{title}</p>
                <p className="text-sm text-gray-500">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Zone jump links */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {zones.map((z) => (
            <a key={z.slug} href={`#${z.slug}`} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-700 hover:border-red-400 hover:text-red-600 transition-colors">
              {z.name}
            </a>
          ))}
        </div>

        {/* Areas by zone */}
        <div className="space-y-12">
          {zones.map((z) => (
            <section key={z.slug} id={z.slug} className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
                ACT Broadband in {z.name}
              </h2>
              <p className="text-gray-600 mb-5">
                ACT Fibernet new connections and WiFi installation in {z.areas.length} localities of {z.name}.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {z.areas.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={areaHref(a)}
                      className="group flex items-start gap-3 h-full bg-white rounded-xl border border-gray-200 p-4 hover:border-red-400 hover:shadow-md transition-all"
                    >
                      <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>
                        <span className="block font-bold group-hover:text-red-600 transition-colors">ACT Fibernet {a.name}</span>
                        <span className="block text-sm text-gray-500">PIN {a.pins.join(', ')}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-8 text-xs text-gray-500">
          PIN codes are indicative. Some localities have multiple post offices and PIN codes – we verify the exact installation address before confirming a connection.
        </p>

        {/* FAQ */}
        <section className="mt-14 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-5">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-xl border border-gray-200 p-4 open:shadow-sm">
                <summary className="cursor-pointer font-bold list-none flex justify-between gap-4">
                  {f.q}
                  <span className="text-red-500 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-2">Book your ACT Fibernet connection</h2>
          <p className="text-white/90 mb-6">Call us for new connections, plan details and installation anywhere in Bangalore.</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            {PHONE_NUMBERS.map((n) => (
              <a key={n} href={`tel:+91${n}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-red-600 font-black px-6 py-3 hover:bg-red-50 transition-colors">
                <Phone className="w-4 h-4" /> {n}
              </a>
            ))}
          </div>
          <Link href="/plans" className="inline-block mt-5 text-sm font-bold underline underline-offset-4">
            Compare all broadband plans →
          </Link>
        </section>
      </div>
    </div>
  );
}
