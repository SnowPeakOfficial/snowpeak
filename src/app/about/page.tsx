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
 

const AboutPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const values = [
    {
      icon: <Handshake sx={{ fontSize: '2rem', color: 'primary.main' }} />,
      title: 'Honest Collaboration',
      description: 'We believe in transparent communication and working closely with our clients as true partners.',
    },
    {
      icon: <EmojiObjects sx={{ fontSize: '2rem', color: 'primary.main' }} />,
      title: 'Thoughtful Design',
      description: 'Every pixel, interaction, and line of code is crafted with intention and user experience in mind.',
    },
    {
      icon: <Star sx={{ fontSize: '2rem', color: 'primary.main' }} />,
      title: 'Quality Craftsmanship',
      description: "We don't just build what you ask for — we help you figure out what will actually work best.",
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
                gap: 6,
              }}
            >
              <Box sx={{ flex: { md: '2' } }}>
                <Chip
                  label="Based in Toronto, Canada"
                  icon={
                    <Box
                      sx={{
                        width: 16,
                        height: 12,
                        flexShrink: 0,
                        position: 'relative',
                        borderRadius: '2px',
                        overflow: 'hidden',
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
                          fontSize: '6px',
                          color: '#FF0000',
                          fontWeight: 'bold',
                        }}
                      >
                        🍁
                      </Box>
                    </Box>
                  }
                  sx={{
                    mb: 3,
                    backgroundColor: isDark
                      ? 'rgba(59, 130, 246, 0.2)'
                      : 'rgba(57, 94, 202, 0.1)',
                    color: 'primary.main',
                    border: `1px solid ${theme.palette.primary.main}40`,
                  }}
                />
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
                  Meet the Team Behind SnowPeak
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    fontSize: 'clamp(1.125rem, 2vw + 0.5rem, 1.5rem)',
                  }}
                >
                  We&apos;re Canadian developers passionate about creating digital experiences 
                  that go beyond expectations — building solutions that reach higher than 
                  what&apos;s typical.
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
                  Let&apos;s Work Together
                </Button>
              </Box>
              <Box sx={{ flex: { md: '1' } }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    alignItems: 'center',
                  }}
                >
                  {/* Developer Card */}
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
                      maxWidth: 300,
                      width: '100%',
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
                      Co-Founder - Technical Architect
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Designs and builds thoughtful digital experiences — from the first line of code to final polish.
                    </Typography>
                  </Card>

                  {/* Business Partner Card */}
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
                      maxWidth: 300,
                      width: '100%',
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
                      Co-Founder - Strategic Operations
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Drives strategy, client growth, and ensures every creative vision aligns with business goals.
                    </Typography>
                  </Card>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Our Story Section */}
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
                From Passion to Purpose
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 6,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Card
                  sx={{
                    height: '100%',
                    background: isDark
                      ? 'rgba(30, 41, 59, 0.8)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Code sx={{ fontSize: '2.5rem', color: 'primary.main', mr: 2 }} />
                      <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        The Developer
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        mb: 3,
                      }}
                    >
                      I&apos;m a Canadian software developer with several years of experience building 
                      modern websites, web apps, browser extensions, and mobile solutions. What 
                      started as a passion for clean design and solving real problems has evolved 
                      into something bigger.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      I specialize in custom-built solutions — not cookie-cutter templates. 
                      Whether it&apos;s a polished landing page or a complex app, I care about the 
                      details that make users think: &quot;Wow, this works exactly how I hoped.&quot;
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Card
                  sx={{
                    height: '100%',
                    background: isDark
                      ? 'rgba(30, 41, 59, 0.8)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Business sx={{ fontSize: '2.5rem', color: 'primary.main', mr: 2 }} />
                      <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        The Partnership
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        mb: 3,
                      }}
                    >
                      SnowPeak isn&apos;t just a one-person show. I work closely with a business 
                      partner who handles the strategic side — client relationships, project 
                      management, and ensuring every project delivers real business value.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      This partnership means our clients get both technical excellence and 
                      dedicated business focus — something many solo developers can&apos;t offer. 
                      We&apos;re your complete digital team.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Values Section */}
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
                Our Values
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                The principles that guide everything we do
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
