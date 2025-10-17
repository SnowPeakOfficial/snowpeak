'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Divider,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  LinkedIn,
  Twitter,
  Email,
  Phone,
  LocationOn,
  ArrowUpward,
  Facebook,
  Instagram,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_INFO, CONTACT_INFO, NAVIGATION_ITEMS, SERVICES } from '@/data/constants';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: isDark
          ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)'
          : 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
        borderTop: `1px solid ${theme.palette.divider}`,
        pt: { xs: 4, md: 6 },
        pb: 2,
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: 2, sm: 3, md: 6 },
            mb: { xs: 3, md: 4 },
          }}
        >
          {/* Company Info */}
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: { xs: 1, sm: 1.5 } }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: { xs: '140px', sm: '180px', md: '200px' },
                }}
              >
                <Image
                  src={isDark ? "/snowpeak-logo/vector/defaultLandscape-white.svg" : "/snowpeak-logo/vector/defaultLandscape.svg"}
                  alt={COMPANY_INFO.name}
                  width={200}
                  height={200}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: { xs: 1.5, sm: 2 },
                lineHeight: 1.6,
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Creating exceptional digital experiences that help businesses reach new heights.
            </Typography>
            <Stack 
              direction="row" 
              spacing={{ xs: 0.25, sm: 1 }} 
              sx={{
                flexWrap: 'nowrap',
                justifyContent: { xs: 'flex-start', sm: 'flex-start' },
              }}
            >
              <IconButton
                component="a"
                href={CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  p: { xs: 0.5, sm: 1 },
                  '&:hover': {
                    color: '#0077B5',
                    backgroundColor: 'rgba(0, 119, 181, 0.1)',
                  },
                }}
              >
                <LinkedIn sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
              </IconButton>
              <IconButton
                component="a"
                href={CONTACT_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  p: { xs: 0.5, sm: 1 },
                  '&:hover': {
                    color: '#1DA1F2',
                    backgroundColor: 'rgba(29, 161, 242, 0.1)',
                  },
                }}
              >
                <Twitter sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
              </IconButton>
              <IconButton
                component="a"
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  p: { xs: 0.5, sm: 1 },
                  '&:hover': {
                    color: '#E4405F',
                    backgroundColor: 'rgba(228, 64, 95, 0.1)',
                  },
                }}
              >
                <Instagram sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
              </IconButton>
              <IconButton
                component="a"
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  p: { xs: 0.5, sm: 1 },
                  '&:hover': {
                    color: '#1877F2',
                    backgroundColor: 'rgba(24, 119, 242, 0.1)',
                  },
                }}
              >
                <Facebook sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
              </IconButton>
              <IconButton
                component="a"
                href={CONTACT_INFO.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  p: { xs: 0.5, sm: 1 },
                  '&:hover': {
                    color: '#000',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Box
                  component="svg"
                  sx={{ 
                    width: { xs: '1.25rem', sm: '1.5rem' }, 
                    height: { xs: '1.25rem', sm: '1.5rem' }, 
                    fill: 'currentColor',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </Box>
              </IconButton>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                mb: { xs: 1, sm: 1.5, md: 2 },
                px: 1,
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.25rem' },
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={{ xs: 0.5, sm: 0.75, md: 1 }}>
              {NAVIGATION_ITEMS.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  variant="text"
                  sx={{
                    justifyContent: 'flex-start',
                    color: 'text.secondary',
                    textTransform: 'none',
                    fontWeight: 400,
                    px: 1,
                    py: { xs: 0.25, sm: 0.5 },
                    minHeight: { xs: '28px', sm: '32px', md: '36px' },
                    fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.875rem' },
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Box>

          {/* Services */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                mb: { xs: 1, sm: 1.5, md: 2 },
                px: 1,
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.25rem' },
              }}
            >
              Services
            </Typography>
            <Stack spacing={{ xs: 0.5, sm: 0.75, md: 1 }}>
              {SERVICES.map((service) => (
                <Button
                  key={service.id}
                  component={Link}
                  href={`/services/${service.id}`}
                  variant="text"
                  sx={{
                    justifyContent: 'flex-start',
                    color: 'text.secondary',
                    textTransform: 'none',
                    fontWeight: 400,
                    px: 1,
                    py: { xs: 0.25, sm: 0.5 },
                    minHeight: { xs: '28px', sm: '32px', md: '36px' },
                    fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.875rem' },
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {service.title}
                </Button>
              ))}
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                mb: { xs: 1, sm: 1.5, md: 2 },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.25rem' },
              }}
            >
              Contact
            </Typography>
            <Stack spacing={{ xs: 1, sm: 1.5, md: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
                <Email sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, color: 'text.secondary' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    '&:hover': { color: 'primary.main' },
                  }}
                  component="a"
                  href={`mailto:${CONTACT_INFO.email}`}
                >
                  {CONTACT_INFO.email}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
                <Phone sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, color: 'text.secondary' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    '&:hover': { color: 'primary.main' },
                  }}
                  component="a"
                  href={`tel:${CONTACT_INFO.phone}`}
                >
                  {CONTACT_INFO.phone}
                </Typography>
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
                <LocationOn sx={{ fontSize: '1.25rem', color: 'text.secondary' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {CONTACT_INFO.address}
                </Typography>
              </Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                {CONTACT_INFO.hours}
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: 'center',
            }}
          >
            <Button
              component={Link}
              href="/privacy"
              variant="text"
              size="small"
              sx={{
                color: 'text.secondary',
                textTransform: 'none',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Privacy Policy
            </Button>
            <Button
              component={Link}
              href="/terms"
              variant="text"
              size="small"
              sx={{
                color: 'text.secondary',
                textTransform: 'none',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Terms of Service
            </Button>
            <IconButton
              onClick={scrollToTop}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                },
              }}
            >
              <ArrowUpward />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
