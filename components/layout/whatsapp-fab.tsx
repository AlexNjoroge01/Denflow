"use client"

import { RiWhatsappLine } from "@remixicon/react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { trackEvent } from "@/lib/analytics"
import { whatsappHref } from "@/lib/site-config"

export function WhatsAppFab() {
  return (
    <div className="fixed right-6 bottom-6 z-40 hidden lg:block">
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("whatsapp_click", { location: "floating_button" })
            }
            aria-label="Chat with DenFlow on WhatsApp"
            className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-16px_rgba(37,211,102,0.65)] transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <RiWhatsappLine className="size-7" aria-hidden="true" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">Chat on WhatsApp</TooltipContent>
      </Tooltip>
    </div>
  )
}
