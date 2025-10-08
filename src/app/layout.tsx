import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppThemeProvider } from "@/context/ThemeContext";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://snowpeak.ca'),
  title: {
    default: "SnowPeak - Build Beyond the Summit | Web & Mobile Development Canada",
    template: "%s | SnowPeak"
  },
  description: "Professional web development, mobile apps, and browser extensions. Trusted by 10+ Canadian businesses. Free consultation available. Based in Toronto, Ontario.",
  keywords: "web development, mobile apps, browser extensions, maintenance, support, Canada, Toronto, Ontario, SnowPeak, web design, software development",
  authors: [{ name: "SnowPeak" }],
  creator: "SnowPeak",
  publisher: "SnowPeak",
  alternates: {
    canonical: "https://snowpeak.ca"
  },
  icons: {
    icon: [
      { url: "/snowpeak-logo/vector/snowpeak-icon.svg", type: "image/svg+xml" },
      { url: "/snowpeak-logo/vector/snowpeak-icon.png", type: "image/png" },
    ],
    shortcut: "/snowpeak-logo/vector/snowpeak-icon.png",
    apple: "/snowpeak-logo/vector/snowpeak-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://snowpeak.ca",
    title: "SnowPeak - Build Beyond the Summit | Web & Mobile Development Canada",
    description: "Professional web development, mobile apps, and browser extensions. Trusted by 10+ Canadian businesses. Free consultation available.",
    siteName: "SnowPeak",
    images: [
      {
        url: "/snowpeak-logo/cover.png",
        width: 1200,
        height: 630,
        alt: "SnowPeak - Professional Web & Mobile Development Services"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnowPeak - Build Beyond the Summit | Web & Mobile Development Canada",
    description: "Professional web development, mobile apps, and browser extensions. Trusted by 10+ Canadian businesses.",
    creator: "@snowpeak",
    images: ["/snowpeak-logo/cover.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Toronto",
    "geo.position": "43.6532;-79.3832",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SnowPeak",
    "url": "https://snowpeak.ca",
    "logo": "https://snowpeak.ca/snowpeak-logo/vector/default.svg",
    "description": "Professional web development, mobile apps, and browser extensions serving Canadian businesses",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-647-786-2161",
      "contactType": "Customer Service",
      "email": "snowpeak.contact@gmail.com",
      "areaServed": "CA",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/snowpeak",
      "https://twitter.com/snowpeak",
      "https://tiktok.com/@snowpeak",
      "https://instagram.com/snowpeak",
      "https://facebook.com/snowpeak"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SnowPeak",
    "image": "https://snowpeak.ca/snowpeak-logo/cover.png",
    "@id": "https://snowpeak.ca",
    "url": "https://snowpeak.ca",
    "telephone": "+1-647-786-2161",
    "email": "snowpeak.contact@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6532,
      "longitude": -79.3832
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://linkedin.com/company/snowpeak",
      "https://twitter.com/snowpeak"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <AppThemeProvider>
          <a href="#main" className="skip-link">Skip to content</a>
          <Navigation />
          <main id="main">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </AppThemeProvider>
      </body>
    </html>
  );
}
