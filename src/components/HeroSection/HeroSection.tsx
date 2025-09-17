 'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
  useTheme,
  Card,
  CardContent,
} from '@mui/material';
import {
  ArrowForward,
  Rocket,
  Public,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_INFO, COMPANY_STATS } from '@/data/constants';
import m3Image from '@/assets/m3.jpg';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 12, md: 16 },
        display: 'flex',
        alignItems: 'center',
        background: isDark
          ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
          : 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)',
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

      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '50%',
          backgroundImage: `url(${m3Image.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right top',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isDark
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.05) 50%, transparent 100%)'
              : 'linear-gradient(135deg, rgba(248, 250, 252, 0.2) 0%, rgba(248, 250, 252, 0.05) 50%, transparent 100%)',
          },
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 6, lg: 8 },
            minHeight: '80vh',
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: { xs: '1', lg: '1' }, width: '100%' }}>
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
              {/* Main Heading */}
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
                }}
              >
                {COMPANY_INFO.name}
              </Typography>

              {/* Tagline */}
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 600,
                }}
              >
                {COMPANY_INFO.tagline}
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mx: { xs: 'auto', lg: 0 },
                  lineHeight: 1.7,
                }}
              >
                {COMPANY_INFO.description}
              </Typography>

              {/* Trust Indicator */}
              <Box
                sx={{
                  mb: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 22,
                    flexShrink: 0,
                    position: 'relative',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.7 },
                    },
                  }}
                >
                  {/* Canadian Flag */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(90deg, #FF0000 0%, #FF0000 25%, #FFFFFF 25%, #FFFFFF 75%, #FF0000 75%, #FF0000 100%)',
                    }}
                  />
                  {/* Maple Leaf */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '12px',
                      color: '#FF0000',
                      fontWeight: 'bold',
                    }}
                  >
                    🍁
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'success.main',
                    fontWeight: 600,
                    fontSize: 'clamp(0.875rem, 1vw + 0.25rem, 1rem)',
                    textAlign: { xs: 'center', lg: 'left' },
                  }}
                >
                  Trusted by 10+ Canadian businesses • Free consultation available
                </Typography>
              </Box>

              {/* CTA Buttons */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{
                  mb: 4,
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                }}
              >
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
                    fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.125rem)',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                      transform: 'translateY(-0.125rem) scale(1.02)',
                    },
                  }}
                >
                  Get Started
                </Button>
                <Button
                  component={Link}
                  href="/services"
                  variant="outlined"
                  size="large"
                  endIcon={<Rocket />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.125rem)',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                      transform: 'translateY(-0.125rem) scale(1.02)',
                    },
                  }}
                >
                  Our Services
                </Button>
              </Stack>

              {/* Trust Indicators */}
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                  flexWrap: 'wrap',
                  gap: 1,
                }}
              >
                <Chip
                  label="✨ Modern Tech Stack"
                  variant="outlined"
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    fontSize: 'clamp(0.75rem, 1vw + 0.25rem, 0.875rem)',
                  }}
                />
                <Chip
                  label="🚀 Fast Delivery"
                  variant="outlined"
                  sx={{
                    borderColor: 'secondary.main',
                    color: 'secondary.main',
                    fontSize: 'clamp(0.75rem, 1vw + 0.25rem, 0.875rem)',
                  }}
                />
                <Chip
                  label="🛡️ Secure & Reliable"
                  variant="outlined"
                  sx={{
                    borderColor: 'success.main',
                    color: 'success.main',
                    fontSize: 'clamp(0.75rem, 1vw + 0.25rem, 0.875rem)',
                  }}
                />
              </Stack>
            </Box>
          </Box>

          {/* Right Content - Stats & Services Preview */}
          <Box sx={{ flex: { xs: '1', lg: '1' }, width: '100%' }}>
            <Box sx={{ position: 'relative' }}>

              {/* Stats Grid */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 2,
                  mb: { xs: 8, sm: 6, md: 4, lg: 0 },
                }}
              >
                {COMPANY_STATS.map((stat) => (
                  <Card
                    key={stat.label}
                    sx={{
                      textAlign: 'center',
                      background: isDark
                        ? 'rgba(30, 41, 59, 0.8)'
                        : 'rgba(248, 250, 252, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${theme.palette.divider}`,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-0.25rem)',
                        boxShadow: isDark
                          ? '0 1rem 2rem rgba(0, 0, 0, 0.3)'
                          : '0 1rem 2rem rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <CardContent sx={{ py: 2 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          mb: 0.5,
                          fontSize: 'clamp(1.5rem, 3vw + 1rem, 2rem)',
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: 'clamp(0.75rem, 1vw + 0.25rem, 0.875rem)',
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
