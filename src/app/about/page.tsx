'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  Avatar,
  Chip,
} from '@mui/material';
import {
  ArrowForward,
  Code,
  Business,
  EmojiObjects,
  Handshake,
  Star,
} from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import laptopImage from '../../assets/laptop.jpg';
 

const AboutPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const values = [
    {
      icon: <Handshake sx={{ fontSize: '2rem', color: 'primary.main' }} />,
      title: 'Partnership That Delivers',
      description: 'No surprises, no hidden costs, no technical jargon. We keep you informed every step of the way and treat your success as our own. When you win, we win.',
    },
    {
      icon: <EmojiObjects sx={{ fontSize: '2rem', color: 'primary.main' }} />,
      title: 'User-Centered Excellence',
      description: 'Your users\' experience drives every decision we make. From intuitive interfaces to lightning-fast performance, we build solutions that your customers will love to use.',
    },
    {
      icon: <Star sx={{ fontSize: '2rem', color: 'primary.main' }} />,
      title: 'Solutions That Scale',
      description: 'We don\'t just deliver what you request—we engineer solutions that grow with your business. Our code is built to last, scale, and adapt as your needs evolve.',
    },
  ];

  return (
    <>
      <Box>
        {/* Hero Section */}
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            background: isDark
              ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
              : 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Box sx={{ 
                flex: { md: '1' }, 
                pl: { md: 6 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
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
                    fontSize: 'clamp(1.8rem, 4vw + 0.5rem, 2.8rem)',
                    lineHeight: 1.2,
                  }}
                >
                  Building Beyond Expectations
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    fontSize: 'clamp(1rem, 1.5vw + 0.3rem, 1.2rem)',
                  }}
                >
                  In 2025, a team of passionate developers recognized a gap in the digital landscape. 
                  While countless agencies promised quick solutions and template-based websites, businesses 
                  were left with generic results that failed to capture their unique vision. We founded 
                  SnowPeak with a simple belief: every business deserves software that&apos;s as unique as their story.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    fontSize: 'clamp(0.9rem, 1.2vw + 0.3rem, 1.1rem)',
                  }}
                >
                  Our name reflects our philosophy—just as mountain peaks rise above the ordinary landscape, 
                  we build digital solutions that elevate businesses beyond standard expectations. We don&apos;t 
                  just code; we craft experiences that resonate with your audience and drive real results.
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
                    alignSelf: 'flex-start',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                      transform: 'translateY(-0.125rem) scale(1.02)',
                    },
                  }}
                >
                  Let&apos;s Work Together
                </Button>
              </Box>

              {/* Right Side - Laptop Image */}
              <Box sx={{ flex: { md: '1.2' }, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 650,
                    height: 500,
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: isDark
                      ? '0 2rem 4rem rgba(0, 0, 0, 0.4)'
                      : '0 2rem 4rem rgba(0, 0, 0, 0.15)',
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-0.5rem) scale(1.02)',
                      boxShadow: isDark
                        ? '0 3rem 6rem rgba(0, 0, 0, 0.5)'
                        : '0 3rem 6rem rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <Image
                    src={laptopImage}
                    alt="SnowPeak Development Team"
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                    priority
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Founding Team Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: isDark
              ? 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #1E293B 100%)'
              : 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 50%, #F1F5F9 100%)',
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
                The Minds Behind SnowPeak
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  mb: 6,
                }}
              >
                Our founding team combines deep technical expertise with strategic business insight. 
                Our technical architects bring diverse perspectives and specialized skills to every 
                development challenge, while our strategic operations leader ensures every project 
                delivers measurable business value.
              </Typography>
            </Box>

             {/* Team Cards Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: 'repeat(3, 1fr)',
                },
                gap: 4,
                maxWidth: '1000px',
                mx: 'auto',
              }}
            >
              {/* Safiuddin Card */}
              <Card
                sx={{
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 3,
                  p: 3,
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-0.25rem)',
                    boxShadow: isDark
                      ? '0 1rem 2rem rgba(0, 0, 0, 0.3)'
                      : '0 1rem 2rem rgba(0, 0, 0, 0.1)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 2,
                    backgroundColor: 'primary.main',
                    fontSize: '1.5rem',
                  }}
                >
                  <Code />
                </Avatar>
                <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
                  Safiuddin Ahmed Mohammad
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: 'primary.main', fontWeight: 500 }}>
                  Co-Founder - Engineering Lead & Product Architect
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Safiuddin combines deep technical expertise with a drive for innovation. He designs system architectures, leads development efforts, and ensures that solutions are as robust under the hood as they are seamless on the surface. His strength lies in turning complex problems into elegant, robust, and scalable products.
                </Typography>
              </Card>

              {/* Waleed Card */}
              <Card
                sx={{
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 3,
                  p: 3,
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-0.25rem)',
                    boxShadow: isDark
                      ? '0 1rem 2rem rgba(0, 0, 0, 0.3)'
                      : '0 1rem 2rem rgba(0, 0, 0, 0.1)',
                    borderColor: 'secondary.main',
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 2,
                    backgroundColor: 'secondary.main',
                    fontSize: '1.5rem',
                  }}
                >
                  <Business />
                </Avatar>
                <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
                  Waleed Amray
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: 'secondary.main', fontWeight: 500 }}>
                  Co-Founder - Business Strategy & Client Partnerships
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Waleed connects technology with business outcomes. With a background in finance and business analysis, he helps clients clarify goals, measure success, and unlock ROI. He ensures every project is grounded in strategy and delivers value beyond the launch.
                </Typography>
              </Card>

              {/* Kevin Tran Card */}
              <Card
                sx={{
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 3,
                  p: 3,
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-0.25rem)',
                    boxShadow: isDark
                      ? '0 1rem 2rem rgba(0, 0, 0, 0.3)'
                      : '0 1rem 2rem rgba(0, 0, 0, 0.1)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 2,
                    backgroundColor: 'primary.main',
                    fontSize: '1.5rem',
                  }}
                >
                  <Code />
                </Avatar>
                <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
                  Kevin Tran
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: 'primary.main', fontWeight: 500 }}>
                  Co-Founder - Engineering Lead & Systems Architect
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Kevin specializes in building high-performance software systems. With a strong background in modern frameworks and infrastructure, he ensures products are engineered for speed, stability, and long-term growth. His focus is on writing clean, maintainable code that powers resilient digital experiences.
                </Typography>
              </Card>
            </Box>
          </Container>
        </Box>

        {/* Company Evolution Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: isDark
              ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
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
                Our Journey
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 6,
                alignItems: 'center',
              }}
            >
              {/* Left Side - Company Stats */}
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' },
                    gap: 4,
                  }}
                >
                <Card
                  sx={{
                    background: isDark
                      ? 'rgba(30, 41, 59, 0.8)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    textAlign: 'center',
                    p: 3,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-0.25rem)',
                      boxShadow: isDark
                        ? '0 1rem 2rem rgba(0, 0, 0, 0.3)'
                        : '0 1rem 2rem rgba(0, 0, 0, 0.1)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    10+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Projects Completed
                  </Typography>
                </Card>

                <Card
                  sx={{
                    background: isDark
                      ? 'rgba(30, 41, 59, 0.8)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    textAlign: 'center',
                    p: 3,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-0.25rem)',
                      boxShadow: isDark
                        ? '0 1rem 2rem rgba(0, 0, 0, 0.3)'
                        : '0 1rem 2rem rgba(0, 0, 0, 0.1)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    2025
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Founded
                  </Typography>
                </Card>

                <Card
                  sx={{
                    background: isDark
                      ? 'rgba(30, 41, 59, 0.8)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    textAlign: 'center',
                    p: 3,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-0.25rem)',
                      boxShadow: isDark
                        ? '0 1rem 2rem rgba(0, 0, 0, 0.3)'
                        : '0 1rem 2rem rgba(0, 0, 0, 0.1)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    20+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Technologies
                  </Typography>
                </Card>

                <Card
                  sx={{
                    background: isDark
                      ? 'rgba(30, 41, 59, 0.8)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    textAlign: 'center',
                    p: 3,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-0.25rem)',
                      boxShadow: isDark
                        ? '0 1rem 2rem rgba(0, 0, 0, 0.3)'
                        : '0 1rem 2rem rgba(0, 0, 0, 0.1)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    100%
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Client Satisfaction
                  </Typography>
                </Card>
                </Box>
              </Box>

              {/* Right Side - Journey Text */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    mb: 3,
                    fontSize: '1.125rem',
                  }}
                >
                  What started as a shared vision among passionate developers has evolved into a 
                  comprehensive digital solutions company. From our first client project to building 
                  complex enterprise applications, we&apos;ve maintained our commitment to quality 
                  craftsmanship while expanding our capabilities.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    fontSize: '1.125rem',
                  }}
                >
                  Today, we&apos;ve successfully delivered 10+ projects across web development, mobile 
                  applications, and browser extensions, serving clients who value custom solutions over 
                  cookie-cutter approaches. Each project has taught us something new, making us better 
                  partners for the next challenge.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Values Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: isDark
              ? 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #1E293B 100%)'
              : 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 50%, #F1F5F9 100%)',
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
                Why Choose SnowPeak
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                What sets us apart isn&apos;t just our technical expertise—it&apos;s how we work with you to achieve extraordinary results
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: 'repeat(3, 1fr)',
                },
                gap: 4,
              }}
            >
              {values.map((value, index) => (
                <Card
                  key={index}
                  sx={{
                    height: '100%',
                    background: isDark
                      ? 'rgba(30, 41, 59, 0.8)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    textAlign: 'center',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-0.25rem)',
                      boxShadow: isDark
                        ? '0 1rem 2rem rgba(0, 0, 0, 0.3)'
                        : '0 1rem 2rem rgba(0, 0, 0, 0.1)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 2 }}>
                      {value.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: isDark
              ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
              : 'linear-gradient(135deg, #E2E8F0 0%, #F8FAFC 50%, #E2E8F0 100%)',
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
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
                Ready to Build Something Amazing?
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
                Let&apos;s discuss your project and create a digital solution that goes beyond the summit
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
                Start Your Project
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
