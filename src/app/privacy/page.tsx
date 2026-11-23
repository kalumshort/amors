import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionDivider } from "@/components/SectionDivider";
import { JsonLd } from "@/components/JsonLd";
import { AnalyticsOptOut } from "@/components/AnalyticsOptOut";
import { business, telHref, mailHref } from "@/data/business";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { breadcrumbSchema } from "@/lib/seo";

// Update this date whenever the policy text changes.
const LAST_UPDATED = "23 November 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${business.name} uses your information when you visit our website or contact us, which cookies we use, and how to turn analytics off.`,
  alternates: { canonical: "/privacy" },
};

const gaContainerCookie = `_ga_${GA_MEASUREMENT_ID.replace(/^G-/, "")}`;

const cookies = [
  {
    name: "_ga",
    purpose: "Google Analytics: tells visits from different browsers apart",
    lasts: "2 years",
  },
  {
    name: gaContainerCookie,
    purpose: "Google Analytics: keeps track of your current visit",
    lasts: "2 years",
  },
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function PrivacyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy", path: "/privacy" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="bg-ink text-white">
        <div className="bg-grid-dark">
          <div className="container-x py-14 lg:py-20">
            <Breadcrumbs items={crumbs} />
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl">
              Privacy policy
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              What information we collect when you use this website or get in
              touch, why we collect it, and the choices you have.
            </p>
            <p className="mt-3 text-sm text-white/55">
              Last updated {LAST_UPDATED}
            </p>
          </div>
        </div>
      </section>

      <SectionDivider top="ink" bottom="paper" variant="wave" />

      <section className="py-16 lg:py-20">
        <div className="container-x max-w-3xl leading-relaxed text-ink/75 [&_a]:font-medium [&_a]:text-brand-dark [&_a]:underline [&_a:hover]:no-underline [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
          <h2 className="!mt-0">Who we are</h2>
          <p>
            This website is run by {business.name}, a mobile tyre and vehicle
            servicing business covering {business.baseCity} and the surrounding
            areas. We are the &ldquo;controller&rdquo; of the personal
            information described here, which means we decide how it is used.
          </p>
          <p>
            Questions about your information, or requests to use your rights,
            go to <a href={mailHref}>{business.email}</a> or{" "}
            <a href={telHref}>{business.phoneDisplay}</a>.
          </p>

          <h2>When you contact us</h2>
          <p>
            When you call, message us on WhatsApp or email us, we receive the
            details you give us. That&rsquo;s usually your name, phone number or
            email address, your vehicle and registration, where the vehicle is,
            and what you need doing.
          </p>
          <p>
            We use this to give you a price, arrange and carry out the work,
            and contact you about it. That includes following up afterwards,
            for example to ask whether you&rsquo;d like to leave a review. We
            rely on this being needed to provide the service you asked for, and
            on our legitimate interest in following up on our work.
          </p>
          <p>
            We keep it for as long as we need it for the job, and then for as
            long as the law requires us to keep business and tax records.
          </p>
          <p>
            Messages sent on WhatsApp also pass through WhatsApp, which is run
            by Meta. WhatsApp&rsquo;s own privacy policy applies to its app.
          </p>

          <h2>Website analytics</h2>
          <p>
            We use Google Analytics to understand how people use this website,
            so we can improve it. It tells us things like which pages are
            visited, how people found the site, the type of device and browser
            used, the approximate area (such as the town) a visit came from,
            and when someone taps one of our phone or WhatsApp buttons. It
            doesn&rsquo;t tell us who you are.
          </p>
          <p>
            Google provides this service to us and stores the data. Analytics
            data is kept for the period set in our Google Analytics account,
            at most 14 months. We use it on the basis of our legitimate
            interest in improving our website, and you can switch it off below.
          </p>

          <h3 id="analytics-choice" className="scroll-mt-24">Turn analytics on or off</h3>
          <p>
            This setting is saved in your browser and covers this website
            only. If you clear your browser data, it resets, and you&rsquo;ll
            need to turn it off again.
          </p>
          <div className="mt-6">
            <AnalyticsOptOut />
          </div>
          <p>
            You can also block analytics on every website with your browser
            settings or Google&rsquo;s{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" {...ext}>
              Analytics opt-out browser add-on
            </a>
            .
          </p>

          <h2>Cookies</h2>
          <p>
            The only cookies this website sets are the Google Analytics
            cookies below. If you turn analytics off, we delete them and they
            aren&rsquo;t set again.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-mist text-ink">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Cookie
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    What it does
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    How long it lasts
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {cookies.map((c) => (
                  <tr key={c.name}>
                    <td className="px-4 py-3 font-mono text-xs text-ink">
                      {c.name}
                    </td>
                    <td className="px-4 py-3">{c.purpose}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{c.lasts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Your analytics setting itself is saved in your browser&rsquo;s
            local storage, not in a cookie, so that we can remember it.
          </p>

          <h2>Other services this website uses</h2>
          <ul>
            <li>
              <strong className="text-ink">Online booking.</strong> If you enter
              your registration to get a price, we open the{" "}
              <a href="https://bookmygarage.com" {...ext}>
                BookMyGarage
              </a>{" "}
              booking page and pass your registration to it. Anything you enter
              there is handled under BookMyGarage&rsquo;s own privacy policy.
            </li>
            <li>
              <strong className="text-ink">Maps.</strong> Our coverage maps
              come from{" "}
              <a href="https://www.openstreetmap.org" {...ext}>
                OpenStreetMap
              </a>
              . To show a map, your browser connects to OpenStreetMap, which
              receives your IP address and browser details like any website
              you visit. The map doesn&rsquo;t set cookies.
            </li>
            <li>
              <strong className="text-ink">Hosting.</strong> This website runs
              on Google Cloud. Like any web server, it receives your IP address
              and browser details in order to send you the page, and keeps
              them in logs for a short time for security and fixing problems.
            </li>
          </ul>
          <p>
            We don&rsquo;t sell your information or use advertising trackers.
            We only share information with the services described on this
            page, or where the law requires it.
          </p>
          <p>
            Some of these services, including Google and Meta, may handle data
            outside the UK. Where they do, UK data protection law requires
            safeguards to protect it.
          </p>

          <h2>Your rights</h2>
          <p>Under UK data protection law you can ask us to:</p>
          <ul>
            <li>give you a copy of the information we hold about you</li>
            <li>correct information that is wrong</li>
            <li>delete your information</li>
            <li>stop or limit how we use it, or object to how we use it</li>
            <li>
              give you your information in a format you can take elsewhere
            </li>
          </ul>
          <p>
            Email <a href={mailHref}>{business.email}</a> and we&rsquo;ll reply
            within one month. If you&rsquo;re unhappy with how we&rsquo;ve
            handled your information, please tell us first. You also have the
            right to complain to the{" "}
            <a href="https://ico.org.uk/make-a-complaint/" {...ext}>
              Information Commissioner&rsquo;s Office (ICO)
            </a>
            .
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we change how we use your information, we&rsquo;ll update this
            page and the date at the top.
          </p>
        </div>
      </section>
    </>
  );
}
