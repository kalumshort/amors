// Service-area locations — drives the /locations index and each
// /locations/[slug] page. Every entry carries UNIQUE local detail
// (intro, landmarks, postcodes, nearby areas) so each page reads
// distinctly for local SEO and cross-links to neighbouring areas.

import type { Faq } from "./services";

export type Location = {
  slug: string;
  name: string;
  county: string;
  /** Unique 2–3 sentence local intro */
  intro: string;
  /** Nearby areas — slugs of other locations, used for internal linking */
  nearbyAreas: string[];
  /** Local postcode districts covered */
  postcodes: string[];
  /** Recognisable local landmarks / districts */
  landmarks: string[];
  lat: number;
  lng: number;
  /** Optional location-specific FAQ (falls back to a generated one) */
  faqs?: Faq[];
};

export const locations: Location[] = [
  {
    slug: "bristol",
    name: "Bristol",
    county: "Bristol",
    intro:
      "Bristol is the heart of everything we do. From the Harbourside and city centre out to the suburbs, our mobile team reaches drivers wherever they are — at home, at work or stranded roadside. No garage queues, no lost day; we bring the tools to you.",
    nearbyAreas: ["clifton", "bedminster", "fishponds", "kingswood", "filton"],
    postcodes: ["BS1", "BS2", "BS3", "BS5", "BS6", "BS7", "BS8"],
    landmarks: ["Harbourside", "Cabot Circus", "Bristol Temple Meads", "Broadmead", "Old Market"],
    lat: 51.454513,
    lng: -2.58791,
  },
  {
    slug: "clifton",
    name: "Clifton",
    county: "Bristol",
    intro:
      "Clifton's Georgian terraces and tight residential streets aren't the easiest place to get a car to a garage — which is exactly why our come-to-you service works so well here. From Whiteladies Road to the Suspension Bridge and down into Hotwells, we fit tyres and service cars right outside your door.",
    nearbyAreas: ["bristol", "bedminster", "fishponds", "filton"],
    postcodes: ["BS8", "BS6"],
    landmarks: ["Clifton Suspension Bridge", "Whiteladies Road", "The Downs", "Hotwells", "Redland"],
    lat: 51.462,
    lng: -2.618,
  },
  {
    slug: "bedminster",
    name: "Bedminster",
    county: "Bristol",
    intro:
      "Bedminster and the surrounding BS3 streets are busy, parking is tight and popping to a garage is a hassle. We come to you instead — whether you're near East Street, North Street or over towards Ashton Gate, we'll fit tyres or service your car on your own driveway.",
    nearbyAreas: ["bristol", "clifton", "keynsham"],
    postcodes: ["BS3", "BS4"],
    landmarks: ["East Street", "North Street", "Ashton Gate", "Southville", "Windmill Hill"],
    lat: 51.439,
    lng: -2.599,
  },
  {
    slug: "fishponds",
    name: "Fishponds",
    county: "Bristol",
    intro:
      "Covering Fishponds and the wider east Bristol area, we save you the trip to a garage across town. From Fishponds Road out towards Eastville, Frenchay and Downend, our mobile van brings tyre fitting, servicing and diagnostics to your door.",
    nearbyAreas: ["bristol", "kingswood", "filton", "bradley-stoke"],
    postcodes: ["BS16"],
    landmarks: ["Fishponds Road", "Eastville Park", "Frenchay", "Downend", "Straits Parade"],
    lat: 51.478,
    lng: -2.535,
  },
  {
    slug: "kingswood",
    name: "Kingswood",
    county: "South Gloucestershire",
    intro:
      "We're a familiar sight around Kingswood, Hanham and Warmley. Rather than sitting in a waiting room off the High Street, let us come to you — we handle tyres, brakes, batteries and full servicing wherever you're parked in the BS15 area.",
    nearbyAreas: ["fishponds", "bristol", "keynsham", "yate"],
    postcodes: ["BS15"],
    landmarks: ["Kingswood High Street", "Kings Chase Shopping Centre", "Hanham", "Warmley", "Cadbury Heath"],
    lat: 51.459,
    lng: -2.51,
  },
  {
    slug: "filton",
    name: "Filton",
    county: "South Gloucestershire",
    intro:
      "With aerospace and business parks bringing thousands of commuters into Filton every day, an on-site tyre and servicing team makes real sense here. We'll come to your workplace or home around Filton, Horfield and Southmead so a flat tyre never costs you a day off.",
    nearbyAreas: ["bradley-stoke", "bristol", "clifton", "fishponds"],
    postcodes: ["BS34", "BS7"],
    landmarks: ["Aerospace Bristol", "Filton Avenue", "Southmead", "Horfield", "The Mall Cribbs Causeway"],
    lat: 51.508,
    lng: -2.575,
  },
  {
    slug: "bradley-stoke",
    name: "Bradley Stoke",
    county: "South Gloucestershire",
    intro:
      "Bradley Stoke, Stoke Gifford and Little Stoke are full of busy driveways and business parks — ideal for a mobile service that fits around you. We come to your home or office, so whether you're near the Willow Brook Centre or working at Aztec West, your car is sorted while you carry on with your day.",
    nearbyAreas: ["filton", "thornbury", "yate", "fishponds"],
    postcodes: ["BS32"],
    landmarks: ["Willow Brook Centre", "Stoke Gifford", "Little Stoke", "Almondsbury", "Aztec West"],
    lat: 51.538,
    lng: -2.541,
  },
  {
    slug: "portishead",
    name: "Portishead",
    county: "North Somerset",
    intro:
      "Out on the coast, Portishead is a fair drive from the nearest tyre bays — so a mobile service is a genuine time-saver. From the Marina and High Street out to Portbury and Pill, we bring tyre fitting, servicing and 24/7 emergency tyre call-out to your door.",
    nearbyAreas: ["clevedon", "nailsea", "bristol"],
    postcodes: ["BS20"],
    landmarks: ["Portishead Marina", "High Street", "Portbury", "Pill", "Lake Grounds"],
    lat: 51.484,
    lng: -2.762,
  },
  {
    slug: "clevedon",
    name: "Clevedon",
    county: "North Somerset",
    intro:
      "Clevedon drivers no longer need to head inland for tyres and servicing — we come to the coast. From the seafront and Hill Road out towards Yatton and Kenn, our mobile team handles everything from a puncture to a full service on your driveway.",
    nearbyAreas: ["nailsea", "portishead", "bristol"],
    postcodes: ["BS21"],
    landmarks: ["Clevedon Pier", "Hill Road", "The Beach", "Yatton", "Kenn"],
    lat: 51.438,
    lng: -2.851,
  },
  {
    slug: "nailsea",
    name: "Nailsea",
    county: "North Somerset",
    intro:
      "Serving Nailsea, Backwell and Wraxall, we save you the trek into Bristol for routine car care. Whether you're near the Crown Glass Shopping Centre or tucked away in a village lane, our mobile fitters come to you across the BS48 area.",
    nearbyAreas: ["clevedon", "portishead", "bristol"],
    postcodes: ["BS48"],
    landmarks: ["Crown Glass Shopping Centre", "Backwell", "Wraxall", "Flax Bourton", "Nailsea School"],
    lat: 51.43,
    lng: -2.76,
  },
  {
    slug: "keynsham",
    name: "Keynsham",
    county: "Bath & North East Somerset",
    intro:
      "Sat between Bristol and Bath, Keynsham is perfectly placed for our mobile service. From the High Street and the old Cadbury Somerdale site out to Saltford, we fit tyres and service cars at your home or workplace without you leaving the driveway.",
    nearbyAreas: ["bath", "bedminster", "kingswood", "bristol"],
    postcodes: ["BS31"],
    landmarks: ["Keynsham High Street", "Somerdale", "Saltford", "Chandag", "Memorial Park"],
    lat: 51.413,
    lng: -2.499,
  },
  {
    slug: "thornbury",
    name: "Thornbury",
    county: "South Gloucestershire",
    intro:
      "Thornbury and its surrounding villages sit a good distance from the nearest garages, so our come-to-you service is a real convenience here. From the High Street and Castle out to Alveston and Olveston, we bring the tyre bay and service ramp to your door.",
    nearbyAreas: ["bradley-stoke", "yate", "filton"],
    postcodes: ["BS35"],
    landmarks: ["Thornbury High Street", "Thornbury Castle", "Alveston", "Olveston", "Mundy Playing Fields"],
    lat: 51.61,
    lng: -2.525,
  },
  {
    slug: "yate",
    name: "Yate",
    county: "South Gloucestershire",
    intro:
      "We regularly serve Yate, Chipping Sodbury and the surrounding villages, bringing tyres, servicing and diagnostics to your driveway. Skip the trip to the shopping-centre garages — we'll come to your home or workplace across the BS37 area instead.",
    nearbyAreas: ["kingswood", "bradley-stoke", "thornbury"],
    postcodes: ["BS37"],
    landmarks: ["Yate Shopping Centre", "Chipping Sodbury", "Old Sodbury", "Westerleigh", "Peg Hill"],
    lat: 51.541,
    lng: -2.416,
  },
  {
    slug: "bath",
    name: "Bath",
    county: "Bath & North East Somerset",
    intro:
      "Bath's narrow, hilly streets and strict parking make a mobile car service especially welcome. From the city centre and Royal Crescent out to Twerton, Weston and Batheaston, we come to you for tyre fitting, servicing and diagnostics — no city-centre garage queues.",
    nearbyAreas: ["keynsham", "bristol", "bedminster"],
    postcodes: ["BA1", "BA2"],
    landmarks: ["Royal Crescent", "Bath city centre", "Twerton", "Weston", "Batheaston"],
    lat: 51.381,
    lng: -2.359,
  },
];

export const getLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);

export const getNearby = (loc: Location) =>
  loc.nearbyAreas
    .map((s) => locations.find((l) => l.slug === s))
    .filter((l): l is Location => Boolean(l));
