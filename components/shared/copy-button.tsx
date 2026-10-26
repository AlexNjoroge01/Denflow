"use client"

import { useState } from "react"
import { RiCheckLine, RiFileCopyLine } from "@remixicon/react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { trackEvent } from "@/lib/analytics"

type CopyButtonProps = {
  value: string
  label: string
  toastMessage: string
  className?: string
}

export function CopyButton({
  value,
  label,
  toastMessage,
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      toast.success(toastMessage)
      trackEvent("copy_contact", { value })
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error("Could not copy. Please select the text manually.")
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={copy}
          className={className}
          aria-label={label}
        >
          {copied ? (
            <RiCheckLine className="size-4 text-brand-blue" aria-hidden="true" />
          ) : (
            <RiFileCopyLine className="size-4" aria-hidden="true" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{copied ? "Copied" : label}</TooltipContent>
    </Tooltip>
  )
}
