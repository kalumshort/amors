import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/data/services";
import { business } from "@/data/business";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Services — Mobile Tyres, Servicing & Diagnostics",
  description: `Mobile tyre fitting, vehicle servicing, diagnostics, brakes, batteries and seasonal tyre changes across ${business.baseCity}. We come to you.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <section className="bg-ink text-white">
        <div className="bg-grid-dark">
          <div className="container-x py-14 lg:py-20">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
              ]}
            />
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl">
              Mobile car services across {business.baseCity}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              Whatever your car needs, we bring it to your driveway. Quality
              parts, honest pricing and same-day availability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
