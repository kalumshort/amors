"use client";

import { useSyncExternalStore } from "react";
import {
  isAnalyticsOptedOut,
  setAnalyticsOptOut,
  subscribeAnalyticsChoice,
} from "@/lib/analytics";

// Switch on the privacy page that turns Google Analytics off or back on for
// this browser. The server doesn't know the visitor's choice, so it renders a
// neutral placeholder and the real state appears once the page loads.
export function AnalyticsOptOut() {
  const optedOut = useSyncExternalStore(
    subscribeAnalyticsChoice,
    isAnalyticsOptedOut,
    () => null,
  );

  if (optedOut === null) {
    return (
      <div className="rounded-2xl border border-line bg-mist p-6 text-sm text-ink/60">
        Loading your analytics setting&hellip;
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-mist p-6">
      <p className="font-semibold text-ink" role="status">
        Analytics is {optedOut ? "off" : "on"} in this browser.
      </p>
      <p className="mt-1 text-sm text-ink/65">
        {optedOut
          ? "We won't collect any analytics from you in this browser."
          : "You can turn it off at any time. The website works the same either way."}
      </p>
      <button
        type="button"
        onClick={() => setAnalyticsOptOut(!optedOut)}
        className={`mt-4 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
          optedOut
            ? "border border-ink/20 bg-white text-ink hover:border-brand"
            : "bg-brand text-white hover:bg-brand-dark"
        }`}
      >
        {optedOut ? "Turn analytics back on" : "Turn off analytics"}
      </button>
    </div>
  );
}
