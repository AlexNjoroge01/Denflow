import type { Metadata } from "next"
import {
  LegalList,
  LegalPage,
  LegalSection,
} from "@/components/shared/legal-page"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you use the DenFlow Plumbing & Water Solutions website or book plumbing work in Nairobi.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      intro={`These terms apply to this website and to plumbing services provided by ${siteConfig.name}. By using the site or booking work with us, you agree to them.`}
    >
      <LegalSection title="About us">
        <p>
          {siteConfig.name} is a plumbing business based in {siteConfig.city},{" "}
          {siteConfig.country}, run by {siteConfig.owner}. We provide plumbing
          services across {siteConfig.serviceRegion}. You can contact us on{" "}
          {siteConfig.phone.display} or at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-brand-blue hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Information on this website">
        <p>
          The content on this site is general information about our services and
          service area. It is not a substitute for an assessment of your
          property. Prices, availability and response times can change, and we
          do not guarantee that every detail on the site is complete or current
          at all times.
        </p>
        <p>
          Where this site links to another website, we are not responsible for
          its content or privacy practices.
        </p>
      </LegalSection>

      <LegalSection title="Quotes and estimates">
        <p>
          We assess the job before work begins and agree the scope and price
          with you. A quote is based on the information available at the time,
          including what we can see during a site visit.
        </p>
        <p>
          If we find hidden damage, difficult access or other unexpected work,
          we will explain the issue and discuss any change in price with you
          before continuing. Emergency call-outs are confirmed by phone, since
          the scope may only become clear on site.
        </p>
        <p>
          A quote is not an offer to carry out work indefinitely. Availability
          and material prices can change, so please confirm the quote with us
          before scheduling.
        </p>
      </LegalSection>

      <LegalSection title="Bookings and access">
        <LegalList
          items={[
            "We will agree a date and time for the work and let you know if the schedule changes.",
            "Please provide safe access to the work area, water supply and power where needed.",
            "Someone authorised to approve the work should be present, or reachable by phone.",
            "If access is not available when we arrive, we may need to reschedule and a further visit may be required.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Our work">
        <p>
          We carry out plumbing work with reasonable care and skill, using
          suitable materials and following good industry practice. Materials and
          fittings are supplied as agreed in the quote unless we agree a
          substitution with you.
        </p>
        <p>
          Older pipework and fittings can be fragile or already faulty. Where we
          believe existing work carries a risk, we will explain it to you. We
          are not responsible for faults in parts of the system we were not
          asked to inspect or repair.
        </p>
        <p>
          We aim to leave the work area clean and to test the work before we
          finish. Please tell us promptly if something is not working as
          expected so we can look into it.
        </p>
      </LegalSection>

      <LegalSection title="Payment">
        <p>
          Payment terms are confirmed in the quote or invoice before work
          begins. Unless we agree otherwise in writing, payment is due when the
          agreed work is complete.
        </p>
        <p>
          If additional work is agreed during the job, the additional cost will
          be confirmed with you before that work proceeds.
        </p>
      </LegalSection>

      <LegalSection title="Cancellations and changes">
        <p>
          If you need to cancel or change a booking, please tell us as soon as
          possible so we can adjust the schedule. Urgent call-outs may take
          priority over planned work; if that affects your booking, we will
          contact you to rearrange.
        </p>
      </LegalSection>

      <LegalSection title="Liability">
        <p>
          To the extent permitted by law, we are not liable for indirect or
          consequential loss, loss of income or profit, or damage caused by
          pre-existing faults, third parties or circumstances outside our
          reasonable control.
        </p>
        <p>
          Nothing in these terms limits or excludes liability that cannot be
          limited or excluded under Kenyan law, including liability for death or
          personal injury caused by negligence, or for fraud.
        </p>
      </LegalSection>

      <LegalSection title="Website use and intellectual property">
        <p>
          The content, design and branding on this website belong to{" "}
          {siteConfig.name} or are used with permission. You may view and share
          the site for personal, non-commercial purposes. Please do not copy,
          republish or use our content commercially without our written
          permission.
        </p>
        <p>
          You agree not to misuse the website, attempt to disrupt it, or submit
          false or harmful information through our forms.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These terms are governed by the laws of Kenya. If a dispute arises, we
          ask that you contact us first so we can try to resolve it amicably.
          If that is not possible, the courts of Kenya will have jurisdiction.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <p>
          We may update these terms from time to time. The date at the top of
          this page shows when they were last updated. The terms that apply to a
          job are those in place when the work is agreed, unless we agree
          otherwise with you.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For any question about these terms, contact {siteConfig.owner} at{" "}
          {siteConfig.name}:
        </p>
        <LegalList
          items={[
            <>
              Phone:{" "}
              <a
                href={`tel:${siteConfig.phone.e164}`}
                className="font-semibold text-brand-blue hover:underline"
              >
                {siteConfig.phone.display}
              </a>
            </>,
            <>
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-brand-blue hover:underline"
              >
                {siteConfig.email}
              </a>
            </>,
            `Service area: ${siteConfig.serviceRegion}`,
          ]}
        />
      </LegalSection>
    </LegalPage>
  )
}
