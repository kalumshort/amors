import { business } from "@/data/business";
import type { Service } from "@/data/services";
import type { Faq } from "@/data/services";
import type { Location } from "@/data/locations";

const SITE = business.url;

// --- Reusable JSON-LD builders --------------------------------------

const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: business.openingHoursSpec.days,
  opens: business.openingHoursSpec.opens,
  closes: business.openingHoursSpec.closes,
};

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
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: business.geo.lat,
        longitude: business.geo.lng,
      },
      geoRadius: business.serviceRadiusKm * 1000,
    },
    openingHoursSpecification: openingHours,
    sameAs: [business.social.facebook],
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
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${business.baseCity} and surrounding areas`,
    },
  };
}

export function locationBusinessSchema(loc: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: `${business.name} — ${loc.name}`,
    description: `Mobile tyre fitting, vehicle servicing and diagnostics in ${loc.name}, ${loc.county}.`,
    url: `${SITE}/locations/${loc.slug}`,
    telephone: business.phoneE164,
    email: business.email,
    image: `${SITE}/opengraph-image`,
    priceRange: business.priceRange,
    parentOrganization: { "@id": `${SITE}/#business` },
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.name,
      addressRegion: loc.county,
      addressCountry: business.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.lat,
      longitude: loc.lng,
    },
    areaServed: { "@type": "City", name: loc.name },
    openingHoursSpecification: openingHours,
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
