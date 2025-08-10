import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SnowPeak',
    short_name: 'SnowPeak',
    description: 'Build Beyond the Summit',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#395ECA',
    icons: [
      { src: '/snowpeak-logo/vector/snowpeak-icon.png', sizes: '192x192', type: 'image/png' },
      { src: '/snowpeak-logo/vector/snowpeak-icon.png', sizes: '512x512', type: 'image/png' },
      { src: '/snowpeak-logo/vector/snowpeak-icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}


