import { Metadata } from 'next';
import { SERVICES } from '@/data/constants';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.snow-peak.ca';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find(s => s.id === slug);

  if (!service) {
    return {
      title: 'Service Not Found | SnowPeak',
      description: 'The requested service could not be found.',
    };
  }

  const title = `${service.title} | SnowPeak - Professional Development Services`;
  const description = `${service.description} Starting at ${service.packages[0]?.price}. Serving Toronto and all of Canada. Free consultation available.`;
  const canonicalUrl = `${siteUrl}/services/${slug}`;
  const imageUrl = `${siteUrl}/snowpeak-logo/cover.png`;

  return {
    title,
    description,
    keywords: `${service.title.toLowerCase()}, ${slug}, Toronto, Canada, Ontario, software development, professional services`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${service.title} - SnowPeak Professional Services`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
