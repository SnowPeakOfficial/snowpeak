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
  title: "SnowPeak - Build Beyond the Summit",
  description: "We create exceptional websites, web applications, mobile apps, and browser extensions while providing comprehensive maintenance and support to help businesses reach new heights.",
  keywords: "web development, mobile apps, browser extensions, maintenance, support, Canada, SnowPeak",
  authors: [{ name: "SnowPeak" }],
  creator: "SnowPeak",
  publisher: "SnowPeak",
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
    title: "SnowPeak - Build Beyond the Summit",
    description: "We create exceptional websites, web applications, mobile apps, and browser extensions while providing comprehensive maintenance and support to help businesses reach new heights.",
    siteName: "SnowPeak",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnowPeak - Build Beyond the Summit",
    description: "We create exceptional websites, web applications, mobile apps, and browser extensions while providing comprehensive maintenance and support to help businesses reach new heights.",
    creator: "@snowpeak",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
