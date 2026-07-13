import Link from "next/link";
import { Icon } from "./Icon";
import type { Location } from "@/data/locations";

export function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[var(--shadow-card)]"
    >
      <span className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand-dark transition-colors group-hover:bg-brand group-hover:text-white">
          <Icon name="pin" className="h-5 w-5" />
        </span>
        <span>
          <span className="block font-semibold text-ink">{location.name}</span>
          <span className="block text-xs text-ink/55">{location.county}</span>
        </span>
      </span>
      <Icon
        name="arrow"
        className="h-4 w-4 text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-brand"
      />
    </Link>
  );
}
