import {
  RiDropLine,
  RiHomeSmileLine,
  RiPaintBrushLine,
  RiPlantLine,
  RiSearchEyeLine,
  RiShowersLine,
  RiTempHotLine,
  RiToolsLine,
  RiWaterFlashLine,
} from "@remixicon/react"
import type { ServiceIconKey } from "@/lib/services"

const iconMap = {
  piping: RiWaterFlashLine,
  repairs: RiToolsLine,
  drain: RiDropLine,
  bio: RiPlantLine,
  pointing: RiPaintBrushLine,
  tank: RiHomeSmileLine,
  leak: RiSearchEyeLine,
  heater: RiTempHotLine,
  fitout: RiShowersLine,
} as const

export function ServiceIcon({
  name,
  className,
  size,
}: {
  name: ServiceIconKey
  className?: string
  size?: number
}) {
  const Icon = iconMap[name]
  return <Icon className={className} size={size} aria-hidden="true" />
}
