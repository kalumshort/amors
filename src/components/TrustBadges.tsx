import { Icon } from "./Icon";

const badges = [
  { icon: "home", label: "We come to you" },
  { icon: "money", label: "Transparent pricing" },
  { icon: "clock", label: "24/7 tyre call-out" },
  { icon: "shield", label: "All makes & models" },
];

export function TrustBadges() {
  return (
    <div className="border-y border-white/10 bg-ink-800 text-white">
      <div className="container-x grid grid-cols-2 gap-4 py-6 sm:grid-cols-4">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-3">
            <Icon name={b.icon} className="h-6 w-6 shrink-0 text-brand-light" />
            <span className="text-sm font-medium text-white/85">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
