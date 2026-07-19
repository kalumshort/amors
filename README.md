# Amor's Tyres and Servicing

Modern, SEO-optimised marketing site for **Amor's Tyres and Servicing** — a
family-run **mobile** tyre-fitting and vehicle-servicing business covering
Bristol and the surrounding areas.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**, server-rendered
and statically generated for strong local SEO, with an **individual page per
service area** to capture local search intent.

## Tech

- Next.js 16 (App Router, RSC) · React 19 · TypeScript
- Tailwind CSS v4 (brand tokens in `src/app/globals.css`)
- Deploys to **Firebase App Hosting** (Next.js SSR on Cloud Run)

## Project structure

```
src/
  app/                 Routes (App Router)
    page.tsx           Home
    services/          Services index + [slug] pages
    locations/         Areas index + [slug] pages  ← per-area SEO pages
    about/  contact/
    sitemap.ts  robots.ts  opengraph-image.tsx
  components/          Reusable UI (Header, Footer, cards, Faq…)
  data/                Single source of truth
    business.ts        NAP: name, phone, email, hours, geo, socials
    services.ts        6 services (content + FAQs)
    locations.ts       14 service areas (unique local content)
  lib/                 seo.ts (JSON-LD builders) · og.tsx (OG image)
```

**To add a service or area**, append an entry to `src/data/services.ts` or
`src/data/locations.ts` — the page, sitemap, metadata and JSON-LD are all generated.

## Local development

```bash
npm install
npm run dev                  # http://localhost:3000
```

The contact page directs visitors to call, WhatsApp or email the business
directly — there is no server-side form to configure.

```bash
npm run build   # production build — prerenders all service & location pages
npm start       # serve the production build
```

## Deploy — Firebase App Hosting

Config lives in [`apphosting.yaml`](./apphosting.yaml).

1. `npm i -g firebase-tools && firebase login`
2. `firebase init apphosting` (select/create your Firebase project & region).
3. App Hosting builds automatically on push to the connected GitHub branch, or
   roll out manually with `firebase deploy`.

## SEO features

- Unique `<title>` / meta description + canonical per page
- JSON-LD: `AutoRepair` LocalBusiness (site-wide), `Service`, per-area
  `LocalBusiness` with scoped `areaServed`, `BreadcrumbList`, `FAQPage`
- Dynamic `sitemap.xml` (all services + areas) and `robots.txt`
- Generated Open Graph images per route
- Semantic HTML, mobile-first, accessible (skip link, focus states, ARIA)

## To finish before go-live

- Real logo + photography (currently a text wordmark + brand placeholders)
- Firebase project setup
- Swap placeholder reviews in `src/components/Testimonials.tsx` for real ones
- Confirm the production domain in `src/data/business.ts` (`url`)
