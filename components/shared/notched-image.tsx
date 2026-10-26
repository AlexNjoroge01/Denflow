"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import type { StaticImageData } from "next/image"
import type { CSSProperties } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

type NotchedImageProps = {
  src: StaticImageData
  alt: string
  className?: string
  imageClassName?: string
  sizes?: string
  priority?: boolean
  notch?: number
  small?: boolean
}

export function NotchedImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  notch = 64,
  small = false,
}: NotchedImageProps) {
  const [loaded, setLoaded] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imageRef.current?.complete) setLoaded(true)
  }, [])

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-tint",
        small ? "notched-frame-sm" : "notched-frame",
        className
      )}
      style={{ "--notch": `${notch}px` } as CSSProperties}
    >
      {!loaded ? (
        <Skeleton className="absolute inset-0 rounded-none bg-[#E4E9F9]" />
      ) : null}
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        onLoad={() => setLoaded(true)}
        className={cn(
          "object-cover",
          imageClassName
        )}
      />
    </div>
  )
}
