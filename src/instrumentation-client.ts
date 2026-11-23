// Sends a Google Analytics event when someone taps a phone or WhatsApp link,
// so GA can show which pages and which buttons bring in enquiries.
//
// One listener covers every link on the site, current and future: any <a>
// whose href starts with "tel:" or points at wa.me. Wrap a group of links in
// an element with data-cta="name" to report them under that name; otherwise
// they're reported as "header", "footer" or "page".
//
// Events: click_call and click_whatsapp, with cta_location and link_text.

export {};

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

function contactMethod(href: string): "phone" | "whatsapp" | null {
  if (href.startsWith("tel:")) return "phone";
  if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return "whatsapp";
  return null;
}

function ctaLocation(link: Element): string {
  const named = link.closest<HTMLElement>("[data-cta]")?.dataset.cta;
  if (named) return named;
  if (link.closest("header")) return "header";
  if (link.closest("footer")) return "footer";
  return "page";
}

// Readable label for the link: its visible text with a space between pieces
// (so "Call us" + "07503 185406" doesn't run together), or its aria-label
// for icon-only links.
function linkText(link: Element): string {
  const parts: string[] = [];
  const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) parts.push(walker.currentNode.textContent ?? "");
  const text = parts.join(" ").replace(/\s+/g, " ").trim();
  return (text || link.getAttribute("aria-label") || "").slice(0, 100);
}

// Same queueing function as the gtag snippet in GoogleAnalytics.tsx, used if
// a tap comes before that snippet has run. gtag.js needs the arguments object
// itself, not an array, so this can't use rest parameters.
function queueGtag() {
  // eslint-disable-next-line prefer-rest-params
  (window.dataLayer = window.dataLayer || []).push(arguments);
}

document.addEventListener(
  "click",
  (event) => {
    try {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href]");
      if (!link) return;
      const method = contactMethod(link.getAttribute("href") ?? "");
      if (!method) return;

      const gtag: Gtag = window.gtag ?? queueGtag;
      gtag("event", method === "phone" ? "click_call" : "click_whatsapp", {
        cta_location: ctaLocation(link),
        link_text: linkText(link),
      });
    } catch {
      // Tracking must never stop a call or message from going through.
    }
  },
  { capture: true },
);
