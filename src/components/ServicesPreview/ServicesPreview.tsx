'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  useTheme,
  Tabs,
  Tab,
} from '@mui/material';
import {
  Language as GlobalIcon,
  Monitor,
  Smartphone,
  Extension as PuzzleIcon,
  Settings,
  ViewQuilt as LayoutIcon,
  ArrowForward,
} from '@mui/icons-material';
import Link from 'next/link';
import { SERVICES } from '@/data/constants';

const ServicesPreview: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [selectedPackages, setSelectedPackages] = useState<Record<string, number>>({});

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

  type ServicePackage = { name: string; price: string; timeline: string; features: string[]; popular?: boolean };
  type Service = { id: string; title: string; description: string; icon: string; packages: ServicePackage[]; technologies: string[] };

  const getSelectedPackage = (service: Service) => {
    // Use explicit check for undefined to allow index 0
    const selectedIndex = selectedPackages[service.id] !== undefined 
      ? selectedPackages[service.id] 
      : service.packages.findIndex((pkg: ServicePackage) => pkg.popular);
    
    // If no popular package found, default to 0
    const finalIndex = selectedIndex !== -1 ? selectedIndex : 0;
    return service.packages[finalIndex];
  };

  return (
    <Box
      sx={{
        py: { xs: 12, md: 16 },
        background: isDark
          ? 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #1E293B 100%)'
          : 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 50%, #F1F5F9 100%)',
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
        {/* Section Header */}
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
            Our Services
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            Comprehensive digital solutions to elevate your business
          </Typography>
          <Typography
            variant="body1"
            sx={{
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
        </Box>

        {/* Services Grid */}
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
              : service.packages.findIndex((pkg: ServicePackage) => pkg.popular);
            const finalSelectedIndex = selectedIndex !== -1 ? selectedIndex : 0;
            
            return (
              <Box 
                key={service.id} 
                sx={{ 
                  position: 'relative',
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    background: isDark
                      ? 'rgba(30, 41, 59, 0.8)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: service.id === 'web-applications' 
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
                  {/* Most Popular Badge */}
                  {service.id === 'web-applications' && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 4,
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
                            ? '0 0.25rem 0.5rem rgba(0, 0, 0, 0.15)'
                            : '0 0.25rem 0.5rem rgba(0, 0, 0, 0.08)',
                        }}
                      />
                    </Box>
                  )}

                  <CardContent sx={{ 
                    p: { xs: 2, sm: 3, md: 4 }, 
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    {/* Service Icon */}
                    <Box sx={{ textAlign: 'center' }}>
                      {getServiceIcon(service.icon)}
                    </Box>

                    {/* Service Title */}
                    <Typography
                      variant="h5"
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
                        value={finalSelectedIndex}
                        onChange={(_, newValue) => handlePackageChange(service.id, newValue)}
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
                        {service.packages.map((pkg: ServicePackage, index: number) => (
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


                    {/* CTA Button */}
                    <Button
                      component={Link}
                      href={`/services/${service.id}`}
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
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              color: 'text.secondary',
            }}
          >
            Ready to start your project?
          </Typography>
          <Button
            component={Link}
            href="/services"
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
  );
};

export default ServicesPreview;
