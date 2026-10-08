// Services offered — drives the services index and each /services/[slug] page.
// `icon` maps to a key in components/Icon.tsx.

export type Faq = { q: string; a: string };

export type ServiceSection = { heading: string; body: string };

export type Service = {
  slug: string;
  name: string;
  /** Short label used in nav / cards */
  short: string;
  icon: string;
  /** <title> for the service page (the layout appends the business name) */
  seoTitle: string;
  /** Page heading — carries "mobile" and the base city for local search */
  h1: string;
  /** Lower-case phrase used for in-sentence links on location pages */
  linkText: string;
  /** One-line summary for cards + meta description */
  summary: string;
  /** Longer intro paragraph(s) for the service page */
  intro: string;
  /** Extra body copy, rendered between the intro and the benefits */
  sections: ServiceSection[];
  /** Bullet benefits */
  benefits: string[];
  /** "What's included" / process steps */
  includes: string[];
  faqs: Faq[];
  /** Available 24/7 rather than during normal opening hours */
  roundTheClock?: boolean;
};

export const services: Service[] = [
  {
    slug: "mobile-tyre-fitting",
    name: "Mobile Tyre Fitting",
    short: "Tyre Fitting",
    icon: "tyre",
    seoTitle: "Mobile Tyre Fitting in Bristol",
    h1: "Mobile Tyre Fitting in Bristol",
    linkText: "mobile tyre fitting",
    summary:
      "New tyres supplied and fitted at your home or workplace — no garage visit needed.",
    intro:
      "Our mobile tyre fitting service brings the tyre bay to your driveway. Whether you've picked up a puncture, your tread is low, or you simply want a better price than the high-street chains, we supply and fit quality tyres wherever you are. All work is carried out with professional equipment and your old tyres are recycled responsibly.",
    sections: [
      {
        heading: "When do tyres need replacing?",
        body: "The legal minimum tread depth for a car in the UK is 1.6mm across the central three-quarters of the tyre, all the way round. Grip in the wet falls away well before that point, which is why many drivers choose to change at around 3mm. Tread isn't the only thing to watch: bulges or cuts in the sidewall, cracking in the rubber, uneven wear across the tyre and a slow puncture that keeps coming back are all reasons to have a tyre looked at.",
      },
      {
        heading: "How mobile tyre fitting works",
        body: "Give us your registration or the size printed on the side of your tyre — it looks like 205/55 R16 — and tell us where the vehicle is. We'll talk you through budget, mid-range and premium options and give you an upfront price. We then come to you with the tyres on board, remove each wheel, fit and balance the new tyre with a new valve, and torque the wheel back on to the manufacturer's setting. All we need is a safe, reasonably level place to work and your locking wheel nut key if the car has one.",
      },
      {
        heading: "What affects the price of new tyres",
        body: "Three things: the size of the tyre, the brand you choose and how many you need. Larger and lower-profile tyres cost more than common small-car sizes, and premium brands cost more than budget ones. We'll always tell you the full price before we set off, so there is nothing to add on the day.",
      },
    ],
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
        a: "We offer same-day fitting in most cases and 24/7 emergency tyre call-out for unsafe or dangerous tyres.",
      },
      {
        q: "How do I find my tyre size?",
        a: "It's printed on the sidewall of your current tyres as a code such as 205/55 R16 91V. If you can't read it, give us your registration and we'll look it up — but it's worth checking the tyre itself, as some cars are fitted with a different size from standard.",
      },
      {
        q: "What space do you need to fit tyres?",
        a: "A driveway, a marked parking bay or a quiet stretch of road is usually fine. We need firm, fairly level ground and enough room to work safely around the wheel being changed.",
      },
    ],
  },
  {
    slug: "emergency-tyre-fitting",
    name: "Emergency Tyre Fitting",
    short: "Emergency Tyres",
    icon: "alert",
    seoTitle: "24/7 Emergency Tyre Fitting Bristol",
    h1: "24/7 Emergency Mobile Tyre Fitting in Bristol",
    linkText: "24/7 emergency tyre fitting",
    summary:
      "Blowout or a flat with no spare? Our 24/7 emergency tyre call-out comes to you, day or night.",
    intro:
      "A flat tyre never picks a good moment. Our emergency tyre call-out runs 24 hours a day, seven days a week across Bristol and the surrounding areas. Call us, tell us where you are and what you drive, and we'll come to you with a replacement tyre and fit it on the spot — at home, at work or at the roadside.",
    roundTheClock: true,
    sections: [
      {
        heading: "When to call for an emergency tyre",
        body: "Call us if a tyre has blown out or gone completely flat, if you can see a bulge, a split or cords showing through the rubber, if you've hit a kerb or pothole and the tyre is losing air, or if you've found a flat and your car has no spare. Driving on a flat or badly damaged tyre is unsafe, and it can ruin the wheel as well as the tyre, so it's better to stay put and let us come to you.",
      },
      {
        heading: "What to tell us when you call",
        body: "Three things get us to you with the right tyre: where the vehicle is, the make and model or registration, and the tyre size from the sidewall if you can read it safely. Let us know whether you have a locking wheel nut key too. We'll give you an upfront price on the phone before we set off.",
      },
      {
        heading: "Staying safe while you wait",
        body: "Get the car as far off the road as you safely can and switch on your hazard lights. If you're on a fast or busy road, get everyone out on the side away from the traffic and wait well clear of the vehicle. If a tyre fails on a motorway, leave at the next junction or services if the car will get there; if it won't, follow National Highways guidance and call for help from a place of safety.",
      },
    ],
    benefits: [
      "24/7 call-out — nights, weekends and bank holidays",
      "We come to your home, workplace or the roadside",
      "Replacement tyres supplied to suit your budget",
      "Upfront price before we set off",
      "All makes and models covered",
    ],
    includes: [
      "Call-out to wherever your vehicle is",
      "Replacement tyre supplied, fitted and balanced",
      "New valve fitted as standard",
      "Wheel torque-checked to manufacturer settings",
    ],
    faqs: [
      {
        q: "Is the emergency tyre call-out really 24/7?",
        a: "Yes. Emergency tyre call-out is available around the clock, every day of the week. Routine servicing and booked work run Monday to Friday, 8am to 6pm.",
      },
      {
        q: "My car doesn't have a spare wheel — can you still help?",
        a: "Yes. Many modern cars come with a sealant kit or nothing at all in place of a spare. We bring a replacement tyre in your size and fit it to your existing wheel where you are.",
      },
      {
        q: "Can you repair the tyre and save me buying a new one?",
        a: "Sometimes. We'll repair a puncture where it is safe and legal to do so. If the tyre has been driven on flat, or the damage is in the sidewall, it will need replacing — we'll show you why before we fit anything.",
      },
      {
        q: "How much does an emergency tyre call-out cost?",
        a: "It depends on your tyre size and the tyre you choose. We give you the full price on the phone before we set off, so you know what you're paying before we arrive.",
      },
      {
        q: "Which areas does the emergency service cover?",
        a: "Bristol and the surrounding areas, including South Gloucestershire, North Somerset, Keynsham and Bath. If you're not sure whether we reach you, call and we'll tell you straight away.",
      },
    ],
  },
  {
    slug: "puncture-repair",
    name: "Puncture Repair",
    short: "Puncture Repair",
    icon: "puncture",
    seoTitle: "Mobile Puncture Repair in Bristol",
    h1: "Mobile Puncture Repair in Bristol",
    linkText: "puncture repairs",
    summary:
      "Nail in your tyre or a slow puncture? We come to you and repair it wherever it's safe and legal to do so.",
    intro:
      "A nail or screw in the tread doesn't always mean a new tyre. We come to your home or workplace, inspect the tyre properly and repair it where it is safe and legal to do so. If it can't be repaired, we'll explain why and can fit a replacement on the same visit.",
    sections: [
      {
        heading: "Can my puncture be repaired?",
        body: "UK puncture repairs are governed by a British Standard, BS AU 159. In short, a car tyre can be repaired when the damage is small and sits in the central three-quarters of the tread. Damage to the sidewall or the shoulder of the tyre can't be repaired, and neither can a tyre that has been driven on while flat, because the internal structure may have been weakened in a way you can't see from the outside.",
      },
      {
        heading: "Signs of a slow puncture",
        body: "The usual giveaways are a tyre that needs topping up every few days, a tyre-pressure warning light that keeps coming back, the car pulling to one side, or a tyre that looks lower than the others when the car has been standing. If you can see a nail or screw in the tread, leave it where it is — pulling it out will let the air out faster.",
      },
      {
        heading: "Repair or replace — honest advice",
        body: "We'd always sooner repair a tyre than sell you one you don't need. We'll check the position and size of the damage, the remaining tread and the condition of the rest of the tyre, then tell you plainly which way to go and what it will cost before any work is done.",
      },
    ],
    benefits: [
      "Carried out at your home or workplace",
      "Repaired where it is safe and legal to do so",
      "Honest advice on repair versus replacement",
      "Replacement tyres available on the same visit",
      "Same-day appointments in most cases",
    ],
    includes: [
      "Full inspection of the tyre for hidden damage",
      "Puncture repair where the damage allows",
      "Wheel rebalanced and refitted",
      "Torque-checked to manufacturer settings",
    ],
    faqs: [
      {
        q: "Can you repair a puncture in the sidewall?",
        a: "No. Sidewall and shoulder damage can't be safely or legally repaired on a car tyre, so the tyre needs replacing. We can supply and fit one on the same visit.",
      },
      {
        q: "Can run-flat tyres be repaired?",
        a: "Often not. A run-flat can be driven on with no pressure, which makes it hard to tell whether the structure has been damaged, and many tyre manufacturers advise against repairing them. We'll inspect yours and give you a straight answer.",
      },
      {
        q: "Is it safe to keep driving on a slow puncture?",
        a: "It's best not to. An under-inflated tyre overheats and wears quickly, and driving on it can turn a repairable puncture into one that needs a new tyre. Keep the pressure topped up and get it looked at as soon as you can.",
      },
      {
        q: "What if the tyre can't be repaired?",
        a: "We'll show you the damage and explain why. We can then supply and fit a replacement to suit your budget, usually on the same visit.",
      },
    ],
  },
  {
    slug: "vehicle-servicing",
    name: "Vehicle Servicing",
    short: "Servicing",
    icon: "spanner",
    seoTitle: "Mobile Car Servicing in Bristol",
    h1: "Mobile Car Servicing in Bristol",
    linkText: "car servicing",
    summary:
      "Interim and full servicing carried out at your door to keep your car reliable and safe.",
    intro:
      "Regular servicing keeps your car running smoothly, protects its value and helps avoid expensive breakdowns. We carry out interim and full services at your home or workplace, using quality parts and manufacturer-recommended schedules — all logged so your service history stays intact.",
    sections: [
      {
        heading: "Signs your car is due a service",
        body: "The obvious one is a service reminder on the dashboard, but plenty of cars are overdue without showing one. If it has been more than twelve months since the last service, if the oil on the dipstick is black and low, or if the engine feels rougher or thirstier than it used to, it's time. Short, stop-start journeys around town are harder on oil than motorway miles, so low-mileage cars still need servicing on time.",
      },
      {
        heading: "How a mobile service works",
        body: "We arrive at your home or workplace with the oil, filters and parts for your vehicle. The car is raised safely, the old oil drained and collected, filters changed and the multi-point inspection carried out. You can get on with your day while we work — we just need the keys, somewhere reasonably level to park the car, and the locking wheel nut key if it has one. Afterwards we talk you through anything we've found and give you a record of the work.",
      },
      {
        heading: "What affects the price of a service",
        body: "Mainly the size of the engine, the grade and quantity of oil it needs, and whether you choose an interim or a full service. Tell us your registration and we'll give you a fixed, upfront price. If we find something else that needs attention, we'll explain it and quote for it — we never carry out extra work without asking first.",
      },
    ],
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
      {
        q: "Can you really service a car on a driveway?",
        a: "Yes. We bring everything needed, including equipment to raise the car safely and to collect the old oil so nothing is left behind. A driveway, a private parking space or a workplace car park all work well.",
      },
      {
        q: "Do you service all makes and models?",
        a: "We cover all makes and models. Give us your registration when you book so we arrive with the correct oil and filters for your engine.",
      },
      {
        q: "What happens to the old oil and parts?",
        a: "We take them away with us and dispose of them responsibly. Your driveway is left as we found it.",
      },
    ],
  },
  {
    slug: "diagnostics",
    name: "Diagnostics",
    short: "Diagnostics",
    icon: "diagnostics",
    seoTitle: "Mobile Car Diagnostics in Bristol",
    h1: "Mobile Car Diagnostics in Bristol",
    linkText: "car diagnostics",
    summary:
      "Warning light on? We plug in, read the fault codes and explain exactly what's wrong.",
    intro:
      "A dashboard warning light doesn't have to mean an expensive trip to the garage. Using professional diagnostic equipment we read your vehicle's fault codes at your location, pinpoint the problem and give you clear, jargon-free advice on what needs doing — and what doesn't.",
    sections: [
      {
        heading: "What a warning light is telling you",
        body: "Modern cars monitor themselves constantly. When a sensor reading falls outside its expected range, the car stores a fault code and, for anything that matters, lights a warning on the dashboard. An amber light generally means have it checked soon. A red light, or an engine light that is flashing, means stop when it is safe and get advice before driving further.",
      },
      {
        heading: "How mobile diagnostics works",
        body: "We come to your home or workplace and connect professional diagnostic equipment to the car's OBD port. We read the stored fault codes, look at live data from the relevant sensors where it helps, and inspect the part of the car the code points to. A fault code names the system that has a problem, not always the part that has failed, so the checks that follow are what turn a code into a proper diagnosis.",
      },
      {
        heading: "What happens after the scan",
        body: "You get a written summary of what we found and a plain-English explanation of your options. Many faults can be put right on the same visit. For bigger jobs we'll give you a clear quote first, and you're under no obligation to have the work done by us.",
      },
    ],
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
      {
        q: "The warning light went off by itself — do I still need a check?",
        a: "It's worth it. The car usually keeps the fault code stored even after the light goes out, so we can still see what triggered it. An intermittent fault caught early is nearly always cheaper to fix than one left to get worse.",
      },
      {
        q: "Will clearing the fault code fix the problem?",
        a: "No. Clearing a code only switches the light off. If the underlying fault is still there, the light will come back. We find and explain the cause before any codes are cleared.",
      },
    ],
  },
  {
    slug: "brake-repair",
    name: "Brake Repair",
    short: "Brakes",
    icon: "brake",
    seoTitle: "Mobile Brake Repair in Bristol",
    h1: "Mobile Brake Repair in Bristol",
    linkText: "brake repairs",
    summary:
      "Pads, discs and brake checks fitted at your door to keep you stopping safely.",
    intro:
      "Your brakes are the most important safety system on your car. If you've noticed squealing, grinding, a spongy pedal or longer stopping distances, we'll inspect and replace pads, discs and related components at your home or workplace using quality parts.",
    sections: [
      {
        heading: "Signs your brakes need attention",
        body: "A high-pitched squeal when you brake often means the pads are getting low. A harsh grinding noise means they may be worn through to the metal, which damages the discs quickly. A vibration through the pedal or steering wheel points to the discs, and a soft or sinking pedal suggests a problem with the brake fluid or hydraulics. A brake warning light or the car pulling to one side under braking should be checked straight away.",
      },
      {
        heading: "How mobile brake repair works",
        body: "We come to you, raise the car safely and remove the wheels to inspect the pads, discs and calipers properly. We'll show you what we find and confirm the price before fitting anything. Worn parts are replaced with quality components matched to your vehicle, and we confirm the brakes are working correctly before we leave.",
      },
      {
        heading: "What affects the price of brake work",
        body: "It comes down to which axle needs work, whether it's pads alone or discs and pads together, and the make and model of the car. Front brakes do most of the stopping and usually wear first. Give us your registration and describe what you've noticed, and we'll give you an upfront price.",
      },
    ],
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
      {
        q: "Do discs and pads need replacing together?",
        a: "Not always. Pads wear faster than discs, so pads alone are often enough. If the discs are worn below their minimum thickness, scored or warped, they should be replaced with the pads. We measure and show you before recommending anything.",
      },
      {
        q: "Is it safe to drive with grinding brakes?",
        a: "No. Grinding usually means the pads have worn through, so braking is reduced and the discs are being damaged with every stop. Avoid driving the car and call us — this is exactly the situation a mobile service is for.",
      },
    ],
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    short: "Batteries",
    icon: "battery",
    seoTitle: "Mobile Car Battery Fitting Bristol",
    h1: "Mobile Car Battery Replacement in Bristol",
    linkText: "car battery replacement",
    summary:
      "Flat battery? We test, supply and fit a new one wherever you're stranded.",
    intro:
      "A flat or failing battery is one of the most common reasons cars won't start — especially in cold weather. We test your battery and charging system on-site and, if needed, supply and fit a quality replacement so you're back on the road quickly. Ideal for driveway breakdowns and no-starts.",
    sections: [
      {
        heading: "Signs your battery is failing",
        body: "The engine turns over more slowly than it used to, especially first thing on a cold morning. You hear a rapid clicking when you turn the key or press the start button. The stop-start system has stopped cutting in, the interior lights dim when you start the car, or you've needed a jump start more than once. Any of these means the battery is worth testing before it leaves you stuck.",
      },
      {
        heading: "How mobile battery replacement works",
        body: "We come to wherever the car is and test both the battery and the charging system, because a faulty alternator can flatten a perfectly good battery. If the battery has failed, we fit a replacement matched to your vehicle, clean and secure the terminals, and take the old battery away for recycling.",
      },
      {
        heading: "Cars with stop-start need the right battery",
        body: "Vehicles with stop-start systems use AGM or EFB batteries, which are built to cope with being restarted many times a journey. Fitting a standard battery in their place leads to early failure and can stop the stop-start system working. We match the replacement to what your car was built with.",
      },
    ],
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
      {
        q: "Is it the battery or the alternator?",
        a: "The symptoms can look the same, which is why we test both. If the alternator isn't charging, a new battery would simply go flat again, so we check the charging system before recommending a replacement.",
      },
      {
        q: "Can't I just jump-start it?",
        a: "A jump start will often get you going, but it doesn't tell you why the battery went flat. If it happens again, the battery is probably at the end of its life or something is draining it — a quick test will show which.",
      },
    ],
  },
  {
    slug: "seasonal-tyre-change",
    name: "Seasonal Tyre Change",
    short: "Seasonal Tyres",
    icon: "season",
    seoTitle: "Seasonal Tyre Change in Bristol",
    h1: "Mobile Seasonal Tyre Change in Bristol",
    linkText: "seasonal tyre changes",
    summary:
      "Swap between summer, winter and all-season tyres — fitted and balanced at home.",
    intro:
      "If you run separate winter or summer wheels, we'll swap, balance and refit them at your home or workplace so you're ready for the conditions ahead. We can also advise on all-season tyres if you'd rather not switch twice a year.",
    sections: [
      {
        heading: "When to switch to winter tyres",
        body: "Winter tyres are made from a compound that stays soft in the cold, and they out-grip summer tyres once temperatures are regularly below about 7°C. In this part of the country that usually means fitting them in late autumn and going back to summer tyres in spring. Booking before the first cold snap avoids the rush.",
      },
      {
        heading: "How a seasonal changeover works",
        body: "If your off-season tyres are already on their own set of wheels, we swap the wheels over, check the balance and torque them to the correct setting. If you have loose tyres and one set of wheels, we remove the current tyres from the rims and fit and balance the others. Either way it's done on your driveway — just have the off-season set somewhere we can get to them.",
      },
      {
        heading: "Looking after the set you take off",
        body: "Tyres last longer stored clean, dry and out of direct sunlight. Tyres on wheels are best stacked flat or hung; loose tyres should be stood upright and turned occasionally. It's worth marking which corner of the car each one came from so they can be rotated sensibly next season.",
      },
    ],
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
      {
        q: "Do I need a second set of wheels?",
        a: "No, but it helps. With a second set of wheels the changeover is a straight swap. With one set, the tyres have to come off the rims and be refitted each season, which takes longer.",
      },
      {
        q: "Can I fit winter tyres to just two wheels?",
        a: "It isn't recommended. Mixing winter and summer tyres gives the two ends of the car very different levels of grip, which can make it unpredictable in a bend or under braking. Fit all four.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
