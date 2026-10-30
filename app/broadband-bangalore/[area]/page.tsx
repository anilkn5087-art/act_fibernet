import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Phone, CheckCircle, Wifi } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { allAreas, getArea, getZone, areaHref, PHONE_NUMBERS, SITE_URL } from '@/lib/areas';
import { plans, speeds, meshPlans } from '@/lib/plans';

type Props = { params: Promise<{ area: string }> };

// Only the areas listed in lib/areas.ts get a page; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return allAreas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getArea((await params).area);
  if (!area) return {};
  const startingPrice = Math.min(...plans[0].prices);
  return {
    title: `ACT Fibernet ${area.name} – Broadband & WiFi Connection (${area.pins[0]})`,
    description: `ACT Fibernet new connection in ${area.name}, Bangalore ${area.pins.join(', ')}. High speed fiber broadband for homes and offices from ₹${startingPrice}/month – 50 Mbps to 1 Gbps, Mesh WiFi and OTT plans. Call ${PHONE_NUMBERS[0]}.`,
    alternates: { canonical: areaHref(area) },
    openGraph: {
      title: `ACT Fibernet ${area.name}, Bangalore`,
      url: areaHref(area),
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const area = getArea((await params).area);
  if (!area) notFound();

  const zone = getZone(area.zone);
  const nearby = zone.areas.filter((a) => a.slug !== area.slug);
  const pureSpeed = plans[0];
  const meshFrom = Math.min(...meshPlans.map((m) => m.cost));

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-10 sm:py-14">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: `ACT Fibernet ${area.name}`,
          url: `${SITE_URL}${areaHref(area)}`,
          telephone: PHONE_NUMBERS.map((n) => `+91${n}`),
          address: {
            '@type': 'PostalAddress',
            addressLocality: `${area.name}, Bengaluru`,
            postalCode: area.pins[0],
            addressRegion: 'Karnataka',
            addressCountry: 'IN',
          },
          areaServed: { '@type': 'Place', name: `${area.name}, Bengaluru ${area.pins.join(', ')}` },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Broadband in Bangalore', item: `${SITE_URL}/broadband-bangalore` },
            { '@type': 'ListItem', position: 3, name: `ACT Fibernet ${area.name}`, item: `${SITE_URL}${areaHref(area)}` },
          ],
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span aria-hidden>/</span>
          <Link href="/broadband-bangalore" className="hover:text-red-600">Broadband in Bangalore</Link>
          <span aria-hidden>/</span>
          <span className="text-gray-700 font-semibold">{area.name}</span>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <p className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 rounded-full px-3 py-1 mb-4">
            <MapPin className="w-3.5 h-3.5" /> {zone.name} · PIN {area.pins.join(', ')}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            ACT Fibernet {area.name} –{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Broadband & WiFi Connection</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            Looking for a new ACT Fibernet connection in {area.name}, Bangalore? We set up high speed fiber
            internet for homes and offices in {area.name} ({area.pins.join(', ')}) – unlimited broadband plans
            from 50 Mbps to 1 Gbps, Mesh WiFi for full-home coverage and entertainment packs with Netflix,
            Prime Video, JioHotstar and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href={`tel:+91${PHONE_NUMBERS[0]}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold px-6 py-3 shadow-lg shadow-red-500/20 hover:-translate-y-0.5 transition">
              <Phone className="w-4 h-4" /> Call {PHONE_NUMBERS[0]}
            </a>
            <a
              href={`https://wa.me/91${PHONE_NUMBERS[1]}?text=${encodeURIComponent(`Hi! I'd like a new ACT Fibernet connection in ${area.name}, Bangalore (${area.pins[0]}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-gray-200 font-bold px-6 py-3 hover:border-red-400 hover:text-red-600 transition"
            >
              Check availability on WhatsApp
            </a>
          </div>
        </header>

        {/* Plans snapshot */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">ACT broadband plans in {area.name}</h2>
          <p className="text-gray-600 mb-5">Unlimited data on every plan. Monthly prices for Pure Speed plans:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {speeds.map((speed, i) => (
              <div key={speed} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                <p className="text-sm font-bold text-gray-500">{speed}</p>
                <p className="text-2xl font-black mt-1">₹{pureSpeed.prices[i]}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">/ month</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-3 bg-white rounded-xl border border-gray-200 p-4">
            <Wifi className="w-6 h-6 text-red-500 shrink-0" />
            <p className="text-sm text-gray-600">
              <strong className="text-gray-900">Mesh WiFi plans from ₹{meshFrom}/month</strong> (excl. GST) – 2 routers for
              stronger signal in every room. Entertainment packs add OTT apps and 450+ live TV channels.
            </p>
          </div>
          <Link href="/plans" className="inline-block mt-4 font-bold text-red-600 hover:underline underline-offset-4">
            Compare all plans, 3-month prices & Mesh plans →
          </Link>
        </section>

        {/* Why */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">Why choose ACT Fibernet in {area.name}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'High speed fiber internet for home and office',
              'Unlimited WiFi plans – no data caps',
              'Smart WiFi powered by AI and Mesh router options',
              'New connection, installation and broadband support',
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 bg-white rounded-xl border border-gray-200 p-4 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Nearby */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">ACT Fibernet near {area.name}</h2>
          <p className="text-gray-600 mb-4">We also install ACT broadband in these {zone.name} localities:</p>
          <div className="flex flex-wrap gap-2">
            {nearby.map((a) => (
              <Link key={a.slug} href={areaHref(a)} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:border-red-400 hover:text-red-600 transition-colors">
                {a.name}
              </Link>
            ))}
          </div>
          <Link href="/broadband-bangalore" className="inline-block mt-4 font-bold text-red-600 hover:underline underline-offset-4">
            All Bangalore areas & PIN codes →
          </Link>
        </section>

        <p className="text-xs text-gray-500">
          PIN codes are indicative. We verify the exact installation address in {area.name} before confirming a connection. Offers and prices are subject to change.
        </p>
      </div>
    </div>
  );
}
