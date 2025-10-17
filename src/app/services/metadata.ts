import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services - Web Development, Mobile Apps & More",
  description: "Professional web development, mobile applications, browser extensions, and maintenance services. Serving Toronto and all of Canada. Free consultation available.",
  keywords: "web development services, mobile app development, browser extensions, maintenance support, Toronto, Canada, Ontario, software development",
  alternates: {
    canonical: "https://snow-peak.ca/services"
  },
  openGraph: {
    title: "Services - Web Development, Mobile Apps & More | SnowPeak",
    description: "Professional web development, mobile applications, browser extensions, and maintenance services in Canada.",
    url: "https://snow-peak.ca/services",
    type: "website",
    images: [
      {
        url: "/snowpeak-logo/cover.png",
        width: 1200,
        height: 630,
        alt: "SnowPeak Services - Professional Development Solutions"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Web Development, Mobile Apps & More | SnowPeak",
    description: "Professional web development, mobile applications, browser extensions, and maintenance services in Canada.",
    images: ["/snowpeak-logo/cover.png"],
  },
};
