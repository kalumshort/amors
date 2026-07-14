import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { ServiceCard } from "@/components/ServiceCard";
import { LocationCard } from "@/components/LocationCard";
import { CTASection } from "@/components/CTASection";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { CoverageMap } from "@/components/CoverageMap";
import { TrustBadges } from "@/components/TrustBadges";
import { BookingLookup } from "@/components/BookingLookup";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { business, telHref, whatsappHref, trustPoints } from "@/data/business";

const steps = [
  {
    icon: "phone",
    title: "Call or message",
    text: "Tell us your vehicle, location and what you need. We'll give you an upfront price.",
  },
  {
    icon: "home",
    title: "We come to you",
    text: "We arrive at your home or workplace at a time that suits — no garage trip.",
  },
  {
    icon: "check",
    title: "Back on the road",
    text: "Work done on the spot with quality parts, and you're sorted the same day.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="bg-grid-dark">
          <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div>
              <p className="eyebrow text-brand-light">
                <Icon name="pin" className="h-4 w-4" />
                {business.baseCity} &amp; surrounding areas
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                Mobile tyres &amp; servicing that{" "}
                <span className="text-brand">come to you</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                Family-run mobile tyre fitting, vehicle servicing and
                diagnostics across {business.baseCity}. Transparent pricing, fast
                turnaround and 24/7 emergency call-out — we bring the garage to
                your driveway.
              </p>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
                {[
                  "We come to you",
                  "Same-day fitting",
                  "24/7 emergency call-out",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Icon name="check" className="h-4 w-4 text-brand-light" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick contact card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
              <h2 className="text-xl font-bold">Need help right now?</h2>
              <p className="mt-2 text-sm text-white/70">
                Flat tyre, warning light or a car that won&rsquo;t start?
                We&rsquo;re ready when you are.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={telHref}
                  className="flex items-center gap-4 rounded-2xl bg-brand p-4 transition-colors hover:bg-brand-dark"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-white/70">
                      Call us
                    </span>
                    <span className="block text-lg font-bold">
                      {business.phoneDisplay}
                    </span>
                  </span>
                </a>
                <a
                  href={whatsappHref}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-brand-light">
                    <Icon name="whatsapp" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-white/60">
                      Message us
                    </span>
                    <span className="block text-lg font-bold">On WhatsApp</span>
                  </span>
                </a>
                <Button
                  href="/contact"
                  variant="white"
                  size="lg"
                  className="w-full"
                >
                  Get a free quote
                  <Icon name="arrow" className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-white/60">
                <Icon name="clock" className="h-4 w-4 text-brand-light" />
                {business.hours.weekdays}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online booking (BookMyGarage widget) */}
      <section className="border-t border-white/10 bg-ink text-white">
        <div className="bg-grid-dark">
          <div className="container-x py-16 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center text-brand-light">
                <Icon name="check" className="h-4 w-4" />
                Instant online booking
              </p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Book your MOT, service or tyres in seconds
              </h2>
              <p className="mt-4 text-white/70">
                Enter your registration for an instant price and pick a time that
                suits — or call us on{" "}
                <a href={telHref} className="font-semibold text-brand-light">
                  {business.phoneDisplay}
                </a>{" "}
                and we&rsquo;ll sort it for you.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-xl">
              <BookingLookup />
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      <SectionDivider top="ink-800" bottom="paper" variant="curve" />

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title="Everything your car needs — at your door"
            subtitle={`From a single tyre to a full service, our mobile team covers it all across ${business.baseCity} and beyond.`}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="outline" size="lg">
              View all services
              <Icon name="arrow" className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <SectionDivider top="paper" bottom="mist" variant="slant" />

      {/* How it works */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="How it works"
            title="Sorted in three simple steps"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <span className="absolute right-6 top-6 text-5xl font-extrabold text-brand/10">
                  {i + 1}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
                  <Icon name={step.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider top="mist" bottom="paper" variant="wave" />

      {/* Why choose us */}
      <section className="py-16 lg:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Amor's"
              title="A proper garage service — without the garage"
              subtitle="We're a family-run business built on doing right by our customers. No pressure, no jargon, no hidden costs — just honest, convenient car care."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-dark">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-ink/75">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/about" variant="dark">
                More about us
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <CoverageMap className="h-full min-h-[360px]" spread={0.35} />
        </div>
      </section>

      <SectionDivider top="paper" bottom="mist" variant="arch" flip />

      {/* Areas covered */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Areas we cover"
            title={`Mobile car care across ${business.baseCity} & beyond`}
            subtitle="Tap your area for local tyre fitting, servicing and diagnostics — we come to you."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((l) => (
              <LocationCard key={l.slug} location={l} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-dark hover:underline"
            >
              See all areas covered
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider top="mist" bottom="paper" variant="drip" />

      {/* Our work */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our work"
            title="Real jobs, real results"
            subtitle={`A look at some of the mobile tyre and servicing work we've carried out across ${business.baseCity}.`}
          />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      <SectionDivider top="paper" bottom="mist" variant="wave" flip />

      {/* Reviews */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What customers say"
            title="Trusted by drivers across Bristol"
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      <SectionDivider top="mist" bottom="ink" variant="waves" />

      <CTASection />
    </>
  );
}
