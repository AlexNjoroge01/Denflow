import Link from "next/link"
import { RiMapPinLine, RiPhoneLine, RiTimeLine } from "@remixicon/react"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { areas } from "@/lib/areas"
import { siteConfig, telHref } from "@/lib/site-config"

export function Areas() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-heading"
      className="bg-tint py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="areas-heading"
              eyebrow="Service areas"
              title="Plumbing Services Across Nairobi"
              description="DenFlow covers Nairobi and its environs. Whether you are in a flat, a family home, a rental or a small business, we can arrange a visit and give you a clear quote."
            />

            <div className="mt-8 rounded-[1.5rem] bg-white p-5 ring-1 ring-black/5">
              <div className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-tint text-brand-blue">
                  <RiMapPinLine className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading text-base font-bold text-ink">
                    Based in Nairobi
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Serving Nairobi and its environs. Outside this list? Call
                    us, we may still be able to help.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-xl bg-tint px-3 py-2.5 text-xs font-semibold text-ink/75">
                <RiTimeLine className="size-4 text-brand-blue" aria-hidden="true" />
                {siteConfig.hours.display} · emergency call-outs
              </div>

              <Button asChild variant="black" size="lg" className="mt-4 w-full">
                <a href={telHref}>
                  <RiPhoneLine
                    data-icon="inline-start"
                    className="size-4"
                    aria-hidden="true"
                  />
                  Check your area: {siteConfig.phone.display}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {areas.map((area) => (
                <li
                  key={area.slug}
                  className="flex items-center gap-2.5 rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink/80 ring-1 ring-black/5 transition-colors hover:bg-white/60"
                >
                  <RiMapPinLine
                    className="size-4 shrink-0 text-brand-blue"
                    aria-hidden="true"
                  />
                  Plumber in {area.name}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm text-muted-foreground">
              Also covering other parts of Nairobi and the surrounding areas.
              Not on the list?{" "}
              <Link
                href="/#contact"
                className="font-semibold text-brand-blue underline-offset-4 hover:underline"
              >
                Ask us about your estate
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
