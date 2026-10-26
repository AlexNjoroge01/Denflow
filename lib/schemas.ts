import { z } from "zod"
import { serviceSlugs } from "@/lib/services"

/**
 * Accepts 07xx / 01xx local numbers, +254 and 254 numbers, plus the
 * nine-digit form without a leading zero. Returns E.164 (+254…) or null.
 */
export function normaliseKenyanPhone(value: string): string | null {
  const digits = value.replace(/\D/g, "")

  let local: string
  if (digits.startsWith("254")) {
    local = digits.slice(3)
  } else if (digits.startsWith("0")) {
    local = digits.slice(1)
  } else {
    local = digits
  }

  if (!/^[17]\d{8}$/.test(local)) return null
  return `+254${local}`
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const quoteRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(80, "Please keep your name under 80 characters."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone number.")
    .refine(
      (value) => normaliseKenyanPhone(value) !== null,
      "Enter a valid Kenyan number, e.g. 0712 345 678."
    ),
  email: z
    .string()
    .trim()
    .max(200, "Please keep your email under 200 characters.")
    .optional()
    .refine(
      (value) => !value || emailPattern.test(value),
      "Enter a valid email address or leave this blank."
    ),
  service: z
    .enum([...serviceSlugs, "other"] as const)
    .or(z.literal(""))
    .refine((value) => value !== "", "Please choose a service."),
  location: z
    .string()
    .trim()
    .min(2, "Please tell us your estate or area.")
    .max(120, "Please keep the location under 120 characters."),
  message: z
    .string()
    .trim()
    .max(1000, "Please keep your message under 1000 characters.")
    .optional(),
  honeypot: z.string().optional(),
  startedAt: z.number().int().positive("Invalid submission timestamp."),
})

export type QuoteRequest = z.infer<typeof quoteRequestSchema>
export type QuoteRequestService = QuoteRequest["service"]
export type QuoteRequestInput = z.input<typeof quoteRequestSchema>

export const contactFormDefaults: QuoteRequestInput = {
  name: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  message: "",
  honeypot: "",
  startedAt: 0,
}

export type QuoteActionResult =
  | { ok: true; phone: string }
  | { ok: false; error: string }
