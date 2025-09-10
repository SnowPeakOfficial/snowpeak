'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  useTheme,
  Breadcrumbs,
  Link as MuiLink,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
} from '@mui/material';
import {
  ArrowForward,
  ExpandMore,
  CheckCircle,
  Language as GlobalIcon,
  Monitor,
  Smartphone,
  Extension as PuzzleIcon,
  Settings,
  ViewQuilt as LayoutIcon,
  Home,
  TrendingUp,
  Security,
  Speed,
  Devices,
  Code,
  Analytics,
  CloudDone,
  AutoFixHigh,
  Timeline,
} from '@mui/icons-material';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/data/constants';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

const ServicePage: React.FC<ServicePageProps> = ({ params }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [selectedPackageIndex, setSelectedPackageIndex] = useState<number>(0);
  
  // Find the service by slug
  const service = SERVICES.find(s => s.id === params.slug);
  
  if (!service) {
    notFound();
  }

  // Initialize selected package index to popular package or first package
  React.useEffect(() => {
    const popularIndex = service.packages.findIndex(pkg => pkg.popular);
    setSelectedPackageIndex(popularIndex !== -1 ? popularIndex : 0);
  }, [service.packages]);

  const getServiceIcon = (iconName: string) => {
    const iconProps = {
      sx: {
        fontSize: '4rem',
        color: 'primary.main',
        mb: 2,
      },
    };

    switch (iconName) {
      case 'Layout':
        return <LayoutIcon {...iconProps} />;
      case 'Globe':
        return <GlobalIcon {...iconProps} />;
      case 'Monitor':
        return <Monitor {...iconProps} />;
      case 'Smartphone':
        return <Smartphone {...iconProps} />;
      case 'Puzzle':
        return <PuzzleIcon {...iconProps} />;
      case 'Settings':
        return <Settings {...iconProps} />;
      default:
        return <GlobalIcon {...iconProps} />;
    }
  };

  const getServiceFeatures = (serviceId: string) => {
    const features: Record<string, Array<{
      title: string;
      description: string;
      icon: React.ReactNode;
      details: string;
    }>> = {
  'web-development': [
    {
      title: 'Custom Website Design',
      description: 'Modern, visually appealing websites tailored to your brand and business goals',
      icon: <Devices sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'We design websites that are responsive, mobile-friendly, and visually aligned with your brand. Whether you need a simple landing page or a multi-page business site, your website will look professional and attract customers.'
    },
    {
      title: 'SEO & Visibility',
      description: 'Improve your search rankings and reach your target audience',
      icon: <TrendingUp sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'Every website is optimized with proper meta tags, descriptions, and best SEO practices to help your business rank higher on search engines and gain organic traffic.'
    },
    {
      title: 'Fast & Optimized Performance',
      description: 'Websites built for speed and seamless user experience',
      icon: <Speed sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'We optimize images, scripts, and hosting to ensure fast loading times and smooth navigation, reducing bounce rates and keeping visitors engaged.'
    },
    {
      title: 'Content Management & Updates',
      description: 'Easily update your content without technical skills',
      icon: <AutoFixHigh sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'Our websites come with intuitive content management systems, allowing you to add new pages, edit content, and manage blog posts with ease.'
    }
  ],

  'web-applications': [
    {
      title: 'Scalable & Robust Architecture',
      description: 'Web applications built to handle growth and complexity',
      icon: <CloudDone sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'Our apps are designed with modern, scalable architectures that adapt as your business grows, ensuring consistent performance even with increasing users and data.'
    },
    {
      title: 'Interactive & Real-time Features',
      description: 'Engage users with dynamic, responsive interactions',
      icon: <Timeline sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'We integrate real-time updates, live collaboration tools, notifications, and interactive dashboards to deliver a highly engaging experience for your users.'
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'Keep your data safe with industry-standard security',
      icon: <Security sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'Your application is protected with secure authentication, encrypted data transfer, input validation, and regular security audits to prevent vulnerabilities.'
    },
    {
      title: 'Data & Analytics Integration',
      description: 'Track performance and make informed decisions',
      icon: <Analytics sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'We include analytics and monitoring tools that provide insights on user behavior, app performance, and business metrics, enabling data-driven improvements.'
    }
  ],

  'mobile-applications': [
    {
      title: 'Cross-Platform Mobile Apps',
      description: 'One app that works seamlessly on iOS and Android',
      icon: <Devices sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'Using React Native or Flutter, we build apps that run smoothly on both platforms while providing a native-like experience, saving time and development cost.'
    },
    {
      title: 'High-Performance & Smooth UX',
      description: 'Fast, responsive apps that delight users',
      icon: <Speed sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'Our mobile apps are optimized for speed, responsive layouts, and smooth animations, ensuring users enjoy a seamless and engaging experience.'
    },
    {
      title: 'Offline & Reliable Functionality',
      description: 'Works even without an internet connection',
      icon: <CloudDone sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'We implement offline storage, caching, and background sync so your users can access core features even when connectivity is limited.'
    },
    {
      title: 'App Store Deployment',
      description: 'Optimized submission and visibility for app stores',
      icon: <TrendingUp sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'We handle the entire app store submission process, including metadata, screenshots, and compliance checks, helping your app reach your audience efficiently.'
    }
  ],

  'browser-extensions': [
    {
      title: 'Cross-Browser Compatibility',
      description: 'Extensions that work on Chrome, Firefox, Edge, and more',
      icon: <GlobalIcon sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'We develop extensions that work reliably across all major browsers, ensuring your users have the same seamless experience regardless of their preferred platform.'
    },
    {
      title: 'Boost Productivity & Engagement',
      description: 'Tools to automate tasks and enhance workflows',
      icon: <AutoFixHigh sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'Extensions can automate repetitive tasks, provide quick access to important actions, and improve overall productivity for your users.'
    },
    {
      title: 'Secure & Safe Integration',
      description: 'Minimal permissions and data protection',
      icon: <Security sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'We ensure secure handling of user data and safe interaction with websites, following best practices for privacy and browser security.'
    },
    {
      title: 'Distribution & Updates',
      description: 'Smooth deployment to extension stores',
      icon: <CloudDone sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'We manage store submissions, approvals, and update rollouts, ensuring your extension reaches users quickly and stays up-to-date.'
    }
  ],

  'maintenance-support': [
    {
      title: 'Proactive Monitoring',
      description: 'Track uptime, performance, and potential issues 24/7',
      icon: <Analytics sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'We continuously monitor your website or app to detect problems before they affect users, ensuring reliability and stability.'
    },
    {
      title: 'Security & Updates',
      description: 'Keep your digital assets safe and up-to-date',
      icon: <Security sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'Our maintenance plans include timely security patches, vulnerability fixes, and software updates to protect your platform.'
    },
    {
      title: 'Performance Optimization',
      description: 'Maintain fast load times and smooth operation',
      icon: <Speed sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'We regularly optimize code, assets, and infrastructure to ensure your website or app runs efficiently and delivers a great user experience.'
    },
    {
      title: 'Ongoing Feature Support',
      description: 'Continuous improvements and new functionality',
      icon: <Code sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      details: 'We help implement new features, tweak existing functionality, and ensure your digital product evolves with your business needs.'
    }
  ]
};
    
    return features[serviceId] || [];
  };

  const getServiceProcess = (serviceId: string) => {
    const processes: Record<string, Array<{
      step: number;
      title: string;
      description: string;
    }>> = {
  'web-development': [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We analyze your business goals, target audience, and technical requirements to create a detailed roadmap that ensures your website aligns with your brand and objectives.'
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes for your review, visualizing the look, feel, and user experience of your website before development.'
    },
    {
      step: 3,
      title: 'Build & Quality Assurance',
      description: 'Develop a fully responsive, fast, and secure website using modern technologies, with rigorous testing across devices and browsers to guarantee optimal performance.'
    },
    {
      step: 4,
      title: 'Launch & Optimization',
      description: 'Deploy your website with SEO setup, analytics integration, and performance optimizations, ensuring a smooth launch and measurable results.'
    }
  ],
  'web-applications': [
    {
      step: 1,
      title: 'Requirements Analysis',
      description: 'Deep dive into your business processes, user workflows, and technical needs to design a solution that effectively solves your challenges.'
    },
    {
      step: 2,
      title: 'Architecture & System Design',
      description: 'Plan scalable, maintainable, and secure application architecture, database structure, and system integrations for long-term growth and reliability.'
    },
    {
      step: 3,
      title: 'Agile Development & Iteration',
      description: 'Build your application in iterative sprints with regular demos, feedback, and refinements to ensure it meets your goals and exceeds expectations.'
    },
    {
      step: 4,
      title: 'Deployment & Scaling',
      description: 'Launch your application with robust monitoring, automated backups, and scalable infrastructure to support growth and ensure uninterrupted service.'
    }
  ],
  'mobile-applications': [
    {
      step: 1,
      title: 'Platform Strategy',
      description: 'Determine the optimal approach for iOS, Android, or cross-platform solutions, defining core features and user experience to maximize reach and engagement.'
    },
    {
      step: 2,
      title: 'UI/UX Design',
      description: 'Design intuitive, platform-specific interfaces that follow best practices and guidelines for an engaging, seamless mobile experience.'
    },
    {
      step: 3,
      title: 'Cross-Platform Development',
      description: 'Develop your app using React Native or Flutter to deliver a high-performance, consistent experience across devices while optimizing development efficiency.'
    },
    {
      step: 4,
      title: 'App Store Submission & Optimization',
      description: 'Handle the complete app store submission process, including metadata, screenshots, review management, and optimization for maximum visibility and downloads.'
    }
  ],
  'browser-extensions': [
    {
      step: 1,
      title: 'Use Case Analysis',
      description: 'Understand your users’ workflows and goals to identify opportunities for productivity enhancements and automated solutions.'
    },
    {
      step: 2,
      title: 'Extension Architecture',
      description: 'Design the extension structure, permissions, and integration points for secure, reliable, and maintainable functionality across browsers.'
    },
    {
      step: 3,
      title: 'Development & Testing',
      description: 'Build your extension with robust features and test it across multiple browsers, ensuring compatibility, security, and smooth performance.'
    },
    {
      step: 4,
      title: 'Store Distribution & Launch',
      description: 'Publish your extension to browser stores, manage the review process, and optimize listings for maximum reach and user adoption.'
    }
  ],
  'maintenance-support': [
    {
      step: 1,
      title: 'System Assessment & Audit',
      description: 'Conduct a thorough evaluation of your digital assets to identify optimization opportunities, security risks, and potential issues.'
    },
    {
      step: 2,
      title: 'Monitoring & Alerts Setup',
      description: 'Implement comprehensive uptime, performance, and security monitoring with instant alerts to proactively address issues before they impact users.'
    },
    {
      step: 3,
      title: 'Scheduled Maintenance',
      description: 'Establish regular routines including software updates, backups, performance optimization, and security patches to keep your systems running smoothly.'
    },
    {
      step: 4,
      title: 'Ongoing Support & Enhancements',
      description: 'Provide continuous developer support for fixes, updates, and feature additions, ensuring your digital assets evolve with your business needs.'
    }
  ]
};

    
    return processes[serviceId] || [];
  };

  const getServiceFAQs = (serviceId: string) => {
    const faqs: Record<string, Array<{question: string; answer: string}>> = {
      'web-development': [
        {
          question: 'What\'s included in a basic website package?',
          answer: 'Our basic package includes up to 3 pages (Home, About, Contact), responsive design, contact form integration, basic SEO optimization, and one revision round. Perfect for small businesses getting started online.'
        },
        {
          question: 'How long does website development take?',
          answer: 'Basic websites typically take 1-2 weeks, while professional websites with custom design and CMS integration take 3+ weeks. Timeline depends on content readiness and revision cycles.'
        },
        {
          question: 'Do you provide content management systems?',
          answer: 'Yes! Our Pro package includes CMS integration, allowing you to easily update content, add blog posts, and manage your website without technical knowledge.'
        },
        {
          question: 'Will my website work on mobile devices?',
          answer: 'Absolutely! All our websites are built with responsive design, ensuring they look and function perfectly on desktops, tablets, and smartphones.'
        },
        {
          question: 'What happens after my website is launched?',
          answer: 'We provide deployment, DNS setup, and a handoff meeting. We also offer optional maintenance plans to keep your website secure and updated.'
        }
      ],
      'web-applications': [
        {
          question: 'What\'s the difference between a website and web application?',
          answer: 'Web applications are interactive platforms with user accounts, databases, and complex functionality like dashboards, real-time features, and data processing. Websites are primarily informational.'
        },
        {
          question: 'How scalable are your web applications?',
          answer: 'We build applications with scalability in mind, using modern architectures, optimized databases, and cloud infrastructure that can handle growing user bases and increased traffic.'
        },
        {
          question: 'Do you provide ongoing support after launch?',
          answer: 'Yes! We offer comprehensive maintenance plans including bug fixes, security updates, performance monitoring, and feature enhancements to ensure your application continues to perform optimally.'
        },
        {
          question: 'What technologies do you use for web applications?',
          answer: 'We use modern, proven technologies including React, TypeScript, Node.js, PostgreSQL, and cloud platforms like AWS. We choose the best tech stack for each project\'s specific needs.'
        },
        {
          question: 'How do you ensure application security?',
          answer: 'We implement industry-standard security practices including secure authentication, data encryption, input validation, and regular security audits to protect your application and user data.'
        }
      ],
      'mobile-applications': [
        {
          question: 'Do you develop native or cross-platform apps?',
          answer: 'We specialize in cross-platform development using React Native and Flutter, allowing us to create apps that work on both iOS and Android while maintaining native-like performance.'
        },
        {
          question: 'How long does mobile app development take?',
          answer: 'Basic apps take 4+ weeks, while feature-rich professional apps take 8+ weeks. Enterprise applications with complex functionality can take 4+ months depending on requirements.'
        },
        {
          question: 'Do you help with app store submission?',
          answer: 'Yes! We provide complete app store submission support, including preparing app store listings, handling review processes, and ensuring compliance with platform guidelines.'
        },
        {
          question: 'Can you integrate with existing systems?',
          answer: 'Absolutely! We can integrate your mobile app with existing APIs, databases, payment systems, and third-party services to create a seamless user experience.'
        },
        {
          question: 'What about app maintenance and updates?',
          answer: 'We offer ongoing maintenance plans that include bug fixes, OS compatibility updates, feature enhancements, and performance optimizations to keep your app running smoothly.'
        }
      ],
      'browser-extensions': [
        {
          question: 'Which browsers do you support?',
          answer: 'We develop extensions for Chrome, Firefox, Edge, and other Chromium-based browsers like Brave. Our Pro package includes cross-browser compatibility.'
        },
        {
          question: 'How do browser extensions enhance productivity?',
          answer: 'Extensions can automate repetitive tasks, integrate with web services, modify webpage content, provide quick access to tools, and create seamless workflows within the browser environment.'
        },
        {
          question: 'Are browser extensions secure?',
          answer: 'Yes! We follow strict security practices, use minimal permissions, implement secure data handling, and comply with browser security standards to ensure user safety.'
        },
        {
          question: 'How do you distribute browser extensions?',
          answer: 'We handle the complete distribution process, including web store submissions, review processes, and rollout strategies to ensure your extension reaches your target audience.'
        },
        {
          question: 'Can extensions work offline?',
          answer: 'Yes! We can implement offline functionality using local storage and background scripts, allowing your extension to provide value even without an internet connection.'
        }
      ],
      'maintenance-support': [
        {
          question: 'What\'s included in maintenance plans?',
          answer: 'Our plans include uptime monitoring, security updates, performance optimizations, content updates, bug fixes, and dedicated developer time based on your chosen package level.'
        },
        {
          question: 'How quickly do you respond to issues?',
          answer: 'Response times vary by plan: Basic (3 days), Pro (24-48 hours), Enterprise (custom SLA). Critical security issues are always prioritized regardless of plan level.'
        },
        {
          question: 'Can you add new features during maintenance?',
          answer: 'Yes! All our maintenance plans include developer hours that can be used for feature enhancements, UI improvements, and functionality additions based on your evolving needs.'
        },
        {
          question: 'Do you provide analytics and reporting?',
          answer: 'Our Pro and Enterprise plans include analytics monitoring, performance reports, and optimization recommendations to help you understand and improve your digital presence.'
        },
        {
          question: 'What if I need more hours than my plan includes?',
          answer: 'Additional development hours can be purchased at our standard hourly rate, or you can upgrade to a higher-tier plan for more included hours and faster response times.'
        }
      ]
    };
    
    return faqs[serviceId] || [];
  };

  const features = getServiceFeatures(service.id);
  const process = getServiceProcess(service.id);
  const faqs = getServiceFAQs(service.id);

  return (
    <Box>
      {/* Breadcrumbs */}
      <Box
        sx={{
          py: 2,
          background: isDark
            ? 'rgba(15, 23, 42, 0.8)'
            : 'rgba(248, 250, 252, 0.8)',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs aria-label="breadcrumb">
            <MuiLink
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <Home sx={{ mr: 0.5, fontSize: '1rem' }} />
              Home
            </MuiLink>
            <MuiLink
              component={Link}
              href="/services"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Services
            </MuiLink>
            <Typography color="text.primary">{service.title}</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: isDark
            ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 50%, #1E293B 100%)'
            : 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: isDark
              ? 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
              : 'radial-gradient(circle at 25% 25%, rgba(57, 94, 202, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(132, 139, 216, 0.1) 0%, transparent 50%)',
            zIndex: 1,
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            {getServiceIcon(service.icon)}
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                background: isDark
                  ? 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)'
                  : 'linear-gradient(135deg, #0F172A 0%, #334155 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5vw + 1rem, 4rem)',
              }}
            >
              {service.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: 'clamp(1.125rem, 2vw + 0.5rem, 1.5rem)',
              }}
            >
              {service.description}
            </Typography>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                px: 4,
                py: 1.5,
                fontSize: '1.125rem',
                '&:hover': {
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                  transform: 'translateY(-0.125rem) scale(1.02)',
                },
              }}
            >
              Get Started Today
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Showcase Section - Zigzag Layout */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: isDark
            ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
            : 'linear-gradient(135deg, #E2E8F0 0%, #F8FAFC 50%, #E2E8F0 100%)',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: isDark
                  ? 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)'
                  : 'linear-gradient(135deg, #0F172A 0%, #334155 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              Key Features & Benefits
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Everything you need for a successful {service.title.toLowerCase()} solution
            </Typography>
          </Box>

          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                mb: { xs: 12, md: 16 },
                '&:last-child': { mb: 0 },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', lg: index % 2 === 0 ? 'row' : 'row-reverse' },
                  alignItems: 'center',
                  gap: { xs: 6, md: 8, lg: 12 },
                  minHeight: { lg: '500px' },
                }}
              >
                {/* Visual Column */}
                <Box
                  sx={{
                    flex: '1 1 55%',
                    width: '100%',
                    maxWidth: { lg: '55%' },
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: '350px', md: '400px', lg: '450px' },
                      borderRadius: 4,
                      background: isDark
                        ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)'
                        : 'linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(241, 245, 249, 0.8) 100%)',
                      border: `1px solid ${theme.palette.divider}`,
                      backdropFilter: 'blur(20px)',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-0.75rem) scale(1.02)',
                        boxShadow: isDark
                          ? '0 3rem 6rem rgba(0, 0, 0, 0.5)'
                          : '0 3rem 6rem rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    {/* Background Pattern */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: isDark
                          ? 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)'
                          : 'radial-gradient(circle at 30% 20%, rgba(57, 94, 202, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(132, 139, 216, 0.1) 0%, transparent 50%)',
                        zIndex: 1,
                      }}
                    />

                    {/* Feature Visual Content */}
                    <Box
                      sx={{
                        position: 'relative',
                        zIndex: 2,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 4,
                      }}
                    >
                      {/* Feature Icon */}
                      <Box
                        sx={{
                          mb: 3,
                          p: 3,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.secondary.main}20 100%)`,
                          border: `2px solid ${theme.palette.primary.main}40`,
                          animation: 'float 3s ease-in-out infinite',
                          '@keyframes float': {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' },
                          },
                        }}
                      >
                        {feature.icon}
                      </Box>

                      {/* Feature Mockup Elements */}
                      <Box
                        sx={{
                          width: '100%',
                          maxWidth: '280px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            height: '10px',
                            borderRadius: 1,
                            background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            opacity: 0.8,
                          }}
                        />
                        <Box
                          sx={{
                            height: '6px',
                            width: '70%',
                            borderRadius: 1,
                            background: isDark ? 'rgba(148, 163, 184, 0.3)' : 'rgba(71, 85, 105, 0.3)',
                          }}
                        />
                        <Box
                          sx={{
                            height: '6px',
                            width: '85%',
                            borderRadius: 1,
                            background: isDark ? 'rgba(148, 163, 184, 0.3)' : 'rgba(71, 85, 105, 0.3)',
                          }}
                        />
                        
                        {/* Feature-specific elements */}
                        <Box sx={{ mt: 2, display: 'flex', gap: 1, justifyContent: 'center' }}>
                          <Box sx={{ width: '50px', height: '30px', borderRadius: 1, background: isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(57, 94, 202, 0.2)' }} />
                          <Box sx={{ width: '50px', height: '30px', borderRadius: 1, background: isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(132, 139, 216, 0.2)' }} />
                          <Box sx={{ width: '50px', height: '30px', borderRadius: 1, background: isDark ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.2)' }} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Content Column */}
                <Box
                  sx={{
                    flex: '1 1 45%',
                    width: '100%',
                    maxWidth: { lg: '45%' },
                    textAlign: { xs: 'center', lg: 'left' },
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      display: 'block',
                      mb: 2,
                      color: 'primary.main',
                      fontWeight: 600,
                      letterSpacing: 1.5,
                      fontSize: '0.875rem',
                    }}
                  >
                    {feature.title.toUpperCase()}
                  </Typography>
                  
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 3,
                      fontWeight: 700,
                      background: isDark
                        ? 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)'
                        : 'linear-gradient(135deg, #0F172A 0%, #334155 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)',
                      lineHeight: 1.2,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: '1.25rem',
                      fontWeight: 500,
                    }}
                  >
                    {feature.description}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      fontSize: '1.1rem',
                    }}
                  >
                    {feature.details}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Container>
      </Box>

      {/* Process Section - Zigzag Layout */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: isDark
            ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 50%, #1E293B 100%)'
            : 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: isDark
                  ? 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)'
                  : 'linear-gradient(135deg, #0F172A 0%, #334155 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              Our Process
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              How we deliver exceptional {service.title.toLowerCase()} solutions
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: 'center',
              gap: { xs: 6, md: 8, lg: 12 },
              minHeight: { lg: '600px' },
            }}
          >
            {/* Process Visual Column */}
            <Box
              sx={{
                flex: '1 1 55%',
                width: '100%',
                maxWidth: { lg: '55%' },
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '400px', md: '500px', lg: '550px' },
                  borderRadius: 4,
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)'
                    : 'linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(241, 245, 249, 0.8) 100%)',
                  border: `1px solid ${theme.palette.divider}`,
                  backdropFilter: 'blur(20px)',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-0.75rem) scale(1.02)',
                    boxShadow: isDark
                      ? '0 3rem 6rem rgba(0, 0, 0, 0.5)'
                      : '0 3rem 6rem rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {/* Background Pattern */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: isDark
                      ? 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)'
                      : 'radial-gradient(circle at 30% 20%, rgba(57, 94, 202, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(132, 139, 216, 0.1) 0%, transparent 50%)',
                    zIndex: 1,
                  }}
                />

                {/* Process Steps Visual */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    p: 4,
                  }}
                >
                  {process.map((step, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '300px',
                        gap: 3,
                        opacity: 0.8 + (index * 0.05),
                        animation: `slideIn 0.6s ease-out ${index * 0.2}s both`,
                        '@keyframes slideIn': {
                          '0%': { opacity: 0, transform: 'translateX(-20px)' },
                          '100%': { opacity: 0.8 + (index * 0.05), transform: 'translateX(0)' },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '1.25rem',
                          flexShrink: 0,
                        }}
                      >
                        {step.step}
                      </Box>
                      <Box
                        sx={{
                          flex: 1,
                          height: '8px',
                          borderRadius: 1,
                          background: `linear-gradient(90deg, ${theme.palette.primary.main}40 0%, ${theme.palette.secondary.main}20 100%)`,
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Process Content Column */}
            <Box
              sx={{
                flex: '1 1 45%',
                width: '100%',
                maxWidth: { lg: '45%' },
                textAlign: { xs: 'center', lg: 'left' },
              }}
            >
              <Stack spacing={4}>
                {process.map((step, index) => (
                  <Box key={index}>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                        fontWeight: 700,
                        color: 'text.primary',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        justifyContent: { xs: 'center', lg: 'flex-start' },
                      }}
                    >
                      <Chip
                        label={step.step}
                        size="small"
                        sx={{
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.875rem',
                        }}
                      />
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        fontSize: '1.1rem',
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Packages Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: isDark
            ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
            : 'linear-gradient(135deg, #E2E8F0 0%, #F8FAFC 50%, #E2E8F0 100%)',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: isDark
                  ? 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)'
                  : 'linear-gradient(135deg, #0F172A 0%, #334155 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              Service Packages
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Choose the package that best fits your needs
            </Typography>
          </Box>

          {/* Single Card with Package Selector - Matching Home Page Style */}
          <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
            <Box sx={{ position: 'relative' }}>
              {/* Most Popular Badge */}
              {service.packages[selectedPackageIndex]?.popular && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                  }}
                >
                  <Chip
                    label="Most Popular"
                    size="small"
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      boxShadow: isDark
                        ? '0 0.5rem 1rem rgba(0, 0, 0, 0.3)'
                        : '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
                    }}
                  />
                </Box>
              )}

              <Card
                sx={{
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: service.packages[selectedPackageIndex]?.popular 
                    ? `2px solid ${theme.palette.primary.main}` 
                    : `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-0.5rem)',
                    boxShadow: isDark
                      ? '0 2rem 4rem rgba(0, 0, 0, 0.4)'
                      : '0 2rem 4rem rgba(0, 0, 0, 0.15)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  {/* Service Icon */}
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    {getServiceIcon(service.icon)}
                  </Box>

                  {/* Service Title */}
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      textAlign: 'center',
                      color: 'text.primary',
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Service Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      textAlign: 'center',
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Package Selector */}
                  <Box sx={{ mb: 3 }}>
                    <Tabs
                      value={selectedPackageIndex}
                      onChange={(_, newValue) => setSelectedPackageIndex(newValue)}
                      variant="fullWidth"
                      sx={{
                        mb: 2,
                        '& .MuiTab-root': {
                          minHeight: { xs: '2.25rem', sm: '2.75rem' },
                          fontSize: { xs: '0.7rem', sm: '0.75rem' },
                          fontWeight: 600,
                          padding: { xs: '0.25rem 0.25rem', sm: '0.5rem 0.75rem' },
                        },
                        '& .MuiTabs-flexContainer': {
                          gap: { xs: '0.25rem', sm: '0.5rem' },
                        },
                      }}
                    >
                      {service.packages.map((pkg, index) => (
                        <Tab
                          key={index}
                          label={
                            <Box sx={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: { xs: 0.25, sm: 0.5 },
                              flexDirection: { xs: 'column', sm: 'row' },
                              textAlign: 'center',
                            }}>
                              <Typography 
                                variant="caption" 
                                sx={{ 
                                  fontSize: { xs: '0.65rem', sm: '0.75rem' },
                                  lineHeight: 1.2,
                                }}
                              >
                                {pkg.name}
                              </Typography>
                              {pkg.popular && (
                                <Box
                                  sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: { xs: 12, sm: 16 },
                                    height: { xs: 12, sm: 16 },
                                    borderRadius: '50%',
                                    backgroundColor: 'secondary.main',
                                    color: 'white',
                                    fontSize: { xs: '0.5rem', sm: '0.6rem' },
                                    fontWeight: 'bold',
                                  }}
                                >
                                  ★
                                </Box>
                              )}
                            </Box>
                          }
                        />
                      ))}
                    </Tabs>

                    {/* Selected Package Details */}
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: isDark
                          ? 'rgba(59, 130, 246, 0.1)'
                          : 'rgba(57, 94, 202, 0.05)',
                        borderRadius: 1,
                        border: `1px solid ${theme.palette.primary.main}20`,
                      }}
                    >
                      {/* Package Features */}
                      <Stack spacing={1} sx={{ mb: 2 }}>
                        {service.packages[selectedPackageIndex]?.features.map((feature, index) => (
                          <Typography
                            key={index}
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              display: 'flex',
                              alignItems: 'center',
                              fontSize: '0.875rem',
                              '&:before': {
                                content: '"✓"',
                                color: 'primary.main',
                                fontWeight: 'bold',
                                mr: 1,
                              },
                            }}
                          >
                            {feature}
                          </Typography>
                        ))}
                      </Stack>

                      {/* Timeline and Price */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Chip
                          label={service.packages[selectedPackageIndex]?.timeline}
                          size="small"
                          sx={{
                            backgroundColor: isDark
                              ? 'rgba(34, 197, 94, 0.2)'
                              : 'rgba(34, 197, 94, 0.1)',
                            color: 'success.main',
                            border: `1px solid ${theme.palette.success.main}40`,
                            fontWeight: 600,
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: 'primary.main',
                          }}
                        >
                          {service.packages[selectedPackageIndex]?.price}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* CTA Button */}
                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    fullWidth
                    endIcon={<ArrowForward />}
                    sx={{
                      mt: 'auto',
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        transform: 'scale(1.02)',
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: isDark
            ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 50%, #1E293B 100%)'
            : 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: isDark
                  ? 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)'
                  : 'linear-gradient(135deg, #0F172A 0%, #334155 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Everything you need to know about {service.title.toLowerCase()}
            </Typography>
          </Box>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  '&:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      my: 2,
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Bottom CTA */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: isDark
            ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
            : 'linear-gradient(135deg, #E2E8F0 0%, #F8FAFC 50%, #E2E8F0 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: isDark
              ? 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
              : 'radial-gradient(circle at 20% 80%, rgba(57, 94, 202, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(132, 139, 216, 0.05) 0%, transparent 50%)',
            zIndex: 1,
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: 700,
                color: 'text.primary',
              }}
            >
              Ready to get started with {service.title.toLowerCase()}?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Let&apos;s discuss your project requirements and create something amazing together
            </Typography>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                px: 4,
                py: 1.5,
                fontSize: '1.125rem',
                '&:hover': {
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                  transform: 'translateY(-0.125rem) scale(1.02)',
                },
              }}
            >
              Get Started Today
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicePage;
