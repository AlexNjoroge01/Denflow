import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Column,
  Section,
  Text,
} from "@react-email/components"
import { siteConfig } from "@/lib/site-config"

export type QuoteRequestEmailProps = {
  name: string
  phone: string
  email?: string
  service: string
  location: string
  message?: string
  submittedAt: string
}

const labelStyle = {
  color: "#6B7280",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  margin: "0 0 4px",
}

const valueStyle = {
  color: "#0B0B0F",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 18px",
}

export default function QuoteRequestEmail({
  name,
  phone,
  email,
  service,
  location,
  message,
  submittedAt,
}: QuoteRequestEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        New quote request from {name} — {service}
      </Preview>
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
            maxWidth: "580px",
            margin: "0 auto",
            backgroundColor: "#FFFFFF",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <Section
            style={{
              backgroundColor: "#0A1C9C",
              padding: "28px 32px",
            }}
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
              New quote request
            </Heading>
          </Section>

          <Section style={{ padding: "28px 32px" }}>
            <Row>
              <Column>
                <Text style={labelStyle}>Name</Text>
                <Text style={valueStyle}>{name}</Text>
              </Column>
              <Column>
                <Text style={labelStyle}>Phone</Text>
                <Text style={valueStyle}>
                  <Link
                    href={`tel:${phone}`}
                    style={{ color: "#1F3FD1", textDecoration: "none" }}
                  >
                    {phone}
                  </Link>
                </Text>
              </Column>
            </Row>

            <Text style={labelStyle}>Service</Text>
            <Text style={valueStyle}>{service}</Text>

            <Text style={labelStyle}>Location / estate</Text>
            <Text style={valueStyle}>{location}</Text>

            <Text style={labelStyle}>Email</Text>
            <Text style={valueStyle}>
              {email ? (
                <Link
                  href={`mailto:${email}`}
                  style={{ color: "#1F3FD1", textDecoration: "none" }}
                >
                  {email}
                </Link>
              ) : (
                <span style={{ color: "#6B7280" }}>Not provided</span>
              )}
            </Text>

            <Text style={labelStyle}>Message</Text>
            <Text style={{ ...valueStyle, whiteSpace: "pre-wrap" }}>
              {message || "No extra details provided."}
            </Text>

            <Hr style={{ borderColor: "#E5E7EB", margin: "8px 0 20px" }} />

            <Text style={{ ...valueStyle, fontSize: "13px", color: "#6B7280" }}>
              Submitted {submittedAt} via {siteConfig.url}
            </Text>

            <Link
              href={`https://wa.me/${phone.replace(/[^\d]/g, "")}`}
              style={{
                display: "inline-block",
                backgroundColor: "#0B0B0F",
                color: "#FFFFFF",
                borderRadius: "999px",
                padding: "12px 22px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Reply on WhatsApp
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
