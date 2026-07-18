import Link from "next/link";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import {
  business,
  telHref,
  mailHref,
  whatsappHref,
} from "@/data/business";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink text-white/80">
      <div className="container-x grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand + contact */}
        <div>
          <Logo className="mb-4 h-8 text-white" />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            {business.tagline}. Covering {business.baseCity} and the surrounding
            areas.
          </p>

          <div className="mt-5 space-y-2 text-sm">
            <a
              href={telHref}
              className="flex items-center gap-2.5 hover:text-white"
            >
              <Icon name="phone" className="h-4 w-4 text-brand-light" />
              {business.phoneDisplay}
            </a>
            <a
              href={mailHref}
              className="flex items-center gap-2.5 break-all hover:text-white"
            >
              <Icon name="mail" className="h-4 w-4 text-brand-light" />
              {business.email}
            </a>
            <p className="flex items-center gap-2.5">
              <Icon name="clock" className="h-4 w-4 text-brand-light" />
              {business.hours.weekdays}
            </p>
          </div>

          <div className="mt-5 flex gap-3">
            <a
              href={whatsappHref}
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-brand"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
            </a>
            <a
              href={business.social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-brand"
            >
              <span className="text-lg font-bold">f</span>
            </a>
          </div>
        </div>

        {/* Services */}
        <nav aria-label="Services">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h2>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Areas */}
        <nav aria-label="Areas covered">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Areas Covered
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="hover:text-white"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h2>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact &amp; Quote
              </Link>
            </li>
            <li>
              <Link href="/locations" className="hover:text-white">
                Coverage Area
              </Link>
            </li>
          </ul>
          <div className="mt-6 rounded-xl bg-white/5 p-4 text-sm">
            <p className="font-semibold text-white">24/7 Emergency Tyre Call-Out</p>
            <p className="mt-1 text-white/70">
              Stuck with a flat or a blowout? Call us any time.
            </p>
          </div>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p>
            Mobile tyres &amp; vehicle servicing across {business.baseCity} &amp;
            surrounding areas.
          </p>
        </div>
      </div>
    </footer>
  );
}
