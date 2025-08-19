'use client';

import React from 'react';
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
  
  // Find the service by slug
  const service = SERVICES.find(s => s.id === params.slug);
  
  if (!service) {
    notFound();
  }

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
          title: 'Responsive Design',
          description: 'Perfect display across all devices and screen sizes',
          icon: <Devices sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Our responsive designs automatically adapt to desktop, tablet, and mobile devices, ensuring your website looks professional and functions perfectly regardless of how visitors access it.'
        },
        {
          title: 'SEO Optimization',
          description: 'Built-in search engine optimization for better visibility',
          icon: <TrendingUp sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Every website includes comprehensive SEO optimization with proper meta tags, structured data, fast loading times, and clean code structure to help you rank higher in search results.'
        },
        {
          title: 'Performance Focus',
          description: 'Lightning-fast loading times and optimal user experience',
          icon: <Speed sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'We optimize every aspect of your website for speed, including image compression, code minification, and efficient hosting solutions to ensure visitors never wait.'
        },
        {
          title: 'Content Management',
          description: 'Easy-to-use systems for updating your content',
          icon: <AutoFixHigh sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Update your website content, add new pages, and manage your blog posts with intuitive content management systems that require no technical knowledge.'
        }
      ],
      'web-applications': [
        {
          title: 'Scalable Architecture',
          description: 'Built to grow with your business and user base',
          icon: <CloudDone sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Our applications use modern, cloud-native architectures that automatically scale to handle increased traffic and data loads as your business grows.'
        },
        {
          title: 'Real-time Features',
          description: 'Live data updates and interactive user experiences',
          icon: <Timeline sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Implement real-time notifications, live chat, collaborative editing, and instant data synchronization to create engaging, interactive user experiences.'
        },
        {
          title: 'Advanced Security',
          description: 'Enterprise-grade security and data protection',
          icon: <Security sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Comprehensive security measures including encrypted data transmission, secure authentication, input validation, and regular security audits to protect your application and user data.'
        },
        {
          title: 'Analytics Integration',
          description: 'Comprehensive insights and performance monitoring',
          icon: <Analytics sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Built-in analytics and monitoring tools provide detailed insights into user behavior, application performance, and business metrics to drive informed decisions.'
        }
      ],
      'mobile-applications': [
        {
          title: 'Cross-Platform Development',
          description: 'One codebase for iOS and Android platforms',
          icon: <Devices sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Using React Native and Flutter, we create apps that work seamlessly on both iOS and Android while maintaining native performance and user experience.'
        },
        {
          title: 'Native Performance',
          description: 'Smooth, responsive user experience on all devices',
          icon: <Speed sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Our cross-platform apps deliver native-like performance with smooth animations, fast response times, and efficient memory usage across all target devices.'
        },
        {
          title: 'Offline Functionality',
          description: 'Works seamlessly even without internet connection',
          icon: <CloudDone sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Implement offline data storage, background synchronization, and cached content to ensure your app provides value even when users are disconnected.'
        },
        {
          title: 'App Store Optimization',
          description: 'Complete submission and optimization for app stores',
          icon: <TrendingUp sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'We handle the complete app store submission process, including metadata optimization, screenshot creation, and compliance with platform guidelines for maximum visibility.'
        }
      ],
      'browser-extensions': [
        {
          title: 'Cross-Browser Support',
          description: 'Compatible with Chrome, Firefox, Edge, and more',
          icon: <GlobalIcon sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Develop extensions that work seamlessly across all major browsers including Chrome, Firefox, Edge, Safari, and other Chromium-based browsers.'
        },
        {
          title: 'Productivity Enhancement',
          description: 'Streamline workflows and automate repetitive tasks',
          icon: <AutoFixHigh sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Create powerful productivity tools that integrate with existing workflows, automate repetitive tasks, and provide quick access to frequently used functions.'
        },
        {
          title: 'Secure Integration',
          description: 'Safe interaction with web pages and user data',
          icon: <Security sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Implement secure data handling, minimal permissions, and safe interaction with web pages while maintaining user privacy and browser security standards.'
        },
        {
          title: 'Easy Distribution',
          description: 'Seamless publishing to browser extension stores',
          icon: <CloudDone sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Handle the complete distribution process including store submissions, review management, and update rollouts to ensure your extension reaches your target audience.'
        }
      ],
      'maintenance-support': [
        {
          title: 'Proactive Monitoring',
          description: '24/7 uptime monitoring and performance tracking',
          icon: <Analytics sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Continuous monitoring of your website or application performance, uptime, and security with instant alerts for any issues that need attention.'
        },
        {
          title: 'Security Updates',
          description: 'Regular security patches and vulnerability fixes',
          icon: <Security sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Stay protected with regular security updates, vulnerability assessments, and immediate patches for any security issues that arise.'
        },
        {
          title: 'Performance Optimization',
          description: 'Ongoing improvements for speed and efficiency',
          icon: <Speed sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Regular performance audits and optimizations to ensure your digital assets continue to load quickly and provide excellent user experiences.'
        },
        {
          title: 'Feature Development',
          description: 'Continuous enhancement and new feature additions',
          icon: <Code sx={{ fontSize: '3rem', color: 'primary.main' }} />,
          details: 'Ongoing development support to add new features, improve existing functionality, and adapt your digital presence to changing business needs.'
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
        { step: 1, title: 'Discovery & Planning', description: 'We analyze your business goals, target audience, and technical requirements to create a comprehensive project roadmap.' },
        { step: 2, title: 'Design & Prototyping', description: 'Create wireframes, mockups, and interactive prototypes to visualize your website before development begins.' },
        { step: 3, title: 'Development & Testing', description: 'Build your website using modern technologies with rigorous testing across all devices and browsers.' },
        { step: 4, title: 'Launch & Optimization', description: 'Deploy your website with proper SEO setup, analytics integration, and performance optimization.' }
      ],
      'web-applications': [
        { step: 1, title: 'Requirements Analysis', description: 'Deep dive into your business processes, user workflows, and technical specifications to design the perfect solution.' },
        { step: 2, title: 'Architecture Design', description: 'Plan the technical architecture, database structure, and system integrations for optimal performance and scalability.' },
        { step: 3, title: 'Agile Development', description: 'Build your application in iterative sprints with regular demos and feedback sessions to ensure perfect alignment.' },
        { step: 4, title: 'Deployment & Scaling', description: 'Launch your application with proper monitoring, backup systems, and scaling infrastructure in place.' }
      ],
      'mobile-applications': [
        { step: 1, title: 'Platform Strategy', description: 'Determine the optimal approach for your target platforms and define the core user experience and feature set.' },
        { step: 2, title: 'UI/UX Design', description: 'Create intuitive, platform-specific designs that follow iOS and Android design guidelines for optimal user experience.' },
        { step: 3, title: 'Cross-Platform Development', description: 'Build your app using React Native or Flutter for efficient development and consistent experience across platforms.' },
        { step: 4, title: 'Store Submission', description: 'Handle the complete app store submission process including optimization, review management, and launch coordination.' }
      ],
      'browser-extensions': [
        { step: 1, title: 'Use Case Analysis', description: 'Understand your users\' workflows and identify opportunities for productivity enhancement and automation.' },
        { step: 2, title: 'Extension Architecture', description: 'Design the extension structure, permissions, and integration points for optimal functionality and security.' },
        { step: 3, title: 'Development & Testing', description: 'Build and test your extension across multiple browsers ensuring compatibility and performance.' },
        { step: 4, title: 'Store Distribution', description: 'Publish your extension to browser stores with optimized listings and manage the review and approval process.' }
      ],
      'maintenance-support': [
        { step: 1, title: 'System Assessment', description: 'Comprehensive audit of your current digital assets to identify optimization opportunities and potential issues.' },
        { step: 2, title: 'Monitoring Setup', description: 'Implement comprehensive monitoring systems for uptime, performance, security, and user experience tracking.' },
        { step: 3, title: 'Maintenance Schedule', description: 'Establish regular maintenance routines including updates, backups, security patches, and performance optimizations.' },
        { step: 4, title: 'Ongoing Support', description: 'Provide continuous support with dedicated developer time for enhancements, fixes, and feature additions.' }
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

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: service.packages.length === 2 ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(300px, 1fr))',
              },
              gap: 3,
              maxWidth: service.packages.length === 2 ? '800px' : '100%',
              mx: 'auto',
            }}
          >
            {service.packages.map((pkg, index) => (
              <Card
                key={index}
                sx={{
                  position: 'relative',
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: pkg.popular 
                    ? `2px solid ${theme.palette.primary.main}` 
                    : `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-0.5rem)',
                    boxShadow: isDark
                      ? '0 2rem 4rem rgba(0, 0, 0, 0.4)'
                      : '0 2rem 4rem rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                {pkg.popular && (
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
                      }}
                    />
                  </Box>
                )}

                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 1,
                      fontWeight: 700,
                      color: 'text.primary',
                      textAlign: 'center',
                    }}
                  >
                    {pkg.name}
                  </Typography>
                  
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 1,
                      fontWeight: 700,
                      color: 'primary.main',
                      textAlign: 'center',
                    }}
                  >
                    {pkg.price}
                  </Typography>

                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Chip
                      label={pkg.timeline}
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
                  </Box>

                  <Stack spacing={2} sx={{ mb: 4 }}>
                    {pkg.features.map((feature, featureIndex) => (
                      <Box
                        key={featureIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1,
                        }}
                      >
                        <CheckCircle
                          sx={{
                            color: 'primary.main',
                            fontSize: '1.25rem',
                            mt: 0.125,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.5,
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Button
                    component={Link}
                    href="/contact"
                    variant={pkg.popular ? "contained" : "outlined"}
                    fullWidth
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      ...(pkg.popular ? {
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        '&:hover': {
                          background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                        },
                      } : {
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                        },
                      }),
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
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
