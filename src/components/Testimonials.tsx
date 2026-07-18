import { Icon } from "./Icon";

// Real customer reviews from our Facebook recommendations.
type Review = {
  name: string;
  area?: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Hayley M.",
    text: "Excellent service, called early this morning about a flat tyre and was fixed within the hour! Highly recommend.",
  },
  {
    name: "MGF Window Cleaning",
    text: "Highly recommend. Changed both our front tyres while we were still able to work and recommended a better quality tyre for our van to what we have usually been given by a standard garage. Friendly, reliable and quality service.",
  },
  {
    name: "Paws & Plays Pet Services",
    text: "100% recommend! He sorted out my DPF and done a service which was well needed and over due! Thanks for the speedy service to get me back on the road safely and quickly.",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {reviews.map((r) => (
        <figure
          key={r.name}
          className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]"
        >
          <div className="flex gap-0.5 text-brand" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" className="h-4 w-4" />
            ))}
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
  );
}
