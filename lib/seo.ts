import { areaNames } from "@/lib/areas"
import { faqs } from "@/lib/faqs"
import { services } from "@/lib/services"
import { siteConfig, socialLinks } from "@/lib/site-config"

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}

const businessId = absoluteUrl("/#business")
const websiteId = absoluteUrl("/#website")
const webpageId = absoluteUrl("/#webpage")

const knowsAbout = [
  "Plumbing services in Nairobi",
  "Pipe installation and replacement",
  "Plumbing repairs and leak detection",
  "Drain unblocking",
  "Bio digester installation",
  "House pointing",
  "Water tanks and pumps",
  "Water heaters and solar water heating",
  "Bathroom and kitchen plumbing fit-outs",
]

export function buildBusinessJsonLd() {
  return {
    "@type": "Plumber",
    "@id": businessId,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl("/opengraph-image"),
    description: siteConfig.description,
    telephone: siteConfig.phone.e164,
    email: siteConfig.email,
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: areaNames.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    ],
    ...(socialLinks.length > 0 ? { sameAs: socialLinks } : {}),
    knowsAbout,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing services in Nairobi",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          serviceType: service.title,
          description: service.shortDescription,
          url: absoluteUrl(`/#${service.slug}`),
          provider: { "@id": businessId },
          areaServed: {
            "@type": "City",
            name: "Nairobi",
          },
        },
      })),
    },
  }
}

export function buildWebsiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-KE",
    publisher: { "@id": businessId },
  }
}

export function buildWebPageJsonLd() {
  return {
    "@type": "WebPage",
    "@id": webpageId,
    url: siteConfig.url,
    name: `Plumber in Nairobi | ${siteConfig.name}`,
    description:
      "Reliable plumbing services in Nairobi: pipe repairs, drain unblocking, bio digester installation and house pointing. Call DenFlow for a free quote today.",
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
    inLanguage: "en-KE",
    dateModified: siteConfig.lastUpdated,
  }
}

export function buildFaqJsonLd() {
  return {
    "@type": "FAQPage",
    "@id": absoluteUrl("/#faq-schema"),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function buildJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBusinessJsonLd(),
      buildWebsiteJsonLd(),
      buildWebPageJsonLd(),
      buildFaqJsonLd(),
    ],
  }
}
