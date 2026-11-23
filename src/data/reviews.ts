// Real 5-star reviews from our Google Business Profile, quoted word for word
// and in full (copied 2026-11-23). Only use complete reviews, never a
// snippet Google has cut short with "More". Names are first name + initial.

export type Review = {
  name: string;
  area?: string;
  text: string;
};

const irina: Review = {
  name: "Irina D.",
  text: "Kieran did an amazing job changing 4 tyres on my EV today. Super efficient, friendly and professional. Competitive price and punctual. Excellent mobile service. Happy to recommend with confidence!",
};

const lee: Review = {
  name: "Lee B.",
  text: "Sorry for the late review. I was rescued on the M5 after a pot hole incident. Amors came out, called by the RAC, early on a Sunday morning coming back from the airport. Fab service, really quick attendance and changed my tyre at a reasonable price. Lovely chap, great service. Thank you.",
};

const stuart: Review = {
  name: "Stuart K.",
  text: "Incredibly efficient and tried to do the cheapest and easier option available, not just take my money. Would 100 percent use their services again.",
};

/** Shown on the homepage. */
export const homeReviews: Review[] = [irina, lee, stuart];

/** Tyre-fitting reviews, shown on the mobile tyre fitting page. */
export const tyreFittingReviews: Review[] = [
  {
    name: "Opal D.",
    text: "Fantastic service! I got my tyres replaced and a quick check-up done, and everything was handled smoothly. The staff were friendly, honest, and very professional. Prices were fair too—highly recommended!",
  },
  {
    name: "Zoey P.",
    text: "They were amazing! Went above and beyond for me so I could get my tyres on my car and back on the road.",
  },
  irina,
];

/** Call-out reviews, shown on the emergency tyre fitting page. */
export const emergencyReviews: Review[] = [
  lee,
  {
    name: "Ben S.",
    text: "Amazing service, quick response and a very good price for call out to home - would certainly use again. Many thanks.",
  },
  {
    name: "Dave S.",
    text: "Fast polite and tidy.",
  },
];

/** Shown on the puncture repair page. */
export const punctureReviews: Review[] = [
  stuart,
  {
    name: "Sandra B.",
    text: "Great experience using Amors tyres and servicing. Fantastic price and great communication throughout. Completed the work very quickly. Would highly recommend.",
  },
  {
    name: "Gellert",
    text: "Brilliant service, friendly and reliable. Would definitely recommend.",
  },
];
