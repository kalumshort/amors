import Link from "next/link";
import { Icon } from "./Icon";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-ink/55">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="font-medium text-ink/80" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-brand-dark">
                    {item.name}
                  </Link>
                  <Icon name="chevron" className="h-3.5 w-3.5 -rotate-90" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
