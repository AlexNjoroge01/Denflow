import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  tone?: "light" | "dark"
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "w-fit",
            tone === "light" ? "eyebrow-light" : "eyebrow"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-heading text-[2rem] leading-[1.06] font-bold tracking-[-0.035em] sm:text-[2.55rem] lg:text-[3.1rem]",
          tone === "light" ? "text-white" : "text-ink",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={cn(
            "max-w-[34rem] text-[1.02rem] leading-relaxed",
            tone === "light" ? "text-white/70" : "text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  )
}
