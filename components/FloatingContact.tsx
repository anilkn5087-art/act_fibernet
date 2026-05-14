'use client';
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingContact() {
  const WHATSAPP_NUMBER = "919740436550";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%21%20I%20am%20interested%20in%20an%20ACT%20Fibernet%20connection%20in%20Bangalore`;
  const PHONE_LINK = `tel:+${WHATSAPP_NUMBER}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-white shadow-[0_14px_40px_rgba(56,189,248,0.35)] transition-all duration-300 hover:-translate-y-1"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -right-1 -top-1 inline-flex h-4 w-4 rounded-full bg-white" />
        <span className="absolute right-full mr-4 hidden rounded-xl bg-white px-3 py-2 text-xs font-bold text-slate-900 shadow-xl transition-opacity duration-300 group-hover:inline-flex">
          WhatsApp
        </span>
      </motion.a>

      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        href={PHONE_LINK} 
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-slate-900 border border-white/10 text-white shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 hidden rounded-xl bg-white px-3 py-2 text-xs font-bold text-slate-900 shadow-xl transition-opacity duration-300 group-hover:inline-flex">
          Call Now
        </span>
      </motion.a>
    </div>
  );
}
