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
  Code
} from '@mui/icons-material';
import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/data/constants';

const FeaturedProjects: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  // Get featured projects first, then fill with others
  const featuredProjects = PORTFOLIO_PROJECTS.filter(p => p.featured);
  const otherProjects = PORTFOLIO_PROJECTS.filter(p => !p.featured);
  const projects = [...featuredProjects, ...otherProjects].slice(0, 3);

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
            Featured Projects
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

        {/* Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 3, md: 4 },
            mb: { xs: 6, md: 8 },
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
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: isDark
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: project.featured 
                    ? `2px solid ${theme.palette.primary.main}` 
                    : `1px solid ${theme.palette.divider}`,
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
                {/* Featured Badge */}
                {project.featured && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      zIndex: 10,
                    }}
                  >
                    <Chip
                      icon={<Star sx={{ fontSize: '1rem !important' }} />}
                      label="Featured"
                      size="small"
                      sx={{
                        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        '& .MuiChip-icon': {
                          color: 'white',
                        },
                      }}
                    />
                  </Box>
                )}

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

                  {/* Project Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      color: 'text.primary',
                      lineHeight: 1.3,
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
                      flexGrow: 1,
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

                  {/* Technologies */}
                  <Box sx={{ mb: 3 }}>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 0.5 }}>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontSize: '0.7rem',
                            height: '1.5rem',
                            borderColor: 'divider',
                            color: 'text.secondary',
                          }}
                        />
                      ))}
                      {project.technologies.length > 3 && (
                        <Chip
                          label={`+${project.technologies.length - 3}`}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontSize: '0.7rem',
                            height: '1.5rem',
                            borderColor: 'divider',
                            color: 'text.secondary',
                          }}
                        />
                      )}
                    </Stack>
                  </Box>

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
