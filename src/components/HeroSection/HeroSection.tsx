'use client';

import React, { useEffect, useState } from 'react';
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
import { motion } from 'framer-motion';
import { COMPANY_INFO, COMPANY_STATS } from '@/data/constants';

// Mountain Layer Component
const MountainLayer: React.FC<{ opacity: number; zIndex: number }> = ({ opacity, zIndex }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '25%',
        width: '150%',
        height: '75%',
        background: `linear-gradient(to top, ${isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(57, 94, 202, 0.3)'} 0%, ${isDark ? 'rgba(59, 130, 246, 0.05)' : 'rgba(57, 94, 202, 0.1)'} 100%)`,
        clipPath: zIndex === 3 
          ? 'polygon(0% 100%, 15% 60%, 25% 20%, 35% 50%, 50% 15%, 65% 45%, 80% 25%, 90% 55%, 100% 40%, 100% 100%)'
          : zIndex === 2
          ? 'polygon(0% 100%, 20% 70%, 35% 35%, 50% 60%, 70% 30%, 85% 65%, 100% 50%, 100% 100%)'
          : 'polygon(0% 100%, 25% 80%, 45% 50%, 65% 75%, 85% 45%, 100% 70%, 100% 100%)',
        pointerEvents: 'none',
        zIndex: zIndex,
        opacity: opacity,
        filter: `drop-shadow(0 2px 8px ${isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(57, 94, 202, 0.2)'})`,
        borderTop: `1px solid ${isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(57, 94, 202, 0.15)'}`,
      }}
    />
  );
};


// Fuzzy White Snow Elements
const FuzzySnowElements: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  return (
    <>
      {/* Small Snowflake 1 - Falling Animation */}
      <motion.div
        animate={{
          y: [-100, window.innerHeight + 100],
          x: [0, 30, -20, 10],
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
          delay: 0,
        }}
        style={{
          position: 'absolute',
          top: '-100px',
          right: '12%',
          width: '20px',
          height: '20px',
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          boxShadow: isDark
            ? '0 0 10px rgba(255, 255, 255, 0.3)'
            : '0 0 10px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Small Snowflake 2 - Falling Animation */}
      <motion.div
        animate={{
          y: [-80, window.innerHeight + 80],
          x: [0, -25, 15, -10],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
          delay: 3,
        }}
        style={{
          position: 'absolute',
          top: '-80px',
          left: '5%',
          width: '20px',
          height: '20px',
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          boxShadow: isDark
            ? '0 0 10px rgba(255, 255, 255, 0.3)'
            : '0 0 10px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Small Snowflake 3 - Falling Animation */}
      <motion.div
        animate={{
          y: [-60, window.innerHeight + 60],
          x: [0, 20, -15, 5],
          opacity: [0.6, 1, 0.8, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
          delay: 1,
        }}
        style={{
          position: 'absolute',
          top: '-60px',
          right: '20%',
          width: '20px',
          height: '20px',
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          boxShadow: isDark
            ? '0 0 10px rgba(255, 255, 255, 0.3)'
            : '0 0 10px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Small Snowflake 4 - Falling Animation */}
      <motion.div
        animate={{
          y: [-40, window.innerHeight + 40],
          x: [0, 15, -10, 8],
          opacity: [0.4, 0.8, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
          delay: 5,
        }}
        style={{
          position: 'absolute',
          top: '-40px',
          left: '15%',
          width: '20px',
          height: '20px',
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          boxShadow: isDark
            ? '0 0 10px rgba(255, 255, 255, 0.3)'
            : '0 0 10px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Small Snowflake 5 - Falling Animation */}
      <motion.div
        animate={{
          y: [-50, window.innerHeight + 50],
          x: [0, -12, 18, -5],
          scale: [0.8, 1.1, 0.9, 0.8],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'linear',
          delay: 7,
        }}
        style={{
          position: 'absolute',
          top: '-50px',
          left: '25%',
          width: '20px',
          height: '20px',
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          boxShadow: isDark
            ? '0 0 10px rgba(255, 255, 255, 0.3)'
            : '0 0 10px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Small Snowflake 6 - Falling Animation */}
      <motion.div
        animate={{
          y: [-30, window.innerHeight + 30],
          x: [0, 25, -8, 12],
          opacity: [0.5, 0.9, 0.7, 0.5],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'linear',
          delay: 2,
        }}
        style={{
          position: 'absolute',
          top: '-30px',
          right: '35%',
          width: '20px',
          height: '20px',
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          boxShadow: isDark
            ? '0 0 10px rgba(255, 255, 255, 0.3)'
            : '0 0 10px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Small Snowflake 7 - Falling Animation */}
      <motion.div
        animate={{
          y: [-70, window.innerHeight + 70],
          x: [0, -18, 22, -8],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.7, 0.5, 0.3],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'linear',
          delay: 4,
        }}
        style={{
          position: 'absolute',
          top: '-70px',
          left: '8%',
          width: '20px',
          height: '20px',
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          boxShadow: isDark
            ? '0 0 10px rgba(255, 255, 255, 0.3)'
            : '0 0 10px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Small Snowflake 8 - Falling Animation */}
      <motion.div
        animate={{
          y: [-90, window.innerHeight + 90],
          x: [0, 35, -12, 18],
          scale: [0.9, 1.2, 0.8, 0.9],
          opacity: [0.4, 0.9, 0.6, 0.4],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'linear',
          delay: 6,
        }}
        style={{
          position: 'absolute',
          top: '-90px',
          right: '8%',
          width: '20px',
          height: '20px',
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          boxShadow: isDark
            ? '0 0 10px rgba(255, 255, 255, 0.3)'
            : '0 0 10px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Small Snowflake 9 - Falling Animation */}
      <motion.div
        animate={{
          y: [-45, window.innerHeight + 45],
          x: [0, -20, 28, -15],
          rotate: [0, -180, -360],
          opacity: [0.6, 0.8, 0.9, 0.6],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'linear',
          delay: 8,
        }}
        style={{
          position: 'absolute',
          top: '-45px',
          left: '35%',
          width: '20px',
          height: '20px',
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          boxShadow: isDark
            ? '0 0 10px rgba(255, 255, 255, 0.3)'
            : '0 0 10px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Small Snowflake 10 - Falling Animation */}
      <motion.div
        animate={{
          y: [-65, window.innerHeight + 65],
          x: [0, 15, -25, 10],
          scale: [1, 0.7, 1.3, 1],
          opacity: [0.5, 1, 0.4, 0.5],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
          delay: 9,
        }}
        style={{
          position: 'absolute',
          top: '-65px',
          right: '45%',
          width: '20px',
          height: '20px',
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(2px)',
          boxShadow: isDark
            ? '0 0 10px rgba(255, 255, 255, 0.3)'
            : '0 0 10px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </>
  );
};

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


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

      {/* Fuzzy White Snow Elements */}
      <FuzzySnowElements />

      {/* Mountain Layers */}
      <MountainLayer opacity={0.2} zIndex={1} />
      <MountainLayer opacity={0.3} zIndex={2} />
      <MountainLayer opacity={0.4} zIndex={3} />

      {/* Peak Glow Effects - Removed to eliminate glare behind logo */}


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
              {/* Logo Display */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: '200px', md: '300px' },
                    height: { xs: '200px', md: '300px' },
                    borderRadius: '50%',
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                      : 'linear-gradient(135deg, rgba(57, 94, 202, 0.1) 0%, rgba(132, 139, 216, 0.1) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    border: `2px solid ${theme.palette.primary.main}40`,
                    animation: 'float 6s ease-in-out infinite',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-20px)' },
                    },
                  }}
                >
                  <Image
                    src="/snowpeak-logo/vector/default.svg"
                    alt={COMPANY_INFO.name}
                    width={360}
                    height={360}
                    style={{ filter: isDark ? 'brightness(1.2)' : 'none' }}
                  />
                </Box>
              </Box>

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
