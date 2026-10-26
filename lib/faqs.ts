export type Faq = {
  question: string
  answer: string
  category:
    | "Pricing"
    | "Emergency"
    | "Drains"
    | "Bio digester"
    | "Areas"
    | "Pointing"
    | "Leaks"
    | "Booking"
}

export const faqs: Faq[] = [
  {
    question: "How much does a plumber cost in Nairobi?",
    answer:
      "Plumbing costs in Nairobi depend on the scope of the job, the materials required and how accessible the pipework is. DenFlow does not use a fixed call-out price list: we assess the problem, explain the work and agree a quote with you before starting. Call or WhatsApp +254 719 397 182 for a free quote.",
    category: "Pricing",
  },
  {
    question: "Do you offer emergency plumbing in Nairobi?",
    answer:
      "Yes. DenFlow offers 24-hour emergency call-outs across Nairobi and its environs for burst pipes, major leaks, blocked drains and other urgent plumbing problems. Call +254 719 397 182 and describe the issue so we can bring the right tools and parts. For non-urgent work, a scheduled visit is usually more economical.",
    category: "Emergency",
  },
  {
    question: "How do you unblock a blocked drain?",
    answer:
      "We clear blocked drains by locating the blockage, then using drain rods, plunging or line-clearing equipment to remove it. After clearing, we flush the line and check that water drains freely. If the blockage returns, we investigate causes such as grease, roots or a damaged pipe and recommend a repair. We protect the work area and clean up afterwards.",
    category: "Drains",
  },
  {
    question: "What is a bio digester and how does installation work?",
    answer:
      "A bio digester is an on-site system that treats household wastewater using bacteria, producing safer effluent and less sludge than a basic septic tank. Installation starts with a site assessment covering plot size, soil and household water use. DenFlow then recommends a system, prepares the site, installs the digester and connects it to your home's plumbing.",
    category: "Bio digester",
  },
  {
    question: "How much does bio digester installation cost in Kenya?",
    answer:
      "Bio digester installation costs in Kenya vary with the system size, number of users, soil conditions, site access and the amount of pipework required. There is no single price that fits every property. DenFlow assesses your site first, then gives a clear quote covering materials and labour before any work begins. Call or WhatsApp to arrange an assessment.",
    category: "Bio digester",
  },
  {
    question: "What areas of Nairobi do you serve?",
    answer:
      "DenFlow serves Nairobi and its environs, including Westlands, Kilimani, Kileleshwa, Lavington, Karen, Langata, South B, South C, Embakasi, Donholm, Kasarani, Roysambu, Ruaka, Kiambu Road, Thika Road, Rongai, Syokimau, Ruiru and Juja. If your area is not listed, call us. We may still be able to help, depending on the job and distance.",
    category: "Areas",
  },
  {
    question: "What is house pointing and why does it matter?",
    answer:
      "House pointing is the process of filling and finishing the mortar joints between bricks or blocks. Good pointing seals the wall against rainwater, reduces damp and improves appearance. Crumbling or hollow joints let water in and can lead to bigger repairs. DenFlow repairs and finishes pointing neatly, matching the existing wall where possible and protecting the surrounding area.",
    category: "Pointing",
  },
  {
    question: "How can I tell if I have a hidden water leak?",
    answer:
      "Warning signs include unexplained rises in your water bill, damp patches, bubbling paint, a sound of running water when taps are off, or warm spots on the floor. DenFlow traces hidden leaks in supply pipes, bathrooms and outdoor lines, then repairs the cause. Early detection usually means less water damage and a smaller repair bill.",
    category: "Leaks",
  },
  {
    question: "Do you give quotes before starting work?",
    answer:
      "Yes. DenFlow assesses the job and agrees the scope and price with you before work begins. The quote explains what is included, and if we find something unexpected once work starts, we discuss it with you before continuing. This keeps pricing transparent. Free quotes are available for planned work; emergency call-outs are confirmed when you call.",
    category: "Pricing",
  },
  {
    question: "How do I book a plumber?",
    answer:
      "Call or WhatsApp +254 719 397 182, or send the quote form on this page with your name, phone number, service and estate. We will confirm availability and, where needed, arrange a site assessment. For urgent problems, calling is fastest. For planned work, the form helps us prepare and give a more accurate quote.",
    category: "Booking",
  },
]

export const faqCategories = Array.from(
  new Set(faqs.map((faq) => faq.category))
)
