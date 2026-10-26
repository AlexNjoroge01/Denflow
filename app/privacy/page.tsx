import type { Metadata } from "next"
import {
  LegalList,
  LegalPage,
  LegalSection,
} from "@/components/shared/legal-page"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DenFlow Plumbing & Water Solutions collects, uses and protects the personal information you share through this website or when requesting a quote.",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro={`This policy explains what information ${siteConfig.name} collects when you use this website or contact us, why we collect it, and how we look after it.`}
    >
      <LegalSection title="Who we are">
        <p>
          {siteConfig.name} is a plumbing business based in {siteConfig.city},{" "}
          {siteConfig.country}, run by {siteConfig.owner}. In this policy, “we”,
          “us” and “DenFlow” refer to {siteConfig.name}.
        </p>
        <p>
          You can reach us on {siteConfig.phone.display} or at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-brand-blue hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Information you give us">
        <p>
          When you send a quote request or contact us, you may share your name,
          phone number, optional email address, the service you need, your
          estate or area, and any details you add in the message field.
        </p>
        <p>
          We only ask for what we need to respond to your enquiry and arrange
          the work. Please do not send sensitive information, such as ID
          numbers, bank details or passwords, through the website form.
        </p>
      </LegalSection>

      <LegalSection title="Information collected automatically">
        <p>
          We use Vercel Analytics and Speed Insights to understand how the site
          is used and how quickly it loads. These tools collect aggregated,
          privacy-friendly information such as pages viewed, general device and
          browser type, approximate region and performance measurements. They
          are not used to identify you personally.
        </p>
        <p>
          We do not currently run advertising trackers or sell visitor data.
        </p>
      </LegalSection>

      <LegalSection title="How we use your information">
        <LegalList
          items={[
            "To respond to your quote request, call you back and arrange a site visit.",
            "To provide plumbing services, prepare quotes and keep records of work agreed or carried out.",
            "To answer questions and provide customer support.",
            "To understand how the website is used and improve its content and performance.",
            "To meet legal, tax and record-keeping obligations where they apply.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Our legal basis">
        <p>
          We process your details with your consent when you submit the quote
          form, and as needed to take steps before entering a contract with you
          or to provide services you have requested. We also have a legitimate
          interest in running and improving our business and website, and in
          keeping appropriate records.
        </p>
        <p>
          Where Kenyan law requires a different basis, we will rely on that
          basis and explain it where relevant.
        </p>
      </LegalSection>

      <LegalSection title="Who we share information with">
        <p>
          We do not sell or rent your personal information. We share it only
          with service providers who help us operate the website and respond to
          enquiries, including:
        </p>
        <LegalList
          items={[
            "Vercel, which hosts the website and provides analytics and performance monitoring.",
            "Resend, which delivers quote request emails to us.",
          ]}
        />
        <p>
          These providers process information on our behalf and only for the
          services they provide. We may also disclose information if required
          by law, a court order or a regulatory authority, or where necessary
          to protect our legal rights.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          We keep enquiry details only for as long as we need them to respond,
          arrange or carry out work, and to maintain reasonable business
          records. When information is no longer needed, we delete it or
          anonymise it.
        </p>
      </LegalSection>

      <LegalSection title="Cookies and similar technologies">
        <p>
          This website does not use advertising or profiling cookies. Vercel
          Analytics and Speed Insights are designed to provide aggregated
          insights without using cookies to track you across other websites.
        </p>
        <p>
          Your browser may store basic preferences, such as display settings,
          locally on your device. You can clear this data through your browser
          settings at any time.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Under the Kenya Data Protection Act, 2019, you may have the right to
          access the personal information we hold about you, ask us to correct
          or delete it, object to or restrict certain processing, or withdraw
          consent you have given.
        </p>
        <p>
          To make a request, contact us using the details below. We may need to
          confirm your identity before acting. If you are not satisfied with our
          response, you can contact the Office of the Data Protection
          Commissioner in Kenya.
        </p>
      </LegalSection>

      <LegalSection title="How we protect your information">
        <p>
          We take reasonable technical and organisational steps to protect the
          information you share, including using reputable hosting and email
          providers. No method of sending or storing information over the
          internet is completely secure, so we cannot guarantee absolute
          security.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          Our services are intended for adults. We do not knowingly collect
          personal information from children. If you believe a child has sent us
          information, contact us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          We may update this policy from time to time to reflect changes in our
          services or the law. The date at the top of this page shows when it
          was last updated. Please check back occasionally.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          For any question about this policy or your personal information,
          contact {siteConfig.owner} at {siteConfig.name}:
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
