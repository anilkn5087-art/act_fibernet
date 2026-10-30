export const SITE_URL = 'https://www.fibernetbangalore.in';

export const PHONE_NUMBERS = ['9740436550'];

export type Area = {
  name: string;
  slug: string;
  pins: string[];
  zone: ZoneSlug;
};

export type ZoneSlug = 'south' | 'east' | 'west' | 'north';

export type Zone = {
  slug: ZoneSlug;
  name: string;
  areas: Area[];
};

const toSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const zone = (slug: ZoneSlug, name: string, list: [string, string[]][]): Zone => ({
  slug,
  name,
  areas: list.map(([areaName, pins]) => ({ name: areaName, slug: toSlug(areaName), pins, zone: slug })),
});

// PIN codes are indicative; some localities are served by several post offices.
export const zones: Zone[] = [
  zone('south', 'South Bangalore', [
    ['Banashankari', ['560050', '560070', '560085']],
    ['Srinagar', ['560050']],
    ['Jayanagar', ['560011', '560041']],
    ['JP Nagar', ['560078', '560076']],
    ['BTM Layout', ['560029', '560068']],
    ['Bannerghatta Road', ['560076', '560083']],
    ['Arekere', ['560076']],
    ['Hulimavu', ['560076']],
    ['Kumaraswamy Layout', ['560078']],
    ['Uttarahalli', ['560061']],
    ['Padmanabhanagar', ['560070']],
    ['Girinagar', ['560085']],
    ['Basavanagudi', ['560004']],
    ['Gottigere', ['560083']],
    ['Electronic City', ['560100']],
    ['Bommanahalli', ['560068']],
    ['Begur', ['560068']],
    ['HSR Layout', ['560102']],
  ]),
  zone('east', 'East Bangalore', [
    ['Whitefield', ['560066']],
    ['Marathahalli', ['560037']],
    ['Brookefield', ['560037']],
    ['Varthur', ['560087']],
    ['Sarjapur Road', ['560035']],
    ['Bellandur', ['560103']],
    ['Koramangala', ['560034', '560095']],
    ['Indiranagar', ['560038']],
    ['Domlur', ['560071']],
    ['CV Raman Nagar', ['560093']],
    ['KR Puram', ['560036']],
    ['Mahadevapura', ['560048']],
    ['Hoodi', ['560048']],
    ['Kadugodi', ['560067']],
    ['HAL', ['560008']],
    ['Ramamurthy Nagar', ['560016']],
    ['Horamavu', ['560043']],
    ['Banaswadi', ['560043']],
    ['Kasturinagar', ['560043']],
  ]),
  zone('west', 'West Bangalore', [
    ['Vijayanagar', ['560040']],
    ['Rajajinagar', ['560010']],
    ['Nagarbhavi', ['560072']],
    ['Kengeri', ['560060']],
    ['RR Nagar', ['560098']],
    ['Chandra Layout', ['560040']],
    ['Attiguppe', ['560040']],
    ['Basaveshwaranagar', ['560079']],
    ['Vijayanagar Extension', ['560040']],
    ['Kamakshipalya', ['560079']],
    ['Sunkadakatte', ['560091']],
    ['Magadi Road', ['560023']],
    ['Peenya', ['560058']],
    ['Yeshwanthpur', ['560022']],
    ['Malleshwaram', ['560003']],
    ['Mahalakshmi Layout', ['560086']],
    ['Laggere', ['560058']],
  ]),
  zone('north', 'North Bangalore', [
    ['Hebbal', ['560024']],
    ['Yelahanka', ['560064']],
    ['Sahakara Nagar', ['560092']],
    ['Jakkur', ['560064']],
    ['Thanisandra', ['560077']],
    ['Hennur', ['560043']],
    ['Kalyan Nagar', ['560043']],
    ['HRBR Layout', ['560043']],
    ['RT Nagar', ['560032']],
    ['Mathikere', ['560054']],
    ['Vidyaranyapura', ['560097']],
    ['Jalahalli', ['560013']],
    ['Jalahalli West', ['560015']],
    ['Yelahanka New Town', ['560064']],
    ['Nagawara', ['560045']],
    ['Sanjay Nagar', ['560094']],
    ['Devanahalli', ['562110']],
  ]),
];

export const allAreas: Area[] = zones.flatMap((z) => z.areas);

export const getArea = (slug: string) => allAreas.find((a) => a.slug === slug);

export const getZone = (slug: ZoneSlug) => zones.find((z) => z.slug === slug)!;

export const areaHref = (area: Area) => `/broadband-bangalore/${area.slug}`;

// Customer search phrases, each pointing at the page that answers it.
export const popularSearches: { label: string; href: string }[] = [
  { label: 'ACT Fibernet Bangalore', href: '/' },
  { label: 'ACT Broadband Bangalore', href: '/plans' },
  { label: 'ACT Fibernet New Connection', href: '/broadband-bangalore' },
  { label: 'Best Broadband in Bangalore', href: '/plans' },
  { label: 'High Speed Fiber Internet Bangalore', href: '/plans' },
  { label: 'Unlimited WiFi Plans Bangalore', href: '/plans' },
  { label: 'Home Broadband Bangalore', href: '/plans' },
  { label: 'Office Internet Connection Bangalore', href: '/broadband-bangalore' },
  { label: '100 Mbps Broadband Bangalore', href: '/plans' },
  { label: '200 Mbps Fiber Internet Bangalore', href: '/plans' },
  { label: 'ACT WiFi Installation Bangalore', href: '/broadband-bangalore' },
  { label: 'Same Day Broadband Installation Bangalore', href: '/broadband-bangalore' },
  { label: 'ACT Broadband South Bangalore', href: '/broadband-bangalore#south' },
];

// Areas highlighted in the footer (the full list lives on /broadband-bangalore).
export const footerAreaSlugs = [
  'banashankari', 'srinagar', 'jp-nagar', 'jayanagar', 'btm-layout', 'hulimavu', 'arekere', 'electronic-city', 'hsr-layout',
  'whitefield', 'marathahalli', 'koramangala', 'indiranagar',
  'rajajinagar', 'vijayanagar',
  'yelahanka', 'hebbal',
];
