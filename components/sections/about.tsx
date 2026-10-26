import Link from "next/link"
import {
  RiPhoneLine,
  RiShieldCheckLine,
  RiCheckLine,
} from "@remixicon/react"
import { CountUp } from "@/components/shared/count-up"
import { NotchedImage } from "@/components/shared/notched-image"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { images } from "@/lib/images"
import { siteConfig, telHref } from "@/lib/site-config"

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="overflow-hidden py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading
              id="about-heading"
              eyebrow="About DenFlow"
              title="Plumbing that keeps Nairobi homes and businesses running."
            />

            <p className="mt-8 max-w-[35rem] text-[1.45rem] leading-[1.4] font-semibold tracking-[-0.025em] text-ink sm:text-[1.7rem]">
              We provide dependable plumbing services that keep homes and
              businesses running smoothly with{" "}
              <span className="text-brand-blue">
                expert workmanship and reliable customer care.
              </span>
            </p>

            <p className="mt-6 max-w-[36rem] text-[0.98rem] leading-relaxed text-muted-foreground">
              DenFlow Plumbing is run by Dennis Mwangi, a Nairobi-based plumber
              with four years&apos; experience and more than 20 completed
              projects. From a single leaking tap to a full bio digester
              installation, Dennis handles the work himself and leaves every
              site clean and tidy.
            </p>

            <p className="mt-4 max-w-[36rem] text-[0.92rem] leading-relaxed text-muted-foreground">
              DenFlow Plumbing &amp; Water Solutions is a Nairobi-based plumbing
              company run by Dennis Mwangi, offering pipe installation, plumbing
              repairs, drain unblocking, bio digester installation and house
              pointing.
            </p>

            <div className="mt-8 flex max-w-[31rem] items-center gap-4 rounded-[1.4rem] bg-tint p-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-primary font-heading text-lg font-extrabold text-white">
                DM
              </span>
              <div className="min-w-0">
                <p className="font-heading text-base font-bold text-ink">
                  {siteConfig.owner}
                </p>
                <p className="mt-0.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Founder &amp; lead plumber
                </p>
                <a
                  href={telHref}
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
                >
                  <RiPhoneLine className="size-3.5" aria-hidden="true" />
                  {siteConfig.phone.display}
                </a>
              </div>
              <RiShieldCheckLine
                className="ml-auto hidden size-8 shrink-0 text-brand-blue/40 sm:block"
                aria-hidden="true"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div
              aria-hidden="true"
              className="bg-dots absolute -top-8 -right-4 h-40 w-40 opacity-60"
            />
            <NotchedImage
              src={images.pumpRoom}
              alt="Pressure pumps and pipework in a commercial pump room"
              notch={72}
              sizes="(min-width: 1024px) 44vw, 92vw"
              className="aspect-[4/3] w-full shadow-soft"
              imageClassName="scale-110 object-[38%_55%]"
            />
            <div className="absolute -bottom-6 left-4 z-10 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-black/5 sm:left-6">
              <span className="grid size-10 place-items-center rounded-full bg-tint text-brand-blue">
                <RiCheckLine className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">
                  {siteConfig.yearsExperience} years&apos; experience
                </p>
                <p className="text-xs text-muted-foreground">
                  {siteConfig.projectsCompleted}+ projects completed
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-24">
          <div className="border-t border-border pt-6">
            <p className="font-heading text-[4rem] leading-none font-medium tracking-[-0.06em] text-ink sm:text-[5rem] lg:text-[5.5rem]">
              <CountUp value={siteConfig.yearsExperience} suffix="+" />
            </p>
            <p className="mt-3 text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
              Years in the trade
            </p>
          </div>

          <div className="border-t border-border pt-6 md:mt-10">
            <p className="font-heading text-[4rem] leading-none font-medium tracking-[-0.06em] text-ink sm:text-[5rem] lg:text-[5.5rem]">
              <CountUp value={siteConfig.projectsCompleted} suffix="+" />
            </p>
            <p className="mt-3 text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
              Projects completed
            </p>
          </div>

          <div className="border-t border-border pt-6 md:mt-20">
            <p className="font-heading text-[4rem] leading-none font-medium tracking-[-0.06em] text-ink sm:text-[5rem] lg:text-[5.5rem]">
              24/7
            </p>
            <p className="mt-3 text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
              Emergency call-outs
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild variant="black" size="lg">
            <Link href="/#contact">Meet Dennis — get a quote</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href={telHref}>
              <RiPhoneLine data-icon="inline-start" className="size-4" />
              {siteConfig.phone.display}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
