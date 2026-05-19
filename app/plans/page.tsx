'use client';
import React, { useState } from 'react';
import { Zap, Router, Cpu, CheckCircle, Smartphone } from 'lucide-react';

const speeds = ["50 Mbps", "100 Mbps", "200 Mbps", "400 Mbps", "500 Mbps", "600 Mbps", "1 Gbps"];

const plans = [
  {
    title: "THE POWER PACK",
    desc: "A complete package with OTT included",
    prices: [949, 1049, 1249, 1549, 1899, 2299, 3199],
    otts: [
      { name: "Netflix", color: "bg-[#E50914]" },
      { name: "Prime", color: "bg-[#00A8E1]" },
      { name: "Disney+", color: "bg-[#113CCF]" },
      { name: "+3 More", color: "bg-gray-600" }
    ]
  },
  {
    title: "THE VALUE PACK",
    desc: "A value plan with essential OTTs",
    prices: [749, 949, 1149, 1449, 1699, 2099, 3099],
    otts: [
      { name: "Prime", color: "bg-[#00A8E1]" },
      { name: "Disney+", color: "bg-[#113CCF]" },
      { name: "Zee5", color: "bg-[#8230C6]" },
    ]
  },
  {
    title: "THE STARTER PACK",
    desc: "Speed plans with select OTTs",
    prices: [675, 899, 1049, 1350, 1599, 2049, 3049],
    otts: [
      { name: "Disney+", color: "bg-[#113CCF]" },
      { name: "SonyLIV", color: "bg-[#FF3B30]" }
    ]
  },
  {
    title: "THE PERFORMANCE PACK",
    desc: "High speed broadband plans",
    prices: [575, 775, 899, 1199, 1449, 2099, 2999],
    otts: []
  },
];

export default function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<{planIdx: number, speedIdx: number} | null>(null);

  const handleSelect = (planIdx: number, speedIdx: number) => {
    setSelectedPlan({ planIdx, speedIdx });
  };

  const handleCheckout = () => {
    if (!selectedPlan) {
      alert("Please select a plan from the table first!");
      return;
    }

    const { planIdx, speedIdx } = selectedPlan;
    const planName = plans[planIdx].title;
    const speed = speeds[speedIdx];
    const price = plans[planIdx].prices[speedIdx];

    const message = `Hi! I'm interested in the ACT Fibernet ${planName.trim()} offering ${speed} at ₹${price}/month. Can you help me set this up?`;
    const whatsappUrl = `https://wa.me/919740436550?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black text-center mb-6 text-gray-900 tracking-tight" style={{ fontFamily: 'Hanken Grotesk' }}>
          Broadband plans in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 underline decoration-red-500/30 underline-offset-4">Bengaluru ▼</span>
        </h1>

        {/* Sub Info Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-10 text-sm md:text-base text-gray-700 font-semibold" style={{ fontFamily: 'Hanken Grotesk' }}>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <Router className="w-5 h-5 text-red-500" />
            <span>Free Hi-End Router*</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <Cpu className="w-5 h-5 text-orange-500" />
            <span>Smart WiFi Powered by AI</span>
          </div>
        </div>

        {/* Scrollable Container for Plans Table */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[1000px]">
            {/* Speed Header */}
            <div className="grid grid-cols-8 mb-6 rounded-xl overflow-hidden shadow-md border border-gray-200">
              <div className="bg-yellow-400 p-4 font-bold flex items-center justify-center gap-2 text-black text-lg" style={{ fontFamily: 'Hanken Grotesk' }}>
                <Zap className="w-5 h-5 fill-current" />
                Speed
              </div>
              {speeds.map((speed, i) => (
                <div key={i} className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 flex items-center justify-center text-center font-bold text-lg border-l border-gray-700" style={{ fontFamily: 'Hanken Grotesk' }}>
                  {speed}
                </div>
              ))}
            </div>

            {/* Plans */}
            <div className="flex flex-col gap-4">
              {plans.map((plan, idx) => (
                <div key={idx} className="grid grid-cols-8 rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white items-stretch transition-all hover:shadow-md">
                  
                  {/* Left Info Box */}
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 flex flex-col justify-center border-r border-gray-200 shadow-[inset_-10px_0_20px_-15px_rgba(0,0,0,0.1)]">
                    <h2 className="text-gray-900 font-black text-xl tracking-tight leading-tight mb-1" style={{ fontFamily: 'Hanken Grotesk' }}>
                      {plan.title.replace("PACK", "").trim()}{" "}
                      <span className="text-red-500 block text-lg">PACK</span>
                    </h2>
                    <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: 'Hanken Grotesk', fontWeight: 600 }}>
                      {plan.desc}
                    </p>

                    {/* OTT Icons Conditional Rendering */}
                    {plan.otts.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {plan.otts.map((ott, oi) => (
                          <div key={oi} className={`px-2 py-1 ${ott.color} text-[10px] font-bold rounded text-white flex items-center justify-center shadow-sm uppercase tracking-wider`} title={ott.name}>
                            {ott.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price Grid */}
                  {plan.prices.map((price, i) => {
                    const isSelected = selectedPlan?.planIdx === idx && selectedPlan?.speedIdx === i;
                    
                    return (
                      <label key={i} className={`cursor-pointer group flex relative border-r border-gray-100 last:border-0 transition-colors ${isSelected ? 'bg-red-50/50 shadow-inner' : 'hover:bg-red-50/20'}`}>
                        <input 
                          type="radio" 
                          name="selected-plan" 
                          className="absolute top-4 left-4 w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 opacity-0 group-hover:opacity-30 checked:opacity-100 transition-opacity" 
                          checked={isSelected}
                          onChange={() => handleSelect(idx, i)}
                        />
                        <div className="flex-1 p-6 flex flex-col items-center justify-center">
                          <span className={`text-2xl font-black transition-colors ${isSelected ? 'text-red-600' : 'text-gray-900 group-hover:text-red-500'}`} style={{ fontFamily: 'Hanken Grotesk' }}>
                            ₹{price}
                          </span>
                          <span className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider block" style={{ fontFamily: 'Hanken Grotesk' }}>
                            / month
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 flex flex-col items-center gap-4">
          <p className="text-sm font-semibold text-gray-500" style={{ fontFamily: 'Hanken Grotesk' }}>
            <CheckCircle className="w-4 h-4 inline mr-1 text-green-500" /> Includes free installation on 6 & 12 month plans.
          </p>
          <button 
            onClick={handleCheckout}
            disabled={!selectedPlan}
            className="px-10 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-red-500/30 transition-all text-xl hover:-translate-y-1 transform flex items-center justify-center gap-2 group disabled:opacity-50 disabled:hover:shadow-none disabled:hover:translate-y-0 disabled:cursor-not-allowed" 
            style={{ fontFamily: 'Hanken Grotesk' }}
          >
            {selectedPlan ? (
              <>Chat with Sales <Smartphone className="w-5 h-5 group-hover:scale-110 transition-transform" /></>
            ) : (
              'Select a Plan'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}