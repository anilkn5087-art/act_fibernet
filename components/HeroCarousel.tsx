'use client';
import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Zap, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const slides = [
  { id: 1, src: '/images/hero1.jpeg', alt: "ACT Fibernet Offers Slide 1", theme: "from-red-600 to-orange-500" },
  { id: 2, src: '/images/hero2.jpeg', alt: "ACT SmartWiFi 100 Mbps", theme: "from-purple-600 to-indigo-600" },
  { id: 3, src: '/images/hero3.jpeg', alt: "ACT Speed and Entertainment Pack", theme: "from-blue-600 to-cyan-500" },
  { id: 4, src: '/images/hero4.jpeg', alt: "Secure Every Corner with Tapo", theme: "from-rose-600 to-red-700" }
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4500); 
    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full bg-gray-50 py-16 lg:py-24 overflow-hidden">
      {/* Decorative Light Theme Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-red-100 blur-3xl opacity-50 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 w-[400px] h-[400px] rounded-full bg-indigo-50 blur-3xl opacity-60 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text Content */}
          <div className="text-center sm:text-left order-2 lg:order-1 pt-8 lg:pt-0">
            <div className="inline-flex items-center gap-2 mb-6">
               <span className="flex items-center gap-1.5 px-4 py-2 bg-red-50 text-red-600 font-bold rounded-full text-xs tracking-wider uppercase">
                  <Zap className="w-4 h-4 fill-current" /> Bangalore's Best
               </span>
               <span className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-gray-700 font-bold rounded-full text-xs tracking-wider uppercase">
                  Rated #1
               </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1]">
              Transform your <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Digital Life.</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-500 font-medium leading-relaxed max-w-lg mx-auto sm:mx-0">
              Experience next-level fiber speeds with ACT SmartWiFi®. Enjoy seamless 4K streaming, lag-free gaming, and rock-solid connectivity for every corner of your home.
            </p>

            <ul className="mt-8 space-y-3 hidden sm:block max-w-md mx-auto lg:mx-0">
              <li className="flex items-center gap-3 text-gray-700 font-semibold"><CheckCircle2 className="w-5 h-5 text-green-500" /> Free WiFi Router Included</li>
              <li className="flex items-center gap-3 text-gray-700 font-semibold"><CheckCircle2 className="w-5 h-5 text-green-500" /> Professional Grade Installation</li>
              <li className="flex items-center gap-3 text-gray-700 font-semibold"><CheckCircle2 className="w-5 h-5 text-green-500" /> Unlimited Broadband Data</li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 justify-center lg:justify-start">
               <a href="#offers" className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 transition-all w-full sm:w-auto text-center hover:-translate-y-0.5">
                 View Fastest Plans
               </a>
               <a href="tel:+919740436550" className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 font-bold rounded-full hover:border-gray-900 hover:bg-gray-50 transition-all w-full sm:w-auto text-center hover:-translate-y-0.5">
                 Contact Sales Now
               </a>
            </div>
          </div>

          {/* Right Column Carousel */}
          <div className="order-1 lg:order-2 relative w-full max-w-xl mx-auto lg:max-w-none">
            <div className="relative group rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] bg-white border border-gray-100 overflow-hidden aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-square flex flex-col justify-center transform transition-transform duration-500 hover:scale-[1.02]">
              
              <div className="overflow-hidden relative w-full h-full" ref={emblaRef}>
                <div className="flex touch-pan-y h-full">
                  {slides.map((slide) => (
                    <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full w-full">
                      {/* Outer gradient wrapper gives the images a premium frame */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${slide.theme} opacity-5 z-0`}></div>
                      
                      {/* Content padding frame */}
                      <div className="absolute inset-0 w-full h-full p-4 sm:p-6 lg:p-8 z-10 flex items-center justify-center">
                        <div className="relative w-full h-full bg-white rounded-3xl shadow-inner border border-gray-50 overflow-hidden mix-blend-multiply flex items-center justify-center">
                          <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={100}
                            priority={slide.id === 1}
                            className="object-contain w-full h-full p-2"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Controls */}
                <button
                  onClick={scrollPrev}
                  className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-md border border-gray-200 shadow-xl rounded-full flex items-center justify-center text-gray-900 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transform lg:-translate-x-4 lg:group-hover:translate-x-0 cursor-pointer z-30 focus:outline-none"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={scrollNext}
                  className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-md border border-gray-200 shadow-xl rounded-full flex items-center justify-center text-gray-900 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transform lg:translate-x-4 lg:group-hover:translate-x-0 cursor-pointer z-30 focus:outline-none"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
