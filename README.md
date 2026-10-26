# DenFlow Plumbing & Water Solutions

The marketing website for **DenFlow Plumbing & Water Solutions**, a Nairobi-based
plumbing business run by Dennis Mwangi. It is a single-page site with a quote
request form that emails leads directly to Dennis.

## Stack

- Next.js 16.4.1 (App Router, Turbopack) with TypeScript
- Tailwind CSS v4 and shadcn/ui
- Manrope via `next/font`
- Framer Motion, Remix Icons and Sonner
- React Hook Form + Zod
- Resend + React Email for quote request emails
- Zustand for service pre-selection
- Vercel Analytics and Speed Insights

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open <http://localhost:3000>.

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used in metadata, sitemap and JSON-LD |
| `RESEND_API_KEY` | Resend API key for quote request emails |
| `CONTACT_TO_EMAIL` | Inbox that receives quote requests (Dennis) |
| `CONTACT_FROM_EMAIL` | Verified Resend sender, e.g. `DenFlow <quotes@denflow.co.ke>` |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name (optional, for future image delivery) |
| `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECRET` | Only needed for uploads from the app |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number, digits only |
| `NEXT_PUBLIC_GA_ID` | Optional GA4 measurement ID |

### Resend setup

1. Create a Resend account and verify the sending domain.
2. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` to your
   hosting environment.
3. Submit the quote form and confirm the email arrives with correct formatting.

Without `RESEND_API_KEY`, development builds log the submission to the server
console and show the success state. Production builds return a clear contact
fallback instead of pretending the email was sent.

## Editing content

All business content lives in typed data files, not in components:

- `lib/site-config.ts` — business name, phone, email, hours, service region, stats
- `lib/services.ts` — the nine services, copy, bullets and image mapping
- `lib/faqs.ts` — FAQ content and schema source
- `lib/areas.ts` — service areas
- `lib/images.ts` — local image map

The current photography is stored in `assets/images/` and imported through
`lib/images.ts`. When Cloudinary assets are ready, update that map or switch the
`NotchedImage` component to use remote URLs. `next.config.ts` already allows
`res.cloudinary.com`.

## Analytics

Vercel Analytics and Speed Insights are enabled in `app/layout.tsx`. Custom
events are sent through `lib/analytics.ts` for calls, WhatsApp, email, service
card clicks, form start, form success and form errors.

GA4 is optional. If you add `NEXT_PUBLIC_GA_ID`, load the GA script in the layout
before relying on GA-formatted events.

## Scripts

```bash
pnpm dev        # start the development server
pnpm build      # production build
pnpm start      # run the production build
pnpm lint       # ESLint
pnpm typecheck  # TypeScript, no emit
```

## Deployment

The site is designed for Vercel. Push the repository, import it in Vercel, add
the environment variables above, and deploy. After launch:

1. Submit `https://denflow.co.ke/sitemap.xml` to Google Search Console and Bing
   Webmaster Tools.
2. Set up and verify a Google Business Profile as a service-area business.
3. Test a real form submission, call link, WhatsApp link and the 404 page on a
   phone.
4. Replace any remaining stock photography with Dennis's own job photos.

## Content integrity

Testimonials are intentionally hidden until real, verified reviews with
permission to publish exist. Do not add placeholder reviews, ratings or
`aggregateRating` markup. Pricing is scope-based, so the site avoids fixed
prices and unverified statistics.
