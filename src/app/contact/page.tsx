'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  MenuItem,
  Stack,
  useTheme,
  Chip,
  Snackbar,
  CircularProgress,
  Link as MuiLink,
  Alert,
} from '@mui/material';
import {
  Send,
  Email,
  Schedule,
  CheckCircle,
  GitHub,
  CalendarMonth,
} from '@mui/icons-material';
 
import { CONTACT_INFO } from '@/data/constants';
import * as TurnstileModule from '@marsidev/react-turnstile';
type TurnstileComponent = React.ComponentType<{
  siteKey: string;
  onSuccess?: (token: string) => void;
  options?: Record<string, unknown>;
  className?: string;
}>;
const Turnstile = (TurnstileModule as unknown as { Turnstile?: TurnstileComponent; default?: TurnstileComponent }).Turnstile
  ?? (TurnstileModule as unknown as { Turnstile?: TurnstileComponent; default?: TurnstileComponent }).default
  ?? (TurnstileModule as unknown as TurnstileComponent);

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  honeypot: string; // Spam protection
}

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const projectTypes = [
    'Website',
    'Web Application',
    'Mobile App',
    'Browser Extension',
    'Maintenance & Support',
    'Other',
  ];

  const budgetRanges = [
    'Under $5K',
    '$5K - $15K',
    '$15K - $30K',
    '$30K+',
    "Let's Discuss",
  ];

  const timelines = [
    'ASAP',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Flexible',
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot for spam
    if (formData.honeypot) {
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.description) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      return;
    }
    if (!turnstileToken) {
      setSubmitStatus({ type: 'error', message: 'Please complete the CAPTCHA.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          description: formData.description,
          turnstileToken,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! We\'ll get back to you within 1 business day.',
        });
        setFormData({
          name: '',
          email: '',
          projectType: '',
          budget: '',
          timeline: '',
          description: '',
          honeypot: '',
        });
        setTurnstileToken('');
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'Failed to submit form');
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const processSteps = [
    {
      title: 'Free Consultation',
      description: 'We discuss your project goals and requirements',
    },
    {
      title: 'Custom Proposal',
      description: 'Receive a detailed proposal with timeline and pricing',
    },
    {
      title: 'Build & Launch',
      description: 'We bring your vision to life with regular updates',
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
              ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 50%, #1E293B 100%)'
              : 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                Let&apos;s Build Something Amazing Together
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: 'clamp(1.125rem, 2vw + 0.5rem, 1.5rem)',
                }}
              >
                 Ready to take your digital presence beyond the summit? We&apos;d love to hear about your project.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: isDark
              ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
              : 'linear-gradient(135deg, #E2E8F0 0%, #F8FAFC 50%, #E2E8F0 100%)',
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                gap: 6,
              }}
            >
              {/* Contact Form */}
              <Box sx={{ flex: { lg: '2' } }}>
                <Card
                  sx={{
                    background: isDark
                      ? 'rgba(30, 41, 59, 0.8)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                      Tell Us About Your Project
                    </Typography>
                    
                    <Box component="form" onSubmit={handleSubmit}>
                      <Stack spacing={3}>
                        {/* Honeypot field - hidden from users */}
                        <TextField
                          name="website"
                          value={formData.honeypot}
                          onChange={(e) => handleInputChange('honeypot', e.target.value)}
                          sx={{ display: 'none' }}
                          tabIndex={-1}
                          autoComplete="off"
                        />

                        {/* Name */}
                        <TextField
                          label="Name"
                          required
                          fullWidth
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          disabled={isSubmitting}
                        />

                        {/* Email */}
                        <TextField
                          label="Email"
                          type="email"
                          required
                          fullWidth
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          disabled={isSubmitting}
                        />

                        {/* Project Type */}
                        <TextField
                          label="Project Type"
                          select
                          fullWidth
                          value={formData.projectType}
                          onChange={(e) => handleInputChange('projectType', e.target.value)}
                          disabled={isSubmitting}
                          helperText="What type of project are you looking to build?"
                        >
                          {projectTypes.map((type) => (
                            <MenuItem key={type} value={type}>
                              {type}
                            </MenuItem>
                          ))}
                        </TextField>

                        {/* Budget and Timeline Row */}
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 2,
                          }}
                        >
                          <TextField
                            label="Budget Range"
                            select
                            fullWidth
                            value={formData.budget}
                            onChange={(e) => handleInputChange('budget', e.target.value)}
                            disabled={isSubmitting}
                            helperText="Optional - helps us tailor our proposal"
                          >
                            {budgetRanges.map((range) => (
                              <MenuItem key={range} value={range}>
                                {range}
                              </MenuItem>
                            ))}
                          </TextField>

                          <TextField
                            label="Timeline"
                            select
                            fullWidth
                            value={formData.timeline}
                            onChange={(e) => handleInputChange('timeline', e.target.value)}
                            disabled={isSubmitting}
                            helperText="When would you like to launch?"
                          >
                            {timelines.map((timeline) => (
                              <MenuItem key={timeline} value={timeline}>
                                {timeline}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Box>

                        {/* Project Description */}
                        <TextField
                          label="Project Description"
                          multiline
                          rows={4}
                          required
                          fullWidth
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          disabled={isSubmitting}
                          helperText="Tell us about your vision, goals, and any specific requirements"
                        />

                        {/* CAPTCHA */}
                        <Box>
                          <Turnstile
                            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
                            onSuccess={(token: string) => setTurnstileToken(token)}
                            options={{ appearance: 'always', theme: isDark ? 'dark' : 'light' }}
                          />
                        </Box>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={isSubmitting}
                          endIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
                          sx={{
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            py: 1.5,
                            fontSize: '1.125rem',
                            '&:hover': {
                              background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                              transform: 'translateY(-0.125rem) scale(1.02)',
                            },
                            '&:disabled': {
                              background: 'rgba(0, 0, 0, 0.12)',
                              transform: 'none',
                            },
                          }}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </Box>

              {/* Contact Info & Process */}
              <Box sx={{ flex: { lg: '1' } }}>
                <Stack spacing={4}>
                  {/* Contact Information */}
                  <Card
                    sx={{
                      background: isDark
                        ? 'rgba(30, 41, 59, 0.8)'
                        : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 3,
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                        Get In Touch
                      </Typography>
                      
                      <Stack spacing={3}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Email sx={{ color: 'primary.main' }} />
                          <Box>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              Email
                            </Typography>
                             <MuiLink
                              href={`mailto:${CONTACT_INFO.email}`}
                              sx={{
                                color: 'primary.main',
                                textDecoration: 'none',
                                '&:hover': { textDecoration: 'underline' },
                              }}
                            >
                              {CONTACT_INFO.email}
                            </MuiLink>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Schedule sx={{ color: 'primary.main' }} />
                          <Box>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              Response Time
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              We usually reply within 1 business day. For urgent projects, feel free to mention that in your message.
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <GitHub sx={{ color: 'primary.main' }} />
                          <Box>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              GitHub
                            </Typography>
                            <MuiLink
                              href="https://github.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                color: 'primary.main',
                                textDecoration: 'none',
                                '&:hover': { textDecoration: 'underline' },
                              }}
                            >
                              View Our Work
                            </MuiLink>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <CalendarMonth sx={{ color: 'primary.main' }} />
                          <Box>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              Book a Call
                            </Typography>
                            <MuiLink
                              href="#"
                              sx={{
                                color: 'primary.main',
                                textDecoration: 'none',
                                '&:hover': { textDecoration: 'underline' },
                              }}
                            >
                              Schedule a Meeting
                            </MuiLink>
                          </Box>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>

                  {/* What Happens Next */}
                  <Card
                    sx={{
                      background: isDark
                        ? 'rgba(30, 41, 59, 0.8)'
                        : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 3,
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                        What Happens Next?
                      </Typography>
                      
                      <Stack spacing={3}>
                        {processSteps.map((step, index) => (
                          <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                            <Box
                              sx={{
                                width: 32,
                                height: 32,
                                borderRadius: '50%',
                                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                flexShrink: 0,
                              }}
                            >
                              {index + 1}
                            </Box>
                            <Box>
                              <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                                {step.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {step.description}
                              </Typography>
                            </Box>
                          </Box>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>

                  {/* Trust Indicators */}
                  <Card
                    sx={{
                      background: isDark
                        ? 'rgba(30, 41, 59, 0.8)'
                        : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 3,
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <CheckCircle sx={{ fontSize: '3rem', color: 'success.main', mb: 2 }} />
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                        Free Consultation
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        No obligation. No pressure. Just an honest conversation about your project.
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Toast Notifications */}
      <Snackbar
        open={submitStatus.type !== null}
        autoHideDuration={6000}
        onClose={() => setSubmitStatus({ type: null, message: '' })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSubmitStatus({ type: null, message: '' })}
          severity={submitStatus.type === 'success' ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {submitStatus.message}
        </Alert>
      </Snackbar>

    </>
  );
};

export default ContactPage;
