import Link from "next/link"
import {
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTimeLine,
  RiWhatsappLine,
} from "@remixicon/react"
import { BackToTop } from "@/components/shared/back-to-top"
import { Logo } from "@/components/shared/logo"
import { services } from "@/lib/services"
import {
  siteConfig,
  socialLinks,
  telHref,
  whatsappHref,
} from "@/lib/site-config"

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Dennis", href: "/#about" },
  { label: "Our services", href: "/#services" },
  { label: "How it works", href: "/#process" },
  { label: "Service areas", href: "/#areas" },
  { label: "Frequently asked questions", href: "/#faq" },
  { label: "Get a free quote", href: "/#contact" },
]

const lastUpdated = new Intl.DateTimeFormat("en-KE", {
  dateStyle: "long",
  timeZone: "Africa/Nairobi",
}).format(new Date(siteConfig.lastUpdated))

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden rounded-t-[2.25rem] bg-primary text-white md:rounded-t-[3rem]">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-70"
      />
      <div className="container-page relative">
        <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1.5fr_0.9fr_1.2fr_1.2fr] lg:gap-10">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <p className="mt-5 text-sm font-semibold text-periwinkle">
              {siteConfig.tagline}
            </p>
            {socialLinks.length > 0 ? (
              <div className="mt-6 flex gap-2">
                {socialLinks.map((href) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    aria-label="DenFlow social profile"
                  >
                    <RiWhatsappLine className="size-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <nav aria-label="Footer quick links">
            <h2 className="text-xs font-bold tracking-[0.16em] text-white/50 uppercase">
              Quick links
            </h2>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Plumbing services in Nairobi">
            <h2 className="text-xs font-bold tracking-[0.16em] text-white/50 uppercase">
              Services
            </h2>
            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/#${service.slug}`}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {service.title} in Nairobi
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold tracking-[0.16em] text-white/50 uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={telHref}
                  className="flex items-start gap-3 text-white/80 transition-colors hover:text-white"
                >
                  <RiPhoneLine
                    className="mt-0.5 size-4 shrink-0 text-periwinkle"
                    aria-hidden="true"
                  />
                  <span>
                    {siteConfig.phone.display}
                    <span className="block text-xs text-white/50">
                      Call or WhatsApp
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/80 transition-colors hover:text-white"
                >
                  <RiWhatsappLine
                    className="mt-0.5 size-4 shrink-0 text-periwinkle"
                    aria-hidden="true"
                  />
                  WhatsApp DenFlow
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 break-all text-white/80 transition-colors hover:text-white"
                >
                  <RiMailLine
                    className="mt-0.5 size-4 shrink-0 text-periwinkle"
                    aria-hidden="true"
                  />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <RiMapPinLine
                  className="mt-0.5 size-4 shrink-0 text-periwinkle"
                  aria-hidden="true"
                />
                <span>
                  {siteConfig.city}, {siteConfig.country}
                  <span className="block text-xs text-white/50">
                    {siteConfig.serviceRegion}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <RiTimeLine
                  className="mt-0.5 size-4 shrink-0 text-periwinkle"
                  aria-hidden="true"
                />
                <span>
                  {siteConfig.hours.display}
                  <span className="block text-xs text-white/50">
                    {siteConfig.hours.note}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 pb-28 text-xs text-white/50 md:flex-row md:items-center md:justify-between lg:pb-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <span>Last updated {lastUpdated}</span>
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  )
}
