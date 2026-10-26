import { JsonLd } from "@/components/seo/json-ld"
import { About } from "@/components/sections/about"
import { Areas } from "@/components/sections/areas"
import { Contact } from "@/components/sections/contact"
import { CtaBand } from "@/components/sections/cta-band"
import { Faq } from "@/components/sections/faq"
import { Hero } from "@/components/sections/hero"
import { Process } from "@/components/sections/process"
import { Services } from "@/components/sections/services"
import { Testimonials } from "@/components/sections/testimonials"
import { TrustStrip } from "@/components/sections/trust-strip"
import { WhyUs } from "@/components/sections/why-us"
import { buildJsonLdGraph } from "@/lib/seo"

export default function Page() {
  return (
    <>
      <JsonLd data={buildJsonLdGraph()} />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Process />
      <WhyUs />
      <Areas />
      <Testimonials />
      <Faq />
      <CtaBand />
      <Contact />
    </>
  )
}
