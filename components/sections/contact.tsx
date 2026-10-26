import type { ReactNode } from "react"
import {
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTimeLine,
  RiWhatsappLine,
} from "@remixicon/react"
import { ContactForm } from "@/components/sections/contact-form"
import { CopyButton } from "@/components/shared/copy-button"
import { SectionHeading } from "@/components/shared/section-heading"
import { TrackedLink } from "@/components/shared/tracked-link"
import {
  siteConfig,
  telHref,
  whatsappHref,
} from "@/lib/site-config"

function ContactRow({
  icon,
  label,
  children,
  action,
}: {
  icon: ReactNode
  label: string
  children: ReactNode
  action?: ReactNode
}) {
  return (
    <div className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-tint text-brand-blue">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[0.65rem] font-bold tracking-[0.14em] text-muted-foreground uppercase">
          {label}
        </p>
        <div className="mt-1 text-sm font-semibold text-ink">{children}</div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-tint py-20 md:py-28 lg:py-32"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              id="contact-heading"
              eyebrow="Contact"
              title="Get a Free Quote"
              description="Tell us what you need and where you are. Send a few details and Dennis will call you back to confirm the job and price."
            />

            <div className="mt-8 rounded-[1.5rem] bg-white p-5 ring-1 ring-black/5 sm:p-6">
              <div className="divide-y divide-border">
                <ContactRow
                  icon={<RiPhoneLine className="size-5" aria-hidden="true" />}
                  label="Call or WhatsApp"
                  action={
                    <CopyButton
                      value={siteConfig.phone.display}
                      label="Copy phone number"
                      toastMessage="Phone number copied"
                    />
                  }
                >
                  <TrackedLink
                    href={telHref}
                    eventName="click_to_call"
                    eventProps={{ location: "contact_card" }}
                    className="text-base font-bold text-brand-blue hover:underline"
                  >
                    {siteConfig.phone.display}
                  </TrackedLink>
                </ContactRow>

                <ContactRow
                  icon={<RiWhatsappLine className="size-5" aria-hidden="true" />}
                  label="WhatsApp"
                >
                  <TrackedLink
                    href={whatsappHref()}
                    eventName="whatsapp_click"
                    eventProps={{ location: "contact_card" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline"
                  >
                    Start a WhatsApp chat
                  </TrackedLink>
                </ContactRow>

                <ContactRow
                  icon={<RiMailLine className="size-5" aria-hidden="true" />}
                  label="Email"
                  action={
                    <CopyButton
                      value={siteConfig.email}
                      label="Copy email address"
                      toastMessage="Email address copied"
                    />
                  }
                >
                  <TrackedLink
                    href={`mailto:${siteConfig.email}`}
                    eventName="email_click"
                    eventProps={{ location: "contact_card" }}
                    className="break-all text-brand-blue hover:underline"
                  >
                    {siteConfig.email}
                  </TrackedLink>
                </ContactRow>

                <ContactRow
                  icon={<RiMapPinLine className="size-5" aria-hidden="true" />}
                  label="Service area"
                >
                  <span className="text-ink">
                    {siteConfig.city} &amp; surrounding areas
                  </span>
                </ContactRow>

                <ContactRow
                  icon={<RiTimeLine className="size-5" aria-hidden="true" />}
                  label="Opening hours"
                >
                  <span className="text-ink">{siteConfig.hours.display}</span>
                  <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                    {siteConfig.hours.note}
                  </span>
                </ContactRow>
              </div>
            </div>

            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-ink/60">
              <li>Free quotes</li>
              <li>No obligation</li>
              <li>24/7 emergency call-outs</li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
