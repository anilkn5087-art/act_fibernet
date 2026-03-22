import React from 'react';
import { Phone, Navigation, Wifi } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-red-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white transform group-hover:scale-105 transition-transform duration-300">
                <Wifi className="h-6 w-6" />
                <div className="absolute inset-0 rounded-full border-2 border-red-600 animate-ping opacity-20"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-gray-900 leading-none">
                  ACT <span className="text-red-600">FIBERNET</span>
                </span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">
                  Bangalore
                </span>
              </div>
            </Link>
          </div>

          {/* Quick Contact Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="https://maps.app.goo.gl/463PpFzznK672WCb9?g_st=aw" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
            >
              <Navigation className="h-5 w-5" />
              <span>Locate Us</span>
            </a>
            
            <a
              href="tel:+919740436550"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 font-semibold text-white rounded-full overflow-hidden shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
              <Phone className="h-5 w-5 z-10 animate-pulse" />
              <span className="z-10 tracking-wide">9740436550</span>
            </a>
          </div>

          {/* Mobile Menu Button / Compact Call */}
          <div className="md:hidden flex items-center">
             <a
              href="tel:+919740436550"
              className="flex items-center justify-center p-3 text-white bg-red-600 rounded-full shadow-lg"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
