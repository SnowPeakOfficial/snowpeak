"use client";

import React, { useState, useEffect } from 'react';
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
  useMediaQuery,
  IconButton,
  Fade
} from '@mui/material';
import { 
  ArrowForward, 
  Launch, 
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';
import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/data/constants';

const FeaturedProjects: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Use all projects
  const originalProjects = PORTFOLIO_PROJECTS;
  
  // Responsive projects per view
  const getProjectsPerView = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };
  
  const [projectsPerView, setProjectsPerView] = useState(getProjectsPerView());
  
  // Update projectsPerView when screen size changes
  useEffect(() => {
    setProjectsPerView(getProjectsPerView());
  }, [isMobile, isTablet, getProjectsPerView]);
  
  // Create infinite carousel by duplicating projects at beginning and end
  const projects = [
    ...originalProjects.slice(-projectsPerView), // Last few projects at the beginning
    ...originalProjects, // Original projects
    ...originalProjects.slice(0, projectsPerView), // First few projects at the end
  ];

  // Calculate max index for carousel navigation
  const maxIndex = Math.max(0, projects.length - 3); // Always show 3 cards

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  const handlePrevious = () => {
    setCurrentIndex(prev => {
      if (prev === 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex(prev => {
      if (prev >= maxIndex) {
        return 0;
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


  return (
    <Box
      sx={{
        py: { xs: 16, md: 20 }, // Increased padding to prevent clipping
        background: isDark
          ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
          : 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)',
        position: 'relative',
        overflow: 'visible', // Changed to visible to prevent clipping
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

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, overflow: 'visible' }}>
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
        <Box sx={{ 
          position: 'relative', 
          mb: { xs: 6, md: 8 },
          px: { xs: 4, md: 6 }, // Increased horizontal padding to prevent clipping
          py: { xs: 6, md: 8 }, // Significantly increased vertical padding to prevent clipping
        }}>
          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: 48,
              height: 48,
              background: isDark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.9)',
              color: 'primary.main',
              '&:hover': {
                background: isDark ? 'rgba(30, 41, 59, 1)' : 'rgba(255, 255, 255, 1)',
                transform: 'translateY(-50%) scale(1.1)',
              },
            }}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: 48,
              height: 48,
              background: isDark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.9)',
              color: 'primary.main',
              '&:hover': {
                background: isDark ? 'rgba(30, 41, 59, 1)' : 'rgba(255, 255, 255, 1)',
                transform: 'translateY(-50%) scale(1.1)',
              },
            }}
          >
            <ChevronRight />
          </IconButton>

          {/* Simple Grid Layout - Always 3 cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 3,
              px: 2,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.slice(currentIndex, currentIndex + 3).map((project) => {
              const typeColors = getProjectTypeColor(project.type);
              const isHovered = hoveredProject === project.id;
              
              return (
                <Card
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  sx={{
                    height: 600,
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
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: isHovered
                      ? isDark
                        ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                        : '0 20px 40px rgba(0, 0, 0, 0.15)'
                      : isDark
                        ? '0 8px 16px rgba(0, 0, 0, 0.2)'
                        : '0 8px 16px rgba(0, 0, 0, 0.1)',
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
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${typeColors.color} 0%, ${typeColors.color}80 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '1.5rem',
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
                        textAlign: 'center',
                      }}
                    >
                      {project.title}
                    </Typography>

                    {/* Project Description - Fixed height to ensure uniform card sizes */}
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        height: '4.8rem', // Fixed height for 3 lines
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Project Type */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
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
                    </Box>

                    {/* CTA Button */}
                    <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'center' }}>
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
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
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
