import type { ReactNode } from "react"
import Link from "next/link"
import { RiArrowLeftLine, RiMailLine, RiPhoneLine } from "@remixicon/react"
import { Button } from "@/components/ui/button"
import { siteConfig, telHref } from "@/lib/site-config"

type LegalPageProps = {
  eyebrow: string
  title: string
  intro: string
  children: ReactNode
}

const lastUpdated = new Intl.DateTimeFormat("en-KE", {
  dateStyle: "long",
  timeZone: "Africa/Nairobi",
}).format(new Date(siteConfig.lastUpdated))

export function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return (
    <article className="bg-white pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-primary"
          >
            <RiArrowLeftLine className="size-4" aria-hidden="true" />
            Back to home
          </Link>

          <div className="mt-8">
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h1 className="mt-6 font-heading text-[2.4rem] leading-[1.04] font-bold tracking-[-0.04em] text-ink sm:text-[3rem]">
            {title}
          </h1>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-muted-foreground">
            {intro}
          </p>
          <p className="mt-3 text-xs font-semibold tracking-wide text-muted-foreground/80">
            Last updated {lastUpdated}
          </p>

          <div className="mt-12 space-y-10">{children}</div>

          <div className="mt-14 rounded-[1.5rem] bg-tint p-6 sm:p-7">
            <h2 className="font-heading text-lg font-bold text-ink">
              Questions about this page?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Contact {siteConfig.owner} at {siteConfig.name} and we will be
              glad to help.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={telHref}>
                  <RiPhoneLine
                    data-icon="inline-start"
                    className="size-4"
                    aria-hidden="true"
                  />
                  Call {siteConfig.phone.display}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`mailto:${siteConfig.email}`}>
                  <RiMailLine
                    data-icon="inline-start"
                    className="size-4"
                    aria-hidden="true"
                  />
                  Email us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

type LegalSectionProps = {
  title: string
  children: ReactNode
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="font-heading text-xl font-bold tracking-[-0.02em] text-ink">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[0.98rem] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-brand-blue">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
