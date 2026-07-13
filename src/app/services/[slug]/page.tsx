import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Faq } from "@/components/Faq";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LocationCard } from "@/components/LocationCard";
import { JsonLd } from "@/components/JsonLd";
import { services, getService } from "@/data/services";
import { locations } from "@/data/locations";
import { business, telHref } from "@/data/business";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in ${business.baseCity} — Mobile & At Your Door`,
    description: `${service.summary} Serving ${business.baseCity} and surrounding areas with same-day availability.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${business.name}`,
      description: service.summary,
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(service.faqs)} />

      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="bg-grid-dark">
          <div className="container-x py-14 lg:py-20">
            <Breadcrumbs items={crumbs} />
            <div className="mt-6 flex items-start gap-5">
              <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand text-white sm:inline-flex">
                <Icon name={service.icon} className="h-8 w-8" />
              </span>
              <div>
                <h1 className="text-4xl font-extrabold sm:text-5xl">
                  {service.name}
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-white/75">
                  {service.summary}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={telHref} variant="primary" size="lg">
                <Icon name="phone" className="h-5 w-5" />
                Call {business.phoneDisplay}
              </Button>
              <Button href="/contact" variant="white" size="lg">
                Get a free quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="text-lg leading-relaxed text-ink/80">
              {service.intro}
            </p>

            <h2 className="mt-12 text-2xl font-bold text-ink">
              Why choose our mobile {service.short.toLowerCase()} service
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-dark">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-ink/75">{b}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-ink">
              What&rsquo;s included
            </h2>
            <ul className="mt-6 space-y-3">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white px-4 py-3"
                >
                  <Icon
                    name="check"
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                  />
                  <span className="text-sm text-ink/80">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-ink">
              Frequently asked questions
            </h2>
            <div className="mt-6">
              <Faq items={service.faqs} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-line bg-mist p-6">
              <h2 className="text-lg font-bold text-ink">Book this service</h2>
              <p className="mt-2 text-sm text-ink/65">
                Call or message for an upfront price. We come to your home or
                workplace across {business.baseCity}.
              </p>
              <div className="mt-4 space-y-2">
                <Button href={telHref} variant="primary" className="w-full">
                  <Icon name="phone" className="h-5 w-5" />
                  {business.phoneDisplay}
                </Button>
                <Button href="/contact" variant="outline" className="w-full">
                  Request a callback
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6">
              <h2 className="text-lg font-bold text-ink">Other services</h2>
              <ul className="mt-4 space-y-2">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-ink/75 hover:bg-mist hover:text-brand-dark"
                    >
                      <Icon name={s.icon} className="h-5 w-5 text-brand" />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Areas */}
      <section className="border-t border-line bg-mist py-16">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-ink">
            {service.name} near you
          </h2>
          <p className="mt-2 text-ink/65">
            We provide {service.name.toLowerCase()} across these areas — tap
            yours for local details.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locations.slice(0, 9).map((l) => (
              <LocationCard key={l.slug} location={l} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Need ${service.name.toLowerCase()} today?`} />
    </>
  );
}
