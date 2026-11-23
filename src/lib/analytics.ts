// Google Analytics settings and the visitor's analytics opt-out, shared by the
// GA tag (GoogleAnalytics.tsx), the click tracking (instrumentation-client.ts)
// and the switch on the privacy page (AnalyticsOptOut.tsx).
//
// Opting out sets Google's official kill switch, window["ga-disable-<ID>"],
// which stops gtag.js sending anything or setting cookies. The choice is kept
// in localStorage (not a cookie) so it lasts between visits.

export const GA_MEASUREMENT_ID = "G-CG2Y38PC1F";

const OPT_OUT_KEY = "analytics-opt-out";
const DISABLE_FLAG = `ga-disable-${GA_MEASUREMENT_ID}`;
const listeners = new Set<() => void>();

type FlagWindow = Window & Record<string, unknown>;

export function isAnalyticsOptedOut(): boolean {
  try {
    return localStorage.getItem(OPT_OUT_KEY) === "1";
  } catch {
    return false; // storage blocked: nothing saved, so not opted out
  }
}

/** Apply the saved choice. Call before the GA tag runs. */
export function applyAnalyticsChoice(): void {
  (window as unknown as FlagWindow)[DISABLE_FLAG] = isAnalyticsOptedOut();
}

export function setAnalyticsOptOut(optOut: boolean): void {
  try {
    if (optOut) localStorage.setItem(OPT_OUT_KEY, "1");
    else localStorage.removeItem(OPT_OUT_KEY);
  } catch {
    // Storage blocked: the choice still applies for the rest of this visit.
  }
  (window as unknown as FlagWindow)[DISABLE_FLAG] = optOut;
  if (optOut) deleteAnalyticsCookies();
  listeners.forEach((notify) => notify());
}

/** For useSyncExternalStore: re-render when the choice changes, here or in another tab. */
export function subscribeAnalyticsChoice(notify: () => void): () => void {
  listeners.add(notify);
  window.addEventListener("storage", notify);
  return () => {
    listeners.delete(notify);
    window.removeEventListener("storage", notify);
  };
}

// GA sets _ga and _ga_<container> on the site's top-level domain, so clear
// them on every domain level the cookie could be on.
function deleteAnalyticsCookies(): void {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));
  const parts = location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) {
    domains.push(`; domain=.${parts.slice(i).join(".")}`);
  }
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}
