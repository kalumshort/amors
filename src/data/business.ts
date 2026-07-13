// Canonical business info (NAP) — single source of truth reused across the
// site: header, footer, metadata, JSON-LD structured data, and CTAs.

export const business = {
  name: "Amor's Tyres and Servicing",
  shortName: "Amor's",
  legalName: "Amor's Tyres and Servicing",
  tagline: "Mobile tyres & vehicle servicing — we come to you",
  description:
    "Family-run mobile tyre fitting, vehicle servicing and diagnostics across Bristol and the surrounding areas. Transparent pricing, fast turnaround and 24/7 emergency call-out — we bring the garage to your home or workplace.",

  // Contact
  phoneDisplay: "07503 185406",
  phoneE164: "+447503185406",
  email: "amorstyresandservicing@outlook.com",
  whatsapp: "447503185406",

  // Location / base
  baseCity: "Bristol",
  region: "Bristol",
  country: "GB",
  geo: { lat: 51.454513, lng: -2.58791 },
  serviceRadiusKm: 30,
  priceRange: "££",

  // Hours
  hours: {
    weekdays: "Mon–Sat: 8:00am – 6:00pm",
    sunday: "Sunday: Emergency call-out only",
    emergency: "24/7 emergency call-out available",
  },
  openingHoursSpec: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },

  // Social
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61571107013301",
  },

  // BookMyGarage booking page. Our custom reg-plate lookup appends ?ref=<host>&vrm=<REG>
  // and opens this in a new tab.
  bookingUrl:
    "https://bookmygarage.com/garage-detail/amors-tyres-and-servicing-mobile/book/",

  // Canonical production URL (update if the domain changes)
  url: "https://amorstyresandservicing.co.uk",
} as const;

export const telHref = `tel:${business.phoneE164}`;
export const mailHref = `mailto:${business.email}`;
export const whatsappHref = `https://wa.me/${business.whatsapp}`;

// Trust points reused on home / about / location pages
export const trustPoints = [
  "Family-run & fully mobile — we come to you",
  "Transparent, upfront pricing with no hidden fees",
  "24/7 emergency call-out across Bristol",
  "Same-day fitting & servicing available",
  "Qualified, experienced technicians",
  "All makes & models covered",
] as const;
