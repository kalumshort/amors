import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

// Visitors who opt out on /privacy are switched off in instrumentation-client.ts,
// which runs before this tag.

// Loads the Google Analytics gtag.js tag. Server component — `afterInteractive`
// keeps the tag off the critical path while still firing on every page view.
export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
