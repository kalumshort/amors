import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { ContactForm } from "@/components/ContactForm";
import { CoverageMap } from "@/components/CoverageMap";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionDivider } from "@/components/SectionDivider";
import { JsonLd } from "@/components/JsonLd";
import {
  business,
  telHref,
  mailHref,
  whatsappHref,
} from "@/data/business";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact & Free Quote — Mobile Tyres & Servicing Bristol",
  description: `Get in touch with ${business.name} for a free, no-obligation quote. Call ${business.phoneDisplay}, WhatsApp or request a callback. Mobile service across ${business.baseCity}.`,
  alternates: { canonical: "/contact" },
};

const methods = [
  {
    icon: "phone",
    label: "Call us",
    value: business.phoneDisplay,
    href: telHref,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: "Message us",
    href: whatsappHref,
  },
  {
    icon: "mail",
    label: "Email",
    value: business.email,
    href: mailHref,
  },
];

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="bg-ink text-white">
        <div className="bg-grid-dark">
          <div className="container-x py-14 lg:py-20">
            <Breadcrumbs items={crumbs} />
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl">
              Get a free quote
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              Tell us your vehicle, location and what you need — we&rsquo;ll get
              straight back to you with an upfront price. For anything urgent,
              call us directly.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider top="ink" bottom="paper" variant="wave" />

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-bold text-ink">Talk to us directly</h2>
            <p className="mt-3 text-ink/65">
              We&rsquo;re a friendly, family-run team — no call centres, no
              hassle.
            </p>

            <div className="mt-8 space-y-3">
              {methods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-brand/40"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
                    <Icon name={m.icon} className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-ink/50">
                      {m.label}
                    </span>
                    <span className="block font-semibold text-ink">
                      {m.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-line bg-mist p-6">
              <div className="flex items-center gap-3">
                <Icon name="clock" className="h-6 w-6 text-brand" />
                <div>
                  <p className="font-semibold text-ink">Opening hours</p>
                  <p className="text-sm text-ink/65">{business.hours.weekdays}</p>
                  <p className="text-sm text-ink/65">{business.hours.weekend}</p>
                  <p className="mt-1 text-sm font-medium text-brand-dark">
                    {business.hours.emergency}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <CoverageMap className="min-h-[280px]" spread={0.35} />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-ink">Request a callback</h2>
            <p className="mt-3 text-ink/65">
              Fill in a few details and we&rsquo;ll be in touch shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
