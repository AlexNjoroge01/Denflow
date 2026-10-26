import type { Metadata } from "next"
import Link from "next/link"
import { RiArrowLeftLine, RiPhoneLine } from "@remixicon/react"
import { Button } from "@/components/ui/button"
import { siteConfig, telHref } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page could not be found. Return to the DenFlow Plumbing & Water Solutions homepage or call us for plumbing help in Nairobi.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="flex min-h-svh items-center bg-tint pt-28 pb-20 md:pt-36"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">404</span>
          <h1
            id="not-found-heading"
            className="mt-6 font-heading text-[2.6rem] leading-[1.02] font-bold tracking-[-0.04em] text-ink sm:text-[3.4rem]"
          >
            This page has sprung a leak.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-[1.02rem] leading-relaxed text-muted-foreground">
            The page you are looking for has moved or no longer exists. Head
            back home, or call DenFlow if you need a plumber in Nairobi.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="xl">
              <Link href="/">
                <RiArrowLeftLine
                  data-icon="inline-start"
                  className="size-4"
                  aria-hidden="true"
                />
                Back to home
              </Link>
            </Button>
            <Button asChild variant="black" size="xl">
              <a href={telHref}>
                <RiPhoneLine
                  data-icon="inline-start"
                  className="size-4"
                  aria-hidden="true"
                />
                Call {siteConfig.phone.display}
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Or{" "}
            <Link
              href="/#contact"
              className="font-semibold text-brand-blue hover:underline"
            >
              request a free quote
            </Link>{" "}
            and we will call you back.
          </p>
        </div>
      </div>
    </section>
  )
}
