"use client"

import { useEffect, useState } from "react"
import { RiPhoneLine, RiWhatsappLine } from "@remixicon/react"
import { trackEvent } from "@/lib/analytics"
import { telHref, whatsappHref } from "@/lib/site-config"

export function StickyCallBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 560)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-12px_40px_-24px_rgba(11,11,15,0.35)] backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a
          href={telHref}
          onClick={() => trackEvent("click_to_call", { location: "sticky_bar" })}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-primary-deep focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <RiPhoneLine className="size-[18px]" aria-hidden="true" />
          Call Dennis
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("whatsapp_click", { location: "sticky_bar" })
          }
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-bold text-white transition-colors hover:bg-ink/85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <RiWhatsappLine className="size-[18px]" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
