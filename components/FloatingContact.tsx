'use client';
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingContact() {
  const WHATSAPP_NUMBER = "919740436550";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%21%20I%20am%20interested%20in%20an%20ACT%20Fibernet%20connection%20in%20Bangalore`;
  const PHONE_LINK = `tel:+${WHATSAPP_NUMBER}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col-reverse items-end justify-center gap-4">
      {/* WhatsApp Floating Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-[#25D366] font-bold text-sm py-2 px-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat on WhatsApp
        </span>
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-ping"></span>
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 border-2 border-white"></span>
      </motion.a>

      {/* Phone Call Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        href={PHONE_LINK} 
        className="group relative flex items-center justify-center w-14 h-14 bg-gray-900 border-2 border-white text-white rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        <Phone className="w-6 h-6 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-gray-900 font-bold text-sm py-2 px-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Call Now
        </span>
      </motion.a>
    </div>
  );
}
