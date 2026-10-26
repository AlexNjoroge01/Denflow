import { track } from "@vercel/analytics"

type EventProps = Record<string, string | number | boolean | null | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Vercel Analytics custom event plus an optional GA4 mirror when
 * NEXT_PUBLIC_GA_ID is configured.
 */
export function trackEvent(name: string, props?: EventProps) {
  try {
    track(name, props)
  } catch {
    // Analytics must never block a call, WhatsApp link or form submission.
  }

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, props)
  }
}
