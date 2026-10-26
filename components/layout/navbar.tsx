"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  RiArrowRightLine,
  RiMenuLine,
  RiPhoneLine,
  RiTimeLine,
  RiWhatsappLine,
} from "@remixicon/react"
import { Logo } from "@/components/shared/logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { trackEvent } from "@/lib/analytics"
import { siteConfig, telHref, whatsappHref } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Areas", id: "areas" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-5">
      <div className="container-page">
        <div
          className={cn(
            "flex h-16 items-center justify-between gap-3 rounded-full pl-4 pr-2 transition-all duration-300 md:h-[4.5rem] md:pl-5 md:pr-2.5",
            scrolled
              ? "bg-white/95 shadow-[0_18px_50px_-28px_rgba(11,11,15,0.45)] ring-1 ring-black/5 backdrop-blur-md"
              : "bg-periwinkle/95 backdrop-blur-sm"
          )}
        >
          <Logo className="shrink-0" />

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                  active === link.id
                    ? "bg-primary text-white"
                    : "text-ink/75 hover:bg-white/60 hover:text-ink"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href={telHref}
              onClick={() => trackEvent("click_to_call", { location: "navbar" })}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-white/60 xl:flex"
            >
              <RiPhoneLine className="size-4" aria-hidden="true" />
              {siteConfig.phone.display}
            </a>

            <Button asChild size="xl" className="hidden h-11 px-5 sm:inline-flex">
              <Link
                href="/#contact"
                onClick={() =>
                  trackEvent("cta_click", { location: "navbar", label: "quote" })
                }
              >
                Get a Quote
                <RiArrowRightLine
                  data-icon="inline-end"
                  className="size-4"
                  aria-hidden="true"
                />
              </Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="rounded-full lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <RiMenuLine className="size-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[88%] max-w-sm rounded-l-[2rem] border-0 bg-white p-0"
              >
                <SheetHeader className="px-6 pt-6 pb-2">
                  <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Links to sections of the DenFlow Plumbing website.
                  </SheetDescription>
                  <Logo />
                </SheetHeader>

                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col gap-1 px-4 py-4"
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`/#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex min-h-12 items-center justify-between rounded-2xl px-4 text-lg font-semibold transition-colors",
                        active === link.id
                          ? "bg-tint text-primary"
                          : "text-ink hover:bg-tint/70"
                      )}
                    >
                      {link.label}
                      <RiArrowRightLine
                        className="size-4 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-3 border-t border-border px-6 py-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <RiTimeLine className="size-4" aria-hidden="true" />
                    {siteConfig.hours.display}
                  </div>
                  <Button asChild size="xl" className="w-full">
                    <Link
                      href="/#contact"
                      onClick={() => setOpen(false)}
                      className="justify-center"
                    >
                      Get a Free Quote
                    </Link>
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button asChild variant="black" size="xl" className="w-full">
                      <a
                        href={telHref}
                        onClick={() => {
                          trackEvent("click_to_call", { location: "mobile_menu" })
                          setOpen(false)
                        }}
                        className="justify-center"
                      >
                        <RiPhoneLine className="size-4" aria-hidden="true" />
                        Call
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="xl"
                      className="w-full"
                    >
                      <a
                        href={whatsappHref()}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          trackEvent("whatsapp_click", {
                            location: "mobile_menu",
                          })
                          setOpen(false)
                        }}
                        className="justify-center"
                      >
                        <RiWhatsappLine
                          className="size-4"
                          aria-hidden="true"
                        />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
