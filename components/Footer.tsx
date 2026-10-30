import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Globe } from 'lucide-react';
import { allAreas, areaHref, footerAreaSlugs, popularSearches, PHONE_NUMBERS } from '@/lib/areas';

const footerAreas = footerAreaSlugs.map((slug) => allAreas.find((a) => a.slug === slug)!);

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-red-600/15 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <div>
              <span className="font-extrabold text-3xl tracking-tight text-white leading-none">
                ACT <span className="text-red-400">FIBERNET</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Transforming your digital experience with Bangalore's fastest and most reliable fiber internet. Premium plans for home and business.
            </p>
            <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-slate-300 border border-white/10">
              Fiber Internet Experts
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Helpful Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/plans" className="hover:text-white transition-colors">Broadband Plans</Link></li>
              <li><Link href="/broadband-bangalore" className="hover:text-white transition-colors">Areas We Serve</Link></li>
              <li><Link href="/#installation" className="hover:text-white transition-colors">Installation Showcase</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Upgrade Plan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart WiFi</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-red-400 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col gap-1">
                  {PHONE_NUMBERS.map((n) => (
                    <a key={n} href={`tel:+91${n}`} className="hover:text-white transition-colors">{n}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Globe className="w-5 h-5 text-red-400 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="https://www.fibernetbangalore.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">www.fibernetbangalore.in</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Visit Us</h3>
            <a
              href="https://maps.app.goo.gl/463PpFzznK672WCb9?g_st=aw"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 group"
            >
              <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-1 group-hover:scale-110 transition-all" />
              <div className="text-sm leading-relaxed">
                <p className="font-semibold text-white mb-1">ACT Fibernet Bangalore</p>
                <p className="text-slate-400">Open for consultations and installations every day.</p>
                <span className="mt-3 inline-block text-red-400 text-xs font-bold uppercase tracking-widest group-hover:underline">Get Directions →</span>
              </div>
            </a>
          </div>
        </div>

        {/* Areas We Serve */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-white font-bold text-base mb-4 tracking-wide">ACT Fibernet Near You</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-400 leading-none">
            {footerAreas.map((a) => (
              <Link key={a.slug} href={areaHref(a)} className="hover:text-white transition-colors whitespace-nowrap">
                ACT Fibernet {a.name}
              </Link>
            ))}
            <Link href="/broadband-bangalore" className="text-red-400 font-semibold hover:text-red-300 transition-colors whitespace-nowrap">
              All areas & PIN codes →
            </Link>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <h4 className="text-white font-bold text-base mb-4 tracking-wide">Popular Searches</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-400 leading-none">
            {popularSearches.map((s) => (
              <Link key={s.label} href={s.href} className="hover:text-white transition-colors whitespace-nowrap">
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-slate-500 mb-2">
            Disclaimer: Offers, prices, and speeds are subject to change. Terms & conditions apply.
          </p>
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} ACT Fibernet Bangalore. Independent Sales Partner.
          </p>
        </div>
      </div>
    </footer>
  );
}
