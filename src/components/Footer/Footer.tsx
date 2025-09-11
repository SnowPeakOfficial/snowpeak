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
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: 4, md: 6 },
            mb: 4,
          }}
        >
          {/* Company Info */}
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1 }}>
              <Image
                src="/snowpeak-logo/vector/defaultLandscape.svg"
                alt={COMPANY_INFO.name}
                width={300}
                height={300}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.6,
              }}
            >
              Creating exceptional digital experiences that help businesses reach new heights.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href={CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: '#0077B5',
                    backgroundColor: 'rgba(0, 119, 181, 0.1)',
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href={CONTACT_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: '#1DA1F2',
                    backgroundColor: 'rgba(29, 161, 242, 0.1)',
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: '#E4405F',
                    backgroundColor: 'rgba(228, 64, 95, 0.1)',
                  },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: '#1877F2',
                    backgroundColor: 'rgba(24, 119, 242, 0.1)',
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href={CONTACT_INFO.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: '#000',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Box
                  component="svg"
                  sx={{ width: 24, height: 24, fill: 'currentColor' }}
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
                mb: 2,
                px: 1,
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1}>
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
                    maxWidth: '60%',
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
                mb: 2,
                px: 1,
              }}
            >
              Services
            </Typography>
            <Stack spacing={1}>
              {SERVICES.map((service) => (
                <Button
                  key={service.id}
                  component={Link}
                  href={`/services#${service.id}`}
                  variant="text"
                  sx={{
                    justifyContent: 'flex-start',
                    color: 'text.secondary',
                    textTransform: 'none',
                    fontWeight: 400,
                    px: 1,
                    maxWidth: '60%',
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
                mb: 2,
              }}
            >
              Contact
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: '1.25rem', color: 'text.secondary' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                  }}
                  component="a"
                  href={`mailto:${CONTACT_INFO.email}`}
                >
                  {CONTACT_INFO.email}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: '1.25rem', color: 'text.secondary' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                  }}
                  component="a"
                  href={`tel:${CONTACT_INFO.phone}`}
                >
                  {CONTACT_INFO.phone}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn sx={{ fontSize: '1.25rem', color: 'text.secondary' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {CONTACT_INFO.address}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
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
