'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Tv, Gamepad2, Zap, CheckCircle2, MessageCircle } from 'lucide-react';

const plans = [
  {
    category: "Speed",
    id: "speed-1",
    speed: "50 Mbps", price: "₹559", name: "Pure Speed Base",
    color: "from-blue-500 to-cyan-500", text: "text-blue-600",
    features: ["Unlimited Data", "Good for 1-2 devices", "Free Router Usage"], icon: Wifi
  },
  {
    category: "Speed",
    id: "speed-2",
    speed: "100 Mbps", price: "₹775", name: "Smart WiFi Plus",
    color: "from-red-500 to-orange-500", text: "text-red-600", popular: true,
    features: ["Unlimited Data", "Smart WiFi AI Optimizer", "Great for Streaming"], icon: Zap
  },
  {
    category: "Speed",
    id: "speed-3",
    speed: "200 Mbps", price: "₹899", name: "Family Speed Max",
    color: "from-purple-500 to-indigo-500", text: "text-purple-600",
    features: ["Unlimited Data", "Handles 4-5 devices easily", "Free Router Usage"], icon: Gamepad2
  },
  {
    category: "Entertainment",
    id: "ent-1",
    speed: "400 Mbps", price: "₹1199", name: "Entertainment Pack 1",
    color: "from-pink-500 to-rose-500", text: "text-pink-600",
    features: ["Unlimited Data", "Premium OTT (ZEE5, SunNXT)", "Dual Band Router"], icon: Tv
  },
  {
    category: "Entertainment",
    id: "ent-2",
    speed: "1 Gbps", price: "₹2999", name: "Mesh Gigabit Elite",
    color: "from-gray-700 to-gray-900", text: "text-gray-900", popular: true,
    features: ["Unlimited Data", "Zero Lag Gaming & 4K Streaming", "Mesh Powered (2 Routers)"], icon: Wifi
  }
];

export default function OffersSection() {
  const WHATSAPP_NUMBER = "919740436550";
  const [activeTab, setActiveTab] = useState<"Speed" | "Entertainment">("Speed");

  const filteredPlans = plans.filter(p => p.category === activeTab);

  return (
    <section id="offers" className="py-24 relative overflow-hidden bg-gray-50 text-gray-900 z-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter mb-4"
          >
            Find Your <span className="text-red-600">Perfect Plan.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-xl"
          >
            Stream, game, and work flawlessly with our tailored fiber plans. Choose purely speed or bundled entertainment.
          </motion.p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full shadow-md border border-gray-200 inline-flex relative">
            <button
              onClick={() => setActiveTab("Speed")}
              className={`relative z-10 px-8 py-3 text-sm font-bold rounded-full transition-colors ${activeTab === 'Speed' ? 'text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Pure Speed
            </button>
            <button
              onClick={() => setActiveTab("Entertainment")}
              className={`relative z-10 px-8 py-3 text-sm font-bold rounded-full transition-colors ${activeTab === 'Entertainment' ? 'text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Speed + Entertainment
            </button>

            {/* Sliding Tab Background */}
            <div className={`absolute top-1.5 bottom-1.5 w-1/2 bg-red-600 rounded-full shadow-sm transition-transform duration-300 ease-in-out ${activeTab === 'Speed' ? 'translate-x-0' : 'translate-x-[calc(100%-8px)]'}`}></div>
          </div>
        </div>

        {/* Horizontal Stacked List Layout */}
        <div className="flex flex-col gap-6">
          {filteredPlans.map((plan, idx) => {
            const Icon = plan.icon;
            const message = `Hi! I am interested in the ACT ${plan.name} (${plan.speed}) plan for ${plan.price}/month.`;
            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center justify-between bg-white rounded-[2rem] p-6 lg:p-8 border ${plan.popular ? 'border-red-200 shadow-xl shadow-red-100/50' : 'border-gray-200 shadow-md hover:shadow-lg'} transition-all`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-gradient-to-r from-red-600 to-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    Recommended Deal
                  </div>
                )}

                {/* Left: Speed & Name */}
                <div className="flex items-center gap-6 w-full lg:w-1/3 mb-6 lg:mb-0">
                  <div className={`w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${plan.color} p-0.5 shrink-0 flex items-center justify-center shadow-inner`}>
                    <div className="w-full h-full bg-white rounded-[1.15rem] flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${plan.text}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-1">
                      {plan.name}
                    </h3>
                    <span className="text-4xl font-black tracking-tight text-gray-900 block leading-none">
                      {plan.speed}
                    </span>
                  </div>
                </div>

                {/* Middle: Features */}
                <div className="w-full lg:w-1/3 mb-8 lg:mb-0 border-t border-b lg:border-t-0 lg:border-b-0 border-gray-100 py-6 lg:py-0 lg:px-8 lg:border-l lg:border-r">
                  <ul className="space-y-3">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 opacity-80" />
                        <span className="text-sm font-semibold text-gray-600 leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Price & CTA */}
                <div className="w-full lg:w-auto flex flex-col md:flex-row lg:flex-col items-center justify-between lg:items-end gap-4 lg:gap-2 pl-0 lg:pl-8">
                  <div className="text-center md:text-left lg:text-right">
                    <div className="flex items-baseline justify-center md:justify-start lg:justify-end gap-1">
                      <span className={`text-4xl font-black ${plan.popular ? 'text-red-600' : 'text-gray-900'}`}>{plan.price}</span>
                      <span className="text-gray-500 font-bold text-sm">/month</span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">+ GST</span>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full md:w-auto px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 ${plan.popular
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-900'
                      }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {plan.popular ? 'GET THIS PLAN' : 'SELECT PLAN'}
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
