# Blueprint — AquaDen Plumbing & Water Solutions

A single-page, premium marketing website for **Dennis Mwangi**, a plumber based in Nairobi, Kenya.
This document is the full build plan for the coding agent: read it top to bottom, then build in the order given in **Section 17**.

> **Rule for the agent:** do not invent facts about the business. Anything marked `CONFIRM` is a placeholder until Dennis confirms it. Never publish fake reviews, fake ratings, or fake statistics.

---

## 1. Project Overview

| Item | Detail |
|---|---|
| **Business** | Dennis the Plumber — Water Solutions (brand name below) |
| **Owner** | Dennis Mwangi |
| **Location** | Nairobi, Kenya (service-area business, serves Nairobi and surroundings) |
| **Phone / WhatsApp** | +254 719 397 182 |
| **Email** | dkariukim284@gmail.com |
| **Type** | Single-page marketing website (one URL, anchored sections) |
| **Primary goal** | Get visitors to **call, WhatsApp, or request a quote** |
| **Secondary goal** | Rank for local plumbing searches and get cited by AI assistants |
| **Audience** | Nairobi homeowners, landlords, property managers, estate caretakers, small businesses. Mostly on **mobile phones**, often on mid-speed networks |
| **Tone** | Trustworthy, calm, premium, no clutter |

### Services Dennis offers (from his profile)
1. Piping (pipe installation and replacement)
2. Plumbing repairs
3. House pointing
4. Drain unblocking
5. Bio digester installation

Optional extras to add **only if Dennis confirms** he does them: water tank and pump connections, leak detection, water heater / solar heater installation, borehole plumbing connections, bathroom and kitchen fit-outs.

---

## 2. Brand & Naming

**Chosen brand name: AquaDen Plumbing & Water Solutions**
- Short form / logo wordmark: **AquaDen**
- Tagline: **"Clean water. Clear drains. Done right."**
- Why: short, memorable, includes "Den" (Dennis), says water immediately, easy to spell and say over the phone, and works as a `.co.ke` domain.

Alternatives if Dennis prefers: **DenFlow Plumbing**, **Mwangi Water Works**, **ClearFlow Nairobi**.

**Domain:** try `aquaden.co.ke` first, then `aquadenplumbing.co.ke`, then `.com`. Prefer `.co.ke` for local trust.

**Logo:** simple wordmark in the primary blue, with a small water-drop mark. Light and dark (white) versions. Export SVG.

**Legal / name consistency:** use the exact same business name, phone number, and area description everywhere (site, Google Business Profile, social, directories). This is critical for local SEO (NAP consistency).

---

## 3. Tech Stack

Required by the project brief plus the standard stack used for all projects. Only layers that a marketing site actually needs are used.

| Layer | Technology | Use on this site |
|---|---|---|
| Framework | **Next.js 16.4.1, App Router** | Server Components by default, metadata API, `sitemap`/`robots` routes, OG image generation |
| Language | **TypeScript** (strict) | Whole project |
| Styling | **Tailwind CSS** (v4, CSS-first tokens) | All styling; design tokens defined once |
| UI components | **shadcn/ui** (many components, see §9) | Buttons, cards, badges, tooltips, skeletons, accordion, sheet, form, etc. |
| Icons | **Remix** | Service icons, contact icons, UI arrows |
| Animation | **Framer Motion** | Subtle scroll reveals, count-up stats, hover lifts |
| Forms | **React Hook Form + Zod** | Contact/quote form, shared schema for client and server |
| Notifications | **Sonner** | Success/error toasts for form and copy-to-clipboard |


| Client state | **Zustand** | One tiny store: the "selected service" so a service card can pre-fill the contact form |
| Hosting | **Vercel** | Deployment, Analytics, Speed Insights |

**Deliberately not used** (not needed for a brochure site): Prisma, PostgreSQL, NextAuth, TanStack Query, Vercel Cron. Quote requests go straight to email. If Dennis later wants a dashboard of leads, add Prisma + PostgreSQL then.

**Version notes for the agent (verify against the Next.js 16 docs before relying on them):**
- Request APIs such as `params` and `searchParams` are async.
- Turbopack is the default bundler.
- `middleware` is renamed `proxy` in Next 16 (this site needs neither).
- Pin the exact version `16.4.1` in `package.json`.

---

## 4. Design System

Copy the look of the reference screenshot (the "BlueFlow" plumbing template): a deep royal-blue hero, crisp white sections, big confident typography, rounded image cards with one notched corner, and lots of breathing room. **Sample exact hex values from the screenshot with an eyedropper**, the values below are close approximations.

### 4.1 Colour tokens

| Token | Approx. hex | Use |
|---|---|---|
| `primary` | `#0A1C9C` | Hero background, footer, primary buttons on light sections |
| `primary-deep` | `#07127A` | Hover states, gradients, footer base |
| `brand-blue` | `#1F3FD1` | Highlighted words in body copy, links, focus rings, icon accents |
| `brand-bright` | `#2F5BEA` | Small circular icon buttons (like the "+" chip on the hero card) |
| `periwinkle` | `#C9D4F5` | Nav pill background, soft badges |
| `tint` | `#EEF1FB` | Alternate section backgrounds, card hover fill |
| `backdrop` | `#C7CFEA` | Only for decorative blocks, not the page background |
| `ink` | `#0B0B0F` | Headings, black pill buttons ("Schedule a Visit") |
| `muted` | `#6B7280` | Secondary text |
| `border` | `#E5E7EB` | Hairlines and dividers |
| `star` | `#F4B63A` | Rating star badge only |
| `white` | `#FFFFFF` | Page background, cards |

Rules:
- Page background is **white**. The lavender behind the screenshot is just the presentation backdrop, not part of the site.
- Blue appears in large controlled blocks (hero, footer, one CTA band), not sprinkled everywhere.
- Black pill buttons on white surfaces, white pill buttons on blue surfaces.
- Text contrast must pass WCAG AA (white on `primary` passes comfortably).

### 4.2 Typography
- **Font:** Manrope (matches the screenshot's geometric, friendly look). Load through `next/font/google`, weights 400, 500, 600, 700, 800. Fallback: Plus Jakarta Sans.
- **Headings:** semibold to bold, tight line-height (~1.1), slightly negative letter-spacing.
- **Scale (desktop / mobile):** H1 64–72px / 38–42px; H2 44–48px / 30–32px; H3 22–24px / 20px; body 17–18px / 16px; small 14px.
- **Stat numerals:** very large (72–96px), medium weight, tight tracking, with a small label underneath.
- Body copy line length max ~60 characters. Use **brand-blue** for 3–5 key words in a paragraph, as the reference does with "expert workmanship and reliable customer care."

### 4.3 Space, shape, depth
- **Whitespace:** section vertical padding 112–144px desktop, 72–88px mobile. Container max width ~1200px with generous side padding. When unsure, add more space.
- **Radius:** cards 24–32px, buttons fully pill-shaped, nav pill fully rounded, inputs 14–16px.
- **Notched image frames:** service and about images use a large radius plus **one clipped (chamfered) corner**, as in the reference. Build as a reusable `NotchedImage` component (CSS clip-path or SVG mask).
- **Shadows:** very soft and diffuse (low opacity, large blur). No harsh borders.
- **Floating glass card:** the hero's "Your Local Plumbing Specialists" card overlaps the hero image. Light periwinkle fill, rounded, rating badge in amber pinned top-right.
- **Decorative details:** one hand-drawn curved arrow doodle near the hero, circular arrow buttons on service image cards, a small play-style thumbnail card in the hero (use only if Dennis has a real video, otherwise swap for a work photo).

### 4.4 Motion (Framer Motion)
- Scroll reveal: fade + 16px upward slide, 0.5s ease-out, once only.
- Stats count up when they enter the viewport.
- Cards lift 4px and gain a soft shadow on hover.
- Hero: gentle stagger on headline, subtext, and buttons. No animation on the LCP image itself.
- Respect `prefers-reduced-motion` (disable all of the above).
- Keep it subtle. Premium means restrained.

### 4.5 Imagery
- Real photos of Dennis and his jobs beat stock. Ask Dennis for 15–25 photos: portrait in work gear, drains being unblocked, piping, a bio digester install, finished pointing work, his van and tools.
- Hero needs a **transparent-background cut-out** of Dennis (arms crossed, work clothes) on the blue background. Fall back to a framed photo inside a notched card.
- Consistent treatment: same colour grade, rounded notched frames, no mixed styles.
- Every image gets descriptive alt text (see §12).

---

## 5. Project Structure

```
aquaden/
├─ app/
│  ├─ layout.tsx              root layout, fonts, metadata, JSON-LD, Toaster
│  ├─ page.tsx                composes all sections
│  ├─ globals.css             Tailwind + design tokens
│  ├─ sitemap.ts              sitemap
│  ├─ robots.ts               robots + AI crawler rules
│  ├─ manifest.ts             web manifest
│  ├─ opengraph-image.tsx     generated OG image
│  ├─ icon.* / apple-icon.*   favicons
│  ├─ not-found.tsx           friendly 404
│  └─ actions/
│     └─ contact.ts           server action: validate, send email
├─ components/
│  ├─ ui/                     shadcn components
│  ├─ layout/                 navbar, mobile-menu, footer, sticky-call-bar, whatsapp-fab
│  ├─ sections/               hero, trust-strip, stats, about, services, process,
│  │                          why-us, areas, testimonials, faq, contact, cta-band
│  ├─ shared/                 notched-image, section-heading, reveal, count-up, logo
│  └─ seo/                    json-ld component
├─ emails/                    React Email templates (quote-request, auto-reply)
├─ lib/
│  ├─ site-config.ts          business details: single source of truth
│  ├─ services.ts             service data
│  ├─ faqs.ts                 FAQ data (feeds UI and schema)
│  ├─ areas.ts                service-area data
│  ├─ schemas.ts              Zod schemas
│  ├─ seo.ts                  JSON-LD builders
│  └─ utils.ts
├─ store/
│  └─ service-store.ts        Zustand: selected service
├─ public/
│  ├─ llms.txt
│  └─ (static fallbacks)
└─ .env.example
```

---

## 6. Data Model (content as data, not hard-coded)

Everything the site says about the business lives in typed config files so edits never touch components.

**`site-config`** holds: brand name, short name, tagline, owner name, phone (display + E.164 + WhatsApp number), email, county, city, country, service-area list, social links (empty until created), opening hours (`CONFIRM`), founding year (`CONFIRM`), canonical site URL (from env), logo path, default OG image.

**`services`** (array). Each item: `slug`, `title`, `shortDescription`, `longDescription` (80–120 words, keyword-aware), `icon` (Lucide name), `image` (Cloudinary public ID), `alt`, `keywords`, `bullets` (3–5 "what's included" points), `faq` (optional per-service question IDs).

**`faqs`** (array): `question`, `answer` (plain text, 40–70 words, answer-first), `category`.

**`areas`** (array): `name`, `slug`, optional note. Used for the service-area section and `areaServed` schema.

**Contact form schema (Zod, shared client + server):** `name` (required, 2–80), `phone` (required, Kenyan format validation, accept `07xx`, `01xx`, `+254…`, normalise to `+254…`), `email` (optional), `service` (enum from services plus "Other"), `location` (required: estate/area), `message` (optional, max 1000), `honeypot` (must be empty), `startedAt` (timestamp for time-to-submit check).

---

## 7. Page Architecture (single page, section order)

One route (`/`). Sections are anchored and the navbar scrolls to them.

| # | Section | Anchor | Purpose |
|---|---|---|---|
| 1 | Navbar | — | Wayfinding + persistent "Get a Quote" |
| 2 | Hero | `#home` | Promise, trust, two CTAs |
| 3 | Trust strip | — | Quick credibility chips |
| 4 | About + stats | `#about` | Who Dennis is, proof numbers |
| 5 | Services | `#services` | All five services |
| 6 | How it works | `#process` | Reduce friction: 4 simple steps |
| 7 | Why choose us | `#why-us` | Differentiators |
| 8 | Service areas | `#areas` | Local SEO + reassurance |
| 9 | Testimonials | `#reviews` | **Only real reviews**; hide section until available |
| 10 | FAQ | `#faq` | SEO + AI answers |
| 11 | CTA band | — | Final push before contact |
| 12 | Contact | `#contact` | Form, call, WhatsApp, hours |
| 13 | Footer | — | NAP, links, legal |

Global floating elements: **mobile sticky bottom bar** (Call + WhatsApp) and a desktop **WhatsApp floating button**.

---

## 8. Section-by-Section Build Guide

Copy below is the starting draft. Keep headings keyword-aware but natural. Replace `CONFIRM` items before launch.

### 8.1 Navbar
- Floating **pill-shaped nav** on a periwinkle background, centred, sitting over the hero (as in the reference). Logo left, links centre (Home, About, Services, Areas, FAQ, Contact), "Book Service" / "Get a Quote" pill button right in `primary` blue.
- Becomes solid white with soft shadow after scrolling a little. Sticky.
- Mobile: logo + hamburger. Hamburger opens a shadcn **Sheet** with large links, a Call button, and a WhatsApp button.
- Scroll-spy highlights the active section. Use `scroll-margin-top` on sections so headings don't hide under the nav.
- Phone number visible in the navbar on desktop (`tel:` link).

### 8.2 Hero (`#home`)
- Full-width **deep blue** panel with rounded bottom corners, large padding.
- **Left/centre:** Dennis cut-out inside a notched, light frame (matches the reference). The **floating card** overlaps its left: rating badge (amber star + score), small line of text, row of small avatar circles (customer photos only if real, else use service icons), heading "Your Local Plumbing Specialists", black pill button "Schedule a Visit". If there are no real reviews yet, replace the rating badge with a badge such as "Fast response in Nairobi".
- **Right:** H1 in white, subtext in soft white/blue, two buttons: white pill "Get a Free Quote" and outlined pill "Call +254 719 397 182". A small work-photo thumbnail card at the bottom right, with the curved arrow doodle pointing to it.
- **H1:** "Professional Plumbing & Drain Solutions in Nairobi"
- **Subtext:** "From burst pipes and blocked drains to bio digester installation, AquaDen delivers reliable, affordable, long-lasting plumbing for homes and businesses across Nairobi."
- Hero image uses `priority`, explicit dimensions, and a blur placeholder. Use a shadcn **Skeleton** only for the floating card if any part loads async (it shouldn't, so skeleton is mostly for images below the fold).
- Only one `<h1>` on the page.

### 8.3 Trust strip
Slim row of 4 chips with Lucide icons: "Same-day call-outs (`CONFIRM`)", "Free quotes", "Serving all of Nairobi", "Neat, tidy workmanship". Use shadcn **Badge**.

### 8.4 About + stats (`#about`)
- Two-column layout, lots of white space.
- **Left:** large paragraph in the reference style: "We provide dependable plumbing services that keep homes and businesses running smoothly with **expert workmanship and reliable customer care**." Beneath, a smaller grey paragraph about Dennis's story (`CONFIRM`: years in the trade, how he started, training), and a "Meet Dennis" mini-card with portrait.
- **Image:** notched photo of Dennis working (reference has a woman plumber at a sink; use Dennis's own).
- **Stats:** replicate the reference's **staggered stair-step layout**: three large numerals offset from each other with hairline dividers and tiny labels underneath, count-up on view.
  - Years of experience `CONFIRM`
  - Projects completed `CONFIRM`
  - Customer satisfaction `CONFIRM`
- **If Dennis can't verify the numbers, do not use the template's 15+/8,500+/99%.** Use honest alternatives: "Free" quotes, "7 days" availability `CONFIRM`, "5" core services, "All Nairobi" coverage.

### 8.5 Services (`#services`)
- Section heading echoing the reference: "Complete Plumbing Solutions for Every Property". Small eyebrow label "Our Services".
- Grid of **service cards** (3 across desktop, 2 tablet, 1 mobile). Each card: notched image on top with a **circular arrow button** at its top-right, title, short description, 3 bullets (what's included), text link "Request this service".
- Clicking the card or arrow sets the Zustand `selectedService`, smooth-scrolls to `#contact`, and the form's service field is pre-selected. Show a Sonner toast: "Service selected, tell us where you are."
- **All service text is rendered in the HTML** (no content hidden behind click-to-reveal) so search engines and AI crawlers read it.
- Draft content:

| Service | Short description | Includes |
|---|---|---|
| **Piping & Pipe Installation** | New water lines, replacements, and re-piping for homes, flats, and commercial buildings. | Supply line installation, pipe replacement, bathroom/kitchen piping |
| **Plumbing Repairs** | Fast fixes for leaks, burst pipes, faulty taps, toilets, and showers. | Leak repair, tap and mixer fixes, cistern and toilet repair |
| **Drain Unblocking** | Clearing blocked sinks, toilets, and drains, and restoring proper flow. | Blocked sink/toilet, drainage clearing, manhole and line clearing |
| **Bio Digester Installation** | Modern, odour-free wastewater treatment for homes and estates without sewer connection. | Site assessment, installation, connection to home plumbing |
| **House Pointing** | Neat, durable pointing that protects walls from water damage and improves appearance. | Wall pointing, finishing, weatherproofing |

- Use **Tooltip** on icon buttons, **Badge** for tags like "Popular" or "Eco-friendly" (bio digester).
- Image loading: shadcn **Skeleton** shimmer behind each image until it loads (client wrapper around `next/image` `onLoad`).

### 8.6 How it works (`#process`)
Four numbered steps, horizontal on desktop, vertical on mobile: **1. Call or message us → 2. Free assessment/quote → 3. Professional fix → 4. Clean-up and follow-up.** Large numerals in soft `tint`, thin connecting line.

### 8.7 Why choose us (`#why-us`)
Six cards with icons, short and concrete (no clichés): transparent pricing (quote before work), tidy workmanship, quality materials, responsive communication, fair pricing, local Nairobi knowledge. Use claims Dennis can stand behind (`CONFIRM`).

### 8.8 Service areas (`#areas`)
- Heading: "Plumbing Services Across Nairobi".
- Chips/grid of areas Dennis actually serves (`CONFIRM`). Candidates: Westlands, Kilimani, Kileleshwa, Lavington, Karen, Langata, South B, South C, Embakasi, Donholm, Kasarani, Roysambu, Ruaka, Kiambu Road, Thika Road, Rongai, Syokimau, Ruiru, Juja.
- One sentence on travel beyond Nairobi: "Outside this list? Call us, we may still be able to help."
- Optional: static styled map graphic, **not** a heavy embedded map above the fold.

### 8.9 Testimonials (`#reviews`)
- Only render if there are **real** reviews with permission to publish. Use shadcn **Carousel** and **Avatar**. Show name, area (e.g., "Kilimani"), service, and date.
- Until then: hide the section entirely. Don't ship placeholders.
- Add a "Leave a review on Google" link once the Google Business Profile exists.

### 8.10 FAQ (`#faq`)
- shadcn **Accordion**, 8–10 questions from `lib/faqs.ts`. **Answers render in the DOM even when collapsed** (Accordion does this by default, keep it that way). Same data feeds the FAQPage JSON-LD.
- Starter questions (write answers 40–70 words, answer first, no invented prices):
  1. How much does a plumber cost in Nairobi?
  2. Do you offer emergency plumbing in Nairobi?
  3. How do you unblock a blocked drain?
  4. What is a bio digester and how does installation work?
  5. How much does bio digester installation cost in Kenya?
  6. What areas of Nairobi do you serve?
  7. What is house pointing and why does it matter?
  8. How can I tell if I have a hidden water leak?
  9. Do you give quotes before starting work?
  10. How do I book a plumber?

### 8.11 CTA band
Full-width blue band, rounded, one line: "Got a leak, a blocked drain, or a new project?" Two buttons: Call, WhatsApp.

### 8.12 Contact (`#contact`)
- Two columns. **Left:** heading "Get a Free Quote", line of copy, then contact cards: Phone (tap to call), WhatsApp (opens chat with a pre-filled message), Email (mailto), Service area ("Nairobi & surrounding areas"), Hours (`CONFIRM`). Tooltip on copy icons, Sonner toast "Phone number copied".
- **Right:** quote form card (white, soft shadow, large radius): Name, Phone, Email (optional), Service (shadcn **Select**, pre-filled from store), Location/estate, Message (**Textarea**), submit button with loading spinner, inline helper text "We usually reply within the hour `CONFIRM`".
- **Form behaviour:**
  1. Client validation with React Hook Form + Zod, inline errors under each field.
  2. Submit calls a **server action** that re-validates with the same Zod schema.
  3. Anti-spam: hidden honeypot field, reject submissions faster than ~3 seconds after load, optionally Cloudflare Turnstile later.
  4. Send an email to Dennis via **Resend** using a React Email template (name, phone, service, location, message, timestamp). Optionally send an auto-reply if the customer left an email.
  5. Success: Sonner toast ("Thanks, we'll call you shortly"), form resets, show a success state with a WhatsApp follow-up button.
  6. Failure: Sonner error toast with the phone number as fallback. Never lose the user's typed data.
- The WhatsApp link uses the international format (`254719397182`) and a pre-filled text like "Hi AquaDen, I need help with…".

### 8.13 Footer
- Deep `primary` blue background, rounded top corners.
- Columns: **Brand** (logo, 2-line description, social icons once they exist), **Quick links** (anchors), **Services** (anchors), **Contact** (phone, email, "Nairobi, Kenya", hours).
- Bottom bar: © current year AquaDen Plumbing & Water Solutions (year generated dynamically), "Privacy" and "Terms" links (simple pages or modals, `CONFIRM`), "Back to top" button.
- Use the exact NAP text (name, address/area, phone) that matches Google Business Profile.

### 8.14 Global floating elements
- **Mobile sticky bar:** two equal buttons, "Call" and "WhatsApp", visible on scroll below the hero. Respect the iOS safe area.
- **Desktop WhatsApp button:** bottom-right circular button with tooltip "Chat on WhatsApp".

---

## 9. shadcn/ui Component Map

Install all of these up front so the agent never improvises custom versions:

| Component | Where it's used |
|---|---|
| `button` | All CTAs (variants: primary, black, white, outline, ghost) |
| `badge` | Trust chips, "Popular", "Eco-friendly", rating badge |
| `card` | Service cards, why-us cards, contact cards |
| `skeleton` | Image loading placeholders, form submit placeholder, carousel loading |
| `tooltip` | Icon buttons, copy-to-clipboard, floating WhatsApp |
| `sonner` | Toasts (wrap `Toaster` in the root layout) |
| `sheet` | Mobile navigation |
| `accordion` | FAQ |
| `form`, `input`, `textarea`, `select`, `label` | Contact form |
| `separator` | Dividers in footer and stats |
| `avatar` | Testimonials, hero card |
| `carousel` | Testimonials, optional gallery |
| `dialog` | Optional: gallery lightbox, privacy policy |
| `navigation-menu` | Optional desktop nav |
| `aspect-ratio` | Image frames |
| `scroll-area` | Long content inside dialogs/sheets |

Theme shadcn to the tokens in §4.1 (override its CSS variables), so no component looks "default shadcn". Radius token set to the larger values in §4.3.

---

## 10. State & Interactions

- **Zustand store (`selectedService`)**: set from service cards, read by the contact form, cleared on submit.
- Smooth-scroll for anchors (CSS `scroll-behavior`, disabled under reduced motion). Update the URL hash on navigation without a full reload.
- Copy-to-clipboard for phone and email with a Sonner toast.
- All CTAs that call or message should fire an analytics event (see §15).

---

## 11. Rendering & Performance

- Everything is a **Server Component** unless it needs interactivity. Client components only for: mobile menu, scroll-spy, count-up, form, carousel, Zustand-dependent pieces.
- Page is fully server-rendered/static so crawlers (including AI crawlers that don't run JavaScript) see all content.
- **Images:** `next/image` with real dimensions, `sizes` set per layout, AVIF/WebP, Cloudinary for storage and transformations. Hero image gets `priority`. Everything else lazy loads.
- **Fonts:** `next/font` with `display: swap`, subset to Latin, preload only used weights.
- Keep client JavaScript lean: dynamic import for the carousel and Framer Motion-heavy parts below the fold.
- **Targets (mobile, throttled 4G):** LCP < 2.5s, INP < 200ms, CLS < 0.1, Lighthouse Performance 90+, Accessibility 95+, SEO 100, Best Practices 95+.
- Reserve space for every image and the floating card to avoid layout shift.
- Page weight goal: under ~1.5MB on first load. Many Kenyan users are on mobile data, so every kilobyte counts.

---

## 12. SEO (Traditional Search)

### 12.1 Keyword strategy
Validate volumes with Google Keyword Planner and Search Console after launch. Use keywords **naturally**, never stuffed.

| Intent | Keywords | Where to use |
|---|---|---|
| **Primary** | plumber in Nairobi · plumbing services in Nairobi · plumbers in Nairobi Kenya · plumbing services Kenya | Title tag, H1, hero subtext, meta description, footer, schema |
| **Service** | drain unblocking Nairobi · blocked drain Nairobi · unblock toilet Nairobi · pipe repair Nairobi · leak repair Nairobi · burst pipe repair Nairobi | Service cards, FAQ, service H3s |
| **Bio digester** | bio digester installation Kenya · bio digester Nairobi · biodigester septic alternative Kenya · bio digester cost Kenya · wastewater treatment for homes Kenya | Bio digester card, FAQ |
| **Pointing** | house pointing Nairobi · wall pointing contractor Nairobi · pointing work Kenya | Pointing card, FAQ |
| **Urgency** | emergency plumber Nairobi · 24 hour plumber Nairobi (only if true) · same day plumber Nairobi · affordable plumber Nairobi | Hero badge, CTA band, FAQ |
| **Local / area** | plumber in Westlands · plumber in Kilimani · plumber in Kileleshwa · plumber in Lavington · plumber in Karen · plumber in Kasarani · plumber Ruaka · plumber Rongai · plumber Syokimau · plumber Thika Road · plumber Kiambu Road | Service-area section (list as text, one line each area) |
| **Property** | plumber for apartments Nairobi · property maintenance plumber Nairobi · landlord plumber Nairobi | Why-us, About |
| **Question** | how much does a plumber cost in Nairobi · how to unblock a drain · what is a bio digester · how to find a water leak at home · who is a good plumber in Nairobi | FAQ |
| **Extras (only if confirmed)** | water tank installation Nairobi · water pump installation Nairobi · borehole plumbing Nairobi · water heater installation Nairobi · bathroom plumbing Nairobi | New service cards |

### 12.2 On-page rules
- **Title tag (≤60 chars):** `Plumber in Nairobi | AquaDen Plumbing & Water Solutions`
- **Meta description (≤155 chars):** `Reliable plumbing services in Nairobi: pipe repairs, drain unblocking, bio digester installation and house pointing. Call AquaDen for a free quote today.`
- **Headings:** one H1 (hero). Each section has one H2. Service names are H3. No skipped levels.
- **Copy:** include "Nairobi" and "Kenya" naturally in hero, about, services, areas, FAQ, and footer. Write for humans first.
- **Internal links:** navbar and footer anchors with descriptive text ("Drain unblocking in Nairobi", not "click here").
- **Image alt text:** descriptive and honest, e.g. "Plumber unblocking a kitchen drain in Nairobi". No keyword stuffing.
- **URL:** clean root URL. Set `lang="en-KE"` on `<html>`.

### 12.3 Technical implementation (Next.js)
- **Metadata API:** `metadataBase`, title template, description, canonical, `alternates`, `openGraph` (type website, locale `en_KE`, image), `twitter` (summary_large_image), `robots`, `formatDetection` (keep phone auto-link behaviour deliberate), `category`.
- **`sitemap.ts`:** the root URL with `lastModified`. **`robots.ts`:** allow all, point to the sitemap, plus the AI crawler rules in §13.
- **`opengraph-image.tsx`:** branded 1200×630 image (logo, headline, phone number, blue background).
- **Favicons, `apple-icon`, `manifest.ts`** with brand colours. `theme-color` set to `primary`.
- **JSON-LD** (rendered server-side, escape `<` characters):
  - **`Plumber`** (schema.org subtype of LocalBusiness): `name`, `url`, `logo`, `image`, `description`, `telephone`, `email`, `address` (locality Nairobi, region Nairobi County, country KE; omit the street if Dennis doesn't want to publish one), `areaServed` (list of `Place`/`City`), `openingHoursSpecification` (`CONFIRM`), `priceRange` (`CONFIRM`), `sameAs` (all social/GBP profiles), `hasOfferCatalog` listing each service as an `Offer` → `Service`, `knowsAbout`.
  - **`WebSite`** and **`WebPage`**.
  - **`FAQPage`** built from the same FAQ data as the UI (answers must match what's visible).
  - **`Service`** entries for each service (can nest inside the `Plumber` catalog).
  - **`AggregateRating`/`Review`** only once there are real, visible reviews. Fake or hidden review markup can get the site penalised.
- Validate with Google's Rich Results Test and the Schema.org validator before launch.

### 12.4 Local SEO (this matters more than anything else on-site)
1. Create and verify a **Google Business Profile** as a **service-area business** (hide the address if Dennis works from home). Primary category: **Plumber**. Add secondary categories, all services, service areas, hours, phone, website URL, photos, and Q&A.
2. Use the **same name, phone, and area text** (NAP) everywhere.
3. Ask every happy customer for a Google review (give Dennis a short link/QR code and a WhatsApp message template). Reply to every review.
4. List the business in Kenyan directories and local listings (Google, Bing Places, Apple Business Connect, Facebook Business Page, local Kenya business directories, Jiji, Pigiame, Instagram, TikTok, LinkedIn). Keep details identical.
5. Post work photos regularly to GBP and social, with area names in captions.
6. Add UTM tags to the GBP website link so traffic can be tracked.

### 12.5 Single-page limitation (be honest with Dennis)
One URL can rank for the main local terms but will struggle to rank for many separate keywords. The architecture is built so that **Phase 2** can add real pages without rework:
- `/services/[slug]` for each service (e.g., `/services/drain-unblocking-nairobi`)
- `/areas/[slug]` for key areas (e.g., `/areas/plumber-in-westlands`)
- `/blog` with practical guides (bio digester cost, how to find a leak, choosing a plumber)
Data files in §6 already support this. Do not build these in Phase 1, but do not make decisions that block them.

---

## 13. AI SEO (Generative Engine / Answer Engine Optimisation)

Goal: have ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews recommend or quote the business when someone asks "who is a good plumber in Nairobi?" or "how much does bio digester installation cost in Kenya?".

1. **Server-rendered, plain-HTML content.** Many AI crawlers don't run JavaScript. All key copy, services, FAQs, areas, and contact info must be in the initial HTML.
2. **Allow AI crawlers** in `robots.ts`: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, `CCBot` (optional). Don't block them. Verify current bot names in each vendor's docs before shipping.
3. **Answer-first FAQ.** Each answer opens with the direct answer in one or two sentences, then context. Write them as self-contained quotable passages (40–70 words).
4. **Entity clarity.** One consistent description of the business everywhere: *"AquaDen Plumbing & Water Solutions is a Nairobi-based plumbing company run by Dennis Mwangi, offering pipe installation, plumbing repairs, drain unblocking, bio digester installation and house pointing."* Reuse it in the About section, JSON-LD `description`, GBP, and social bios.
5. **Structured data** (§12.3) with `sameAs` links to every profile. This helps AI systems connect the website to the same entity.
6. **Concrete facts, not fluff.** Services, areas, hours, response time, how pricing works. Models quote specifics. Avoid vague superlatives ("best plumber in Kenya").
7. **Freshness signals.** Visible "Last updated" date in the footer, kept current; `lastModified` in the sitemap.
8. **Third-party corroboration.** AI answers lean on sources beyond the site: Google reviews, directory listings, social posts, local news or blog mentions, and Q&A answers (e.g., helpful replies on community forums where permitted). Plan a small monthly routine for this.
9. **`llms.txt`** in `/public`: a short markdown summary of the business, services, areas, and contact, with links. It's cheap to add. Support among AI systems is not guaranteed and the impact is unproven, so treat it as optional extra, not a core tactic.
10. **Consistent language.** Use both "plumber" and "plumbing services", "bio digester" and "biodigester", "blocked drain" and "drain unblocking". People and models phrase things differently.
11. **Monitor:** every month, ask 8–10 relevant questions in major AI assistants and note whether AquaDen is mentioned. Track the results in a simple sheet.

---

## 14. Accessibility & UX Quality

- Semantic landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`).
- Skip-to-content link, visible focus rings in `brand-blue`, keyboard-operable menu, accordion, carousel.
- Tap targets at least 44×44px. Body text at least 16px on mobile.
- Colour contrast AA minimum. Don't rely on colour alone for errors.
- Form labels always visible. Error messages tied to inputs with `aria-describedby`.
- Reduced-motion support everywhere.
- Test on a real mid-range Android phone and on slow 4G.

---

## 15. Analytics & Tracking

- **Vercel Analytics** and **Speed Insights** for visits and Core Web Vitals.
- **Google Search Console** (domain property) and **Bing Webmaster Tools**: submit the sitemap.
- Optional **GA4** for events.
- Track events: click-to-call, WhatsApp click, email click, form start, form submit success, form error, service card click (with service name).
- Keep it privacy-light and add a small cookie notice only if GA or marketing cookies are used.

---

## 16. Environment Variables & Third-Party Setup

`.env.example` must list (no real values committed):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (used in metadata, sitemap, JSON-LD) |
| `RESEND_API_KEY` | Email sending |
| `CONTACT_TO_EMAIL` | Where quote requests are delivered (Dennis's email) |
| `CONTACT_FROM_EMAIL` | Verified sender address on the domain |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Image delivery |
| `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECRET` | Only if uploading from the app; not needed for static delivery |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `254719397182` |
| `NEXT_PUBLIC_GA_ID` | Optional |

Notes:
- **Resend:** verify the sending domain (DNS records) before launch. Until then, the test sender only delivers to the Resend account owner's own email, so test with that address first.
- **Cloudinary:** create folders `aquaden/hero`, `aquaden/services`, `aquaden/about`, `aquaden/gallery`. Use consistent public IDs matching the data files.

---

## 17. Build Order (Execution Plan for the Agent)

Complete each phase and tick its checks before moving on.

### Phase 0: Setup
1. Create the Next.js 16.4.1 App Router project with TypeScript, Tailwind, ESLint, `src`-less `app/` directory, import alias `@/`.
2. Install and configure: shadcn/ui (all components in §9), Lucide, Framer Motion, React Hook Form, Zod, Resend, React Email, Zustand, Sonner, Cloudinary SDK or `next-cloudinary`.
3. Configure `next/font` (Manrope), `next/image` remote patterns (Cloudinary), and `.env.example`.
- ✅ Dev server runs, lint and type-check pass.

### Phase 1: Design system
1. Define colour, radius, shadow, and spacing tokens in `globals.css`; theme shadcn variables.
2. Build shared pieces: `Logo`, `SectionHeading`, `Reveal`, `CountUp`, `NotchedImage`, button variants.
3. Create `site-config`, `services`, `faqs`, `areas` data files.
- ✅ A style test page (temporary) shows buttons, badges, cards, notched image, and typography matching the reference.

### Phase 2: Layout shell
1. Root layout: fonts, `lang="en-KE"`, Toaster, analytics, skip link.
2. Navbar (pill, sticky, mobile Sheet, scroll-spy), Footer, mobile sticky bar, desktop WhatsApp button.
- ✅ Navigation works on desktop and mobile; anchors don't hide under the nav.

### Phase 3: Sections
Build in this order: Hero → Trust strip → About + stats → Services (with Zustand wiring) → Process → Why us → Areas → FAQ → CTA band → Testimonials (hidden until real data) → Contact.
- ✅ Each section matches the design system, has whitespace, responsive at 360 / 768 / 1024 / 1440px.

### Phase 4: Contact flow
1. Zod schema, form UI, server action, Resend + React Email template, honeypot and timing checks.
2. Sonner success/error toasts, service pre-fill from store, loading states.
- ✅ A real test submission arrives in Dennis's inbox with correct formatting. Invalid input shows inline errors. Spam trap rejects bot-like submissions.

### Phase 5: SEO & AI SEO
1. Metadata, OG image, favicons, manifest, sitemap, robots (with AI crawler rules), `llms.txt`.
2. JSON-LD components (Plumber, WebSite, FAQPage, Services).
3. Alt text, heading outline audit, internal link audit.
- ✅ Rich Results Test passes. Page source (view-source) contains all key text. Lighthouse SEO 100.

### Phase 6: Polish & performance
1. Framer Motion reveals, count-up, hover states, reduced-motion handling.
2. Image optimisation, `sizes`, lazy loading, skeleton states, CLS audit.
3. Accessibility pass (keyboard, screen-reader labels, contrast).
- ✅ Lighthouse targets from §11 met on mobile.

### Phase 7: Launch
1. Replace every `CONFIRM` with Dennis's real info; delete unconfirmed stats and claims.
2. Deploy to Vercel, connect `.co.ke` domain, set env vars, verify Resend domain.
3. Submit sitemap to Search Console and Bing. Set up GBP, directories, social profiles; add `sameAs` links.
4. Final QA: real phone (Android + iPhone), slow network, form test, call and WhatsApp links, 404 page, OG preview (WhatsApp, Facebook, LinkedIn).

---

## 18. Open Questions for Dennis (collect before launch)

1. Which brand name does he prefer- use Denflow Plumbing
2. How many years has he been working as a plumber? Roughly how many jobs completed? 4 years with around 20 plus
3. Opening hours? Does he really offer 24-hour or emergency call-outs?- both
4. Exact areas he serves, and the maximum distance he travels?- Nairobi and its environs
5. Does he also do water tanks, pumps, leak detection, water heaters, bathroom fit-outs?- yes 

7. Photos and short videos of his work, plus a portrait in work clothes.- I have added images in the public folder but no portrait. just generic plumbing images


11. Pricing approach to mention - depends on scope of job and client agreement
12. Privacy policy and terms: simple versions- do a simple verision
---

## 19. Definition of Done

- Looks like the reference: deep blue hero, white sections, big type, notched rounded images, generous whitespace, premium feel.
- Works flawlessly on mobile first; call and WhatsApp are one tap away at all times.
- A quote request submits, validates, emails Dennis, and gives the user clear feedback.
- All content in the initial HTML; structured data valid; Lighthouse targets met.
- No fabricated stats, reviews, or claims. All `CONFIRM` items resolved.
- Google Business Profile created and linked; Search Console verified; sitemap submitted.