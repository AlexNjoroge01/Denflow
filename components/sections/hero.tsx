import Image from "next/image"
import Link from "next/link"
import {
  RiArrowRightLine,
  RiCalendarCheckLine,
  RiCheckLine,
  RiDropLine,
  RiFlashlightLine,
  RiPhoneLine,
  RiToolsLine,
  RiWaterFlashLine,
} from "@remixicon/react"
import { Button } from "@/components/ui/button"
import { NotchedImage } from "@/components/shared/notched-image"
import { images } from "@/lib/images"
import { siteConfig, telHref } from "@/lib/site-config"

const heroIcons = [
  { icon: RiToolsLine, label: "Repairs" },
  { icon: RiDropLine, label: "Drains" },
  { icon: RiWaterFlashLine, label: "Piping" },
]

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden rounded-b-[2.25rem] bg-primary text-white md:rounded-b-[3.25rem]"
    >
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] size-[34rem] rounded-full bg-brand-bright/25 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-16rem] left-[38%] size-[30rem] rounded-full bg-primary-deep/80 blur-[90px]"
      />

      <div className="container-page relative pt-32 pb-24 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14 xl:gap-20">
          <div className="animate-rise relative order-2 mx-auto w-full max-w-[34rem] pb-10 lg:order-1 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -top-5 -right-5 size-24 rounded-full border border-white/15"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-2 -left-4 size-16 rounded-full bg-brand-bright/35 blur-md"
            />

            <NotchedImage
              src={images.plumber}
              alt="Plumber fitting pipework under a bathroom basin"
              priority
              notch={80}
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="aspect-[4/3] w-full shadow-[0_40px_100px_-40px_rgba(0,0,0,0.75)] ring-1 ring-white/15"
            />

            <div className="absolute right-3 bottom-0 z-10 w-[16.5rem] rounded-[1.6rem] bg-periwinkle p-5 text-ink shadow-float sm:-bottom-2 sm:left-auto sm:w-[17.5rem] md:right-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-star/30 px-2.5 py-1 text-[0.64rem] font-bold tracking-[0.1em] text-ink uppercase">
                <RiFlashlightLine className="size-3" aria-hidden="true" />
                Fast response in Nairobi
              </span>

              <div className="mt-4 flex items-center">
                {heroIcons.map(({ icon: Icon, label }, index) => (
                  <span
                    key={label}
                    title={label}
                    className={`grid size-8 place-items-center rounded-full border-2 border-periwinkle bg-primary text-white ${
                      index > 0 ? "-ml-2" : ""
                    }`}
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                  </span>
                ))}
                <span className="-ml-2 grid size-8 place-items-center rounded-full border-2 border-periwinkle bg-white text-primary">
                  <RiCheckLine className="size-3.5" aria-hidden="true" />
                </span>
                <span className="ml-2 text-[0.68rem] leading-tight font-semibold text-ink/65">
                  9 plumbing services
                </span>
              </div>

              <p className="mt-3 font-heading text-[1.18rem] leading-tight font-extrabold tracking-[-0.03em]">
                Your Local Plumbing Specialists
              </p>

              <Button asChild variant="black" size="sm" className="mt-4 h-10">
                <Link href="/#contact">
                  <RiCalendarCheckLine
                    data-icon="inline-start"
                    className="size-4"
                    aria-hidden="true"
                  />
                  Schedule a Visit
                </Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="eyebrow-light animate-rise">
              <RiTimeBadge />
              24/7 emergency plumbing · Nairobi
            </span>

            <h1
              id="hero-heading"
              className="animate-rise mt-6 max-w-[13ch] font-heading text-[2.6rem] leading-[1.02] font-extrabold tracking-[-0.045em] text-balance sm:text-[3.35rem] lg:text-[3.9rem] xl:text-[4.4rem]"
              style={{ animationDelay: "80ms" }}
            >
              Professional Plumbing &amp; Drain Solutions in{" "}
              <span className="text-periwinkle">Nairobi</span>
            </h1>

            <p
              className="animate-rise mt-6 max-w-[34rem] text-[1.02rem] leading-relaxed text-white/75 sm:text-[1.08rem]"
              style={{ animationDelay: "160ms" }}
            >
              From burst pipes and blocked drains to bio digester installation,
              DenFlow delivers{" "}
              <span className="font-semibold text-white">
                reliable, affordable, long-lasting
              </span>{" "}
              plumbing for homes and businesses across Nairobi.
            </p>

            <div
              className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "240ms" }}
            >
              <Button asChild variant="white" size="xl">
                <Link href="/#contact">
                  Get a Free Quote
                  <RiArrowRightLine
                    data-icon="inline-end"
                    className="size-4"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <Button asChild variant="outlineWhite" size="xl">
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

            <ul
              className="animate-rise mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[0.82rem] font-medium text-white/65"
              style={{ animationDelay: "320ms" }}
            >
              {[
                "Free quotes",
                "24/7 call-outs",
                "Nairobi & environs",
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <RiCheckLine
                    className="size-3.5 text-periwinkle"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div
              className="animate-rise mt-10 hidden items-center gap-4 sm:flex"
              style={{ animationDelay: "400ms" }}
            >
              <div className="relative size-22 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/15">
                <Image
                  src={images.pipework}
                  alt="New water pipes installed during a Nairobi plumbing job"
                  fill
                  sizes="88px"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
              <svg
                aria-hidden="true"
                viewBox="0 0 70 46"
                className="h-10 w-16 text-periwinkle/70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <path d="M2 38c17-2 33-9 42-24" />
                <path d="M36 12c4 1 7 2 9 3M43 22c2-3 3-6 3-8" />
              </svg>
              <div>
                <p className="text-[0.68rem] font-bold tracking-[0.14em] text-periwinkle uppercase">
                  On the job
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Pipework and repairs across Nairobi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RiTimeBadge() {
  return (
    <span
      aria-hidden="true"
      className="relative flex size-2 shrink-0"
    >
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-star opacity-60" />
      <span className="relative inline-flex size-2 rounded-full bg-star" />
    </span>
  )
}
