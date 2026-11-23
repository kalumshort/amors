import { Icon } from "./Icon";
import { business } from "@/data/business";

// Real 5-star reviews from our Google Business Profile, quoted word for word
// and in full (copied 2026-11-23). Only use complete reviews, never a
// snippet Google has cut short with "More".
type Review = {
  name: string;
  area?: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Irina D.",
    text: "Kieran did an amazing job changing 4 tyres on my EV today. Super efficient, friendly and professional. Competitive price and punctual. Excellent mobile service. Happy to recommend with confidence!",
  },
  {
    name: "Lee B.",
    text: "Sorry for the late review. I was rescued on the M5 after a pot hole incident. Amors came out, called by the RAC, early on a Sunday morning coming back from the airport. Fab service, really quick attendance and changed my tyre at a reasonable price. Lovely chap, great service. Thank you.",
  },
  {
    name: "Stuart K.",
    text: "Incredibly efficient and tried to do the cheapest and easier option available, not just take my money. Would 100 percent use their services again.",
  },
];

export function Testimonials() {
  const { score, count } = business.googleRating;
  return (
    <>
      <p className="mb-10 text-center">
        <a
          href={business.social.google}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-line bg-white px-5 py-2.5 text-sm text-ink/75 shadow-[var(--shadow-card)] hover:border-brand/40"
        >
          <span className="flex gap-0.5 text-brand" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" className="h-4 w-4" />
            ))}
          </span>
          <span>
            Rated <strong className="font-bold text-ink">{score}</strong> on
            Google{" "}
            <span className="whitespace-nowrap">from {count} reviews</span>
          </span>
        </a>
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
