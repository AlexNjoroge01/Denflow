import Link from "next/link"
import { RiArrowRightLine, RiPhoneLine } from "@remixicon/react"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { ServiceCard } from "@/components/sections/service-card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"
import { siteConfig, telHref } from "@/lib/site-config"

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-tint py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="services-heading"
            eyebrow="Our services"
            align="center"
            title="Complete Plumbing Solutions for Every Property"
            description="Nine focused services, one reliable plumber. Every job starts with a clear quote and ends with a tidy site — whether it is a leaking tap in Kilimani or a bio digester in Ruiru."
            className="mx-auto max-w-3xl"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={Math.min(index * 0.04, 0.2)}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[1.6rem] bg-white p-6 ring-1 ring-black/5 sm:flex-row sm:p-7">
          <div>
            <p className="font-heading text-lg font-bold text-ink">
              Not sure which service you need?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Describe the problem and Dennis will point you in the right
              direction.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <Button asChild size="xl" className="w-full sm:w-auto">
              <Link href="/#contact">
                Ask for a free quote
                <RiArrowRightLine
                  data-icon="inline-end"
                  className="size-4"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="w-full sm:w-auto"
            >
              <a href={telHref}>
                <RiPhoneLine
                  data-icon="inline-start"
                  className="size-4"
                  aria-hidden="true"
                />
                {siteConfig.phone.display}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
