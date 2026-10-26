export type ServiceArea = {
  name: string
  slug: string
  note?: string
}

export const areas: ServiceArea[] = [
  { name: "Westlands", slug: "westlands" },
  { name: "Kilimani", slug: "kilimani" },
  { name: "Kileleshwa", slug: "kileleshwa" },
  { name: "Lavington", slug: "lavington" },
  { name: "Karen", slug: "karen" },
  { name: "Langata", slug: "langata" },
  { name: "South B", slug: "south-b" },
  { name: "South C", slug: "south-c" },
  { name: "Embakasi", slug: "embakasi" },
  { name: "Donholm", slug: "donholm" },
  { name: "Kasarani", slug: "kasarani" },
  { name: "Roysambu", slug: "roysambu" },
  { name: "Ruaka", slug: "ruaka" },
  { name: "Kiambu Road", slug: "kiambu-road" },
  { name: "Thika Road", slug: "thika-road" },
  { name: "Rongai", slug: "rongai" },
  { name: "Syokimau", slug: "syokimau" },
  { name: "Ruiru", slug: "ruiru" },
  { name: "Juja", slug: "juja" },
]

export const areaNames = ["Nairobi", ...areas.map((area) => area.name)]
