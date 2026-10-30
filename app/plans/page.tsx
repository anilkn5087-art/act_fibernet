'use client';
import { useState } from 'react';
import { Zap, Router, Cpu, CheckCircle, Smartphone, Wifi } from 'lucide-react';

const speeds = ["50 Mbps", "100 Mbps", "200 Mbps", "400 Mbps", "500 Mbps", "1 Gbps"];

const ott = {
  netflix: { name: "Netflix", color: "bg-[#E50914]" },
  prime: { name: "Prime", color: "bg-[#00A8E1]" },
  hotstar: { name: "JioHotstar", color: "bg-[#113CCF]" },
  zee5: { name: "Zee5", color: "bg-[#8230C6]" },
  sunnxt: { name: "Sun NXT", color: "bg-[#F15A22]" },
  yupptv: { name: "YuppTV", color: "bg-gray-900" },
};

type Ott = { name: string; color: string };

// 3-month prices are rounded and include GST. null = not offered.
const plans = [
  {
    title: "PURE SPEED",
    desc: "High speed broadband plans",
    prices: [575, 775, 899, 1199, 1449, 2999],
    quarterly: [2036, 2744, 3182, 4244, 5129, null],
    otts: [] as Ott[],
    channels: null as string | null,
  },
  {
    title: "ENTERTAINMENT PACK 1",
    desc: "Plan + essential OTT packs",
    prices: [699, 899, 1049, 1349, 1599, 3049],
    quarterly: [2474, 3182, 3713, 4775, 5660, null],
    otts: [ott.hotstar, ott.zee5, ott.sunnxt, ott.yupptv],
    channels: "450+ Channels",
  },
  {
    title: "ENTERTAINMENT PACK 2",
    desc: "Plan + OTT packs with Prime Video",
    prices: [749, 949, 1149, 1449, 1699, 3099],
    quarterly: [2651, 3359, 4067, 5129, 6014, null],
    otts: [ott.prime, ott.hotstar, ott.zee5, ott.sunnxt, ott.yupptv],
    channels: "450+ Live TV",
  },
  {
    title: "ENTERTAINMENT PACK 3",
    desc: "Plan + all OTT packs with Netflix",
    prices: [949, 1049, 1249, 1549, 1799, 3199],
    quarterly: [3359, 3713, 4421, 5660, 6399, null],
    otts: [ott.netflix, ott.prime, ott.hotstar, ott.zee5, ott.sunnxt, ott.yupptv],
    channels: "450+ Live TV",
  },
];

const meshPlans = [
  { type: "Mesh Speed Plan", speed: "200 Mbps", cost: 1025, gst: 184.5, threeMonths: 3629, sixMonths: 7254, entertainment: false },
  { type: "Mesh Speed Plan", speed: "400 Mbps", cost: 1275, gst: 229.5, threeMonths: 4515, sixMonths: 9027, entertainment: false },
  { type: "Mesh Speed Plan", speed: "500 Mbps", cost: 1625, gst: 292.5, threeMonths: 5738, sixMonths: 11505, entertainment: false },
  { type: "Entertainment with Mesh", speed: "200 Mbps", cost: 1375, gst: 247.5, threeMonths: 4867, sixMonths: 9735, entertainment: true },
  { type: "Entertainment with Mesh", speed: "400 Mbps", cost: 1675, gst: 301.5, threeMonths: 5919, sixMonths: 11859, entertainment: true },
  { type: "Entertainment with Mesh", speed: "500 Mbps", cost: 1925, gst: 346.5, threeMonths: 6818, sixMonths: 13629, entertainment: true },
];

const meshOtts = [ott.netflix, ott.prime, ott.hotstar, ott.zee5, ott.sunnxt, ott.yupptv];

type Billing = 'monthly' | 'quarterly';

type Selection =
  | { kind: 'standard'; planIdx: number; speedIdx: number; billing: Billing }
  | { kind: 'mesh'; idx: number; duration: 3 | 6 };

const formatINR = (n: number) => n.toLocaleString('en-IN', { maximumFractionDigits: 2 });

const font = { fontFamily: 'Hanken Grotesk' };

function OttChips({ otts, channels, className = '' }: { otts: Ott[]; channels: string | null; className?: string }) {
  if (otts.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {otts.map((o, oi) => (
        <div key={oi} className={`px-2 py-1 ${o.color} text-[10px] font-bold rounded text-white flex items-center justify-center shadow-sm uppercase tracking-wider`} title={o.name}>
          {o.name}
        </div>
      ))}
      {channels && (
        <div className="px-2 py-1 bg-sky-600 text-[10px] font-bold rounded text-white flex items-center justify-center shadow-sm uppercase tracking-wider">
          {channels}
        </div>
      )}
    </div>
  );
}

export default function PlansPage() {
  const [billing, setBilling] = useState<Billing>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<Selection | null>(null);

  const isStandardSelected = (planIdx: number, speedIdx: number) =>
    selectedPlan?.kind === 'standard' && selectedPlan.planIdx === planIdx && selectedPlan.speedIdx === speedIdx && selectedPlan.billing === billing;

  const isMeshSelected = (idx: number, duration: 3 | 6) =>
    selectedPlan?.kind === 'mesh' && selectedPlan.idx === idx && selectedPlan.duration === duration;

  const handleCheckout = () => {
    if (!selectedPlan) {
      alert("Please select a plan from the table first!");
      return;
    }

    let message: string;
    if (selectedPlan.kind === 'standard') {
      const { planIdx, speedIdx, billing } = selectedPlan;
      const plan = plans[planIdx];
      const speed = speeds[speedIdx];
      message = billing === 'monthly'
        ? `Hi! I'm interested in the ACT Fibernet ${plan.title} plan offering ${speed} at ₹${plan.prices[speedIdx]}/month. Can you help me set this up?`
        : `Hi! I'm interested in the ACT Fibernet ${plan.title} plan offering ${speed} for 3 months at ₹${formatINR(plan.quarterly[speedIdx]!)} (incl. GST). Can you help me set this up?`;
    } else {
      const mesh = meshPlans[selectedPlan.idx];
      const total = selectedPlan.duration === 3 ? mesh.threeMonths : mesh.sixMonths;
      message = `Hi! I'm interested in the ACT Fibernet ${mesh.type} offering ${mesh.speed} for ${selectedPlan.duration} months at ₹${formatINR(total)} (incl. GST). Can you help me set this up?`;
    }

    const whatsappUrl = `https://wa.me/919740436550?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-6 text-gray-900 tracking-tight" style={font}>
          Broadband plans in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 underline decoration-red-500/30 underline-offset-4">Bengaluru ▼</span>
        </h1>

        {/* Sub Info Row */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-8 mb-8 text-sm md:text-base text-gray-700 font-semibold" style={font}>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <Router className="w-5 h-5 text-red-500" />
            <span>Free Hi-End Router*</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <Cpu className="w-5 h-5 text-orange-500" />
            <span>Smart WiFi Powered by AI</span>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-200" style={font}>
            {(['monthly', 'quarterly'] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm transition-colors ${billing === b ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow' : 'text-gray-600 hover:text-red-500'}`}
              >
                {b === 'monthly' ? 'Monthly' : '3 Months (Incl. GST)'}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Table — desktop */}
        <div className="hidden lg:block">
          {/* Speed Header */}
          <div className="grid grid-cols-[1.6fr_repeat(6,minmax(0,1fr))] mb-6 rounded-xl overflow-hidden shadow-md border border-gray-200">
            <div className="bg-yellow-400 p-4 font-bold flex items-center justify-center gap-2 text-black text-lg" style={font}>
              <Zap className="w-5 h-5 fill-current" />
              Speed
            </div>
            {speeds.map((speed, i) => (
              <div key={i} className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 flex items-center justify-center text-center font-bold text-base xl:text-lg border-l border-gray-700" style={font}>
                {speed}
              </div>
            ))}
          </div>

          {/* Plans */}
          <div className="flex flex-col gap-4">
            {plans.map((plan, idx) => (
              <div key={idx} className="grid grid-cols-[1.6fr_repeat(6,minmax(0,1fr))] rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white items-stretch transition-all hover:shadow-md">

                {/* Left Info Box */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-5 flex flex-col justify-center border-r border-gray-200 shadow-[inset_-10px_0_20px_-15px_rgba(0,0,0,0.1)]">
                  <h2 className="text-gray-900 font-black text-lg tracking-tight leading-tight mb-1" style={font}>
                    {plan.title}
                  </h2>
                  <p className="text-xs text-gray-500 mb-3" style={{ ...font, fontWeight: 600 }}>
                    {plan.desc}
                  </p>
                  <OttChips otts={plan.otts} channels={plan.channels} className="mt-auto" />
                </div>

                {/* Price Grid */}
                {plan.prices.map((monthly, i) => {
                  const price = billing === 'monthly' ? monthly : plan.quarterly[i];
                  const isSelected = isStandardSelected(idx, i);

                  if (price === null) {
                    return (
                      <div key={i} className="flex items-center justify-center p-4 border-r border-gray-100 last:border-0 text-center text-xs font-bold text-gray-400 uppercase tracking-wider" style={font}>
                        Monthly only
                      </div>
                    );
                  }

                  return (
                    <label key={i} className={`cursor-pointer group flex relative border-r border-gray-100 last:border-0 transition-colors ${isSelected ? 'bg-red-50/50 shadow-inner' : 'hover:bg-red-50/20'}`}>
                      <input
                        type="radio"
                        name="selected-plan"
                        className="absolute top-3 left-3 w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 opacity-0 group-hover:opacity-30 checked:opacity-100 transition-opacity"
                        checked={isSelected}
                        onChange={() => setSelectedPlan({ kind: 'standard', planIdx: idx, speedIdx: i, billing })}
                      />
                      <div className="flex-1 p-4 flex flex-col items-center justify-center">
                        <span className={`text-xl xl:text-2xl font-black transition-colors ${isSelected ? 'text-red-600' : 'text-gray-900 group-hover:text-red-500'}`} style={font}>
                          ₹{formatINR(price)}
                        </span>
                        <span className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider block" style={font}>
                          {billing === 'monthly' ? '/ month' : '/ 3 months'}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Plans Cards — mobile & tablet */}
        <div className="lg:hidden flex flex-col gap-5">
          {plans.map((plan, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white">
              <div className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-5 border-b border-gray-200">
                <h2 className="text-gray-900 font-black text-lg tracking-tight leading-tight mb-1" style={font}>
                  {plan.title}
                </h2>
                <p className="text-xs text-gray-500 mb-3" style={{ ...font, fontWeight: 600 }}>
                  {plan.desc}
                </p>
                <OttChips otts={plan.otts} channels={plan.channels} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4">
                {plan.prices.map((monthly, i) => {
                  const price = billing === 'monthly' ? monthly : plan.quarterly[i];
                  const isSelected = isStandardSelected(idx, i);

                  if (price === null) {
                    return (
                      <div key={i} className="rounded-lg border border-dashed border-gray-200 p-3 flex flex-col items-center justify-center text-center" style={font}>
                        <span className="text-xs font-bold text-gray-500">{speeds[i]}</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">Monthly only</span>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={i}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedPlan({ kind: 'standard', planIdx: idx, speedIdx: i, billing })}
                      className={`rounded-lg border p-3 flex flex-col items-center justify-center text-center transition-colors ${isSelected ? 'border-red-500 bg-red-50 ring-2 ring-red-500/30' : 'border-gray-200 hover:border-red-300 hover:bg-red-50/30'}`}
                      style={font}
                    >
                      <span className="flex items-center gap-1 text-xs font-bold text-gray-600">
                        <Zap className="w-3 h-3 text-yellow-500 fill-current" />
                        {speeds[i]}
                      </span>
                      <span className={`text-xl font-black mt-1 ${isSelected ? 'text-red-600' : 'text-gray-900'}`}>
                        ₹{formatINR(price)}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        {billing === 'monthly' ? '/ month' : '/ 3 months'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Mesh Plans */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-yellow-400 text-black text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full mb-4" style={font}>
              <Wifi className="w-4 h-4" /> Powered by 2 Routers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-2" style={font}>
              Mesh Plans — <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">End to End Coverage</span>
            </h2>
            <p className="text-sm text-gray-500 font-semibold" style={font}>
              Stronger signal everywhere. Entertainment plans include:
            </p>
            <OttChips otts={meshOtts} channels="400+ Live TV Channels" className="justify-center mt-3" />
          </div>

          {/* Mesh Table — tablet & desktop */}
          <div className="hidden md:block rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white">
            <div className="grid grid-cols-[1.4fr_repeat(5,minmax(0,1fr))] bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold text-center text-sm lg:text-base" style={font}>
              <div className="p-3 lg:p-4 bg-yellow-400 text-black flex items-center justify-center">Plan Type</div>
              <div className="p-3 lg:p-4 border-l border-gray-700 flex items-center justify-center">Speed</div>
              <div className="p-3 lg:p-4 border-l border-gray-700">Plan Cost <span className="block text-xs font-semibold text-gray-300">(Excl. GST)</span></div>
              <div className="p-3 lg:p-4 border-l border-gray-700 flex items-center justify-center">GST (18%)</div>
              <div className="p-3 lg:p-4 border-l border-gray-700">3 Months <span className="block text-xs font-semibold text-gray-300">Including GST</span></div>
              <div className="p-3 lg:p-4 border-l border-gray-700">6 Months <span className="block text-xs font-semibold text-gray-300">Including GST</span></div>
            </div>

            {meshPlans.map((mesh, idx) => (
              <div key={idx} className={`grid grid-cols-[1.4fr_repeat(5,minmax(0,1fr))] text-center border-t border-gray-100 items-stretch text-sm lg:text-base ${mesh.entertainment ? 'bg-yellow-50/40' : ''}`} style={font}>
                <div className="p-3 lg:p-4 font-black text-gray-900 text-left flex items-center">{mesh.type}</div>
                <div className="p-3 lg:p-4 font-black text-red-600 flex items-center justify-center">{mesh.speed}</div>
                <div className="p-3 lg:p-4 font-bold text-gray-800 flex items-center justify-center">₹{formatINR(mesh.cost)}</div>
                <div className="p-3 lg:p-4 font-semibold text-gray-500 flex items-center justify-center">₹{mesh.gst.toFixed(2)}</div>
                {([3, 6] as const).map((duration) => {
                  const total = duration === 3 ? mesh.threeMonths : mesh.sixMonths;
                  const isSelected = isMeshSelected(idx, duration);
                  return (
                    <label key={duration} className={`cursor-pointer group flex relative border-l border-gray-100 transition-colors ${isSelected ? 'bg-red-50/50 shadow-inner' : 'hover:bg-red-50/20'}`}>
                      <input
                        type="radio"
                        name="selected-plan"
                        className="absolute top-2 left-2 w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 opacity-0 group-hover:opacity-30 checked:opacity-100 transition-opacity"
                        checked={isSelected}
                        onChange={() => setSelectedPlan({ kind: 'mesh', idx, duration })}
                      />
                      <span className={`flex-1 p-3 lg:p-4 flex items-center justify-center text-lg lg:text-xl font-black transition-colors ${isSelected ? 'text-red-600' : 'text-gray-900 group-hover:text-red-500'}`}>
                        ₹{formatINR(total)}
                      </span>
                    </label>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Mesh Cards — mobile */}
          <div className="md:hidden flex flex-col gap-4">
            {meshPlans.map((mesh, idx) => (
              <div key={idx} className={`rounded-xl overflow-hidden shadow-sm border border-gray-200 ${mesh.entertainment ? 'bg-yellow-50/60' : 'bg-white'}`} style={font}>
                <div className="flex items-center justify-between gap-3 p-4 border-b border-gray-100">
                  <h3 className="font-black text-gray-900 leading-tight">{mesh.type}</h3>
                  <span className="shrink-0 font-black text-red-600">{mesh.speed}</span>
                </div>
                <div className="px-4 pt-3 text-xs font-semibold text-gray-500">
                  ₹{formatINR(mesh.cost)} / month + ₹{mesh.gst.toFixed(2)} GST (18%)
                </div>
                <div className="grid grid-cols-2 gap-2 p-3">
                  {([3, 6] as const).map((duration) => {
                    const total = duration === 3 ? mesh.threeMonths : mesh.sixMonths;
                    const isSelected = isMeshSelected(idx, duration);
                    return (
                      <button
                        key={duration}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => setSelectedPlan({ kind: 'mesh', idx, duration })}
                        className={`rounded-lg border bg-white p-3 flex flex-col items-center text-center transition-colors ${isSelected ? 'border-red-500 bg-red-50 ring-2 ring-red-500/30' : 'border-gray-200 hover:border-red-300'}`}
                      >
                        <span className="text-xs font-bold text-gray-600">{duration} Months</span>
                        <span className={`text-xl font-black mt-1 ${isSelected ? 'text-red-600' : 'text-gray-900'}`}>₹{formatINR(total)}</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Incl. GST</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-12 flex flex-col items-center gap-4">
          <p className="text-sm font-semibold text-gray-500" style={font}>
            <CheckCircle className="w-4 h-4 inline mr-1 text-green-500" /> Includes free installation on 6 & 12 month plans.
          </p>
          <button
            onClick={handleCheckout}
            disabled={!selectedPlan}
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-red-500/30 transition-all text-lg sm:text-xl hover:-translate-y-1 transform flex items-center justify-center gap-2 group disabled:opacity-50 disabled:hover:shadow-none disabled:hover:translate-y-0 disabled:cursor-not-allowed"
            style={font}
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
