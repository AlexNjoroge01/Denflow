import bathroomPlumbing from "@/assets/images/bathroom-plumbing.png"
import bioDigesterTanks from "@/assets/images/bio-digester-tanks.png"
import kitchenTap from "@/assets/images/kitchen-tap.png"
import pipework from "@/assets/images/pipework.png"
import plumberAtWork from "@/assets/images/plumber-at-work.png"
import plumbingFittings from "@/assets/images/plumbing-fittings.png"
import pumpRoom from "@/assets/images/pump-room.png"
import pvcPipework from "@/assets/images/pvc-pipework.png"
import valveRepair from "@/assets/images/valve-repair.png"

/**
 * Local photography is used until Cloudinary assets are available.
 * Keep this map in one place so images can be swapped without touching sections.
 */
export const images = {
  fittings: plumbingFittings,
  pipework,
  plumber: plumberAtWork,
  bathroom: bathroomPlumbing,
  bio: bioDigesterTanks,
  pvc: pvcPipework,
  pumpRoom,
  valve: valveRepair,
  tap: kitchenTap,
} as const

export type ImageKey = keyof typeof images
