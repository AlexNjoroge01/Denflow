"use client"

import { useEffect, useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  RiArrowRightLine,
  RiCheckLine,
  RiLoader4Line,
  RiWhatsappLine,
} from "@remixicon/react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { submitQuoteRequest } from "@/app/actions/contact"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { trackEvent } from "@/lib/analytics"
import {
  contactFormDefaults,
  quoteRequestSchema,
  type QuoteRequestInput,
} from "@/lib/schemas"
import { services } from "@/lib/services"
import { siteConfig, whatsappHref } from "@/lib/site-config"
import { useServiceStore } from "@/store/service-store"

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submittedName, setSubmittedName] = useState("")
  const [serverError, setServerError] = useState<string | null>(null)
  const startedTracked = useRef(false)

  const selectedService = useServiceStore((state) => state.selectedService)
  const clearSelectedService = useServiceStore(
    (state) => state.clearSelectedService
  )

  const form = useForm<QuoteRequestInput>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      ...contactFormDefaults,
      startedAt: 0,
    },
    mode: "onBlur",
  })

  useEffect(() => {
    const now = Date.now()
    form.setValue("startedAt", now)
  }, [form])

  useEffect(() => {
    if (selectedService) {
      form.setValue("service", selectedService, {
        shouldValidate: true,
        shouldDirty: true,
      })
    }
  }, [selectedService, form])

  function handleFormStart() {
    if (startedTracked.current) return
    startedTracked.current = true
    trackEvent("form_start", { form: "quote_request" })
  }

  const onSubmit = form.handleSubmit(async (values) => {
    const startedAt = values.startedAt
    setSubmitting(true)
    setServerError(null)

    const result = await submitQuoteRequest(values)

    setSubmitting(false)

    if (result.ok) {
      setSubmittedName(values.name)
      setSuccess(true)
      clearSelectedService()
      trackEvent("form_submit_success", {
        form: "quote_request",
        service: values.service || "other",
      })
      toast.success("Thanks, we'll call you shortly.", {
        description: "Your request has been sent to Dennis.",
      })
      form.reset({ ...contactFormDefaults, startedAt })
      return
    }

    setServerError(result.error)
    trackEvent("form_error", {
      form: "quote_request",
      service: values.service || "other",
    })
    toast.error("We could not send your request.", {
      description: result.error,
      duration: 8000,
    })
  })

  if (success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex min-h-[34rem] flex-col items-center justify-center rounded-[1.75rem] bg-white p-8 text-center shadow-soft ring-1 ring-black/5"
      >
        <span className="grid size-16 place-items-center rounded-full bg-[#E4F5EA] text-[#17663A]">
          <RiCheckLine className="size-8" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-heading text-2xl font-bold tracking-[-0.03em] text-ink">
          Request received
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thanks, {submittedName.split(" ")[0]}. Dennis will call you to confirm
          the job and price. If it is urgent, message us on WhatsApp now.
        </p>
        <div className="mt-6 flex w-full max-w-xs flex-col gap-2">
          <Button asChild variant="black" size="xl">
            <a
              href={whatsappHref(
                `Hi DenFlow, I just sent a quote request. My name is ${submittedName}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("whatsapp_click", {
                  location: "form_success",
                })
              }
            >
              <RiWhatsappLine
                data-icon="inline-start"
                className="size-4"
                aria-hidden="true"
              />
              Follow up on WhatsApp
            </a>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="xl"
            onClick={() => setSuccess(false)}
          >
            Send another request
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
      <h3
        id="contact-form-heading"
        tabIndex={-1}
        className="font-heading text-xl font-bold tracking-[-0.025em] text-ink outline-none"
      >
        Request a quote
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        No obligation. We will call to confirm the scope and price.
      </p>

      <Form {...form}>
        <form
          onSubmit={onSubmit}
          onFocusCapture={handleFormStart}
          noValidate
          className="mt-6 grid gap-4 sm:grid-cols-2"
        >
          <input
            type="hidden"
            {...form.register("startedAt", { valueAsNumber: true })}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
          >
            <label htmlFor="company-website">Company website</label>
            <input
              id="company-website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...form.register("honeypot")}
            />
          </div>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="name"
                    placeholder="e.g. Mary Wanjiku"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="0712 345 678"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email{" "}
                  <span className="font-normal text-muted-foreground">
                    (optional)
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value ?? ""}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.slug} value={service.slug}>
                        {service.title}
                      </SelectItem>
                    ))}
                    <SelectItem value="other">Other / not sure</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>Location / estate</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="address-level2"
                    placeholder="e.g. Kilimani, Nairobi"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>
                  Message{" "}
                  <span className="font-normal text-muted-foreground">
                    (optional)
                  </span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us what is wrong, when it started, and anything we should know."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {serverError ? (
            <p
              role="alert"
              className="rounded-xl bg-destructive/5 px-3.5 py-3 text-xs font-medium text-destructive sm:col-span-2"
            >
              {serverError} You can also call{" "}
              <a href={`tel:${siteConfig.phone.e164}`} className="underline">
                {siteConfig.phone.display}
              </a>
              .
            </p>
          ) : null}

          <div className="sm:col-span-2">
            <Button
              type="submit"
              size="xl"
              disabled={submitting}
              className="w-full"
            >
              {submitting ? (
                <>
                  <RiLoader4Line
                    data-icon="inline-start"
                    className="size-4 animate-spin"
                    aria-hidden="true"
                  />
                  Sending request…
                </>
              ) : (
                <>
                  Request my free quote
                  <RiArrowRightLine
                    data-icon="inline-end"
                    className="size-4"
                    aria-hidden="true"
                  />
                </>
              )}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              We use your details only to respond to this request.
            </p>
          </div>
        </form>
      </Form>
    </div>
  )
}
