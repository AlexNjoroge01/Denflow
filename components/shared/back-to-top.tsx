"use client"

import { RiArrowUpLine } from "@remixicon/react"
import { Button } from "@/components/ui/button"

export function BackToTop() {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={() => {
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
      }}
      className="min-h-11 text-white/70 hover:bg-white/10 hover:text-white"
    >
      Back to top
      <RiArrowUpLine className="size-4" aria-hidden="true" />
    </Button>
  )
}
