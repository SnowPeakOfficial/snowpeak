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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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

  const getServiceBenefits = (serviceId: string) => {
    const benefits: Record<string, string[]> = {
      'web-development': [
        'Professional online presence that builds credibility',
        'Mobile-responsive design for all devices',
        'SEO optimization for better search rankings',
        'Fast loading times and optimal performance',
        'Easy content management and updates',
        'Secure hosting and regular backups'
      ],
      'web-applications': [
        'Scalable architecture that grows with your business',
        'Real-time data processing and updates',
        'Secure user authentication and data protection',
        'Custom workflows tailored to your processes',
        'Integration with existing systems and APIs',
        'Comprehensive admin dashboard and analytics'
      ],
      'mobile-applications': [
        'Reach customers on their preferred mobile devices',
        'Native-like performance with cross-platform efficiency',
        'Push notifications for user engagement',
        'Offline functionality for uninterrupted use',
        'App store optimization for better discoverability',
        'Seamless integration with device features'
      ],
      'browser-extensions': [
        'Enhance user productivity within their browser',
        'Seamless integration with existing workflows',
        'Cross-browser compatibility for wider reach',
        'Lightweight and fast performance',
        'Easy distribution through browser stores',
        'Regular updates and feature enhancements'
      ],
      'maintenance-support': [
        'Peace of mind with proactive monitoring',
        'Regular security updates and patches',
        'Performance optimization and improvements',
        'Dedicated developer support when needed',
        'Priority response for critical issues',
        'Ongoing feature development and enhancements'
      ]
    };
    
    return benefits[serviceId] || [];
  };

  const faqs = getServiceFAQs(service.id);
  const benefits = getServiceBenefits(service.id);

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

      {/* Benefits Section */}
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
              Why Choose Our {service.title}?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Key benefits and advantages of our service
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
              gap: 3,
              mb: { xs: 6, md: 8 },
            }}
          >
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                sx={{
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-0.25rem)',
                    boxShadow: isDark
                      ? '0 1rem 2rem rgba(0, 0, 0, 0.3)'
                      : '0 1rem 2rem rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <CheckCircle
                      sx={{
                        color: 'primary.main',
                        fontSize: '1.5rem',
                        mt: 0.25,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.primary',
                        lineHeight: 1.6,
                      }}
                    >
                      {benefit}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Packages Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: isDark
            ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 50%, #1E293B 100%)'
            : 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)',
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
            ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
            : 'linear-gradient(135deg, #E2E8F0 0%, #F8FAFC 50%, #E2E8F0 100%)',
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
