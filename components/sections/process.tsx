import {
  RiChat3Line,
  RiFileList3Line,
  RiSparklingLine,
  RiToolsLine,
} from "@remixicon/react"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"

const steps = [
  {
    number: "01",
    title: "Call or message us",
    description:
      "Tell us what is wrong and where you are. A photo or short video helps us prepare.",
    icon: RiChat3Line,
  },
  {
    number: "02",
    title: "Free assessment & quote",
    description:
      "We check the job, explain the options and agree the scope and price before work starts.",
    icon: RiFileList3Line,
  },
  {
    number: "03",
    title: "Professional fix",
    description:
      "The work is carried out carefully with suitable parts, proper testing and minimal disruption.",
    icon: RiToolsLine,
  },
  {
    number: "04",
    title: "Clean-up & follow-up",
    description:
      "We tidy the site, check everything works and stay reachable if you have questions afterwards.",
    icon: RiSparklingLine,
  },
]

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="process-heading"
            eyebrow="How it works"
            align="center"
            title="From first call to a tidy finish"
            description="A simple, predictable process. No guesswork, no surprise charges and no mess left behind."
            className="mx-auto max-w-2xl"
          />
        </Reveal>

        <div className="relative mt-14 md:mt-20">
          <div
            aria-hidden="true"
            className="absolute top-8 right-[12%] left-[12%] hidden border-t border-dashed border-backdrop md:block"
          />
          <ol className="relative grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <li key={step.number} className="relative">
                  <Reveal delay={index * 0.08}>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-[4.5rem] leading-none font-extrabold tracking-[-0.06em] text-[#E4E9F9] [-webkit-text-stroke:1px_#C7CFEA]">
                        {step.number}
                      </span>
                      <span className="grid size-12 place-items-center rounded-full bg-white text-brand-blue ring-1 ring-border">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold tracking-[-0.02em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[17rem] text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
