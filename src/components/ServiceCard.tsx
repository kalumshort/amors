import Link from "next/link";
import { Icon } from "./Icon";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[var(--shadow-card-hover)]"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-dark transition-colors group-hover:bg-brand group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-ink">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
        {service.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark">
        Learn more
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
