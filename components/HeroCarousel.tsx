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
    <section className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Full Screen Carousel */}
      <div className="relative w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                quality={100}
                priority={slide.id === 1}
                className="object-cover w-full h-full"
              />
              {/* Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.theme} opacity-60`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
            <span className="flex items-center gap-1.5 px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full text-xs tracking-wider uppercase">
              <Zap className="w-4 h-4 fill-current" /> Bangalore's Best
            </span>
            <span className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full text-xs tracking-wider uppercase">
              Rated #1
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[1.1] animate-slide-up">
            Transform your <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Digital Life.</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto animate-fade-in-delay">
            Experience next-level fiber speeds with ACT SmartWiFi®. Enjoy seamless 4K streaming, lag-free gaming, and rock-solid connectivity for every corner of your home.
          </p>

          <ul className="mt-8 space-y-3 hidden sm:block max-w-md mx-auto animate-fade-in-delay-2">
            <li className="flex items-center gap-3 text-white font-semibold"><CheckCircle2 className="w-5 h-5 text-green-400" /> Free WiFi Router Included</li>
            <li className="flex items-center gap-3 text-white font-semibold"><CheckCircle2 className="w-5 h-5 text-green-400" /> Professional Grade Installation</li>
            <li className="flex items-center gap-3 text-white font-semibold"><CheckCircle2 className="w-5 h-5 text-green-400" /> Unlimited Broadband Data</li>
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 justify-center animate-fade-in-delay-3">
            <a href="#offers" className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300 w-full sm:w-auto text-center hover:-translate-y-1 transform">
              View Fastest Plans
            </a>
            <a href="tel:+919740436550" className="px-8 py-4 bg-white text-gray-900 border-2 border-white font-bold rounded-full hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto text-center hover:-translate-y-1 transform">
              Contact Sales Now
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300"
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
