import type { Metadata } from "next";
import { LocationCard } from "@/components/LocationCard";
import { CoverageMap } from "@/components/CoverageMap";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { locations } from "@/data/locations";
import { business } from "@/data/business";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Areas We Cover — Mobile Tyres & Servicing Near You",
  description: `We provide mobile tyre fitting and vehicle servicing across ${business.baseCity} and the surrounding areas, including Clifton, Kingswood, Portishead, Keynsham, Bath and more.`,
  alternates: { canonical: "/locations" },
};

// Group locations by county for a tidy, scannable index
function byCounty() {
  const groups = new Map<string, typeof locations>();
  for (const loc of locations) {
    const list = groups.get(loc.county) ?? [];
    list.push(loc);
    groups.set(loc.county, list);
  }
  return [...groups.entries()];
}

export default function LocationsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Areas Covered", path: "/locations" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="bg-ink text-white">
        <div className="bg-grid-dark">
          <div className="container-x grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
            <div>
              <Breadcrumbs items={crumbs} />
              <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
                Areas we cover
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/75">
                Based in {business.baseCity}, we bring mobile tyre fitting,
                servicing and diagnostics to your door across a{" "}
                {business.serviceRadiusKm}km radius. Find your area below — if
                you&rsquo;re nearby but not listed, just ask.
              </p>
            </div>
            <CoverageMap className="min-h-[320px]" spread={0.4} />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x space-y-12">
          {byCounty().map(([county, list]) => (
            <div key={county}>
              <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-ink">
                {county}
                <span className="h-px flex-1 bg-line" />
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((l) => (
                  <LocationCard key={l.slug} location={l} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
