'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  useTheme,
} from '@mui/material';
import {
  ArrowForward,
  Palette,
  DesignServices,
  Edit,
  TrendingUp,
  Accessibility,
  Email,
  Language,
  Analytics,
} from '@mui/icons-material';
import Link from 'next/link';
import { ADDITIONAL_SERVICES } from '@/data/constants';

const AdditionalServices: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const getServiceIcon = (iconName: string) => {
    const iconProps = {
      sx: {
        fontSize: '2.5rem',
        color: 'primary.main',
        mb: 2,
      },
    };

    switch (iconName) {
      case 'Palette':
        return <Palette {...iconProps} />;
      case 'DesignServices':
        return <DesignServices {...iconProps} />;
      case 'Edit':
        return <Edit {...iconProps} />;
      case 'TrendingUp':
        return <TrendingUp {...iconProps} />;
      case 'Accessibility':
        return <Accessibility {...iconProps} />;
      case 'Email':
        return <Email {...iconProps} />;
      case 'Language':
        return <Language {...iconProps} />;
      case 'Analytics':
        return <Analytics {...iconProps} />;
      default:
        return <DesignServices {...iconProps} />;
    }
  };

  return (
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
              fontSize: 'clamp(2rem, 4vw + 1rem, 3rem)',
            }}
          >
            Additional Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Comprehensive add-on services to enhance your digital presence and maximize your project's impact
          </Typography>
        </Box>

        {/* Services Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: { xs: 2, sm: 3, md: 4 },
            mb: { xs: 6, md: 8 },
          }}
        >
          {ADDITIONAL_SERVICES.map((service) => (
            <Card
              key={service.id}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
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
                    ? '0 1rem 2rem rgba(0, 0, 0, 0.3)'
                    : '0 1rem 2rem rgba(0, 0, 0, 0.15)',
                  borderColor: 'primary.main',
                },
              }}
            >
              <CardContent sx={{ p: 3, flexGrow: 1, textAlign: 'center' }}>
                {/* Service Icon */}
                <Box sx={{ mb: 2 }}>
                  {getServiceIcon(service.icon)}
                </Box>

                {/* Service Title */}
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: 'text.primary',
                    fontSize: '1.125rem',
                  }}
                >
                  {service.title}
                </Typography>

                {/* Service Description */}
                <Typography
                  variant="body2"
                  sx={{
                    mb: 3,
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    fontSize: '0.875rem',
                  }}
                >
                  {service.description}
                </Typography>

                {/* Price and Timeline */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {service.price}
                  </Typography>
                  <Chip
                    label={service.timeline}
                    size="small"
                    sx={{
                      backgroundColor: isDark
                        ? 'rgba(34, 197, 94, 0.2)'
                        : 'rgba(34, 197, 94, 0.1)',
                      color: 'success.main',
                      border: `1px solid ${theme.palette.success.main}40`,
                      fontWeight: 600,
                      fontSize: '0.75rem',
                    }}
                  />
                </Box>

                {/* Key Features */}
                <Stack spacing={1} sx={{ mb: 3, textAlign: 'left' }}>
                  {service.features.slice(0, 3).map((feature, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '0.8rem',
                        '&:before': {
                          content: '"✓"',
                          color: 'primary.main',
                          fontWeight: 'bold',
                          mr: 1,
                          fontSize: '0.875rem',
                        },
                      }}
                    >
                      {feature}
                    </Typography>
                  ))}
                  {service.features.length > 3 && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontStyle: 'italic',
                        fontSize: '0.75rem',
                        textAlign: 'center',
                        mt: 1,
                      }}
                    >
                      +{service.features.length - 3} more features
                    </Typography>
                  )}
                </Stack>

                {/* CTA Button */}
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{
                    mt: 'auto',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    fontSize: '0.875rem',
                    py: 1,
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
          ))}
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            Need a custom solution?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: 'text.secondary',
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            We offer tailored solutions for unique business requirements. Let's discuss your specific needs.
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
              fontSize: '1rem',
              '&:hover': {
                background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                transform: 'translateY(-0.125rem) scale(1.02)',
              },
            }}
          >
            Get Custom Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AdditionalServices;
