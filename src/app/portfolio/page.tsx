"use client";

import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Chip, 
  Button, 
  useTheme,
  IconButton,
  Fade,
  Tabs,
  Tab,
} from '@mui/material';
import { 
  Launch, 
  ArrowForward
} from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { PORTFOLIO_PROJECTS } from '@/data/constants';

const PortfolioPage: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique project types for filtering
  const categories = ['All', ...Array.from(new Set(PORTFOLIO_PROJECTS.map(p => p.type)))];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.type === selectedCategory);

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
    <Box>
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
          {/* Page Header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h1"
              sx={{
                mb: 2,
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
              Our Portfolio
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
              Showcasing real outcomes and exceptional craftsmanship
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
              Each project represents a unique challenge solved with modern technology, 
              delivering measurable results and exceptional user experiences.
            </Typography>
          </Box>

          {/* Category Filter */}
          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            <Tabs
              value={selectedCategory}
              onChange={(_, newValue) => setSelectedCategory(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTabs-flexContainer': {
                  justifyContent: 'center',
                },
                '& .MuiTab-root': {
                  minWidth: 'auto',
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                },
              }}
            >
              {categories.map((category) => (
                <Tab key={category} label={category} value={category} />
              ))}
            </Tabs>
          </Box>

          {/* Projects Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
              },
              gridAutoRows: '1fr', // Ensure equal row heights
              gap: { xs: 3, md: 4 },
              mb: { xs: 6, md: 8 },
            }}
          >
            {filteredProjects.map((project) => {
              const typeColors = getProjectTypeColor(project.type);
              const isHovered = hoveredProject === project.id;
              
              return (
                <Card
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  sx={{
                    width: '100%',
                    maxWidth: '100%',
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
                    transform: isHovered ? 'translateY(-0.5rem) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: isHovered
                      ? isDark
                        ? '0 2rem 4rem rgba(0, 0, 0, 0.4)'
                        : '0 2rem 4rem rgba(0, 0, 0, 0.15)'
                      : isDark
                        ? '0 0.5rem 1rem rgba(0, 0, 0, 0.2)'
                        : '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {/* Project Screenshot or Placeholder */}
                  <Box
                    sx={{
                      height: 280,
                      background: 'screenshot' in project && project.screenshot
                        ? isDark ? 'rgba(15, 23, 42, 0.5)' : 'rgba(241, 245, 249, 0.5)'
                        : `linear-gradient(135deg, ${typeColors.color}20 0%, ${typeColors.color}10 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {'screenshot' in project && project.screenshot ? (
                      <Image
                        src={project.screenshot}
                        alt={`${project.title} screenshot`}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <Box
                        sx={{
                          width: 90,
                          height: 90,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${typeColors.color} 0%, ${typeColors.color}80 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '2.5rem',
                          fontWeight: 'bold',
                          transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {project.title.charAt(0)}
                      </Box>
                    )}
                    
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

                  <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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
                            borderRadius: 2,
                            background: 'logo' in project && project.logo ? 'white' : `linear-gradient(135deg, ${typeColors.color} 0%, ${typeColors.color}80 100%)`,
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
                            overflow: 'hidden',
                            position: 'relative',
                            padding: 'logo' in project && project.logo ? 1 : 0,
                          }}
                        >
                          {'logo' in project && project.logo ? (
                            <Image
                              src={project.logo}
                              alt={`${project.title} logo`}
                              width={50}
                              height={50}
                              style={{ objectFit: 'contain' }}
                            />
                          ) : (
                            project.title.charAt(0)
                          )}
                        </Box>
                      </Box>

                    {/* Project Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
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
                      variant="body1"
                      sx={{
                        mb: 3,
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        flexGrow: 1,
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

                    {/* CTA Buttons */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto' }}>
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

          {/* Bottom CTA */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              Ready to start your project?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: '500px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Let&apos;s discuss how we can help bring your vision to life with the same attention to detail and quality you see here.
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
  );
};

export default PortfolioPage;
