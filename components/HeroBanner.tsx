'use client';
import React from 'react';
import { Users, Zap, Wifi } from 'lucide-react';
import Image from 'next/image';

const bannerSlide = { id: 1, src: '/images/hero9.jpeg', alt: "ACT SmartWiFi Banner", theme: "from-red-600 to-orange-500" };

export default function HeroBanner() {

  return (
    <div className="relative w-[calc(100%-1rem)] sm:w-auto bg-gradient-to-r from-[#7a0000] to-[#ff5a00] py-10 sm:py-16 lg:py-24 overflow-hidden   shadow-2xl">
      {/* Decorative Light Effect */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-orange-200 blur-3xl opacity-30 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Left Column Text Content */}
          <div className="text-left order-1 lg:order-1 pt-6 md:pt-0 w-full">

            {/* Highlight Tag */}
            <div style={{ fontFamily: 'Hanken Grotesk', fontWeight: 700 }} className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400 text-black font-bold rounded-full text-[10px] sm:text-sm uppercase mb-3 sm:mb-4">
              ACT SmartWiFi MADE FOR YOU
            </div>

            {/* Main Heading */}
            <h1 style={{ fontFamily: 'Hanken Grotesk', fontWeight: 900 }} className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-black text-white uppercase leading-[1.1] mb-4 sm:mb-6 drop-shadow-md">
              SMART IS A Wi-Fi<br />
              THAT COVERS EVERY ROOM
            </h1>

            {/* Pricing Badge */}
            <div style={{ fontFamily: 'Hanken Grotesk', fontWeight: 700 }} className="inline-flex flex-wrap items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-yellow-400 text-black font-bold rounded-full text-base sm:text-lg mb-6 sm:mb-8 shadow-md">
              <span className="whitespace-nowrap">Plans starting @</span> <span className="font-extrabold mx-1 whitespace-nowrap">₹575</span><span className="whitespace-nowrap">/month</span>
            </div>

            {/* CTA Block */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#offers" style={{ fontFamily: 'Hanken Grotesk', fontWeight: 700 }} className="inline-block w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all text-base sm:text-lg shadow-lg hover:-translate-y-1 transform">
                SWITCH NOW
              </a>
              <div className="flex flex-col">
                <p style={{ fontFamily: 'Hanken Grotesk', fontWeight: 500 }} className="text-white text-sm opacity-90 drop-shadow-sm">
                  Buy 6 Months, Get 1 Month Free*
                </p>
                <p style={{ fontFamily: 'Hanken Grotesk', fontWeight: 500 }} className="text-white text-[10px] sm:text-xs opacity-70 mt-1">
                  *T&C apply
                </p>
              </div>
            </div>

          </div>

          {/* Right Column Carousel */}
          <div className="order-2 lg:order-2 w-full max-w-sm sm:max-w-xl mx-auto lg:max-w-none mt-4 sm:mt-0">
            <div className="relative group rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] bg-white border border-gray-100 overflow-hidden aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-square flex flex-col justify-center transform transition-transform duration-500 hover:scale-[1.02]">

              {/* Static Banner Image */}
              <div className="relative w-full h-full">
                {/* Outer gradient wrapper gives the image a premium frame */}
                <div className={`absolute inset-0 bg-gradient-to-br ${bannerSlide.theme} opacity-5 z-0`}></div>

                {/* Content padding frame */}
                <div className="absolute inset-0 w-full h-full p-3 sm:p-6 lg:p-8 z-10 flex items-center justify-center">
                  <div className="relative w-full h-full bg-white rounded-2xl sm:rounded-3xl shadow-inner border border-gray-50 overflow-hidden mix-blend-multiply flex items-center justify-center">
                    <Image
                      src={bannerSlide.src}
                      alt={bannerSlide.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={100}
                      priority
                      className="object-fill w-full h-full p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Cards Section */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gradient-to-r from-red-900 to-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex sm:flex-col lg:flex-row items-center sm:items-start lg:items-center gap-4 hover:scale-[1.02] transition-transform duration-300 shadow-xl">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 text-white shrink-0" />
            <p style={{ fontFamily: 'Hanken Grotesk', fontWeight: 500 }} className="text-white font-semibold text-base sm:text-lg text-left">Join the 1 Cr+ family</p>
          </div>
          <div className="bg-gradient-to-r from-red-900 to-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex sm:flex-col lg:flex-row items-center sm:items-start lg:items-center gap-4 hover:scale-[1.02] transition-transform duration-300 shadow-xl">
            <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-white shrink-0" />
            <p style={{ fontFamily: 'Hanken Grotesk', fontWeight: 500 }} className="text-white font-semibold text-base sm:text-lg text-left">Experience equal upload & download speeds</p>
          </div>
          <div className="bg-gradient-to-r from-red-900 to-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex sm:flex-col lg:flex-row items-center sm:items-start lg:items-center gap-4 hover:scale-[1.02] transition-transform duration-300 shadow-xl">
            <Wifi className="w-10 h-10 sm:w-12 sm:h-12 text-white shrink-0" />
            <p style={{ fontFamily: 'Hanken Grotesk', fontWeight: 500 }} className="text-white font-semibold text-base sm:text-lg text-left">Get full home coverage with ACT Smart Wi-Fi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
