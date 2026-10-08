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
  /** Hand-written paragraphs on local roads, parking and coverage */
  localNotes: string[];
  /** Location-specific FAQ, shown after the generated coverage question */
  faqs: Faq[];
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
    localNotes: [
      "Getting a car to a garage in Bristol is rarely simple. Much of the inner city is covered by residents' parking schemes, the centre sits inside the Clean Air Zone, and a drop-off and collection means two trips through traffic on the M32, the A4 or the A38. A mobile visit removes all of that: the car stays where it is parked and we come to it.",
      "We work right across the BS1 to BS8 postcodes, from flats around the Harbourside and Temple Meads to the terraced streets of Easton, St George and Bishopston. Where there is no driveway, a residents' bay or a workplace car park does the job, as long as there is safe room to work.",
    ],
    faqs: [
      {
        q: "Can you work on my car if I only have on-street parking in Bristol?",
        a: "In most cases, yes. Tyre fitting needs safe room around the wheel being changed, and servicing needs firm, fairly level ground. Tell us about the parking when you book and we'll say straight away whether it will work.",
      },
      {
        q: "Do I need to drive through the Bristol Clean Air Zone to use you?",
        a: "No. We come to you, so your car doesn't move. That makes a mobile visit a practical choice if your vehicle would be charged for driving in the zone.",
      },
      {
        q: "Do you cover central Bristol at night for a flat tyre?",
        a: "Yes. Our emergency tyre call-out runs 24/7 across the city. Routine servicing and booked work run Monday to Friday, 8am to 6pm.",
      },
    ],
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
    localNotes: [
      "Most of Clifton is covered by residents' parking zones, and visitor spaces are short-stay, which makes leaving a car at a garage and getting home again awkward. Mobile work suits the area well: the car stays in its bay while we work on it.",
      "Clifton is also hard on cars. The hills wear brakes faster than flat roads do, and high kerbs and tight parallel parking take their toll on tyre sidewalls. Kerb damage to a sidewall can't be repaired, so it's worth having any bulge or cut checked. We cover Clifton Village, Clifton Wood, Hotwells, Redland and the streets around The Downs.",
    ],
    faqs: [
      {
        q: "I don't have a driveway in Clifton — can you still come out?",
        a: "Yes. A residents' bay or an on-street space is fine. We need safe room around the car and reasonably level ground, so tell us where it's parked when you book.",
      },
      {
        q: "My street is very steep. Is that a problem?",
        a: "It can be. A car has to be on fairly level ground to be jacked up safely. If your street is too steep we'll suggest the nearest flatter spot — often it's only a short move.",
      },
      {
        q: "Do you cover Redland and Hotwells as well as Clifton?",
        a: "Yes. We cover the BS8 and BS6 postcodes, including Redland, Hotwells, Clifton Wood and the roads around Whiteladies Road and The Downs.",
      },
    ],
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
    localNotes: [
      "South of the river, Bedminster and Southville are mostly Victorian terraces with on-street parking, and much of the area is now in a residents' parking scheme. Finding a space again after a garage run is half the battle, so having the work done where the car is already parked makes sense.",
      "On match and event days at Ashton Gate the surrounding roads get busy and extra parking restrictions apply, so we'll help you pick a day that avoids them. We cover the BS3 and BS4 postcodes, including Southville, Ashton, Windmill Hill, Totterdown and Knowle.",
    ],
    faqs: [
      {
        q: "Can you fit tyres on a terraced street with no driveway?",
        a: "Yes. Kerbside fitting is normal for Bedminster. We need safe room on the side of the car we're working on, so let us know if the road is particularly narrow.",
      },
      {
        q: "Can you come on an Ashton Gate match day?",
        a: "We can, but access and parking around the stadium are much tighter on match and event days. If your booking isn't urgent, we'll suggest another day so the job goes smoothly.",
      },
      {
        q: "Do you cover Knowle and Totterdown?",
        a: "Yes. We cover BS3 and BS4, which takes in Southville, Ashton, Windmill Hill, Totterdown and Knowle.",
      },
    ],
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
    localNotes: [
      "Fishponds Road, the A432, carries a lot of the traffic between east Bristol and the city centre, and it is slow for much of the day. Add a wait at a tyre bay and a simple job can swallow a morning. We come to your home or workplace so it doesn't have to.",
      "The area is a mix of terraced streets and semis with driveways, plus the UWE Frenchay campus, where plenty of cars sit parked from morning to evening. We cover the BS16 postcode, including Eastville, Stapleton, Frenchay, Downend and Staple Hill, with the M32 close by at Eastville.",
    ],
    faqs: [
      {
        q: "Can you work on my car while it's parked at UWE Frenchay?",
        a: "Yes, provided the site allows contractors to work in the car park you use. Check with the campus first; if it isn't allowed, we can come to your home.",
      },
      {
        q: "Do you cover Downend and Staple Hill?",
        a: "Yes. Both are within the BS16 area we cover, along with Eastville, Stapleton and Frenchay.",
      },
      {
        q: "My car has been standing for weeks and now won't start. Can you help?",
        a: "Yes. A car left standing often ends up with a flat battery. We'll test the battery and charging system where the car is and fit a replacement only if it's needed.",
      },
    ],
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
    localNotes: [
      "Kingswood grew up along the A420, and the High Street and Two Mile Hill Road are slow going for most of the day. Many of the streets either side are terraces with on-street parking only, which suits kerbside work — all we need is safe room around the wheel or the bonnet.",
      "As well as Kingswood itself we cover Hanham, Warmley, Cadbury Heath and Longwell Green, and out along the A4174 ring road, where potholes and debris account for plenty of damaged tyres.",
    ],
    faqs: [
      {
        q: "There's no driveway at my house in Kingswood. Can you still do the work?",
        a: "Yes. On-street work is fine as long as there is safe room around the car and the ground is reasonably level. Tell us about the road when you book.",
      },
      {
        q: "Do you cover Hanham and Longwell Green?",
        a: "Yes. We cover Kingswood and the neighbouring areas, including Hanham, Warmley, Cadbury Heath and Longwell Green.",
      },
      {
        q: "I've had a blowout on the ring road. What should I do?",
        a: "Get the car off the carriageway if you safely can, switch on your hazard lights and wait well away from the traffic. Then call us — our emergency tyre call-out runs 24/7.",
      },
    ],
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
    localNotes: [
      "Filton is one of the biggest employment areas in the region, home to Airbus, Rolls-Royce, GKN and the Ministry of Defence at Abbey Wood, with Southmead Hospital and Cribbs Causeway close by. Thousands of cars sit in staff car parks all day, which is time we can put to use.",
      "Some of the larger sites restrict contractor access, so check with your employer first; where a workplace visit isn't possible we'll come to your home. We cover Filton, Patchway, Horfield, Southmead and Little Stoke, with the A38 and the M5 at junctions 16 and 17 on the doorstep.",
    ],
    faqs: [
      {
        q: "Can you come to my workplace in Filton?",
        a: "Yes, as long as the site allows it. Some of the secure aerospace and defence sites don't permit outside contractors in their car parks, so check with your employer. If it isn't possible, we'll come to your home.",
      },
      {
        q: "I work shifts. Can you fit around them?",
        a: "Booked work runs Monday to Friday, 8am to 6pm, and we'll find a slot that suits your pattern. For an unsafe or flat tyre, our emergency call-out is available 24/7.",
      },
      {
        q: "Do you cover Patchway and Horfield?",
        a: "Yes. We cover the BS34 and BS7 postcodes, including Patchway, Horfield, Southmead and Little Stoke.",
      },
    ],
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
    localNotes: [
      "Bradley Stoke was built largely in the 1980s and 1990s, so most homes have a driveway or an allocated space — ideal for mobile work. Add the business parks at Aztec West and Almondsbury and the offices around Stoke Gifford and Bristol Parkway, and a lot of local cars spend the working day parked in one place. That's time we can use: you get on with your job while we get on with the car.",
      "Rush hour around the Almondsbury Interchange, where the M4 and M5 meet, and along Bradley Stoke Way makes a quick trip to a tyre bay anything but. Having the work done where the car already is avoids it altogether.",
    ],
    faqs: [
      {
        q: "Can you fit tyres at my office at Aztec West?",
        a: "Yes, as long as your employer or the site management is happy for us to work in the car park. It's worth a quick check before you book.",
      },
      {
        q: "Do you cover Stoke Gifford and Little Stoke?",
        a: "Yes. We cover the whole BS32 area and its neighbours, including Stoke Gifford, Little Stoke and Almondsbury.",
      },
      {
        q: "I've got a flat tyre near the M4/M5 at Almondsbury. Can you come out?",
        a: "Yes. If you're on the motorway itself, follow National Highways guidance and get to a place of safety first. Once you're off the motorway, call us — our emergency tyre call-out runs 24/7.",
      },
    ],
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
    localNotes: [
      "Portishead has one main road in and out — the A369 to junction 19 of the M5 — and it backs up badly at peak times. A tyre or service appointment in Bristol can take half a day once you add the queue each way. We come to you so the car never has to join it.",
      "Much of the newer housing around the Marina and the Village Quarter has allocated bays or under-croft parking in place of driveways. That is usually fine for tyre fitting; tell us about the parking when you book and we'll advise. We also cover Redcliffe Bay, Portbury, Pill and Easton-in-Gordano.",
    ],
    faqs: [
      {
        q: "I live in a Marina apartment with an allocated bay. Can you work there?",
        a: "Usually, yes. An open allocated bay is fine for tyre fitting. Under-croft and basement parking can be tight for height and space, so let us know what you have and we'll tell you what's possible.",
      },
      {
        q: "Do you cover Pill and Portbury?",
        a: "Yes. We cover the BS20 postcode, which includes Portbury, Pill, Easton-in-Gordano and Redcliffe Bay as well as Portishead itself.",
      },
      {
        q: "Does living by the sea affect my car's brakes?",
        a: "It can. Salt in the air speeds up corrosion on brake discs, particularly on cars that aren't driven every day. A free brake inspection is included with any visit, so we'll tell you if yours need attention.",
      },
    ],
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
    localNotes: [
      "Clevedon sits beside junction 20 of the M5, and a trip to Bristol or Weston-super-Mare for car care means a motorway run each way plus the wait. We bring tyre fitting, servicing and diagnostics to the town so you can skip it.",
      "The older streets around Hill Road and up Dial Hill are steep and tightly parked, while the estates further inland mostly have driveways. We work in both, and we cover the villages around the town too, including Kenn, Tickenham, Walton-in-Gordano, Kingston Seymour and Yatton.",
    ],
    faqs: [
      {
        q: "Do you cover Yatton and Kenn?",
        a: "Yes. As well as Clevedon and the BS21 postcode we cover the surrounding villages, including Kenn, Tickenham, Kingston Seymour and Yatton.",
      },
      {
        q: "My car mostly sits on the drive. Does it still need servicing every year?",
        a: "Yes. Oil and brake fluid deteriorate with age as well as mileage, and tyres and batteries suffer when a car stands for long periods. An annual service keeps a low-mileage car reliable.",
      },
      {
        q: "I've come off the M5 at junction 20 with a flat. Can you help?",
        a: "Yes. Park somewhere safe away from the traffic and call us. Our emergency tyre call-out runs 24/7 and we'll bring a tyre to fit where you are.",
      },
    ],
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
    localNotes: [
      "Nailsea has no motorway junction or dual carriageway of its own. The routes out are the B3130 towards Bristol or Clevedon, or down through Backwell to the A370, and none of them is quick at busy times. A mobile visit saves the journey completely.",
      "Most of the town is estate housing with driveways, which makes home visits straightforward. We also cover the villages around it — Backwell, Wraxall, Flax Bourton and Tickenham — where narrow lanes and potholes are a regular cause of tyre and wheel damage.",
    ],
    faqs: [
      {
        q: "Do you cover Backwell and Wraxall?",
        a: "Yes. We cover the whole BS48 area, including Backwell, Wraxall and Flax Bourton, as well as Nailsea itself.",
      },
      {
        q: "Is it worth calling you out for a single tyre?",
        a: "Yes. No job is too small, from a single tyre upwards. You get an upfront price before we set off, and it saves you a round trip to Bristol or Clevedon.",
      },
      {
        q: "I hit a pothole and the tyre is going down. Can it be repaired?",
        a: "It depends where the damage is. A small hole in the main tread can often be repaired; a bulge or split in the sidewall cannot, and the tyre will need replacing. We'll inspect it and tell you plainly.",
      },
    ],
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
    localNotes: [
      "Keynsham sits on the A4 between Bristol and Bath, and that road is its weak point: it queues at Hicks Gate towards Bristol and through Saltford towards Bath. Whichever way you head for a garage, you're likely to sit in traffic. We come to you instead.",
      "The newer homes at Somerdale mostly have allocated parking, while the older parts of town around the High Street and Chandag have a mix of driveways and on-street spaces. We work in all of them, and we cover Saltford, Willsbridge, Bitton and Compton Dando as well.",
    ],
    faqs: [
      {
        q: "Do you cover Saltford?",
        a: "Yes. We cover the BS31 postcode, which includes Saltford, along with nearby Willsbridge, Bitton and Compton Dando.",
      },
      {
        q: "I'm at Somerdale with an allocated space. Can you work there?",
        a: "Yes. An allocated bay is fine for tyre fitting and for most servicing, as long as there's safe room around the car.",
      },
      {
        q: "Can you help with a flat tyre on the A4?",
        a: "Yes. Get the car off the main carriageway if you safely can, put your hazard lights on and call us. Our emergency tyre call-out runs 24/7.",
      },
    ],
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
    localNotes: [
      "Thornbury sits around twelve miles north of Bristol, between the A38 and the Severn. For much car care, a garage visit means a drive down to Bradley Stoke, Cribbs Causeway or Yate and a wait once you get there. We bring tyre fitting, servicing and diagnostics to the town so that trip isn't needed.",
      "The villages around Thornbury — Alveston, Olveston, Tytherington, Rudgeway and Oldbury-on-Severn — are all within our area, and the lanes between them are where potholes and verge-side debris take their toll on tyres. If you commute on the A38 or join the M5 at Almondsbury or Falfield, we can work on the car at home or at your workplace.",
    ],
    faqs: [
      {
        q: "Do you cover the villages around Thornbury?",
        a: "Yes. As well as the town we cover Alveston, Olveston, Tytherington, Rudgeway, Oldbury-on-Severn and the rest of the BS35 area.",
      },
      {
        q: "Is there an extra charge for coming out to Thornbury?",
        a: "We give you one upfront, all-in price before we set off, so there are no hidden extras for travelling to Thornbury.",
      },
      {
        q: "I've got a flat tyre on the A38 near Thornbury. Can you help?",
        a: "Yes. Pull in somewhere safe off the main road, switch on your hazard lights and call us. Our emergency tyre call-out runs 24/7.",
      },
    ],
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
    localNotes: [
      "Yate and Chipping Sodbury together form one of the larger towns in South Gloucestershire, with the A432 as the main route towards Bristol. Most of Yate's housing is estate-built with driveways, which makes home visits simple, and the trading estates around the town mean plenty of vehicles are parked up through the working day.",
      "Beyond the two towns we cover the surrounding villages, including Westerleigh, Iron Acton, Old Sodbury, Wickwar and Coalpit Heath. Country lanes bring their own problems: hedge-cutting in autumn and winter leaves thorns on the road, a common cause of slow punctures.",
    ],
    faqs: [
      {
        q: "Do you cover Chipping Sodbury and the villages?",
        a: "Yes. We cover the BS37 area and beyond, including Chipping Sodbury, Old Sodbury, Westerleigh, Iron Acton, Wickwar and Coalpit Heath.",
      },
      {
        q: "Do you fit van tyres for businesses in Yate?",
        a: "Yes. We fit van tyres as well as car tyres and can do it at your yard or unit, so the van is off the road for as short a time as possible.",
      },
      {
        q: "My tyre keeps losing pressure after driving the lanes. What's wrong?",
        a: "It's probably a slow puncture, often from a hedge thorn or a small nail in the tread. Leave anything you can see in the tyre where it is and call us; many of these can be repaired.",
      },
    ],
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
    localNotes: [
      "Bath is a hard city to move a car around. The centre is a Clean Air Zone — private cars aren't charged, but vans and other commercial vehicles that don't meet the emissions standard are — residents' parking zones cover much of the centre and inner suburbs, and the A4 and A36 into the city are slow. Having the work done where the car is parked avoids all of it.",
      "The hills matter too. Lansdown, Bathwick Hill and Widcombe are steep, and a car needs fairly level ground to be jacked safely, so we'll check the parking with you when you book. We cover the BA1 and BA2 postcodes, including Twerton, Weston, Oldfield Park, Combe Down, Odd Down and Batheaston.",
    ],
    faqs: [
      {
        q: "Do you charge extra to come to Bath?",
        a: "We give you one upfront, all-in price before we set off, so there are no hidden extras for travelling to Bath.",
      },
      {
        q: "My road in Bath is steep. Can you still work on the car?",
        a: "Possibly. We need reasonably level ground to raise a car safely. If your road is too steep we'll suggest the nearest suitable spot, which is often just around the corner.",
      },
      {
        q: "Do you cover Bath for emergency tyres at night?",
        a: "Yes. Our emergency tyre call-out runs 24/7 and covers Bath and the surrounding BA1 and BA2 area.",
      },
    ],
  },
];

export const getLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);

export const getNearby = (loc: Location) =>
  loc.nearbyAreas
    .map((s) => locations.find((l) => l.slug === s))
    .filter((l): l is Location => Boolean(l));
