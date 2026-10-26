import { RiPhoneLine, RiWhatsappLine } from "@remixicon/react"
import { Button } from "@/components/ui/button"
import { TrackedLink } from "@/components/shared/tracked-link"
import { siteConfig, telHref, whatsappHref } from "@/lib/site-config"

export function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="py-6 md:py-10">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-white md:rounded-[2.5rem] md:px-12 md:py-14">
          <div
            aria-hidden="true"
            className="bg-grid pointer-events-none absolute inset-0 opacity-70"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 right-[-8%] size-72 rounded-full bg-brand-bright/30 blur-3xl"
          />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="eyebrow-light">Ready when you are</span>
              <h2
                id="cta-heading"
                className="mt-5 font-heading text-[2rem] leading-[1.08] font-bold tracking-[-0.035em] sm:text-[2.6rem]"
              >
                Got a leak, a blocked drain, or a new project?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Call Dennis directly or send a WhatsApp message. We will tell
                you what is possible and what it will cost.
              </p>
            </div>

            <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:min-w-[15rem]">
              <Button asChild variant="white" size="xl">
                <TrackedLink
                  href={telHref}
                  eventName="click_to_call"
                  eventProps={{ location: "cta_band" }}
                  className="justify-center"
                >
                  <RiPhoneLine
                    data-icon="inline-start"
                    className="size-4"
                    aria-hidden="true"
                  />
                  Call {siteConfig.phone.display}
                </TrackedLink>
              </Button>
              <Button asChild variant="outlineWhite" size="xl">
                <TrackedLink
                  href={whatsappHref()}
                  eventName="whatsapp_click"
                  eventProps={{ location: "cta_band" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="justify-center"
                >
                  <RiWhatsappLine
                    data-icon="inline-start"
                    className="size-4"
                    aria-hidden="true"
                  />
                  WhatsApp DenFlow
                </TrackedLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
