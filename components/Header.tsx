import React from 'react';
import { Phone, Navigation, Wifi } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-red-500/20">
              <Wifi className="h-6 w-6 text-white" />
              <span className="absolute inset-0 rounded-full border border-white/20"></span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-black tracking-tight text-white">ACT <span className="text-red-400">FIBERNET</span></span>
              <span className="text-xs uppercase tracking-[0.24em] text-slate-300">Bangalore Fiber</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-slate-300">
            <a href="#offers" className="transition-colors hover:text-white">Plans</a>
            <a href="#installation" className="transition-colors hover:text-white">Installations</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://maps.app.goo.gl/463PpFzznK672WCb9?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              <Navigation className="h-4 w-4" />
              Locate Us
            </a>

            <a
              href="tel:+919740436550"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-500/30 transition hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Call Sales
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
