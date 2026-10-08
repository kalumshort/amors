import type { MetadataRoute } from "next";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

// Date the page content last changed. Update this when copy is edited —
// a build-time `new Date()` would tell crawlers every page changed on
// every deploy, which makes the value meaningless.
const CONTENT_UPDATED = new Date("2026-10-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url;

  const staticRoutes = ["", "/services", "/locations", "/about", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}
