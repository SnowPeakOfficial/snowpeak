"use client";

import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Chip, 
  Stack, 
  Button, 
  useTheme,
  IconButton,
  Fade,
  Tooltip
} from '@mui/material';
import { 
  ArrowForward, 
  Launch, 
  Star,
  TrendingUp,
  People,
  Code,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';
import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/data/constants';

const FeaturedProjects: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Use all projects
  const projects = PORTFOLIO_PROJECTS;
  const projectsPerView = 3;
  const maxIndex = Math.max(0, projects.length - projectsPerView);

  const handlePrevious = () => {
    setCurrentIndex(prev => {
      if (prev === 0) {
        return maxIndex; // Loop to end
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex(prev => {
      if (prev >= maxIndex) {
        return 0; // Loop to beginning
      }
      return prev + 1;
    });
  };

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case 'Web Application':
        return { bg: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6', border: '#3B82F6' };
      case 'Mobile Application':
        return { bg: 'rgba(34, 197, 94, 0.1)', color: '#22C55E', border: '#22C55E' };
      case 'Browser Extension':
        return { bg: 'rgba(168, 85, 247, 0.1)', color: '#A855F7', border: '#A855F7' };
      case 'Website':
        return { bg: 'rgba(249, 115, 22, 0.1)', color: '#F97316', border: '#F97316' };
      default:
        return { bg: 'rgba(107, 114, 128, 0.1)', color: '#6B7280', border: '#6B7280' };
    }
  };

  const getMetricIcon = (key: string) => {
    switch (key) {
      case 'downloads':
      case 'transactions':
      case 'mrr':
        return <TrendingUp sx={{ fontSize: '1rem' }} />;
      case 'users':
      case 'activeUsers':
      case 'retention':
        return <People sx={{ fontSize: '1rem' }} />;
      case 'rating':
        return <Star sx={{ fontSize: '1rem' }} />;
      default:
        return <Code sx={{ fontSize: '1rem' }} />;
    }
  };

  return (
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
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: isDark
            ? 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(57, 94, 202, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(132, 139, 216, 0.05) 0%, transparent 50%)',
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
            Our Projects
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            Real-world solutions delivering measurable results
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
            From productivity tools to e-commerce platforms, explore our diverse portfolio 
            of successful projects that have helped businesses grow and users thrive.
          </Typography>
        </Box>

        {/* Carousel Container */}
        <Box sx={{ position: 'relative', mb: { xs: 6, md: 8 } }}>
          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: { xs: -40, md: -80 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: { xs: 56, md: 64 },
              height: { xs: 56, md: 64 },
              background: isDark
                ? 'rgba(30, 41, 59, 0.9)'
                : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: `2px solid ${theme.palette.primary.main}40`,
              color: 'primary.main',
              boxShadow: isDark
                ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                : '0 8px 32px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                background: isDark
                  ? 'rgba(30, 41, 59, 1)'
                  : 'rgba(255, 255, 255, 1)',
                transform: 'translateY(-50%) scale(1.15)',
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: isDark
                  ? '0 12px 48px rgba(0, 0, 0, 0.4)'
                  : '0 12px 48px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <ChevronLeft sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: -40, md: -80 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: { xs: 56, md: 64 },
              height: { xs: 56, md: 64 },
              background: isDark
                ? 'rgba(30, 41, 59, 0.9)'
                : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: `2px solid ${theme.palette.primary.main}40`,
              color: 'primary.main',
              boxShadow: isDark
                ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                : '0 8px 32px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                background: isDark
                  ? 'rgba(30, 41, 59, 1)'
                  : 'rgba(255, 255, 255, 1)',
                transform: 'translateY(-50%) scale(1.15)',
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: isDark
                  ? '0 12px 48px rgba(0, 0, 0, 0.4)'
                  : '0 12px 48px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <ChevronRight sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }} />
          </IconButton>

          {/* Carousel Track */}
          <Box
            sx={{
              overflow: 'hidden',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)`,
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                gap: { xs: 3, md: 4 },
              }}
            >
              {projects.map((project, index) => {
                const typeColors = getProjectTypeColor(project.type);
                const isHovered = hoveredProject === project.id;
                
                return (
                  <Card
                    key={project.id}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    sx={{
                      width: `calc(${100 / projectsPerView}% - ${24}px)`,
                      minWidth: `calc(${100 / projectsPerView}% - ${24}px)`,
                      maxWidth: `calc(${100 / projectsPerView}% - ${24}px)`,
                      flexShrink: 0,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: isDark
                        ? 'rgba(30, 41, 59, 0.8)'
                        : 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: isHovered ? 'translateY(-0.75rem) scale(1.02)' : 'translateY(0) scale(1)',
                      boxShadow: isHovered
                        ? isDark
                          ? '0 2rem 4rem rgba(0, 0, 0, 0.4)'
                          : '0 2rem 4rem rgba(0, 0, 0, 0.15)'
                        : isDark
                          ? '0 0.5rem 1rem rgba(0, 0, 0, 0.2)'
                          : '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {/* Project Image Placeholder */}
                    <Box
                      sx={{
                        height: 200,
                        background: `linear-gradient(135deg, ${typeColors.color}20 0%, ${typeColors.color}10 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${typeColors.color} 0%, ${typeColors.color}80 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '2rem',
                          fontWeight: 'bold',
                          transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {project.title.charAt(0)}
                      </Box>
                      
                      {/* Overlay on hover */}
                      <Fade in={isHovered}>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconButton
                            component={Link}
                            href={project.liveUrl || '#'}
                            target="_blank"
                            rel="noopener"
                            sx={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              color: 'primary.main',
                              '&:hover': {
                                background: 'white',
                                transform: 'scale(1.1)',
                              },
                            }}
                          >
                            <Launch />
                          </IconButton>
                        </Box>
                      </Fade>
                    </Box>

                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* Project Type and Status */}
                      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
                        <Chip 
                          label={project.type} 
                          size="small" 
                          sx={{
                            backgroundColor: typeColors.bg,
                            color: typeColors.color,
                            border: `1px solid ${typeColors.border}40`,
                            fontWeight: 600,
                          }}
                        />
                        <Chip 
                          label={project.status} 
                          size="small" 
                          sx={{
                            backgroundColor: isDark ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.1)',
                            color: 'success.main',
                            border: `1px solid ${theme.palette.success.main}40`,
                            fontWeight: 600,
                          }}
                        />
                      </Stack>

                      {/* Business Logo */}
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 50, sm: 60 },
                            height: { xs: 50, sm: 60 },
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${typeColors.color} 0%, ${typeColors.color}80 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                            fontWeight: 'bold',
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                            transition: 'all 0.3s ease',
                            boxShadow: isDark
                              ? '0 4px 16px rgba(0, 0, 0, 0.3)'
                              : '0 4px 16px rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          {project.title.charAt(0)}
                        </Box>
                      </Box>

                      {/* Project Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 1,
                          fontWeight: 600,
                          color: 'text.primary',
                          lineHeight: 1.3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {project.title}
                      </Typography>

                      {/* Project Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 2,
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          height: '4.8rem', // Fixed height for 3 lines (1.6 * 1rem * 3)
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Key Metrics */}
                      {project.metrics && (
                        <Box sx={{ mb: 2 }}>
                          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 1 }}>
                            {Object.entries(project.metrics).slice(0, 2).map(([key, metric]) => (
                              <Tooltip
                                key={key}
                                title={metric.tooltip}
                                arrow
                                placement="top"
                              >
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.5,
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 1,
                                    backgroundColor: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(57, 94, 202, 0.05)',
                                    border: `1px solid ${theme.palette.primary.main}20`,
                                    cursor: 'help',
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                      backgroundColor: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(57, 94, 202, 0.08)',
                                      transform: 'scale(1.05)',
                                    },
                                  }}
                                >
                                  {getMetricIcon(metric.type)}
                                  <Typography variant="caption" sx={{ fontWeight: 600, color: 'primary.main' }}>
                                    {metric.value}
                                  </Typography>
                                </Box>
                              </Tooltip>
                            ))}
                          </Stack>
                        </Box>
                      )}

                      {/* CTA Buttons */}
                      <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                        {project.liveUrl && (
                          <Button
                            component={Link}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener"
                            variant="contained"
                            size="small"
                            endIcon={<Launch />}
                            sx={{
                              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                              '&:hover': {
                                background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                                transform: 'scale(1.05)',
                              },
                            }}
                          >
                            View Live
                          </Button>
                        )}
                        <Button
                          component={Link}
                          href="/portfolio"
                          variant="outlined"
                          size="small"
                          sx={{
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              color: 'primary.contrastText',
                            },
                          }}
                        >
                          Details
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            Want to see more of our work?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: 'text.secondary',
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            Explore our complete portfolio to see how we&apos;ve helped businesses across different industries achieve their goals.
          </Typography>
          <Button
            component={Link}
            href="/portfolio"
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
            View Full Portfolio
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProjects;
