'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Tv, Gamepad2, Zap, CheckCircle2, MessageCircle } from 'lucide-react';

const plans = [
  {
    category: "Speed",
    id: "speed-1",
    speed: "50 Mbps", price: "₹575", name: "Pure Speed Base",
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
    <section id="offers" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-red-600/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] items-center">
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.26em] text-red-200"
            >
              Premium Fiber Offers
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight"
            >
              Choose the plan that keeps every device humming.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-xl text-lg text-slate-300"
            >
              Stream, game, and work without buffering. Flexible plans for single users, families, and entertainment-ready homes.
            </motion.p>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-black text-white">4K+</p>
                <p className="mt-2 text-slate-300">Hours of streaming supported</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-black text-white">99.9%</p>
                <p className="mt-2 text-slate-300">Network uptime guarantee</p>
              </div>
            </div>
            <a
              href="tel:+919740436550"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-7 py-4 text-sm font-bold text-white shadow-2xl shadow-red-500/30 transition hover:-translate-y-1"
            >
              Talk with an expert
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-[0_30px_100px_rgba(15,23,42,0.4)] backdrop-blur-xl">
            <div className="rounded-[1.75rem] bg-slate-950/95 p-6">
              <div className="flex items-center justify-between mb-8 gap-4">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Select a collection</p>
                  <h3 className="text-2xl font-black text-white">Smart bundles</h3>
                </div>
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-slate-300">Fastest</span>
              </div>

              <div className="mb-6 flex rounded-full border border-white/10 bg-white/5 p-1">
                <button
                  onClick={() => setActiveTab("Speed")}
                  className={`w-1/2 rounded-full px-5 py-3 text-sm font-semibold transition ${activeTab === 'Speed' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-slate-300 hover:text-white'}`}
                >
                  Pure Speed
                </button>
                <button
                  onClick={() => setActiveTab("Entertainment")}
                  className={`w-1/2 rounded-full px-5 py-3 text-sm font-semibold transition ${activeTab === 'Entertainment' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-slate-300 hover:text-white'}`}
                >
                  Entertainment
                </button>
              </div>

              <div className="space-y-6">
                {filteredPlans.map((plan, idx) => {
                  const Icon = plan.icon;
                  const message = `Hi! I am interested in the ACT ${plan.name} (${plan.speed}) plan for ${plan.price}/month.`;
                  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

                  return (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.08 }}
                      className={`rounded-[1.75rem] border ${plan.popular ? 'border-red-500/20 bg-gradient-to-br from-white/10 to-white/5 shadow-[0_20px_70px_rgba(248,113,113,0.12)]' : 'border-white/10 bg-white/5'} p-5`}>
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${plan.color} text-white`}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">{plan.name}</p>
                              <p className="text-3xl font-black text-white">{plan.speed}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {plan.features.map((feature, featureIndex) => (
                              <p key={featureIndex} className="text-sm text-slate-300">• {feature}</p>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 lg:items-end">
                          <div className="text-right">
                            <p className={`text-4xl font-black ${plan.popular ? 'text-red-300' : 'text-white'}`}>{plan.price}</p>
                            <p className="text-sm text-slate-400">+ GST / month</p>
                          </div>
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${plan.popular ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-white/10 text-white border border-white/10 hover:bg-white/15'}`}
                          >
                            {plan.popular ? 'Get This Plan' : 'Select Plan'}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
