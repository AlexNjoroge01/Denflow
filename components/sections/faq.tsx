import { RiPhoneLine, RiWhatsappLine } from "@remixicon/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { faqs } from "@/lib/faqs"
import { siteConfig, telHref, whatsappHref } from "@/lib/site-config"

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionHeading
                id="faq-heading"
                eyebrow="Questions & answers"
                title="Straight answers about plumbing in Nairobi."
                description="Pricing, emergency call-outs, bio digesters and more. If your question is not here, call or WhatsApp and ask directly."
              />

              <div className="mt-8 rounded-[1.4rem] bg-primary p-6 text-white">
                <p className="font-heading text-lg font-bold">
                  Still have a question?
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  Dennis answers calls and messages directly, 24 hours a day for
                  emergencies.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <Button asChild variant="white" size="lg">
                    <a href={telHref}>
                      <RiPhoneLine
                        data-icon="inline-start"
                        className="size-4"
                        aria-hidden="true"
                      />
                      {siteConfig.phone.display}
                    </a>
                  </Button>
                  <Button asChild variant="outlineWhite" size="lg">
                    <a
                      href={whatsappHref("Hi DenFlow, I have a plumbing question.")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiWhatsappLine
                        data-icon="inline-start"
                        className="size-4"
                        aria-hidden="true"
                      />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Accordion
              type="single"
              collapsible
              defaultValue="faq-0"
              className="flex w-full flex-col gap-3 overflow-visible border-0"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="overflow-hidden rounded-[1.25rem] border border-border bg-white px-1.5 transition-colors data-open:bg-white data-open:ring-1 data-open:ring-brand-blue/15"
                >
                  <AccordionTrigger className="gap-4 px-4 py-5 text-left font-heading text-[0.98rem] font-bold tracking-[-0.01em] text-ink hover:no-underline sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    forceMount
                    className="px-4 pb-5 text-[0.9rem] leading-relaxed text-muted-foreground"
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
