"use server"

import { render } from "@react-email/components"
import { Resend } from "resend"
import AutoReplyEmail from "@/emails/auto-reply"
import QuoteRequestEmail from "@/emails/quote-request"
import {
  normaliseKenyanPhone,
  quoteRequestSchema,
  type QuoteActionResult,
} from "@/lib/schemas"
import { getServiceTitle } from "@/lib/services"
import { siteConfig } from "@/lib/site-config"

const MIN_SUBMIT_TIME_MS = 3000

export async function submitQuoteRequest(
  input: unknown
): Promise<QuoteActionResult> {
  const parsed = quoteRequestSchema.safeParse(input)

  if (!parsed.success) {
    return {
      ok: false,
      error: "Please check the highlighted fields and try again.",
    }
  }

  const data = parsed.data

  // Honeypot: silently accept so bots do not learn the trap.
  if (data.honeypot) {
    return { ok: true, phone: siteConfig.phone.e164 }
  }

  // Timing check: real people take more than a few seconds to fill this in.
  const elapsed = Date.now() - data.startedAt
  if (!Number.isFinite(elapsed) || elapsed < MIN_SUBMIT_TIME_MS) {
    return {
      ok: false,
      error: "That was a little too quick. Please try submitting again.",
    }
  }

  if (!data.service) {
    return { ok: false, error: "Please choose a service." }
  }

  const phone = normaliseKenyanPhone(data.phone) ?? data.phone
  const serviceTitle = getServiceTitle(data.service) ?? "General plumbing"
  const submittedAt = new Intl.DateTimeFormat("en-KE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Nairobi",
  }).format(new Date())

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    // Local development without Resend credentials: keep the flow testable.
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Quote request (RESEND_API_KEY not set):", {
        name: data.name,
        phone,
        email: data.email ?? null,
        service: serviceTitle,
        location: data.location,
        message: data.message ?? null,
        submittedAt,
      })
      return { ok: true, phone }
    }

    return {
      ok: false,
      error: "Email is not configured yet.",
    }
  }

  try {
    const resend = new Resend(apiKey)
    const from =
      process.env.CONTACT_FROM_EMAIL ??
      `${siteConfig.shortName} Website <onboarding@resend.dev>`
    const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email

    const html = await render(
      <QuoteRequestEmail
        name={data.name}
        phone={phone}
        email={data.email}
        service={serviceTitle}
        location={data.location}
        message={data.message}
        submittedAt={submittedAt}
      />
    )

    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: `New plumbing quote request — ${serviceTitle} (${data.name})`,
      html,
      replyTo: data.email,
    })

    if (error) {
      console.error("[contact] Resend error:", error)
      return {
        ok: false,
        error: "We could not send that request.",
      }
    }

    if (data.email) {
      const autoReplyHtml = await render(
        <AutoReplyEmail
          name={data.name}
          service={serviceTitle}
          location={data.location}
        />
      )

      const autoReply = await resend.emails.send({
        from,
        to: [data.email],
        subject: `We have your request — ${siteConfig.name}`,
        html: autoReplyHtml,
      })

      if (autoReply.error) {
        // The lead was delivered; a failed auto-reply must not fail the form.
        console.error("[contact] Auto-reply error:", autoReply.error)
      }
    }

    return { ok: true, phone }
  } catch (error) {
    console.error("[contact] Unexpected error:", error)
    return {
      ok: false,
      error: "Something went wrong.",
    }
  }
}
