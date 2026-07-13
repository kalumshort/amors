// Services offered — drives the services index and each /services/[slug] page.
// `icon` maps to a key in components/Icon.tsx.

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  /** Short label used in nav / cards */
  short: string;
  icon: string;
  /** One-line summary for cards + meta description */
  summary: string;
  /** Longer intro paragraph(s) for the service page */
  intro: string;
  /** Bullet benefits */
  benefits: string[];
  /** "What's included" / process steps */
  includes: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "mobile-tyre-fitting",
    name: "Mobile Tyre Fitting",
    short: "Tyre Fitting",
    icon: "tyre",
    summary:
      "New tyres supplied and fitted at your home or workplace — no garage visit needed.",
    intro:
      "Our mobile tyre fitting service brings the tyre bay to your driveway. Whether you've picked up a puncture, your tread is low, or you simply want a better price than the high-street chains, we supply and fit quality tyres wherever you are. All work is carried out with professional equipment and your old tyres are recycled responsibly.",
    benefits: [
      "We come to your home or workplace — no waiting rooms",
      "Budget, mid-range and premium brands supplied",
      "Correct fitting, balancing and valve replacement",
      "Old tyres removed and recycled",
      "Same-day and emergency fitting available",
    ],
    includes: [
      "Removal of the old tyre and wheel balancing",
      "New valve fitted as standard",
      "Torque-checked to manufacturer settings",
      "Puncture repairs where safe and legal",
    ],
    faqs: [
      {
        q: "Can you fit tyres at my workplace?",
        a: "Yes. As long as we can safely access the vehicle we can fit your tyres at home, at work, or roadside across Bristol and the surrounding areas.",
      },
      {
        q: "Do you supply the tyres or do I need to buy them?",
        a: "We can supply tyres to suit any budget, or fit tyres you've already purchased. Just let us know your size and preference when you book.",
      },
      {
        q: "How quickly can you come out?",
        a: "We offer same-day fitting in most cases and 24/7 emergency call-out for unsafe or dangerous tyres.",
      },
    ],
  },
  {
    slug: "vehicle-servicing",
    name: "Vehicle Servicing",
    short: "Servicing",
    icon: "spanner",
    summary:
      "Interim and full servicing carried out at your door to keep your car reliable and safe.",
    intro:
      "Regular servicing keeps your car running smoothly, protects its value and helps avoid expensive breakdowns. We carry out interim and full services at your home or workplace, using quality parts and manufacturer-recommended schedules — all logged so your service history stays intact.",
    benefits: [
      "Interim and full servicing options",
      "Genuine or quality-matched parts and oils",
      "Digital record for your service history",
      "Honest advice — we only recommend what's needed",
      "No need to lose a day dropping the car off",
    ],
    includes: [
      "Oil and filter change",
      "Full multi-point vehicle inspection",
      "Fluid top-ups and checks",
      "Brake, tyre and battery health check",
    ],
    faqs: [
      {
        q: "Will a mobile service affect my warranty?",
        a: "No. We service to manufacturer schedules using quality parts and provide a full record, keeping your warranty and service history valid.",
      },
      {
        q: "What's the difference between an interim and full service?",
        a: "An interim service (roughly every 6 months / 6,000 miles) covers essential checks and an oil change. A full service is more comprehensive and recommended annually.",
      },
    ],
  },
  {
    slug: "diagnostics",
    name: "Diagnostics",
    short: "Diagnostics",
    icon: "diagnostics",
    summary:
      "Warning light on? We plug in, read the fault codes and explain exactly what's wrong.",
    intro:
      "A dashboard warning light doesn't have to mean an expensive trip to the garage. Using professional diagnostic equipment we read your vehicle's fault codes at your location, pinpoint the problem and give you clear, jargon-free advice on what needs doing — and what doesn't.",
    benefits: [
      "Full engine and system fault-code reads",
      "Clear explanation of the problem and options",
      "Fixed-price diagnostics — no surprises",
      "Many faults repaired on the spot",
      "Save the cost of a main-dealer diagnosis",
    ],
    includes: [
      "OBD fault-code scan and interpretation",
      "Live data checks where needed",
      "Written summary of findings",
      "Honest repair recommendation",
    ],
    faqs: [
      {
        q: "My engine light is on — is it safe to drive?",
        a: "It depends on the fault. Call us and we'll advise. Many issues are minor, but some need immediate attention — our diagnostic check will tell you for certain.",
      },
      {
        q: "Can you fix the fault once you've found it?",
        a: "In many cases yes, on the same visit. For larger jobs we'll quote clearly before any work goes ahead.",
      },
    ],
  },
  {
    slug: "brake-repair",
    name: "Brake Repair",
    short: "Brakes",
    icon: "brake",
    summary:
      "Pads, discs and brake checks fitted at your door to keep you stopping safely.",
    intro:
      "Your brakes are the most important safety system on your car. If you've noticed squealing, grinding, a spongy pedal or longer stopping distances, we'll inspect and replace pads, discs and related components at your home or workplace using quality parts.",
    benefits: [
      "Brake pad and disc replacement",
      "Free brake inspection with any visit",
      "Quality parts to match your vehicle",
      "Squealing, grinding and vibration diagnosed",
      "Carried out safely at your location",
    ],
    includes: [
      "Inspection of pads, discs and calipers",
      "Replacement of worn components",
      "Brake fluid check",
      "Road-safety confirmation before we leave",
    ],
    faqs: [
      {
        q: "How do I know if my brakes need replacing?",
        a: "Common signs are squealing or grinding noises, a soft or vibrating pedal, or longer stopping distances. If in doubt, book a free brake check.",
      },
      {
        q: "Can you replace brakes on any car?",
        a: "We cover all makes and models. Let us know your vehicle when booking so we bring the correct parts.",
      },
    ],
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    short: "Batteries",
    icon: "battery",
    summary:
      "Flat battery? We test, supply and fit a new one wherever you're stranded.",
    intro:
      "A flat or failing battery is one of the most common reasons cars won't start — especially in cold weather. We test your battery and charging system on-site and, if needed, supply and fit a quality replacement so you're back on the road quickly. Ideal for driveway breakdowns and no-starts.",
    benefits: [
      "Free battery and charging-system test",
      "Quality replacement batteries supplied",
      "Fitted on your driveway or roadside",
      "Old battery recycled",
      "Fast emergency call-out for no-starts",
    ],
    includes: [
      "Battery health and alternator check",
      "Supply and fit of a matched battery",
      "Terminal clean and secure fitment",
      "Old battery taken away for recycling",
    ],
    faqs: [
      {
        q: "My car won't start — can you come out today?",
        a: "Yes. A no-start is often a flat battery and we prioritise these with same-day and emergency call-out across Bristol.",
      },
      {
        q: "How long does a car battery last?",
        a: "Typically 3–5 years. We'll test yours free of charge so you only replace it if it genuinely needs it.",
      },
    ],
  },
  {
    slug: "seasonal-tyre-change",
    name: "Seasonal Tyre Change",
    short: "Seasonal Tyres",
    icon: "season",
    summary:
      "Swap between summer, winter and all-season tyres — fitted and balanced at home.",
    intro:
      "If you run separate winter or summer wheels, we'll swap, balance and refit them at your home or workplace so you're ready for the conditions ahead. We can also advise on all-season tyres if you'd rather not switch twice a year.",
    benefits: [
      "Summer, winter and all-season changeovers",
      "Wheels balanced for a smooth ride",
      "Advice on the right tyre for your driving",
      "Convenient home or workplace fitting",
      "Off-season tyre storage advice",
    ],
    includes: [
      "Removal and refitting of seasonal wheels",
      "Balancing of each wheel",
      "Torque-check to correct settings",
      "Tread and pressure check",
    ],
    faqs: [
      {
        q: "Are winter tyres worth it in Bristol?",
        a: "If you drive in rural areas, commute early, or head to higher ground in winter, they noticeably improve grip below 7°C. We're happy to advise on whether they suit your driving.",
      },
      {
        q: "Should I choose all-season tyres instead?",
        a: "All-season tyres are a great compromise for many drivers, avoiding twice-yearly swaps. We can talk through the options for your vehicle.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
