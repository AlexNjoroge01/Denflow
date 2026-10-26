import Link from "next/link"
import { cn } from "@/lib/utils"

type LogoProps = {
  tone?: "dark" | "light"
  className?: string
  href?: string
}

export function Logo({ tone = "dark", className, href = "/#home" }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="DenFlow Plumbing & Water Solutions — home"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "relative grid size-10 shrink-0 place-items-center rounded-full",
          tone === "light"
            ? "bg-white text-primary"
            : "bg-primary text-white"
        )}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-[21px]"
          fill="currentColor"
        >
          <path d="M12 2.2c3.55 4.2 6.55 7.45 6.55 11.3A6.55 6.55 0 0 1 12 20.05a6.55 6.55 0 0 1-6.55-6.55C5.45 9.65 8.45 6.4 12 2.2Z" />
          <path
            d="M9.1 13.6a3.2 3.2 0 0 0 2.7 3.15"
            fill="none"
            stroke={tone === "light" ? "#0A1C9C" : "#FFFFFF"}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.65"
          />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[1.18rem] font-extrabold tracking-[-0.035em]",
            tone === "light" ? "text-white" : "text-ink"
          )}
        >
          DenFlow
        </span>
        <span
          className={cn(
            "mt-1 text-[0.54rem] font-bold tracking-[0.17em] uppercase",
            tone === "light" ? "text-white/60" : "text-muted-foreground"
          )}
        >
          Plumbing &amp; Water
        </span>
      </span>
    </Link>
  )
}
