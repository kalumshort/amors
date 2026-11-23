import { Icon } from "./Icon";
import { business } from "@/data/business";
import { homeReviews, type Review } from "@/data/reviews";

/**
 * "★★★★★ Rated 5.0 on Google from 20 reviews", linking to the Google profile.
 * `tone="dark"` is for use on the dark hero backgrounds.
 */
export function GoogleRating({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { score, count } = business.googleRating;
  const dark = tone === "dark";
  return (
    <a
      href={business.social.google}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border px-5 py-2.5 text-sm ${
        dark
          ? "border-white/15 bg-white/5 text-white/75 hover:border-white/40"
          : "border-line bg-white text-ink/75 shadow-[var(--shadow-card)] hover:border-brand/40"
      }`}
    >
      <span
        className={`flex gap-0.5 ${dark ? "text-brand-light" : "text-brand"}`}
        aria-hidden
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" className="h-4 w-4" />
        ))}
      </span>
      <span>
        Rated{" "}
        <strong className={`font-bold ${dark ? "text-white" : "text-ink"}`}>
          {score}
        </strong>{" "}
        on Google{" "}
        <span className="whitespace-nowrap">from {count} reviews</span>
      </span>
    </a>
  );
}

export function Testimonials({ reviews = homeReviews }: { reviews?: Review[] }) {
  return (
    <>
      <p className="mb-10 text-center">
        <GoogleRating />
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="flex gap-0.5 text-brand" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4" />
                ))}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                Google review
              </span>
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold text-ink">{r.name}</span>
              {r.area && <span className="text-ink/55"> · {r.area}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
      {business.social.google && (
        <p className="mt-8 text-center">
          <a
            href={business.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-brand-dark hover:underline"
          >
            Read our Google reviews
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </p>
      )}
    </>
  );
}
