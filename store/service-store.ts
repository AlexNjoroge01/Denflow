import { create } from "zustand"
import type { ServiceSlug } from "@/lib/services"

type ServiceStore = {
  selectedService: ServiceSlug | null
  setSelectedService: (service: ServiceSlug | null) => void
  clearSelectedService: () => void
}

export const useServiceStore = create<ServiceStore>((set) => ({
  selectedService: null,
  setSelectedService: (service) => set({ selectedService: service }),
  clearSelectedService: () => set({ selectedService: null }),
}))
