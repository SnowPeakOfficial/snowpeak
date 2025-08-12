'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Tabs,
  Tab,
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
import { SERVICES, TECH_STACK } from '@/data/constants';
 

const ServicesPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [selectedPackages, setSelectedPackages] = useState<Record<string, number>>({});

  const getTechIcon = (iconUrl: string, techName: string) => {
    return (
      <Box sx={{ position: 'relative', width: '2.5rem', height: '2.5rem' }}>
        <Box
          component="img"
          src={iconUrl}
          alt={`${techName} icon`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.style.display = 'flex';
            }
          }}
          sx={{
            width: '2.5rem',
            height: '2.5rem',
            objectFit: 'contain',
            filter: theme.palette.mode === 'dark' ? 'brightness(1.1) saturate(1.2)' : 'saturate(1.1)',
            transition: 'all 0.3s ease',
          }}
        />
        <Box
          sx={{
            display: 'none',
            width: '2.5rem',
            height: '2.5rem',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
            borderRadius: '0.5rem',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            position: 'absolute',
            top: 0,
            left: 0,
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
          }}
        >
          {techName.charAt(0).toUpperCase()}
        </Box>
      </Box>
    );
  };

  const getServiceIcon = (iconName: string) => {
    const iconProps = {
      sx: {
        fontSize: '3rem',
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

  const handlePackageChange = (serviceId: string, packageIndex: number) => {
    setSelectedPackages(prev => ({
      ...prev,
      [serviceId]: packageIndex
    }));
  };

  const getSelectedPackage = (service: typeof SERVICES[0]) => {
    const selectedIndex = selectedPackages[service.id] !== undefined 
      ? selectedPackages[service.id] 
      : service.packages.findIndex((pkg) => pkg.popular);
    
    const finalIndex = selectedIndex !== -1 ? selectedIndex : 0;
    return service.packages[finalIndex];
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
    <>
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

        {/* Services Grid */}
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
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
              gap: { xs: '1rem', sm: '1.5rem', md: '2rem' },
              width: '100%',
              maxWidth: '100%',
            }}
          >
            {SERVICES.map((service) => {
              const selectedPackage = getSelectedPackage(service);
              const selectedIndex = selectedPackages[service.id] !== undefined 
                ? selectedPackages[service.id] 
                : service.packages.findIndex((pkg: { popular?: boolean }) => Boolean(pkg.popular));
              const finalSelectedIndex = selectedIndex !== -1 ? selectedIndex : 0;
              
              return (
                <Box key={service.id} sx={{ position: 'relative' }}>
                  {/* Most Popular Badge */}
                  {service.id === 'web-development' && (
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
                    id={service.id}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: isDark
                        ? 'rgba(30, 41, 59, 0.8)'
                        : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: service.id === 'web-development' 
                        ? `2px solid ${theme.palette.primary.main}` 
                        : `1px solid ${theme.palette.divider}`,
                      borderRadius: 2,
                      scrollMarginTop: { xs: '8rem', md: '9rem' },
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
                    <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 }, flexGrow: 1 }}>
                      {/* Service Icon */}
                      <Box sx={{ textAlign: 'center' }}>
                        {getServiceIcon(service.icon)}
                      </Box>

                      {/* Service Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
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
                          value={finalSelectedIndex}
                          onChange={(_, newValue) => handlePackageChange(service.id, newValue)}
                          variant="fullWidth"
                          sx={{
                            mb: 2,
                            '& .MuiTab-root': {
                              minHeight: { xs: '2.5rem', sm: '3rem' },
                              fontSize: { xs: '0.7rem', sm: '0.75rem' },
                              fontWeight: 600,
                              padding: { xs: '0.5rem 0.25rem', sm: '0.75rem 1rem' },
                            },
                            '& .MuiTabs-flexContainer': {
                              gap: { xs: '0.25rem', sm: '0.5rem' },
                            },
                          }}
                        >
                          {service.packages.map((pkg: { name: string; popular?: boolean }, index: number) => (
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
                            {selectedPackage.features.map((feature: string, index: number) => (
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
                              label={selectedPackage.timeline}
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
                              {selectedPackage.price}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      {/* Technologies */}
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 1,
                            color: 'text.secondary',
                            fontWeight: 600,
                          }}
                        >
                          Technologies:
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: { xs: 0.5, sm: 1 },
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                          }}
                        >
                          {service.technologies.map((tech: string) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: isDark
                                  ? 'rgba(59, 130, 246, 0.2)'
                                  : 'rgba(57, 94, 202, 0.1)',
                                color: 'primary.main',
                                border: `1px solid ${theme.palette.primary.main}40`,
                                fontSize: { xs: '0.65rem', sm: '0.75rem' },
                                height: { xs: '1.5rem', sm: '2rem' },
                                '& .MuiChip-label': {
                                  px: { xs: 0.5, sm: 1 },
                                },
                              }}
                            />
                          ))}
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
              );
            })}
          </Box>
          </Container>
        </Box>

        {/* Technologies Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: isDark
              ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
              : 'linear-gradient(135deg, #E2E8F0 0%, #F8FAFC 50%, #E2E8F0 100%)',
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                Technologies We Use
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
                Modern, proven technologies that deliver exceptional results
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { 
                  xs: '1fr', 
                  sm: 'repeat(2, 1fr)', 
                  lg: 'repeat(3, 1fr)' 
                },
                gap: { xs: 3, md: 4, lg: 5 },
              }}
            >
              {/* Frontend */}
              <Card
                sx={{
                  p: { xs: 3, md: 4, lg: 5 },
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
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
                <Typography
                  variant="h5"
                  sx={{
                    mb: { xs: 3, md: 4 },
                    fontWeight: 600,
                    textAlign: 'center',
                    color: 'text.primary',
                  }}
                >
                  Frontend
                </Typography>
                <Stack spacing={{ xs: 2, md: 3 }}>
                  {TECH_STACK.frontend.map((tech) => (
                    <Box
                      key={tech.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 2, md: 3 },
                        p: { xs: 1.5, md: 2 },
                        borderRadius: 2,
                        background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(57, 94, 202, 0.05)',
                        border: `1px solid ${theme.palette.primary.main}20`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(57, 94, 202, 0.08)',
                          transform: 'translateX(0.25rem)',
                        },
                      }}
                    >
                      {getTechIcon(tech.icon, tech.name)}
                      <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                        {tech.name}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>

              {/* Backend */}
              <Card
                sx={{
                  p: { xs: 3, md: 4, lg: 5 },
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
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
                <Typography
                  variant="h5"
                  sx={{
                    mb: { xs: 3, md: 4 },
                    fontWeight: 600,
                    textAlign: 'center',
                    color: 'text.primary',
                  }}
                >
                  Backend
                </Typography>
                <Stack spacing={{ xs: 2, md: 3 }}>
                  {TECH_STACK.backend.map((tech) => (
                    <Box
                      key={tech.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 2, md: 3 },
                        p: { xs: 1.5, md: 2 },
                        borderRadius: 2,
                        background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(57, 94, 202, 0.05)',
                        border: `1px solid ${theme.palette.primary.main}20`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(57, 94, 202, 0.08)',
                          transform: 'translateX(0.25rem)',
                        },
                      }}
                    >
                      {getTechIcon(tech.icon, tech.name)}
                      <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                        {tech.name}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>

              {/* Database */}
              <Card
                sx={{
                  p: { xs: 3, md: 4, lg: 5 },
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
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
                <Typography
                  variant="h5"
                  sx={{
                    mb: { xs: 3, md: 4 },
                    fontWeight: 600,
                    textAlign: 'center',
                    color: 'text.primary',
                  }}
                >
                  Database
                </Typography>
                <Stack spacing={{ xs: 2, md: 3 }}>
                  {TECH_STACK.databases.map((tech) => (
                    <Box
                      key={tech.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 2, md: 3 },
                        p: { xs: 1.5, md: 2 },
                        borderRadius: 2,
                        background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(57, 94, 202, 0.05)',
                        border: `1px solid ${theme.palette.primary.main}20`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(57, 94, 202, 0.08)',
                          transform: 'translateX(0.25rem)',
                        },
                      }}
                    >
                      {getTechIcon(tech.icon, tech.name)}
                      <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                        {tech.name}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>

              {/* Mobile */}
              <Card
                sx={{
                  p: { xs: 3, md: 4, lg: 5 },
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
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
                <Typography
                  variant="h5"
                  sx={{
                    mb: { xs: 3, md: 4 },
                    fontWeight: 600,
                    textAlign: 'center',
                    color: 'text.primary',
                  }}
                >
                  Mobile
                </Typography>
                <Stack spacing={{ xs: 2, md: 3 }}>
                  {TECH_STACK.mobile.map((tech) => (
                    <Box
                      key={tech.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 2, md: 3 },
                        p: { xs: 1.5, md: 2 },
                        borderRadius: 2,
                        background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(57, 94, 202, 0.05)',
                        border: `1px solid ${theme.palette.primary.main}20`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(57, 94, 202, 0.08)',
                          transform: 'translateX(0.25rem)',
                        },
                      }}
                    >
                      {getTechIcon(tech.icon, tech.name)}
                      <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                        {tech.name}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>

              {/* Cloud */}
              <Card
                sx={{
                  p: { xs: 3, md: 4, lg: 5 },
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
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
                <Typography
                  variant="h5"
                  sx={{
                    mb: { xs: 3, md: 4 },
                    fontWeight: 600,
                    textAlign: 'center',
                    color: 'text.primary',
                  }}
                >
                  Cloud & DevOps
                </Typography>
                <Stack spacing={{ xs: 2, md: 3 }}>
                  {TECH_STACK.cloud.map((tech) => (
                    <Box
                      key={tech.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 2, md: 3 },
                        p: { xs: 1.5, md: 2 },
                        borderRadius: 2,
                        background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(57, 94, 202, 0.05)',
                        border: `1px solid ${theme.palette.primary.main}20`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(57, 94, 202, 0.08)',
                          transform: 'translateX(0.25rem)',
                        },
                      }}
                    >
                      {getTechIcon(tech.icon, tech.name)}
                      <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                        {tech.name}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>

              {/* Tools */}
              <Card
                sx={{
                  p: { xs: 3, md: 4, lg: 5 },
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
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
                <Typography
                  variant="h5"
                  sx={{
                    mb: { xs: 3, md: 4 },
                    fontWeight: 600,
                    textAlign: 'center',
                    color: 'text.primary',
                  }}
                >
                  Development Tools
                </Typography>
                <Stack spacing={{ xs: 2, md: 3 }}>
                  {TECH_STACK.tools.map((tech) => (
                    <Box
                      key={tech.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 2, md: 3 },
                        p: { xs: 1.5, md: 2 },
                        borderRadius: 2,
                        background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(57, 94, 202, 0.05)',
                        border: `1px solid ${theme.palette.primary.main}20`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(57, 94, 202, 0.08)',
                          transform: 'translateX(0.25rem)',
                        },
                      }}
                    >
                      {getTechIcon(tech.icon, tech.name)}
                      <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>
                        {tech.name}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>
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
    </>
  );
};

export default ServicesPage;
