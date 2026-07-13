import { Icon } from "./Icon";

// Placeholder reviews — swap for real customer testimonials when available.
const reviews = [
  {
    name: "Sarah T.",
    area: "Bishopston, Bristol",
    text: "Came out the same day to fit two tyres on my driveway. Friendly, quick and cheaper than the quote I got from a garage. Couldn't ask for more.",
  },
  {
    name: "Mark D.",
    area: "Portishead",
    text: "Car wouldn't start before work — they were with me within the hour, tested it and fitted a new battery on the spot. Absolute lifesaver.",
  },
  {
    name: "Priya K.",
    area: "Keynsham",
    text: "Had my car serviced at home while I worked. Clear about what was needed, no upselling, and a proper record for my service history.",
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
            <span className="text-ink/55"> · {r.area}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
