import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t-4 border-red-600 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1 space-y-6">
            <div className="flex flex-col">
              <span className="font-extrabold text-3xl tracking-tight text-white leading-none">
                ACT <span className="text-red-500">FIBERNET</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Transforming your digital experience with Bangalore's fastest and most reliable internet connections. Premium fiber optic networks for robust home and business connectivity.
            </p>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-xs font-medium text-gray-300">
              Internet Service Provider
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#offers" className="hover:text-red-400 transition-colors"> Broadband Plans</a></li>
              <li><a href="#installation" className="hover:text-red-400 transition-colors"> Installation Showcase</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors"> Upgrade Plan</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors"> Smart WiFi / Mesh</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <a href="tel:+918123114647" className="hover:text-white transition-colors font-semibold">8123114647</a>
                  <a href="tel:+919740436550" className="hover:text-white transition-colors">9740436550</a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Globe className="w-5 h-5 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="https://www.actcorp.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">www.actcorp.in</a>
              </li>
            </ul>
          </div>

          {/* Location Area */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Our Location</h3>
            <a 
              href="https://maps.app.goo.gl/463PpFzznK672WCb9?g_st=aw" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-start gap-3 group"
            >
              <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-1 group-hover:scale-110 group-hover:animate-bounce transition-all" />
              <div className="text-sm hover:text-white transition-colors leading-relaxed">
                <p className="font-semibold text-white mb-1">Act Fibernet Bangalore</p>
                <p>Click here to view our exact store location on Google Maps.</p>
                <span className="inline-block mt-3 text-red-500 text-xs font-bold uppercase tracking-wider group-hover:underline">Get Directions &rarr;</span>
              </div>
            </a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center flex flex-col items-center">
          <p className="text-xs text-gray-500 mb-2">
            Disclaimer: Offers, prices, and speeds are subject to change. Terms &amp; conditions apply.
          </p>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} ACT Fibernet Bangalore. Independent Sales Partner. This is a promotional website.
          </p>
        </div>
      </div>
    </footer>
  );
}
