import type { ImageKey } from "@/lib/images"

export type ServiceIconKey =
  | "piping"
  | "repairs"
  | "drain"
  | "bio"
  | "pointing"
  | "tank"
  | "leak"
  | "heater"
  | "fitout"

export type Service = {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  icon: ServiceIconKey
  image: ImageKey
  alt: string
  keywords: string[]
  bullets: string[]
  badge?: string
  badgeTone?: "default" | "eco" | "urgent"
}

export const services = [
  {
    slug: "piping-and-pipe-installation",
    title: "Piping & Pipe Installation",
    shortDescription:
      "New water lines, replacements and re-piping for homes, flats and commercial buildings.",
    longDescription:
      "DenFlow installs and replaces water supply lines for homes, flats, apartments and small commercial buildings across Nairobi. We plan the route, use durable pipes and fittings, and pressure-test the work before we leave. Whether you are building, renovating or fixing repeated leaks in an old line, we can re-pipe part or all of the property with minimal disruption. Every installation starts with a site assessment and a clear quote, so you know the scope and cost before work begins.",
    icon: "piping",
    image: "pvc",
    alt: "New PVC water pipes and fittings installed during a plumbing project",
    keywords: [
      "pipe installation Nairobi",
      "re-piping Nairobi",
      "plumbing piping Kenya",
    ],
    bullets: [
      "Supply line installation",
      "Pipe replacement and re-piping",
      "Bathroom and kitchen piping",
    ],
  },
  {
    slug: "plumbing-repairs",
    title: "Plumbing Repairs",
    shortDescription:
      "Fast fixes for leaks, burst pipes, faulty taps, toilets and showers.",
    longDescription:
      "Fast, careful repairs for the problems that interrupt your day: leaking taps, burst pipes, running toilets, faulty showers and low water pressure. DenFlow carries common fittings and can usually diagnose the cause on the first visit. We repair what can be repaired and explain when replacement is the better long-term choice. Before starting, we confirm the scope and price with you. After the repair, we test the connection, clean the area and show you what was fixed.",
    icon: "repairs",
    image: "valve",
    alt: "Plumber tightening a valve with a pipe wrench during a repair job",
    keywords: [
      "plumbing repairs Nairobi",
      "leak repair Nairobi",
      "burst pipe repair Nairobi",
    ],
    bullets: [
      "Leak and burst pipe repair",
      "Tap, mixer and shower fixes",
      "Cistern and toilet repair",
    ],
    badge: "Emergency call-outs",
    badgeTone: "urgent",
  },
  {
    slug: "drain-unblocking",
    title: "Drain Unblocking",
    shortDescription:
      "Clearing blocked sinks, toilets and drains, and restoring proper flow.",
    longDescription:
      "Blocked sinks, toilets, showers and outside drains cleared properly, not just poked through. DenFlow uses drain rods, plunging and line clearing to remove the blockage, then checks that water flows away freely. If the blockage keeps returning, we look for the underlying cause, such as roots, grease build-up or a damaged line, and advise on the right repair. We protect floors and surfaces while working and clean up afterwards. Available for homes, rentals, shops and offices across Nairobi.",
    icon: "drain",
    image: "bathroom",
    alt: "Bathroom plumbing and drainage pipework during a drain repair",
    keywords: [
      "drain unblocking Nairobi",
      "blocked drain Nairobi",
      "unblock toilet Nairobi",
    ],
    bullets: [
      "Blocked sinks and toilets",
      "Drainage and line clearing",
      "Manhole and outside drain clearing",
    ],
  },
  {
    slug: "bio-digester-installation",
    title: "Bio Digester Installation",
    shortDescription:
      "Modern, odour-free wastewater treatment for homes and estates without a sewer connection.",
    longDescription:
      "A bio digester treats household wastewater on site, making it a practical alternative to a septic tank or sewer connection. DenFlow assesses your plot, household size and soil conditions, recommends a suitable system, and handles installation and connection to your home's plumbing. We explain how the system works, what to put in it and how to maintain it. Installation is planned around your property and completed neatly, with the site left clean.",
    icon: "bio",
    image: "bio",
    alt: "Bio digester tanks installed below ground at a property in Nairobi",
    keywords: [
      "bio digester installation Kenya",
      "bio digester Nairobi",
      "biodigester septic alternative Kenya",
    ],
    bullets: [
      "Site assessment and system advice",
      "Bio digester installation",
      "Connection to home plumbing",
    ],
    badge: "Eco-friendly",
    badgeTone: "eco",
  },
  {
    slug: "house-pointing",
    title: "House Pointing",
    shortDescription:
      "Neat, durable pointing that protects walls from water damage and improves appearance.",
    longDescription:
      "House pointing is the finishing of mortar joints in brick or block walls. Done well, it keeps rainwater out, reduces damp and makes the wall look sharper. DenFlow repairs crumbling or hollow joints, matches the existing finish where possible and uses a mix suited to the wall. We work neatly, protect surrounding surfaces and clean down after the job. Suitable for new builds, renovations and older walls that need weatherproofing.",
    icon: "pointing",
    image: "plumber",
    alt: "Plumber carrying out detailed finishing work on a property",
    keywords: [
      "house pointing Nairobi",
      "wall pointing contractor Nairobi",
      "pointing work Kenya",
    ],
    bullets: [
      "Wall pointing and joint repair",
      "Neat finishing",
      "Weatherproofing for older walls",
    ],
  },
  {
    slug: "water-tanks-and-pumps",
    title: "Water Tanks & Pumps",
    shortDescription:
      "Tank installation, booster pumps and pressure systems for reliable water supply.",
    longDescription:
      "DenFlow installs and connects water storage tanks, booster pumps and pressure systems for homes, apartments and small businesses in Nairobi. We advise on tank size and position, build a stable base, connect the pipework and check the pump and pressure switch work correctly. We also replace worn pumps, fix leaking tank connections and reconfigure supply lines when a property changes. The work starts with a site check and a clear quote.",
    icon: "tank",
    image: "pumpRoom",
    alt: "Booster pumps, valves and pressure pipework in a plant room",
    keywords: [
      "water tank installation Nairobi",
      "water pump installation Nairobi",
      "booster pump Nairobi",
    ],
    bullets: [
      "Water tank installation",
      "Booster and pressure pumps",
      "Tank connections and supply lines",
    ],
  },
  {
    slug: "leak-detection-and-repair",
    title: "Leak Detection & Repair",
    shortDescription:
      "Find hidden leaks before they damage walls, floors and your water bill.",
    longDescription:
      "A hidden leak can waste water, damage walls and raise your bill long before it is obvious. DenFlow traces leaks in supply pipes, bathrooms, kitchens and outdoor lines, then repairs the cause rather than just covering the stain. We check visible pipework, test pressure and isolate sections to narrow down the problem. Once found, we explain the repair options and confirm the cost before starting. We also check the surrounding pipework for related faults.",
    icon: "leak",
    image: "fittings",
    alt: "Plumbing valves and fittings inspected during leak detection",
    keywords: [
      "leak detection Nairobi",
      "hidden water leak Nairobi",
      "water leak repair Kenya",
    ],
    bullets: [
      "Hidden leak tracing",
      "Supply and bathroom leak repair",
      "Pressure checks and advice",
    ],
  },
  {
    slug: "water-heaters-and-solar",
    title: "Water Heaters & Solar",
    shortDescription:
      "Installation and repair of electric water heaters and solar water heating systems.",
    longDescription:
      "DenFlow installs, replaces and repairs electric water heaters and solar water heating systems for homes and small commercial properties. We check the roof or mounting point, connect the unit to the water supply and electrical supply where required, and test temperature and pressure controls. We also fix leaking heater connections, faulty valves and worn elements. Work is carried out carefully, with the area protected and the system tested before we leave. A quote is agreed before work begins.",
    icon: "heater",
    image: "pipework",
    alt: "Hot water supply pipes and fittings connected to a heating system",
    keywords: [
      "water heater installation Nairobi",
      "solar water heater Kenya",
      "water heater repair Nairobi",
    ],
    bullets: [
      "Electric heater installation",
      "Solar water heating systems",
      "Heater repairs and connections",
    ],
  },
  {
    slug: "bathroom-and-kitchen-fitouts",
    title: "Bathroom & Kitchen Fit-outs",
    shortDescription:
      "Complete plumbing for bathroom and kitchen upgrades, from pipework to fittings.",
    longDescription:
      "From a single bathroom upgrade to a full kitchen plumbing layout, DenFlow handles the pipework, fittings and installation. We install sinks, toilets, showers, mixers, washing machine points and drainage, coordinating with tilers and other trades where needed. The work is planned to keep disruption low and finished neatly. We test every connection and explain how to look after the new fittings. A site assessment and a clear quote come first.",
    icon: "fitout",
    image: "tap",
    alt: "Modern kitchen tap running with water after a fit-out",
    keywords: [
      "bathroom plumbing Nairobi",
      "kitchen plumbing Nairobi",
      "bathroom fit-out Kenya",
    ],
    bullets: [
      "Bathroom and kitchen pipework",
      "Sinks, toilets, showers and mixers",
      "Drainage and appliance connections",
    ],
  },
] as const satisfies readonly Service[]

export type ServiceSlug = (typeof services)[number]["slug"]
export type ServiceItem = Service & { slug: ServiceSlug }

export const serviceSlugs = services.map((service) => service.slug) as [
  ServiceSlug,
  ...ServiceSlug[],
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export function getServiceTitle(slug: string | undefined) {
  if (!slug) return null
  if (slug === "other") return "Other / not sure"
  return getService(slug)?.title ?? null
}
