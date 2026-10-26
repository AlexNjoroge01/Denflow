"use client"

import type { ComponentProps, MouseEvent } from "react"
import { trackEvent } from "@/lib/analytics"

type TrackedLinkProps = ComponentProps<"a"> & {
  eventName: string
  eventProps?: Record<string, string | number | boolean>
}

export function TrackedLink({
  eventName,
  eventProps,
  onClick,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackEvent(eventName, eventProps)
    onClick?.(event)
  }

  return <a {...props} onClick={handleClick} />
}
