import {
  RiMapPinLine,
  RiMoneyDollarCircleLine,
  RiSparklingLine,
  RiTimeLine,
} from "@remixicon/react"
import { Badge } from "@/components/ui/badge"

const items = [
  {
    icon: RiTimeLine,
    label: "24/7 emergency call-outs",
  },
  {
    icon: RiMoneyDollarCircleLine,
    label: "Free quotes before work",
  },
  {
    icon: RiMapPinLine,
    label: "Serving all of Nairobi",
  },
  {
    icon: RiSparklingLine,
    label: "Neat, tidy workmanship",
  },
]

export function TrustStrip() {
  return (
    <section aria-label="Why choose DenFlow" className="relative z-10 -mt-8">
      <div className="container-page">
        <ul className="grid grid-cols-2 gap-2 rounded-[1.75rem] bg-white p-3 shadow-soft ring-1 ring-black/5 md:grid-cols-4 md:gap-3 md:p-4">
          {items.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Badge
                variant="ghost"
                className="flex h-auto w-full items-center justify-start gap-3 rounded-2xl px-2.5 py-2.5 text-left text-[0.78rem] font-semibold whitespace-normal text-ink sm:text-sm"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-tint text-brand-blue">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <span className="leading-tight">{label}</span>
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
