import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "B&B Global Services | Technology Consulting, App Development & Managed IT Services",
    template: "%s | B&B Global Services",
  },
  description: siteConfig.description,
  keywords: [
    "technology consulting company",
    "IT consulting services",
    "cloud consulting",
    "DevOps consulting",
    "DevSecOps consulting",
    "managed IT services",
    "application development company",
    "business continuity consulting",
    "disaster recovery consulting",
    "fractional CTO services",
    "AI consulting services",
    "digital transformation consulting",
    "global technology consulting",
    "global IT services company",
    "remote IT consulting",
    "nearshore software development",
    "offshore managed services",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title:
      "B&B Global Services | Technology Consulting, App Development & Managed IT Services",
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "B&B Global Services",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

// Schema.org ProfessionalService / LocalBusiness markup for SEO.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.positioning,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  knowsAbout: [
    "Cloud Computing",
    "DevOps",
    "Cybersecurity",
    "Artificial Intelligence",
    "Managed IT Services",
    "Business Continuity",
  ],
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  serviceType: [
    "Technology Consulting",
    "Application Development",
    "Cloud & DevOps",
    "Cybersecurity",
    "Managed IT Services",
    "Business Continuity & Disaster Recovery",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "NH",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
