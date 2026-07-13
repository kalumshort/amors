import { Icon } from "./Icon";
import { business, telHref, whatsappHref } from "@/data/business";

// Fixed call / WhatsApp bar shown on small screens only — a mobile trade's
// traffic is overwhelmingly on phones, so keep conversion one tap away.
export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-white/10 bg-ink lg:hidden">
      <a
        href={telHref}
        className="flex items-center justify-center gap-2 bg-brand py-3.5 text-sm font-semibold text-white"
      >
        <Icon name="phone" className="h-5 w-5" />
        Call now
      </a>
      <a
        href={whatsappHref}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
      >
        <Icon name="whatsapp" className="h-5 w-5 text-brand-light" />
        WhatsApp
      </a>
      <span className="sr-only">Call {business.phoneDisplay}</span>
    </div>
  );
}
