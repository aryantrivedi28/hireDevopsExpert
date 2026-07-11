import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Font configuration with proper display swap
const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: true,
  fallback: ["monospace"],
});

// Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://hiredevopsexpert.com"),
  title: {
    default: "Hire DevOps Expert | Senior DevOps Engineers for Startups",
    template: "%s | Hire DevOps Expert",
  },
  description: "Hire senior DevOps engineers and cloud infrastructure experts. Get production-grade CI/CD, Kubernetes, and AWS infrastructure for your startup.",
  keywords: [
    "Hire DevOps Engineer",
    "DevOps Services",
    "Cloud Infrastructure",
    "AWS DevOps",
    "Kubernetes Consulting",
    "CI/CD Pipeline",
    "DevOps for Startups",
    "Managed DevOps",
    "Terraform Consulting",
  ],
  authors: [{ name: "Hire DevOps Expert" }],
  creator: "Hire DevOps Expert",
  publisher: "Hire DevOps Expert",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Hire DevOps Expert | Senior DevOps Engineers for Startups",
    description: "Hire senior DevOps engineers and cloud infrastructure experts. Get production-grade CI/CD, Kubernetes, and AWS infrastructure for your startup.",
    url: "https://hiredevopsexpert.com",
    siteName: "Hire DevOps Expert",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hire DevOps Expert - Senior DevOps Engineers for Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire DevOps Expert | Senior DevOps Engineers for Startups",
    description: "Hire senior DevOps engineers and cloud infrastructure experts for your startup.",
    images: ["/og-image.jpg"],
    creator: "@hiredevopsexpert",
    site: "@hiredevopsexpert",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/icon.png"],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://hiredevopsexpert.com",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "technology",
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1C2B3A",
  colorScheme: "light",
};

// JSON-LD Schema for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Hire DevOps Expert",
  url: "https://hiredevopsexpert.com",
  logo: "https://hiredevopsexpert.com/logo.png",
  description: "Senior DevOps and cloud infrastructure expertise for startups and growing companies.",
  email: "hello@hiredevopsexpert.com",
  telephone: "+1-234-567-890",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [
    "https://linkedin.com/company/hiredevopsexpert",
    "https://twitter.com/hiredevopsexpert",
    "https://github.com/hiredevopsexpert",
    "https://youtube.com/@hiredevopsexpert",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-off font-sans text-ink">
        <Header />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}