import {
  RiChat3Line,
  RiFileList3Line,
  RiMapPinLine,
  RiMoneyDollarCircleLine,
  RiShieldCheckLine,
  RiSparklingLine,
} from "@remixicon/react"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"

const reasons = [
  {
    title: "Clear quotes before work",
    description:
      "You know the scope and price before we start. Any change is discussed and agreed with you first.",
    icon: RiFileList3Line,
  },
  {
    title: "Tidy workmanship",
    description:
      "Floors and surfaces are protected, dust is controlled and the site is cleaned before we leave.",
    icon: RiSparklingLine,
  },
  {
    title: "Quality materials",
    description:
      "Durable pipes, fittings and valves chosen for Kenyan water conditions and long-term reliability.",
    icon: RiShieldCheckLine,
  },
  {
    title: "Responsive communication",
    description:
      "Calls and WhatsApp messages are answered promptly, with realistic arrival times and clear updates.",
    icon: RiChat3Line,
  },
  {
    title: "Fair, scope-based pricing",
    description:
      "Pricing reflects the actual job and materials involved — not guesswork or surprise add-ons.",
    icon: RiMoneyDollarCircleLine,
  },
  {
    title: "Local Nairobi knowledge",
    description:
      "Experience with Nairobi buildings, estates, tanks, pumps, water pressure and older pipework.",
    icon: RiMapPinLine,
  },
]

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="why-us-heading"
              eyebrow="Why choose DenFlow"
              title="Plumbing you can trust, from a plumber you can reach."
              description="DenFlow is built around the details that make a plumbing job stress-free: honest pricing, careful work and a person who answers the phone."
            />
            <div className="mt-8 rounded-[1.4rem] bg-tint p-5">
              <p className="text-xs font-bold tracking-[0.12em] text-brand-blue uppercase">
                Every job includes
              </p>
              <ul className="mt-3 space-y-2.5">
                {[
                  "A clear quote before work begins",
                  "Protection for floors and surfaces",
                  "A final test and tidy clean-up",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-ink/75"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Reveal key={reason.title} delay={Math.min(index * 0.05, 0.25)}>
                  <div className="group h-full rounded-[1.4rem] bg-white p-5 ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:bg-tint hover:shadow-soft">
                    <span className="grid size-11 place-items-center rounded-full bg-tint text-brand-blue transition-colors group-hover:bg-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-heading text-base font-bold tracking-[-0.02em] text-ink">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
