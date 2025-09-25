'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Breadcrumbs,
  Link as MuiLink,
  useTheme,
  Button,
} from '@mui/material';
import {
  Home,
  Security,
  Shield,
  Visibility,
  Cookie,
  ContactMail,
  Update,
  ArrowForward,
} from '@mui/icons-material';
import Link from 'next/link';

const PrivacyPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <Visibility sx={{ fontSize: '1.5rem', color: 'primary.main' }} />,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you contact us or request our services, we may collect personal information such as your name, email address, phone number, company name, and project details. This information is provided voluntarily when you fill out contact forms, send emails, or communicate with us directly.'
        },
        {
          subtitle: 'Technical Information',
          text: 'We automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, pages visited, and time spent on our site. This helps us improve our website performance and user experience.'
        },
        {
          subtitle: 'Project Information',
          text: 'During our engagement, we may collect information related to your business, project requirements, technical specifications, and any materials you provide for the development process.'
        }
      ]
    },
    {
      id: 'data-use',
      title: 'How We Use Your Information',
      icon: <Security sx={{ fontSize: '1.5rem', color: 'primary.main' }} />,
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'We use your information primarily to deliver our web development, mobile application, and digital services. This includes project planning, development, testing, deployment, and ongoing support.'
        },
        {
          subtitle: 'Communication',
          text: 'We use your contact information to respond to inquiries, provide project updates, send important notifications about our services, and maintain our professional relationship.'
        },
        {
          subtitle: 'Website Improvement',
          text: 'Technical information helps us analyze website usage patterns, identify areas for improvement, and ensure our site functions properly across different devices and browsers.'
        },
        {
          subtitle: 'Legal Compliance',
          text: 'We may use your information to comply with applicable laws, regulations, legal processes, or governmental requests.'
        }
      ]
    },
    {
      id: 'data-protection',
      title: 'Data Protection & Security',
      icon: <Shield sx={{ fontSize: '1.5rem', color: 'primary.main' }} />,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes secure data transmission, encrypted storage, and access controls.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Project-related information is typically retained for the duration of our engagement plus a reasonable period for support and legal purposes.'
        },
        {
          subtitle: 'Access Controls',
          text: 'Access to your personal information is restricted to authorized personnel who need the information to perform their job functions. All team members are bound by confidentiality obligations.'
        }
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      icon: <Cookie sx={{ fontSize: '1.5rem', color: 'primary.main' }} />,
      content: [
        {
          subtitle: 'Essential Cookies',
          text: 'Our website uses essential cookies that are necessary for the site to function properly. These cookies enable basic features like page navigation, access to secure areas, and remembering your preferences.'
        },
        {
          subtitle: 'Analytics',
          text: 'We may use analytics tools to understand how visitors interact with our website. This helps us improve our content and user experience. These tools may use cookies to collect anonymous usage data.'
        },
        {
          subtitle: 'Cookie Control',
          text: 'You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our website.'
        }
      ]
    },
    {
      id: 'third-party',
      title: 'Third-Party Services',
      icon: <ContactMail sx={{ fontSize: '1.5rem', color: 'primary.main' }} />,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may work with trusted third-party service providers to help deliver our services, such as hosting providers, email services, analytics tools, and payment processors. These providers are contractually bound to protect your information and use it only for the specified purposes.'
        },
        {
          subtitle: 'No Data Selling',
          text: 'We do not sell, trade, or rent your personal information to third parties for marketing purposes. Your information is only shared when necessary to deliver our services or comply with legal requirements.'
        },
        {
          subtitle: 'External Links',
          text: 'Our website may contain links to external sites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.'
        }
      ]
    },
    {
      id: 'user-rights',
      title: 'Your Rights & Control',
      icon: <Update sx={{ fontSize: '1.5rem', color: 'primary.main' }} />,
      content: [
        {
          subtitle: 'Access & Correction',
          text: 'You have the right to access, update, or correct your personal information. Contact us if you need to review or modify any information we have about you.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You may request a copy of your personal information in a structured, commonly used format. We will provide this information within a reasonable timeframe.'
        },
        {
          subtitle: 'Deletion Requests',
          text: 'You may request deletion of your personal information, subject to legal and contractual obligations. Some information may need to be retained for legal compliance or legitimate business purposes.'
        },
        {
          subtitle: 'Communication Preferences',
          text: 'You can opt out of non-essential communications at any time by contacting us directly. Essential project-related communications will continue as necessary for service delivery.'
        }
      ]
    }
  ];

  return (
    <Box>
      {/* Breadcrumbs */}
      <Box
        sx={{
          py: 2,
          background: isDark
            ? 'rgba(15, 23, 42, 0.8)'
            : 'rgba(248, 250, 252, 0.8)',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="xl">
          <Breadcrumbs aria-label="breadcrumb">
            <MuiLink
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <Home sx={{ mr: 0.5, fontSize: '1rem' }} />
              Home
            </MuiLink>
            <Typography color="text.primary">Privacy Policy</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: isDark
            ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
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
            <Shield
              sx={{
                fontSize: '4rem',
                color: 'primary.main',
                mb: 2,
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
              Privacy Policy
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: 'clamp(1.125rem, 2vw + 0.5rem, 1.5rem)',
              }}
            >
              Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our services.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontStyle: 'italic',
              }}
            >
              Last updated: January 2025
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <Box
          key={section.id}
          sx={{
            py: { xs: 6, md: 8 },
            background: index % 2 === 0
              ? (isDark
                ? 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #1E293B 100%)'
                : 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 50%, #F1F5F9 100%)')
              : (isDark
                ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
                : 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)'),
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {section.icon}
                <Typography
                  variant="h3"
                  sx={{
                    ml: 2,
                    fontWeight: 700,
                    background: isDark
                      ? 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)'
                      : 'linear-gradient(135deg, #0F172A 0%, #334155 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {section.title}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(auto-fit, minmax(400px, 1fr))' },
                gap: 3,
              }}
            >
              {section.content.map((item, itemIndex) => (
                <Card
                  key={itemIndex}
                  sx={{
                    background: isDark
                      ? 'rgba(30, 41, 59, 0.8)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
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
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: 'primary.main',
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>
      ))}

      {/* Contact Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: isDark
            ? 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #1E293B 100%)'
            : 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 50%, #F1F5F9 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              background: isDark
                ? 'rgba(30, 41, 59, 0.8)'
                : 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 3,
              textAlign: 'center',
              p: { xs: 4, md: 6 },
            }}
          >
            <ContactMail
              sx={{
                fontSize: '3rem',
                color: 'primary.main',
                mb: 2,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: 700,
                color: 'text.primary',
              }}
            >
              Questions About Your Privacy?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                lineHeight: 1.7,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              If you have any questions about this Privacy Policy, how we handle your personal information, 
              or would like to exercise your privacy rights, please don&apos;t hesitate to contact us.
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
              Contact Us
            </Button>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default PrivacyPage;
