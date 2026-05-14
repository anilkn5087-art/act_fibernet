'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

const workImages = [
  '/images/work1.jpeg',
  '/images/work2.jpeg',
  '/images/work3.jpeg',
  '/images/work4.jpeg',
  '/images/work5.jpeg',
  '/images/work6.jpeg',
  '/images/work7.jpeg',
  '/images/work8.jpeg',
  '/images/work9.jpeg',
  '/images/work10.jpeg',
];

const marqueeImages = [...workImages, ...workImages];

export default function InstallationGallery() {
  return (
    <section id="installation" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-red-600/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" /> Proven Excellence
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
              Flawless <span className="text-red-400 relative">
                Installation
                <span className="absolute bottom-2 left-0 w-full h-3 bg-red-500/20 -z-10 transform -rotate-1"></span>
              </span><br />
              Guaranteed.
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We don't just provide internet; we build your home's digital foundation. Our installations are clean, precise, and designed for perfect coverage.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 rounded-3xl bg-white/5 p-5 border border-white/10">
                <div className="bg-white/10 p-3 rounded-2xl shadow-sm"><Zap className="w-6 h-6 text-red-400" /></div>
                <div>
                  <h4 className="font-bold text-white">Expert Technicians</h4>
                  <p className="text-sm text-slate-400">Fast, clean, and highly professional setups for every home.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-white/5 p-5 border border-white/10">
                <div className="bg-white/10 p-3 rounded-2xl shadow-sm"><ShieldCheck className="w-6 h-6 text-red-400" /></div>
                <div>
                  <h4 className="font-bold text-white">Secure Smart Homes</h4>
                  <p className="text-sm text-slate-400">Tapo cameras and Wi-Fi setups configured for privacy and coverage.</p>
                </div>
              </div>
            </div>
            
            <a href="tel:+919740436550" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-red-500/30 transition hover:-translate-y-1">
              Book Your Free Setup
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative aspect-square lg:aspect-auto lg:h-[640px] w-full max-w-lg mx-auto"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-slate-800/70 border border-white/10 shadow-2xl"></div>
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden border-8 border-slate-950 shadow-2xl">
              <Image 
                src="/images/work1.jpeg" 
                alt="Highlight Installation" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-[220px] rounded-[2rem] border border-white/10 bg-slate-950/95 p-6 shadow-xl">
              <p className="text-4xl font-black text-red-400 mb-1">5k+</p>
              <p className="text-sm font-semibold text-slate-200 leading-tight">Homes connected in Bangalore</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative mt-20 pb-10">
        <div className="mb-8 text-center px-4">
          <h3 className="text-2xl font-bold text-white">Our Recent Work</h3>
          <p className="text-slate-400 text-sm mt-2">Swipe through our seamless installations.</p>
        </div>
        
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        <div className="flex overflow-hidden group">
          <div className="flex shrink-0 animate-marquee hover:[animation-play-state:paused] gap-4 sm:gap-6 px-3">
            {marqueeImages.map((src, idx) => (
              <div key={idx} className="relative w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-[2rem] overflow-hidden shrink-0 shadow-2xl shadow-slate-950/30">
                <Image 
                  src={src} 
                  alt="ACT Installation Work" 
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 288px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (min-width: 640px) {
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        }
      `}} />
    </section>
  );
}
