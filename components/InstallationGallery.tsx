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

// Double the array for infinite scroll effect
const marqueeImages = [...workImages, ...workImages];

export default function InstallationGallery() {
  return (
    <section id="installation" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" /> Proven Excellence
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-none mb-6 tracking-tight">
              Flawless <span className="text-red-600 relative">
                Installation
                <span className="absolute bottom-2 left-0 w-full h-3 bg-red-200 -z-10 transform -rotate-1"></span>
              </span><br />
              Guaranteed.
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We don't just provide internet; we build your home's digital foundation. Witness our meticulous setup process ensuring zero dead-zones and maximum aesthetic appeal.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="bg-white p-3 rounded-full shadow-sm"><Zap className="w-6 h-6 text-red-600" /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Expert Technicians</h4>
                  <p className="text-sm text-gray-500">Fast, clean, and highly professional wiring.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="bg-white p-3 rounded-full shadow-sm"><ShieldCheck className="w-6 h-6 text-red-600" /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Secure Smart Homes</h4>
                  <p className="text-sm text-gray-500">Tapo indoor & outdoor camera configurations.</p>
                </div>
              </div>
            </div>
            
            <a href="tel:+919740436550" className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-600/30">
              Book Your Free Setup
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative aspect-square lg:aspect-auto lg:h-[600px] w-full max-w-lg mx-auto"
          >
            {/* Artistic Main Feature Image */}
            <div className="absolute inset-0 bg-gray-100 rounded-[3rem] rotate-3 scale-105 border border-gray-200"></div>
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white">
              <Image 
                src="/images/work1.jpeg" 
                alt="Highlight Installation" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-[200px]">
              <p className="text-4xl font-black text-red-600 mb-1">5k+</p>
              <p className="text-sm font-bold text-gray-900 leading-tight">Homes connected in Bangalore.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee for Proof of Work */}
      <div className="relative mt-20 pb-10">
        <div className="mb-8 text-center px-4">
          <h3 className="text-2xl font-bold text-gray-800">Our Recent Work</h3>
          <p className="text-gray-500 text-sm mt-2">Swipe through our seamless installations</p>
        </div>
        
        {/* Left/Right Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex overflow-hidden group">
          <div className="flex shrink-0 animate-marquee hover:[animation-play-state:paused] gap-4 sm:gap-6 px-3">
            {marqueeImages.map((src, idx) => (
              <div key={idx} className="relative w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden shrink-0 shadow-md">
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
      
      {/* CSS For Infinite Marquee */}
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
