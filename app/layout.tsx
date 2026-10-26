import type { Metadata, Viewport } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { SiteFooter } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { StickyCallBar } from "@/components/layout/sticky-call-bar"
import { WhatsAppFab } from "@/components/layout/whatsapp-fab"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { siteConfig } from "@/lib/site-config"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  fallback: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
})

const title = `Plumber in Nairobi | ${siteConfig.name}`
const description =
  "Reliable plumbing services in Nairobi: pipe repairs, drain unblocking, bio digester installation and house pointing. Call DenFlow for a free quote today."

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  publisher: siteConfig.name,
  category: "Plumbing services",
  keywords: [
    "plumber in Nairobi",
    "plumbing services in Nairobi",
    "plumbers in Nairobi Kenya",
    "drain unblocking Nairobi",
    "blocked drain Nairobi",
    "pipe repair Nairobi",
    "leak repair Nairobi",
    "bio digester installation Kenya",
    "bio digester Nairobi",
    "house pointing Nairobi",
    "emergency plumber Nairobi",
    "24 hour plumber Nairobi",
    "plumber in Westlands",
    "plumber in Kilimani",
    "plumber in Kileleshwa",
    "plumber in Lavington",
    "plumber in Karen",
    "plumber in Kasarani",
    "plumber Ruaka",
    "plumber Rongai",
    "plumber Syokimau",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "KE-110",
    "geo.placename": "Nairobi",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1C9C",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-KE"
      suppressHydrationWarning
      className={manrope.variable}
    >
      <body className="min-h-svh bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={200}>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-primary focus:shadow-lg focus:ring-2 focus:ring-ring focus:outline-none"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main-content" tabIndex={-1} className="outline-none">
              {children}
            </main>
            <SiteFooter />
            <StickyCallBar />
            <WhatsAppFab />
            <Toaster position="top-center" richColors closeButton />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
