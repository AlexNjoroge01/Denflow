export const siteConfig = {
  name: "DenFlow Plumbing & Water Solutions",
  shortName: "DenFlow",
  tagline: "Clean water. Clear drains. Done right.",
  description:
    "DenFlow Plumbing & Water Solutions is a Nairobi-based plumbing company run by Dennis Mwangi, offering pipe installation, plumbing repairs, drain unblocking, bio digester installation and house pointing.",
  owner: "Dennis Mwangi",
  phone: {
    display: "+254 719 397 182",
    e164: "+254719397182",
    whatsapp: "254719397182",
  },
  email: "dkariukim284@gmail.com",
  city: "Nairobi",
  county: "Nairobi County",
  country: "Kenya",
  countryCode: "KE",
  serviceRegion: "Nairobi and its environs",
  address: {
    locality: "Nairobi",
    region: "Nairobi County",
    country: "KE",
  },
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://denflow.co.ke").replace(
    /\/$/,
    ""
  ),
  logo: "/icon.svg",
  defaultOgImage: "/opengraph-image",
  hours: {
    display: "Open 24 hours, 7 days a week",
    short: "24/7",
    note: "Emergency call-outs available",
    opens: "00:00",
    closes: "23:59",
  },
  yearsExperience: 4,
  projectsCompleted: 20,
  lastUpdated: "2026-10-26",
  social: {
    google: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    linkedin: "",
  },
} as const

export const telHref = `tel:${siteConfig.phone.e164}`

export function whatsappHref(
  message = "Hi DenFlow, I need help with a plumbing job in Nairobi."
) {
  return `https://wa.me/${siteConfig.phone.whatsapp}?text=${encodeURIComponent(message)}`
}

export const socialLinks = Object.values(siteConfig.social).filter(Boolean)
