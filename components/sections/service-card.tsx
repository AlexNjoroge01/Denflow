"use client"

import type { MouseEvent } from "react"
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiCheckLine,
} from "@remixicon/react"
import { toast } from "sonner"
import { NotchedImage } from "@/components/shared/notched-image"
import { ServiceIcon } from "@/components/shared/service-icon"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { trackEvent } from "@/lib/analytics"
import { images } from "@/lib/images"
import type { ServiceItem } from "@/lib/services"
import { useServiceStore } from "@/store/service-store"

function scrollToContactForm() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const contact = document.getElementById("contact")

  contact?.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
  })

  window.history.replaceState(null, "", "#contact")

  window.setTimeout(
    () => {
      document
        .getElementById("contact-form-heading")
        ?.focus({ preventScroll: true })
    },
    reduce ? 0 : 650
  )
}

export function ServiceCard({ service }: { service: ServiceItem }) {
  const setSelectedService = useServiceStore(
    (state) => state.setSelectedService
  )

  function requestService() {
    setSelectedService(service.slug)
    trackEvent("service_card_click", { service: service.slug })
    toast.success("Service selected", {
      description: "Tell us where you are and we will call you back.",
    })
    scrollToContactForm()
  }

  function handleCardClick(event: MouseEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("a,button")) return
    requestService()
  }

  return (
    <article
      id={service.slug}
      onClick={handleCardClick}
      className="group flex cursor-pointer flex-col rounded-[1.6rem] bg-white p-2.5 shadow-[0_14px_50px_-42px_rgba(11,11,15,0.55)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative">
        <button
          type="button"
          onClick={requestService}
          aria-label={`Request ${service.title}`}
          className="block w-full rounded-[1.3rem] text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <NotchedImage
            src={images[service.image]}
            alt={service.alt}
            small
            notch={48}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
            className="aspect-[16/10] w-full"
            imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </button>

        {service.badge ? (
          <Badge
            className={
              service.badgeTone === "eco"
                ? "absolute top-3 left-3 h-6 bg-[#E4F5EA] px-2.5 text-[0.62rem] font-bold tracking-wide text-[#17663A] uppercase ring-1 ring-[#17663A]/10"
                : "absolute top-3 left-3 h-6 bg-star/25 px-2.5 text-[0.62rem] font-bold tracking-wide text-ink uppercase ring-1 ring-star/30"
            }
          >
            {service.badge}
          </Badge>
        ) : null}

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              onClick={requestService}
              aria-label={`Request ${service.title}`}
              className="absolute top-3 right-3 grid size-10 place-items-center rounded-full bg-brand-bright text-white shadow-lg transition-transform hover:rotate-6 hover:bg-primary focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <RiArrowRightUpLine className="size-4" aria-hidden="true" />
            </button>
          </TooltipTrigger>
          <TooltipContent>Request this service</TooltipContent>
        </Tooltip>
      </div>

      <div className="flex flex-1 flex-col px-3 pt-5 pb-2">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-full bg-tint text-brand-blue">
            <ServiceIcon name={service.icon} className="size-4" />
          </span>
          <h3 className="font-heading text-[1.12rem] leading-snug font-bold tracking-[-0.02em] text-ink">
            {service.title}
          </h3>
        </div>

        <p className="mt-3 text-[0.88rem] leading-relaxed text-muted-foreground">
          {service.shortDescription}
        </p>

        <ul className="mt-4 space-y-2">
          {service.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-[0.82rem] leading-snug text-ink/75"
            >
              <RiCheckLine
                className="mt-0.5 size-3.5 shrink-0 text-brand-blue"
                aria-hidden="true"
              />
              {bullet}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={requestService}
          className="mt-5 inline-flex items-center gap-1.5 self-start border-b border-transparent pb-0.5 text-[0.8rem] font-bold text-brand-blue transition-colors hover:border-brand-blue focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Request this service
          <RiArrowRightLine className="size-3.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
