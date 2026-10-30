export const speeds = ["50 Mbps", "100 Mbps", "200 Mbps", "400 Mbps", "500 Mbps", "1 Gbps"];

export type Ott = { name: string; color: string };

export const ott = {
  netflix: { name: "Netflix", color: "bg-[#E50914]" },
  prime: { name: "Prime", color: "bg-[#00A8E1]" },
  hotstar: { name: "JioHotstar", color: "bg-[#113CCF]" },
  zee5: { name: "Zee5", color: "bg-[#8230C6]" },
  sunnxt: { name: "Sun NXT", color: "bg-[#F15A22]" },
  yupptv: { name: "YuppTV", color: "bg-gray-900" },
};

// 3-month prices are rounded and include GST. null = not offered.
export const plans = [
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

export const meshPlans = [
  { type: "Mesh Speed Plan", speed: "200 Mbps", cost: 1025, gst: 184.5, threeMonths: 3629, sixMonths: 7254, entertainment: false },
  { type: "Mesh Speed Plan", speed: "400 Mbps", cost: 1275, gst: 229.5, threeMonths: 4515, sixMonths: 9027, entertainment: false },
  { type: "Mesh Speed Plan", speed: "500 Mbps", cost: 1625, gst: 292.5, threeMonths: 5738, sixMonths: 11505, entertainment: false },
  { type: "Entertainment with Mesh", speed: "200 Mbps", cost: 1375, gst: 247.5, threeMonths: 4867, sixMonths: 9735, entertainment: true },
  { type: "Entertainment with Mesh", speed: "400 Mbps", cost: 1675, gst: 301.5, threeMonths: 5919, sixMonths: 11859, entertainment: true },
  { type: "Entertainment with Mesh", speed: "500 Mbps", cost: 1925, gst: 346.5, threeMonths: 6818, sixMonths: 13629, entertainment: true },
];

export const meshOtts = [ott.netflix, ott.prime, ott.hotstar, ott.zee5, ott.sunnxt, ott.yupptv];
