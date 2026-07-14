import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionDivider } from "@/components/SectionDivider";
import { JsonLd } from "@/components/JsonLd";
import { business, telHref, trustPoints } from "@/data/business";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us — Family-Run Mobile Mechanics in Bristol",
  description: `Amor's Tyres and Servicing is a family-run mobile tyre and vehicle servicing business in ${business.baseCity}, built on honest pricing and convenient, come-to-you car care.`,
  alternates: { canonical: "/about" },
};

const stats = [
  { value: "7 days", label: "A week availability" },
  { value: "24/7", label: "Emergency call-out" },
  { value: `${business.serviceRadiusKm}km`, label: "Coverage radius" },
  { value: "All", label: "Makes & models" },
];

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="bg-ink text-white">
        <div className="bg-grid-dark">
          <div className="container-x py-14 lg:py-20">
            <Breadcrumbs items={crumbs} />
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl">
              A family-run garage that comes to you
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              We started {business.name} with one simple idea: quality car care
              shouldn&rsquo;t mean losing a day at the garage. So we bring the
              garage to you.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider top="ink" bottom="mist" variant="curve" />

      {/* Stats */}
      <section className="bg-mist">
        <div className="container-x grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-brand-dark">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider top="mist" bottom="paper" variant="wave" />

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Honest, convenient car care"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-ink/75">
              <p>
                Based in {business.baseCity}, we&rsquo;re a family-run team of
                experienced technicians who believe in doing the job properly and
                charging fairly for it. Whether it&rsquo;s a single tyre, a full
                service or a warning light you can&rsquo;t explain, we turn up
                with the right tools and the right attitude.
              </p>
              <p>
                Because we&rsquo;re fully mobile, there&rsquo;s no dropping the
                car off, no waiting room and no juggling lifts. We fit our work
                around your day — at home while you get on with things, or at
                work while you&rsquo;re in a meeting.
              </p>
              <p>
                Most of all, we&rsquo;re straight with you. We&rsquo;ll always
                tell you what needs doing, what can wait, and exactly what
                it&rsquo;ll cost before we start.
              </p>
            </div>
            <div className="mt-8">
              <Button href={telHref} variant="primary" size="lg">
                <Icon name="phone" className="h-5 w-5" />
                Call {business.phoneDisplay}
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-mist p-8">
            <h2 className="text-lg font-bold text-ink">
              What you can count on
            </h2>
            <ul className="mt-6 space-y-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-ink/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider top="paper" bottom="ink" variant="waves" />

      <CTASection />
    </>
  );
}
