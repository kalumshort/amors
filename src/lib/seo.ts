import { business } from "@/data/business";
import { services } from "@/data/services";
import type { Service } from "@/data/services";
import type { Faq } from "@/data/services";
import { locations } from "@/data/locations";
import type { Location } from "@/data/locations";

const SITE = business.url;

// --- Reusable JSON-LD builders --------------------------------------

const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: business.openingHoursSpec.days,
  opens: business.openingHoursSpec.opens,
  closes: business.openingHoursSpec.closes,
};

// Used only for services offered outside normal opening hours.
const roundTheClockHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "00:00",
  closes: "23:59",
};

const cityNode = (loc: Location) => ({
  "@type": "City",
  name: loc.name,
  containedInPlace: { "@type": "AdministrativeArea", name: loc.county },
});

/** Core LocalBusiness node reused (with @id) across pages. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE}/#business`,
    name: business.name,
    description: business.description,
    url: SITE,
    telephone: business.phoneE164,
    email: business.email,
    logo: `${SITE}/amorslogo.webp`,
    image: `${SITE}/opengraph-image`,
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.baseCity,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: business.geo.lat,
          longitude: business.geo.lng,
        },
        geoRadius: business.serviceRadiusKm * 1000,
      },
      ...locations.map(cityNode),
    ],
    openingHoursSpecification: openingHours,
    sameAs: [business.social.facebook, business.social.google].filter(Boolean),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    serviceType: service.name,
    url: `${SITE}/services/${service.slug}`,
    provider: { "@id": `${SITE}/#business` },
    areaServed: locations.map(cityNode),
    ...(service.roundTheClock && { hoursAvailable: roundTheClockHours }),
  };
}

/** A location page describes our services in one town — not a separate branch. */
export function locationServiceSchema(loc: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Mobile tyre fitting and vehicle servicing in ${loc.name}`,
    description: `Mobile tyre fitting, vehicle servicing and diagnostics in ${loc.name}, ${loc.county}.`,
    serviceType: "Mobile tyre fitting and vehicle servicing",
    url: `${SITE}/locations/${loc.slug}`,
    provider: { "@id": `${SITE}/#business` },
    areaServed: cityNode(loc),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Mobile services in ${loc.name}`,
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${SITE}/services/${s.slug}`,
        },
      })),
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
