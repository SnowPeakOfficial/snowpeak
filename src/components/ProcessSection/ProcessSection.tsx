'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Search,
  Code,
  BugReport,
  Rocket,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { PROCESS_STEPS } from '@/data/constants';

const ProcessSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const getProcessIcon = (iconName: string, stepNumber: number) => {
    const iconProps = {
      sx: {
        fontSize: '2.5rem',
        color: 'white',
      },
    };

    let IconComponent;
    switch (iconName) {
      case 'Search':
        IconComponent = Search;
        break;
      case 'Code':
        IconComponent = Code;
        break;
      case 'BugReport':
        IconComponent = BugReport;
        break;
      case 'Rocket':
        IconComponent = Rocket;
        break;
      default:
        IconComponent = Search;
    }

    return (
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
        }}
      >
        {/* Step Number Circle */}
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: isDark
              ? '0 1rem 2rem rgba(0, 0, 0, 0.3)'
              : '0 1rem 2rem rgba(0, 0, 0, 0.15)',
            '&::before': {
              content: `"${stepNumber}"`,
              position: 'absolute',
              top: -8,
              right: -8,
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: theme.palette.secondary.main,
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.875rem',
              fontWeight: 700,
              boxShadow: isDark
                ? '0 0.5rem 1rem rgba(0, 0, 0, 0.3)'
                : '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            },
          }}
        >
          <IconComponent {...iconProps} />
        </Box>
      </Box>
    );
  };

  return (
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
            ? 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 30% 20%, rgba(57, 94, 202, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(132, 139, 216, 0.05) 0%, transparent 50%)',
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
            }}
          >
            Our Proven Process
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            From idea to launch — a clear path forward.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.7,
              fontSize: '1.1rem',
            }}
          >
            We believe in clarity, collaboration, and results. Here&apos;s how we turn ideas into products.
          </Typography>
        </Box>

        {/* Process Steps */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: { xs: 3, md: 4 },
            position: 'relative',
          }}
        >
          {/* Connecting Lines for Desktop */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'block' },
              position: 'absolute',
              top: 40,
              left: '12.5%',
              right: '12.5%',
              height: 2,
              background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              zIndex: 1,
            }}
          />

          {PROCESS_STEPS.map((step, index) => (
            <Box key={step.id} sx={{ position: 'relative', zIndex: 2 }}>
              <Card
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
                      ? '0 2rem 4rem rgba(0, 0, 0, 0.4)'
                      : '0 2rem 4rem rgba(0, 0, 0, 0.15)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center', flexGrow: 1 }}>
                  {/* Process Icon */}
                  {getProcessIcon(step.icon, step.step)}

                  {/* Timeline Badge */}
                  <Chip
                    label={step.timeline}
                    size="small"
                    sx={{
                      mb: 2,
                      backgroundColor: isDark
                        ? 'rgba(59, 130, 246, 0.2)'
                        : 'rgba(57, 94, 202, 0.1)',
                      color: 'primary.main',
                      border: `1px solid ${theme.palette.primary.main}40`,
                      fontWeight: 600,
                    }}
                  />

                  {/* Step Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {step.title}
                  </Typography>

                  {/* Step Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {step.description}
                  </Typography>

                  {/* Step Features */}
                  <Stack spacing={1} sx={{ textAlign: 'left' }}>
                    {step.features.map((feature, featureIndex) => (
                      <Typography
                        key={featureIndex}
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '0.875rem',
                          '&:before': {
                            content: '"✓"',
                            color: 'primary.main',
                            fontWeight: 'bold',
                            mr: 1,
                            minWidth: 16,
                          },
                        }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Arrow for Mobile and Tablet */}
              {index < PROCESS_STEPS.length - 1 && (
                <Box
                  sx={{
                    display: { xs: 'flex', lg: 'none' },
                    justifyContent: 'center',
                    py: { xs: 2, sm: 3 },
                    position: 'relative',
                  }}
                >
                  {/* Connecting Line */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 2,
                      height: '100%',
                      background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      opacity: 0.3,
                      zIndex: 1,
                    }}
                  />
                  
                  {/* Arrow Icon */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: { xs: 40, sm: 48 },
                      height: { xs: 40, sm: 48 },
                      borderRadius: '50%',
                      background: isDark
                        ? 'rgba(30, 41, 59, 0.9)'
                        : 'rgba(255, 255, 255, 0.9)',
                      border: `2px solid ${theme.palette.primary.main}`,
                      backdropFilter: 'blur(10px)',
                      position: 'relative',
                      zIndex: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: isDark
                          ? '0 0.5rem 1rem rgba(59, 130, 246, 0.3)'
                          : '0 0.5rem 1rem rgba(57, 94, 202, 0.2)',
                      },
                    }}
                  >
                    <KeyboardArrowDown
                      sx={{
                        color: 'primary.main',
                        fontSize: { xs: '1.5rem', sm: '2rem' },
                        animation: 'bounce 2s infinite',
                        '@keyframes bounce': {
                          '0%, 20%, 50%, 80%, 100%': {
                            transform: 'translateY(0)',
                          },
                          '40%': {
                            transform: 'translateY(-4px)',
                          },
                          '60%': {
                            transform: 'translateY(-2px)',
                          },
                        },
                      }}
                    />
                  </Box>
                </Box>
              )}
            </Box>
          ))}
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              color: 'text.secondary',
            }}
          >
            Ready to get started?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: 'text.secondary',
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            Let&apos;s discuss your project and see how we can help bring your vision to life.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ProcessSection;
