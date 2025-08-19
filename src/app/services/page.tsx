'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import {
  ArrowForward,
  ExpandMore,
  Language as GlobalIcon,
  Monitor,
  Smartphone,
  Extension as PuzzleIcon,
  Settings,
  ViewQuilt as LayoutIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { SERVICES } from '@/data/constants';

const ServicesPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const getServiceIcon = (iconName: string) => {
    const iconProps = {
      sx: {
        fontSize: '4rem',
        color: 'primary.main',
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

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Starter sites take 1-3 weeks, while enterprise applications can take 8-12 weeks. We provide detailed timelines during our discovery phase.',
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes! We offer comprehensive maintenance packages starting at $300/month, including security updates, bug fixes, performance monitoring, and priority support.',
    },
    {
      question: 'Can you work with my existing design?',
      answer: 'Absolutely! We can work with your existing designs, brand guidelines, or create new designs from scratch. We adapt to your needs and preferences.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, proven technologies including React, Next.js, TypeScript, Node.js, and cloud platforms like AWS and Vercel. We choose the best tech stack for each project.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans for larger projects. Typically 50% upfront and 50% on completion, with milestone-based payments for enterprise projects.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 12, md: 16 },
          background: isDark
            ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 50%, #1E293B 100%)'
            : 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
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
              Our Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: 'clamp(1.125rem, 2vw + 0.5rem, 1.5rem)',
              }}
            >
              Comprehensive digital solutions to elevate your business
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.7,
                fontSize: '1.1rem',
              }}
            >
              From simple starter sites to complex web applications, we deliver modern, 
              scalable solutions that grow with your business. Every project includes 
              responsive design, SEO optimization, and ongoing support.
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

      {/* Services Showcase Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: isDark
            ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
            : 'linear-gradient(135deg, #E2E8F0 0%, #F8FAFC 50%, #E2E8F0 100%)',
        }}
      >
        <Container maxWidth="xl">
          {SERVICES.map((service, index) => (
            <Box
              key={service.id}
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
                  minHeight: { lg: '600px' },
                }}
              >
                {/* Enhanced Visual Column */}
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

                    {/* Service Mockup Content */}
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
                      {/* Animated Service Icon */}
                      <Box
                        sx={{
                          mb: 4,
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
                        {getServiceIcon(service.icon)}
                      </Box>

                      {/* Service Preview Elements */}
                      <Box
                        sx={{
                          width: '100%',
                          maxWidth: '300px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            height: '8px',
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
                        
                        {/* Service-specific elements */}
                        <Box sx={{ mt: 2, display: 'flex', gap: 1, justifyContent: 'center' }}>
                          <Box sx={{ width: '60px', height: '40px', borderRadius: 1, background: isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(57, 94, 202, 0.2)' }} />
                          <Box sx={{ width: '60px', height: '40px', borderRadius: 1, background: isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(132, 139, 216, 0.2)' }} />
                          <Box sx={{ width: '60px', height: '40px', borderRadius: 1, background: isDark ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.2)' }} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Enhanced Content Column */}
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
                    {service.id.replace('-', ' ').toUpperCase()}
                  </Typography>
                  
                  <Typography
                    variant="h2"
                    sx={{
                      mb: 3,
                      fontWeight: 700,
                      background: isDark
                        ? 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)'
                        : 'linear-gradient(135deg, #0F172A 0%, #334155 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)',
                      lineHeight: 1.2,
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      fontSize: '1.125rem',
                    }}
                  >
                    {service.description}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      fontSize: '1rem',
                    }}
                  >
                    {service.id === 'web-development' && 
                      'From simple business websites to complex multi-page platforms, we create professional web presences that establish credibility and drive business growth. Our responsive designs ensure your site looks perfect on every device.'
                    }
                    {service.id === 'web-applications' && 
                      'Build powerful, scalable web applications for SaaS platforms, business tools, and data-driven solutions. We specialize in creating applications that handle complex workflows, real-time data, and high user loads while maintaining exceptional performance.'
                    }
                    {service.id === 'mobile-applications' && 
                      'Reach your audience wherever they are with cross-platform mobile applications. Our apps deliver native-like performance and user experience across iOS and Android, built with modern frameworks for maximum efficiency and maintainability.'
                    }
                    {service.id === 'browser-extensions' && 
                      'Enhance productivity and user engagement with custom browser extensions. We develop powerful extensions that integrate seamlessly with Chrome, Firefox, Edge, and other modern browsers, helping users accomplish tasks more efficiently.'
                    }
                    {service.id === 'maintenance-support' && 
                      'Keep your digital assets secure, updated, and performing at their best with our comprehensive maintenance services. From security updates to feature enhancements, we provide ongoing support to ensure your continued success.'
                    }
                  </Typography>
                  
                  <Button
                    component={Link}
                    href={`/services/${service.id}`}
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      px: 4,
                      py: 1.5,
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: 'none',
                      boxShadow: isDark
                        ? '0 0.5rem 1rem rgba(0, 0, 0, 0.3)'
                        : '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
                      '&:hover': {
                        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                        transform: 'translateY(-0.125rem) scale(1.02)',
                        boxShadow: isDark
                          ? '0 1rem 2rem rgba(0, 0, 0, 0.4)'
                          : '0 1rem 2rem rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
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
              Everything you need to know about our services
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
              Ready to start your project?
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
              Let&apos;s discuss your requirements and create something amazing together
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

export default ServicesPage;
