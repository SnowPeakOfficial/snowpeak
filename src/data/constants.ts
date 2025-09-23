// SnowPeak Business Data
export const COMPANY_INFO = {
  name: 'SnowPeak',
  tagline: 'Build Beyond the Summit',
  description: 'We create exceptional websites, web applications, mobile apps, and browser extensions while providing comprehensive maintenance and support to help businesses reach new heights.',
  email: 'snowpeak.contact@gmail.com',
  phone: '+1 (647) 786-2161',
  location: 'Canada',
  founded: '2025',
};

export const SERVICES = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Professional websites that establish credibility and drive business growth. From simple business sites to complex multi-page platforms.',
    packages: [
      {
        name: 'Basic',
        price: 'Starting at $750',
        timeline: '1-2 weeks',
        features: [
          'Up to 3 pages (Home, About, Contact)',
          'Responsive layout',
          'Custom design with basic theming',
          'Contact form integration',
          'Basic SEO (meta tags, descriptions)',
          'One revision round'
        ],
        popular: false
      },
      {
        name: 'Pro',
        price: 'Starting at $2,500',
        timeline: '3+ weeks',
        features: [
          '5-10+ custom designed pages',
          'Tailored branding with UI/UX design',
          'CMS integration if needed',
          'Performance optimizations',
          'Accessibility considerations',
          'Basic animations/interactions',
          'Advanced SEO',
          'Multiple revisions and handoff meeting',
          'Maintenance documentation'
        ],
        popular: true
      }
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'WordPress'],
    icon: 'Globe',
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    description: 'Powerful, scalable web applications for SaaS platforms, business tools, and data-driven solutions that grow with your business.',
    packages: [
      {
        name: 'Basic',
        price: 'Starting at $3,000',
        timeline: '3+ weeks',
        features: [
          'Core app with 1-2 key features',
          'Frontend/backend setup',
          'Basic database',
          'Responsive layout',
          'Custom design with basic theming',
          'Contact form integration',
          'Basic SEO (meta tags, descriptions)',
          'Deployed to Vercel/Netlify/Render',
          'One revision round'
        ],
        popular: false
      },
      {
        name: 'Pro',
        price: 'Starting at $8,000',
        timeline: '6+ weeks',
        features: [
          'Core app with 3-5 key features',
          'Frontend/backend setup',
          'Tailored branding with UI/UX design',
          'Admin panel with CMS integration',
          'Performance optimizations',
          'Accessibility considerations',
          'Basic animations/interactions',
          'Advanced SEO',
          'Full database schema with models and APIs',
          'Secure authentication with validation',
          'Testing (unit/integration tests)',
          'Basic CI/CD setup',
          'Multiple revisions and handoff meeting',
          'Maintenance documentation'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Starting at $30,000',
        timeline: '3+ months',
        features: [
          'Complex real-time, data-heavy systems',
          'Industry standards compliance',
          'Advanced microservices infrastructure',
          'Enterprise-grade branding with design system',
          'Admin panel with CMS integration',
          'Performance optimizations',
          'Accessibility considerations',
          'Complex animations/interactions',
          'Advanced SEO',
          'Full database schema with models and APIs',
          'Custom integrations (APIs, payments, 3rd party)',
          'CI/CD setup, containerization, cloud hosting',
          'Security compliance, logging, monitoring',
          'Comprehensive testing suites',
          'Ongoing collaboration/team scaling',
          'Multiple revisions and knowledge transfer',
          'Maintenance documentation'
        ],
        popular: false
      }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Java/Spring Boot', '.NET/C#', 'PostgreSQL', 'MongoDB', 'AWS'],
    icon: 'Monitor',
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps that deliver exceptional user experiences on iOS and Android, built with modern frameworks.',
    packages: [
      {
        name: 'Basic',
        price: 'Starting at $5,000',
        timeline: '4+ weeks',
        features: [
          'Cross-platform app with 1-2 features',
          'Backend integration',
          'Basic database',
          'Responsive layout',
          'Custom design with basic theming',
          'Contact form integration',
          'App store submission support'
        ],
        popular: false
      },
      {
        name: 'Pro',
        price: 'Starting at $10,000',
        timeline: '8+ weeks',
        features: [
          'Cross-platform app with advanced features',
          'Push notifications, camera, file upload, maps',
          'Tailored branding with UI/UX design',
          'Performance optimizations',
          'Accessibility considerations',
          'Basic animations/interactions',
          'Full database schema with models and APIs',
          'Secure authentication with validation',
          'Admin panel with CMS integration',
          'Testing (unit/integration tests)',
          'Basic CI/CD setup',
          'Multiple revisions and handoff meeting',
          'Maintenance documentation'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Starting at $40,000',
        timeline: '4+ months',
        features: [
          'Complex native/hybrid app with real-time features',
          'Payments, analytics, dashboards',
          'Industry standards compliance',
          'Enterprise-grade branding with design system',
          'Admin panel with CMS integration',
          'Performance optimizations',
          'Accessibility considerations',
          'Complex animations/interactions',
          'Full database schema with models and APIs',
          'Custom integrations (APIs, payments, 3rd party)',
          'CI/CD setup, containerization, cloud hosting',
          'Security compliance, logging, monitoring',
          'Comprehensive testing suites',
          'Ongoing collaboration/team scaling',
          'Multiple revisions and knowledge transfer',
          'Maintenance documentation'
        ],
        popular: false
      }
    ],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Expo', 'Firebase', 'AWS'],
    icon: 'Smartphone',
  },
  {
    id: 'browser-extensions',
    title: 'Browser Extensions',
    description: 'Powerful browser extensions that enhance productivity and user engagement across Chrome, Firefox, Edge, and other modern browsers.',
    packages: [
      {
        name: 'Basic',
        price: 'Starting at $3,000',
        timeline: '3+ weeks',
        features: [
          'One core feature',
          'Chrome compatible only',
          'Local storage usage',
          'Basic branding and deployment'
        ],
        popular: false
      },
      {
        name: 'Pro',
        price: 'Starting at $8,000',
        timeline: '6+ weeks',
        features: [
          'Multiple features (background worker, API usage)',
          'Dynamic content injection',
          'Cross-browser compatibility (Chrome, Firefox, Edge, Brave)',
          'Syncing, indexed DB, user preferences',
          'Notifications, context menus, advanced UI',
          'Web store submission and rollout strategy',
          'Maintenance documentation'
        ],
        popular: true
      }
    ],
    technologies: ['TypeScript', 'JavaScript', 'WebExtension APIs', 'Manifest V3', 'Chrome APIs'],
    icon: 'Puzzle',
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    description: 'Comprehensive ongoing support to keep your digital assets secure, updated, and performing at their best with dedicated developer time.',
    packages: [
      {
        name: 'Basic',
        price: 'Starting at $300/month',
        timeline: 'Ongoing',
        features: [
          'Up to 3 hours/month dev work',
          'Uptime monitoring',
          'Minor content updates',
          'Priority response within 3 days'
        ],
        popular: false
      },
      {
        name: 'Pro',
        price: 'Starting at $800/month',
        timeline: 'Ongoing',
        features: [
          'Up to 10 hours/month dev work',
          'Analytics monitoring and optimizations',
          'Feature tweaks and UI improvements',
          'Performance enhancements',
          'Priority response within 24-48 hours'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Starting at $3,000/month',
        timeline: 'Ongoing',
        features: [
          '30 hours/month dev work',
          'Dedicated dev availability',
          'Scaling, infrastructure support',
          'Analytics monitoring and optimizations',
          'Feature tweaks and UI improvements',
          'Performance enhancements',
          'Slack communication access',
          'Custom SLA'
        ],
        popular: false
      }
    ],
    technologies: ['Docker', 'AWS', 'GitHub Actions', 'Monitoring Tools', 'Security Audits'],
    icon: 'Settings',
  },
];

export const ADDITIONAL_SERVICES = [
  {
    id: 'branding-logo-design',
    title: 'Branding/Logo Design',
    description: 'Professional brand identity and logo design that captures your business essence and creates lasting impressions.',
    price: 'Starting at $500',
    timeline: '1-2 weeks',
    features: [
      'Custom logo design',
      'Brand color palette',
      'Typography selection',
      'Brand guidelines document',
      'Multiple format exports'
    ],
    icon: 'Palette',
  },
  {
    id: 'design-system-ui-kit',
    title: 'Design System/UI Kit',
    description: 'Comprehensive design systems and UI kits that ensure consistency across all your digital touchpoints.',
    price: 'Starting at $700',
    timeline: '2-3 weeks',
    features: [
      'Component library',
      'Style guide documentation',
      'Color and typography systems',
      'Icon set creation',
      'Responsive design patterns'
    ],
    icon: 'DesignServices',
  },
  {
    id: 'content-creation-copywriting',
    title: 'Content Creation/Copywriting',
    description: 'Engaging, SEO-optimized content that speaks to your audience and drives conversions.',
    price: 'Starting at $200/page',
    timeline: '3-5 days per page',
    features: [
      'SEO-optimized content',
      'Brand voice alignment',
      'Call-to-action optimization',
      'Keyword research',
      'Content strategy consultation'
    ],
    icon: 'Edit',
  },
  {
    id: 'seo-optimization-package',
    title: 'SEO Optimization Package',
    description: 'Comprehensive SEO audit and optimization to improve your search engine rankings and organic traffic.',
    price: 'Starting at $500',
    timeline: '1-2 weeks',
    features: [
      'Technical SEO audit',
      'Keyword research and optimization',
      'Meta tags optimization',
      'Site speed improvements',
      'Search console setup'
    ],
    icon: 'TrendingUp',
  },
  {
    id: 'accessibility-audit',
    title: 'Accessibility Audit',
    description: 'Thorough accessibility assessment and improvements to ensure your site is usable by everyone.',
    price: 'Starting at $1,000',
    timeline: '1-2 weeks',
    features: [
      'WCAG compliance audit',
      'Screen reader testing',
      'Keyboard navigation testing',
      'Color contrast analysis',
      'Accessibility improvements'
    ],
    icon: 'Accessibility',
  },
  {
    id: 'email-marketing-setup',
    title: 'Email Marketing Setup',
    description: 'Complete email marketing system setup with templates, automation, and integration with your website.',
    price: 'Starting at $300',
    timeline: '3-5 days',
    features: [
      'Email platform setup',
      'Custom email templates',
      'Automation workflows',
      'List segmentation',
      'Analytics integration'
    ],
    icon: 'Email',
  },
  {
    id: 'multilingual-support',
    title: 'Multilingual Support Setup',
    description: 'Complete multilingual website setup to reach global audiences with professional translation management.',
    price: 'Starting at $400',
    timeline: '1 week',
    features: [
      'Multi-language framework setup',
      'Translation management system',
      'Language switcher implementation',
      'SEO optimization for multiple languages',
      'Cultural adaptation guidance'
    ],
    icon: 'Language',
  },
  {
    id: 'analytics-integration',
    title: 'Analytics Integration',
    description: 'Comprehensive analytics setup to track user behavior, conversions, and business metrics.',
    price: 'Starting at $200',
    timeline: '2-3 days',
    features: [
      'Google Analytics 4 setup',
      'Conversion tracking',
      'Custom dashboard creation',
      'Goal and event configuration',
      'Monthly reporting setup'
    ],
    icon: 'Analytics',
  },
];


export const PORTFOLIO_PROJECTS = [
  {
    id: 'landtrip',
    title: 'LandTrip',
    type: 'Web Application',
    description: 'Specialized travel booking platform for ground transportation routes with one-click booking and real-time schedules.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Transit APIs', 'Stripe'],
    features: [
      'Route planning with transit options',
      'One-click booking system',
      'Real-time transit schedules',
      'Multi-modal transportation',
      'Trip management dashboard',
      'Carbon footprint tracking'
    ],
    status: 'Live',
    users: '1,200+',
    platforms: ['Web', 'Mobile Responsive'],
    image: '/images/portfolio/landtrip-hero.jpg',
    liveUrl: 'https://landtrip.com',
    featured: true,
    metrics: {
      monthlyBookings: {
        value: '500+',
        label: 'Monthly Bookings',
        tooltip: 'Monthly transit route bookings through the platform',
        type: 'transactions'
      },
      routesCovered: {
        value: '150+',
        label: 'Routes Available',
        tooltip: 'Number of transit routes available for booking',
        type: 'coverage'
      },
      userSatisfaction: {
        value: '4.5/5',
        label: 'User Rating',
        tooltip: 'Average user satisfaction rating for booking experience',
        type: 'rating'
      }
    },
    challenge: 'Travelers needed a simple way to book ground transportation routes without the complexity of flight-based travel platforms.',
    solution: 'Developed a specialized platform focusing exclusively on ground transit with intuitive one-click booking.',
    outcome: 'Processed 500+ monthly bookings with 4.5/5 user satisfaction and expanding route network.'
  },
  {
    id: 'ilmtab',
    title: 'IlmTab',
    type: 'Browser Extension',
    description: 'Spiritual productivity browser extension integrating Islamic practices into daily browsing with prayer reminders and Quranic verses.',
    technologies: ['TypeScript', 'React', 'Chrome APIs', 'Islamic APIs'],
    features: [
      'Daily Quran verses with translations',
      'Authentic Hadith collections',
      'Prayer times with notifications',
      'Islamic calendar integration',
      '99 Names of Allah',
    ],
    status: 'Live',
    users: '20+',
    platforms: ['Chrome', 'Firefox', 'Edge'],
    image: '/images/portfolio/ilmtab-hero.jpg',
    liveUrl: 'https://ilmtab.vercel.app/',
    featured: true,
    metrics: {
      activeUsers: {
        value: '150+',
        label: 'Active Users',
        tooltip: 'Monthly active users across all browser platforms',
        type: 'users'
      },
      rating: {
        value: '4.8/5',
        label: 'User Rating',
        tooltip: 'Average rating from Chrome Web Store and Firefox Add-ons',
        type: 'rating'
      },
      downloads: {
        value: '500+',
        label: 'Downloads',
        tooltip: 'Total downloads across Chrome, Firefox, and Edge stores',
        type: 'downloads'
      }
    },
    challenge: 'Creating a spiritual productivity tool that seamlessly integrates Islamic practices into daily browsing.',
    solution: 'Built a comprehensive extension with prayer reminders, Quranic verses, and Islamic calendar integration.',
    outcome: 'Positive user feedback with 4.8/5 rating and growing user base across multiple browsers.'
  },
  {
    id: 'aqualog',
    title: 'AquaLog',
    type: 'Mobile Application',
    description: 'Comprehensive aquarium management app for tracking water chemistry and livestock health across multiple tanks.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Expo'],
    features: [
      'Multiple tank tracking and management',
      'Livestock inventory with species database',
      'Water parameter logging and alerts',
      'Maintenance scheduling and reminders',
      'Photo gallery for tank progression',
      'Community sharing and tips'
    ],
    status: 'Live',
    users: '1,500+',
    platforms: ['iOS', 'Android'],
    image: '/images/portfolio/aqualog-hero.jpg',
    liveUrl: 'https://aqualog-app.com',
    featured: true,
    metrics: {
      downloads: {
        value: '3K+',
        label: 'Downloads',
        tooltip: 'Total app downloads across iOS and Android app stores',
        type: 'downloads'
      },
      retention: {
        value: '75%',
        label: 'User Retention',
        tooltip: '30-day user retention rate - users who continue tracking their aquariums',
        type: 'retention'
      },
      rating: {
        value: '4.7/5',
        label: 'App Rating',
        tooltip: 'Average rating across iOS App Store and Google Play Store',
        type: 'rating'
      }
    },
    challenge: 'Aquarium enthusiasts needed a comprehensive tool to track complex water chemistry and livestock health across multiple tanks.',
    solution: 'Created an intuitive mobile app with automated reminders, parameter tracking, and a comprehensive species database.',
    outcome: 'Helped over 1,500 aquarists maintain healthier tanks with 75% user retention and 4.7/5 rating.'
  },
  {
    id: 'colormebrie',
    title: 'ColorMeBrie',
    type: 'Website',
    description: 'Professional e-commerce platform for selling digital coloring books with community features and social integration.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Sanity CMS'],
    features: [
      'E-commerce shop for coloring books',
      'Digital download system',
      'Community gallery and sharing',
      'Artist blog and tutorials',
      'Contact and commission forms',
      'Social media integration'
    ],
    status: 'Live',
    users: '800+',
    platforms: ['Web', 'Mobile Responsive'],
    image: '/images/portfolio/colormebrie-hero.jpg',
    liveUrl: 'https://colormebrie.com',
    featured: false,
    metrics: {
      monthlySales: {
        value: '$2.5K+',
        label: 'Monthly Sales',
        tooltip: 'Monthly revenue from coloring book sales and commissions',
        type: 'revenue'
      },
      conversionRate: {
        value: '6.2%',
        label: 'Conversion Rate',
        tooltip: 'Percentage of visitors who purchase coloring books',
        type: 'performance'
      },
      communityMembers: {
        value: '400+',
        label: 'Community Members',
        tooltip: 'Active community members sharing and engaging with content',
        type: 'users'
      }
    },
    challenge: 'Content creator needed a professional platform to sell digital coloring books and build a creative community.',
    solution: 'Built an engaging e-commerce website with community features, digital downloads, and social integration.',
    outcome: 'Generated $2.5K+ monthly sales with 6.2% conversion rate and growing community of 400+ members.'
  },
  {
    id: 'islamic-guidance',
    title: 'Islamic Guidance',
    type: 'Web Application',
    description: 'Comprehensive spiritual platform providing Muslims with daily Islamic guidance and Quranic study tools.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Islamic APIs'],
    features: [
      'Daily Quran verses with multiple translations',
      'Hadith collections and explanations',
      'Islamic calendar and important dates',
      'Prayer time calculations',
      'Bookmarking and personal notes',
      'Search functionality across content'
    ],
    status: 'Live',
    users: '2,000+',
    platforms: ['Web', 'Mobile Responsive'],
    image: '/images/portfolio/islamic-guidance-hero.jpg',
    liveUrl: 'https://islamic-guidance.com',
    featured: true,
    metrics: {
      activeUsers: {
        value: '2K+',
        label: 'Active Users',
        tooltip: 'Monthly active users seeking daily Islamic guidance',
        type: 'users'
      },
      dailyEngagement: {
        value: '85%',
        label: 'Daily Engagement',
        tooltip: 'Percentage of users who visit daily for spiritual content',
        type: 'engagement'
      },
      contentViews: {
        value: '50K+',
        label: 'Monthly Views',
        tooltip: 'Monthly verse and content views across the platform',
        type: 'traffic'
      }
    },
    challenge: 'Muslims needed a reliable, accessible platform for daily spiritual guidance and Quranic study.',
    solution: 'Built a comprehensive web application with authentic Islamic content, multiple translations, and personalization features.',
    outcome: 'Serving 2,000+ users with 85% daily engagement rate and positive community feedback.'
  },
  {
    id: 'micahs-music',
    title: 'Micah\'s Music',
    type: 'Website',
    description: 'Elegant professional website for music teacher showcasing talents with integrated booking system for lessons and performances.',
    technologies: ['Next.js', 'TypeScript', 'Sanity CMS', 'Calendly'],
    features: [
      'Music portfolio and audio samples',
      'Teaching service descriptions',
      'Performance booking system',
      'Event calendar and availability',
      'Student testimonials',
      'Contact and inquiry forms'
    ],
    status: 'Live',
    users: '300+',
    platforms: ['Web', 'Mobile Responsive'],
    image: '/images/portfolio/micahs-music-hero.jpg',
    liveUrl: 'https://micahsmusic.com',
    featured: false,
    metrics: {
      monthlyBookings: {
        value: '25+',
        label: 'Monthly Bookings',
        tooltip: 'Monthly performance and lesson bookings through the website',
        type: 'business'
      },
      studentInquiries: {
        value: '40+',
        label: 'Student Inquiries',
        tooltip: 'Monthly inquiries for music lessons and teaching services',
        type: 'leads'
      },
      portfolioViews: {
        value: '1.2K+',
        label: 'Portfolio Views',
        tooltip: 'Monthly views of music portfolio and audio samples',
        type: 'traffic'
      }
    },
    challenge: 'Music teacher needed a professional online presence to showcase talents and streamline booking for lessons and performances.',
    solution: 'Created an elegant website with integrated booking system, audio portfolio, and clear service descriptions.',
    outcome: 'Increased bookings by 60% with 25+ monthly bookings and improved professional credibility.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    role: 'CEO',
    content: 'SnowPeak delivered an exceptional website that perfectly captures our brand. Their attention to detail and modern approach exceeded our expectations.',
    rating: 5,
    image: '/images/testimonials/sarah.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Digital Solutions',
    role: 'CTO',
    content: 'The web application SnowPeak built for us has streamlined our operations significantly. Professional, reliable, and innovative.',
    rating: 5,
    image: '/images/testimonials/michael.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Creative Agency',
    role: 'Creative Director',
    content: 'Outstanding mobile app development. SnowPeak understood our vision and delivered a product that our users love.',
    rating: 5,
    image: '/images/testimonials/emily.jpg',
  },
];

export const COMPANY_STATS = [
  {
    label: 'Projects Completed',
    value: '10+',
    icon: 'CheckCircle',
  },
  {
    label: 'Happy Clients',
    value: '10+',
    icon: 'Users',
  },
  {
    label: 'Years Experience',
    value: '5+',
    icon: 'Calendar',
  },
  {
    label: 'Technologies',
    value: '20+',
    icon: 'Code',
  },
];

export const PROCESS_STEPS = [
  {
    id: 'discovery',
    step: 1,
    title: 'Discovery & Planning',
    timeline: '1–3 days',
    description: 'We start with understanding your vision and requirements',
    features: [
      'Free discovery call',
      'Define goals and technical needs',
      'Project roadmap and timeline',
      'Budget clarity and expectations',
    ],
    icon: 'Search',
  },
  {
    id: 'development',
    step: 2,
    title: 'Design & Development',
    timeline: '2–6 weeks',
    description: 'Bringing your vision to life with modern technology',
    features: [
      'Interactive wireframes and UI mockups',
      'Agile sprints with milestone reviews',
      'Frontend and backend implementation',
      'Weekly progress check-ins',
    ],
    icon: 'Code',
  },
  {
    id: 'testing',
    step: 3,
    title: 'Testing & Refinement',
    timeline: '1–2 weeks',
    description: 'Ensuring quality and performance across all devices',
    features: [
      'Cross-device and browser testing',
      'Performance tuning and load testing',
      'Bug fixing and polish',
      'Final review with client',
    ],
    icon: 'BugReport',
  },
  {
    id: 'launch',
    step: 4,
    title: 'Launch & Support',
    timeline: '1–3 days',
    description: 'Going live and ensuring your continued success',
    features: [
      'Seamless deployment and DNS setup',
      'Handoff training or walkthrough',
      'Optional care plan or retainer',
      'Analytics and monitoring setup',
    ],
    icon: 'Rocket',
  },
];

export const CONTACT_INFO = {
  email: COMPANY_INFO.email,
  phone: COMPANY_INFO.phone,
  address: 'Toronto, Ontario, Canada',
  hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
  calendlyUrl: 'https://calendly.com/snowpeak-contact/30min',
  social: {
    linkedin: 'https://linkedin.com/company/snowpeak',
    github: 'https://github.com/snowpeak',
    twitter: 'https://twitter.com/snowpeak',
  },
};

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Animation and UI constants
export const ANIMATION_DURATION = 300;
export const SCROLL_OFFSET = 80;
