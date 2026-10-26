import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import { siteConfig, whatsappHref } from "@/lib/site-config"

export type AutoReplyEmailProps = {
  name: string
  service: string
  location: string
}

export default function AutoReplyEmail({
  name,
  service,
  location,
}: AutoReplyEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>Thanks for contacting DenFlow Plumbing</Preview>
      <Body
        style={{
          backgroundColor: "#EEF1FB",
          fontFamily: "Manrope, Arial, sans-serif",
          margin: 0,
          padding: "32px 12px",
        }}
      >
        <Container
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            backgroundColor: "#FFFFFF",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <Section
            style={{ backgroundColor: "#0A1C9C", padding: "28px 32px" }}
          >
            <Text
              style={{
                color: "#C9D4F5",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              DenFlow Plumbing &amp; Water Solutions
            </Text>
            <Heading
              style={{
                color: "#FFFFFF",
                fontSize: "26px",
                lineHeight: "32px",
                margin: "10px 0 0",
              }}
            >
              Thanks, {name.split(" ")[0]}.
            </Heading>
          </Section>

          <Section style={{ padding: "28px 32px" }}>
            <Text
              style={{
                color: "#0B0B0F",
                fontSize: "16px",
                lineHeight: "26px",
                margin: "0 0 16px",
              }}
            >
              We have received your request for <strong>{service}</strong> in{" "}
              <strong>{location}</strong>. Dennis will review it and call you to
              confirm the scope and price.
            </Text>

            <Text
              style={{
                color: "#6B7280",
                fontSize: "15px",
                lineHeight: "24px",
                margin: "0 0 22px",
              }}
            >
              If the job is urgent, call or WhatsApp us directly on{" "}
              {siteConfig.phone.display}.
            </Text>

            <Link
              href={whatsappHref(
                `Hi DenFlow, I just sent a quote request for ${service}.`
              )}
              style={{
                display: "inline-block",
                backgroundColor: "#0A1C9C",
                color: "#FFFFFF",
                borderRadius: "999px",
                padding: "12px 22px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Chat on WhatsApp
            </Link>

            <Hr style={{ borderColor: "#E5E7EB", margin: "26px 0 18px" }} />

            <Text
              style={{
                color: "#6B7280",
                fontSize: "13px",
                lineHeight: "21px",
                margin: 0,
              }}
            >
              {siteConfig.name}
              <br />
              {siteConfig.city}, {siteConfig.country}
              <br />
              {siteConfig.phone.display} · {siteConfig.email}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
