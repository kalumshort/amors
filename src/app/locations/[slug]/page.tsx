import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Faq } from "@/components/Faq";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionDivider } from "@/components/SectionDivider";
import { ServiceCard } from "@/components/ServiceCard";
import { LocationCard } from "@/components/LocationCard";
import { CoverageMap } from "@/components/CoverageMap";
import { JsonLd } from "@/components/JsonLd";
import { locations, getLocation, getNearby } from "@/data/locations";
import type { Location } from "@/data/locations";
import { services } from "@/data/services";
import type { Faq as FaqItem } from "@/data/services";
import { business, telHref, whatsappHref } from "@/data/business";
import {
  locationBusinessSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return {
    title: `Mobile Tyres & Vehicle Servicing in ${loc.name}`,
    description: `Mobile tyre fitting, servicing, diagnostics, brakes and batteries in ${loc.name}, ${loc.county}. We come to you — same-day tyre fitting & 24/7 emergency tyre call-out. Call ${business.phoneDisplay}.`,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title: `Mobile Tyres & Servicing in ${loc.name} | ${business.name}`,
      description: `Family-run mobile tyre fitting and vehicle servicing in ${loc.name}. We come to you.`,
    },
  };
}

// Build a location-specific FAQ (unique per area) when none is supplied.
function localFaqs(loc: Location): FaqItem[] {
  if (loc.faqs?.length) return loc.faqs;
  const postcodes = loc.postcodes.join(", ");
  return [
    {
      q: `Do you cover the whole of ${loc.name}?`,
      a: `Yes — we cover ${loc.name} and the surrounding ${loc.county} area, including the ${postcodes} postcode${loc.postcodes.length > 1 ? "s" : ""} and nearby spots such as ${loc.landmarks.slice(0, 3).join(", ")}. If you're just outside, give us a call and we'll let you know.`,
    },
    {
      q: `Can you come to my home or workplace in ${loc.name}?`,
      a: `Absolutely. As a fully mobile service we fit tyres and carry out servicing wherever your vehicle is safely parked in ${loc.name} — at home, at work or roadside.`,
    },
    {
      q: `How quickly can you get to ${loc.name}?`,
      a: `We offer same-day tyre fitting in most cases and 24/7 emergency tyre call-out for unsafe or dangerous tyres in ${loc.name}.`,
    },
    {
      q: `How much does mobile tyre fitting in ${loc.name} cost?`,
      a: `Pricing depends on your tyre size and vehicle, but we always give an upfront, all-in price before any work — no hidden call-out fees for ${loc.name} and the surrounding area.`,
    },
  ];
}

export default async function LocationPage({ params }: Params) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const nearby = getNearby(loc);
  const faqs = localFaqs(loc);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Areas Covered", path: "/locations" },
    { name: loc.name, path: `/locations/${loc.slug}` },
  ];

  return (
    <>
      <JsonLd data={locationBusinessSchema(loc)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="bg-grid-dark">
          <div className="container-x py-14 lg:py-20">
            <Breadcrumbs items={crumbs} />
            <p className="eyebrow mt-6 text-brand-light">
              <Icon name="pin" className="h-4 w-4" />
              {loc.county}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">
              Mobile Tyres &amp; Vehicle Servicing in {loc.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">{loc.intro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={telHref} variant="primary" size="lg">
                <Icon name="phone" className="h-5 w-5" />
                Call {business.phoneDisplay}
              </Button>
              <Button href={whatsappHref} variant="white" size="lg">
                <Icon name="whatsapp" className="h-5 w-5 text-brand" />
                WhatsApp us
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {loc.postcodes.map((pc) => (
                <li
                  key={pc}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80"
                >
                  {pc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider top="ink" bottom="paper" variant="curve" />

      {/* Services in this area */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            Our services in {loc.name}
          </h2>
          <p className="mt-3 max-w-2xl text-ink/65">
            Everything we offer is available right across {loc.name} and the
            surrounding {loc.county} area — we bring the tools to you.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider top="paper" bottom="mist" variant="arch" />

      {/* Local detail + map */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Local mobile mechanic covering {loc.name}
            </h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              We know {loc.name} well — from {loc.landmarks[0]} to{" "}
              {loc.landmarks[loc.landmarks.length - 1]}. Wherever you are in the{" "}
              {loc.postcodes.join(" and ")} area, our mobile team saves you the
              hassle of a garage visit and the wait that comes with it.
            </p>

            <h3 className="mt-8 font-semibold text-ink">
              Areas we cover in &amp; around {loc.name}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {loc.landmarks.map((place) => (
                <li
                  key={place}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-sm text-ink/70"
                >
                  <Icon name="pin" className="h-3.5 w-3.5 text-brand" />
                  {place}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-line bg-white p-6">
              <div className="flex items-center gap-3">
                <Icon name="clock" className="h-6 w-6 text-brand" />
                <div>
                  <p className="font-semibold text-ink">{business.hours.weekdays}</p>
                  <p className="text-sm text-ink/60">
                    {business.hours.emergency}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CoverageMap
            lat={loc.lat}
            lng={loc.lng}
            label={loc.name}
            spread={0.09}
            className="min-h-[380px]"
          />
        </div>
      </section>

      {/* Nearby areas */}
      {nearby.length > 0 && (
        <>
          <SectionDivider top="mist" bottom="paper" variant="drip" />

          <section className="py-16 lg:py-20">
            <div className="container-x">
              <h2 className="text-2xl font-bold text-ink">
                Areas near {loc.name} we also cover
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {nearby.map((l) => (
                  <LocationCard key={l.slug} location={l} />
                ))}
              </div>
            </div>
          </section>

          <SectionDivider top="paper" bottom="mist" variant="wave" flip />
        </>
      )}

      {/* FAQ */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="container-x max-w-3xl">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            {loc.name} — your questions answered
          </h2>
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <SectionDivider top="mist" bottom="ink" variant="waves" />

      <CTASection
        title={`Mobile tyres & servicing in ${loc.name}`}
        subtitle={`Call now for a free quote — we come to you across ${loc.name} and ${loc.county}, with 24/7 emergency tyre call-out where you need us.`}
      />
    </>
  );
}
