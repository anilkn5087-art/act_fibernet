'use client';
import React, { useState } from 'react';
import { Menu, Navigation, Phone, Search, Wifi, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            {/* Wrapper added to elegantly handle the JPEG's lack of transparency on a dark header */}
            <div className="bg-white rounded-xl sm:rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-shadow">
              <Image 
                src="/images/logo.jpeg" 
                alt="ACT Fibernet" 
                width={140} 
                height={50} 
                className="h-7 sm:h-9 w-auto object-contain mix-blend-multiply"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="#offers" className="transition-colors hover:text-white">Plans</Link>
            <Link href="#installation" className="transition-colors hover:text-white">Installations</Link>
            <Link href="#contact" className="transition-colors hover:text-white">Contact</Link>
            
            {/* Extended links separator */}
            <span className="h-4 w-px bg-white/20"></span>
            
            <div className="flex items-center gap-6">
              <Link href="/plans" className="hover:text-red-400 transition-colors">Explore All Plans</Link>
              <div className="group relative cursor-pointer py-2">
                <span className="transition-colors group-hover:text-white flex items-center gap-1">Enterprise <span className="text-[10px]">▼</span></span>
              </div>
              <span className="cursor-pointer transition-colors hover:text-white">WifiPedia</span>
              <Search className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 xl:gap-4">
            <a
              href="https://maps.app.goo.gl/463PpFzznK672WCb9?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              <Navigation className="h-4 w-4" />
              Locate Us
            </a>

            <a
              href="tel:+919740436550"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-4 xl:px-5 py-2 xl:py-3 text-sm font-bold text-white shadow-lg shadow-red-500/30 transition hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              <span>Call Sales</span>
            </a>
            
            {/* Mobile / Tablet Call Icon Only */}
            <a
              href="tel:+919740436550"
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30 transition hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white transition hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl absolute top-full left-0 w-full shadow-2xl">
          <div className="flex flex-col px-4 py-6 gap-6 max-h-[80vh] overflow-y-auto w-full">
            <div className="flex flex-col gap-4 text-base font-medium text-slate-200">
              <Link href="#offers" className="hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Plans</Link>
              <Link href="#installation" className="hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Installations</Link>
              <Link href="#contact" className="hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link href="/plans" className="text-red-400 hover:text-red-300 transition-colors" onClick={() => setIsOpen(false)}>Explore All Plans</Link>
            </div>
            
            <hr className="border-white/10" />

            <div className="flex flex-col gap-4 text-sm font-medium text-slate-400">
              <span className="hover:text-white cursor-pointer transition-colors">Enterprise Business</span>
              <span className="hover:text-white cursor-pointer transition-colors">Add-ons</span>
              <span className="hover:text-white cursor-pointer transition-colors">Company</span>
              <span className="hover:text-white cursor-pointer transition-colors">Help & Support</span>
              <span className="hover:text-white cursor-pointer transition-colors">WifiPedia</span>
              <span className="hover:text-white cursor-pointer transition-colors">Digital TV</span>
            </div>
            
            <div className="pt-4 flex items-center justify-between border-t border-white/10">
               <a
                href="https://maps.app.goo.gl/463PpFzznK672WCb9?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white text-sm"
              >
                <Navigation className="h-4 w-4" />
                Locate Us
              </a>
              <Search className="w-5 h-5 cursor-pointer text-white/80 hover:text-white" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
