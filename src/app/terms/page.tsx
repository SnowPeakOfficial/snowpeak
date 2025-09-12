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
  Gavel,
  Assignment,
  Payment,
  Security,
  Build,
  Support,
  ContactMail,
  ArrowForward,
} from '@mui/icons-material';
import Link from 'next/link';

const TermsPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <Gavel sx={{ fontSize: '1.5rem', color: 'primary.main' }} />,
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
        },
        {
          subtitle: 'Modifications',
          text: 'We reserve the right to change these terms and conditions at any time. Your continued use of our services following any changes indicates your acceptance of the new terms.'
        },
        {
          subtitle: 'Effective Date',
          text: 'These terms are effective as of the date you first use our services and remain in effect until terminated by either party in accordance with these terms.'
        }
      ]
    },
    {
      id: 'services',
      title: 'Services & Scope',
      icon: <Build sx={{ fontSize: '1.5rem', color: 'primary.main' }} />,
      content: [
        {
          subtitle: 'Service Description',
          text: 'We provide web development, mobile application development, digital marketing, and related technology services. Specific deliverables, timelines, and requirements will be outlined in individual project proposals or statements of work.'
        },
        {
          subtitle: 'Project Scope',
          text: 'Each project scope is defined in a separate proposal or contract. Changes to the agreed scope may result in additional charges and timeline adjustments. All scope changes must be approved in writing by both parties.'
        },
        {
          subtitle: 'Service Availability',
          text: 'While we strive to provide uninterrupted service, we do not guarantee that our services will be available at all times. We may suspend or discontinue services for maintenance, updates, or other operational reasons.'
        }
      ]
    },
    {
      id: 'payment',
      title: 'Payment Terms',
      icon: <Payment sx={{ fontSize: '1.5rem', color: 'primary.main' }} />,
      content: [
        {
          subtitle: 'Payment Schedule',
          text: 'Payment terms are specified in individual project contracts. Typically, we require a deposit before work begins, with remaining payments due at specified milestones or upon project completion.'
        },
        {
          subtitle: 'Late Payments',
          text: 'Late payments may incur additional fees and may result in suspension of services. We reserve the right to charge interest on overdue amounts at a rate of 1.5% per month or the maximum allowed by law, whichever is less.'
        },
        {
          subtitle: 'Refund Policy',
          text: 'Refunds are handled on a case-by-case basis. Work completed and delivered cannot typically be refunded. Deposits may be refundable if the project has not commenced, subject to any costs already incurred.'
        },
        {
          subtitle: 'Disputed Charges',
          text: 'Any billing disputes must be reported within 30 days of the invoice date. We will work with you to resolve any legitimate billing concerns promptly and fairly.'
        }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: <Security sx={{ fontSize: '1.5rem', color: 'primary.main' }} />,
      content: [
        {
          subtitle: 'Client Ownership',
          text: 'Upon full payment, clients own the custom code and content we create specifically for their project. This includes custom designs, functionality, and content created exclusively for the client.'
        },
        {
          subtitle: 'Third-Party Components',
          text: 'Projects may include third-party libraries, frameworks, or components that retain their original licenses. We will clearly identify any third-party components and their licensing requirements.'
        },
        {
          subtitle: 'Our Intellectual Property',
          text: 'We retain ownership of our general methodologies, techniques, know-how, and any pre-existing intellectual property. We also retain the right to use general knowledge and skills gained during the project.'
        },
        {
          subtitle: 'Portfolio Rights',
          text: 'Unless otherwise agreed, we reserve the right to showcase completed work in our portfolio and marketing materials. We will respect any confidentiality requirements specified in the project agreement.'
        }
      ]
    },
    {
      id: 'responsibilities',
      title: 'Client Responsibilities',
      icon: <Assignment sx={{ fontSize: '1.5rem', color: 'primary.main' }} />,
      content: [
        {
          subtitle: 'Content & Materials',
          text: 'Clients are responsible for providing accurate, complete, and timely content, materials, and information required for project completion. Delays in providing materials may affect project timelines.'
        },
        {
          subtitle: 'Feedback & Approvals',
          text: 'Clients must provide timely feedback and approvals at designated project milestones. Extended delays in feedback may result in project timeline adjustments and additional costs.'
        },
        {
          subtitle: 'Legal Compliance',
          text: 'Clients are responsible for ensuring that all content, materials, and requirements comply with applicable laws and regulations. This includes copyright compliance, accessibility requirements, and industry-specific regulations.'
        },
        {
          subtitle: 'Access & Credentials',
          text: 'Clients must provide necessary access to systems, accounts, and platforms required for project completion. This includes hosting accounts, domain management, and third-party service credentials.'
        }
      ]
    },
    {
      id: 'warranties',
      title: 'Warranties & Support',
      icon: <Support sx={{ fontSize: '1.5rem', color: 'primary.main' }} />,
      content: [
        {
          subtitle: 'Service Warranty',
          text: 'We warrant that our services will be performed in a professional manner consistent with industry standards. We will correct any defects in our work at no additional charge for a period specified in the project agreement.'
        },
        {
          subtitle: 'Technical Support',
          text: 'Post-launch support terms are defined in individual project agreements. This may include bug fixes, minor updates, and technical assistance for a specified period after project completion.'
        },
        {
          subtitle: 'Limitation of Warranties',
          text: 'Except as expressly stated, our services are provided "as is" without warranties of any kind. We do not warrant that our services will meet all client requirements or be error-free.'
        },
        {
          subtitle: 'Third-Party Services',
          text: 'We are not responsible for the performance, availability, or support of third-party services, platforms, or tools that may be integrated into client projects.'
        }
      ]
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: <Security sx={{ fontSize: '1.5rem', color: 'primary.main' }} />,
      content: [
        {
          subtitle: 'Liability Limits',
          text: 'Our total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific project giving rise to the claim.'
        },
        {
          subtitle: 'Consequential Damages',
          text: 'We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.'
        },
        {
          subtitle: 'Force Majeure',
          text: 'We are not liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, government actions, or technical failures of third-party services.'
        },
        {
          subtitle: 'Client Indemnification',
          text: 'Clients agree to indemnify and hold us harmless from any claims arising from their use of our services, content they provide, or their violation of these terms.'
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
            <Typography color="text.primary">Terms of Service</Typography>
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
            <Gavel
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
              Terms of Service
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
              These terms govern your use of our services and establish the foundation for our professional relationship.
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
              Questions About Our Terms?
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
              If you have any questions about these Terms of Service, need clarification on any provisions, 
              or would like to discuss a custom agreement for your project, please contact us.
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

export default TermsPage;
