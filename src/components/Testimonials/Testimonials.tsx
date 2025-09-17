"use client";

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Stack, 
  Avatar, 
  useTheme,
  useMediaQuery,
  IconButton,
  Rating
} from '@mui/material';
import { 
  ChevronLeft,
  ChevronRight,
  Star
} from '@mui/icons-material';
import { TESTIMONIALS } from '@/data/constants';

const Testimonials: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Use all testimonials
  const originalTestimonials = TESTIMONIALS;
  
  // Responsive testimonials per view
  const getTestimonialsPerView = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };
  
  const [testimonialsPerView, setTestimonialsPerView] = useState(getTestimonialsPerView());
  
  // Update testimonialsPerView when screen size changes
  useEffect(() => {
    setTestimonialsPerView(getTestimonialsPerView());
  }, [isMobile, isTablet]);
  
  // Create infinite carousel by duplicating testimonials at beginning and end
  const testimonials = [
    ...originalTestimonials.slice(-testimonialsPerView), // Last few testimonials at the beginning
    ...originalTestimonials, // Original testimonials
    ...originalTestimonials.slice(0, testimonialsPerView), // First few testimonials at the end
  ];
  
  // Start at the first "real" testimonial (after the duplicated ones)
  const [realIndex, setRealIndex] = useState(testimonialsPerView);
  
  // Update realIndex when testimonialsPerView changes
  useEffect(() => {
    setRealIndex(testimonialsPerView);
  }, [testimonialsPerView]);

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
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setRealIndex(prev => prev - 1);
    
    // If we're at the first duplicated section, reset to the end without animation
    setTimeout(() => {
      setRealIndex(prev => {
        if (prev === testimonialsPerView - 1) {
          setIsTransitioning(false);
          return originalTestimonials.length + testimonialsPerView - 1;
        }
        setIsTransitioning(false);
        return prev;
      });
    }, 500); // Match the transition duration
  };

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setRealIndex(prev => prev + 1);
    
    // If we're at the last duplicated section, reset to the beginning without animation
    setTimeout(() => {
      setRealIndex(prev => {
        if (prev === originalTestimonials.length + testimonialsPerView) {
          setIsTransitioning(false);
          return testimonialsPerView;
        }
        setIsTransitioning(false);
        return prev;
      });
    }, 500); // Match the transition duration
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #1E293B 100%)'
            : 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 50%, #F1F5F9 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: (theme) =>
            theme.palette.mode === 'dark'
              ? 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
              : 'radial-gradient(circle at 20% 80%, rgba(57, 94, 202, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(132, 139, 216, 0.05) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
            What Clients Say
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Trusted by founders and teams
          </Typography>
        </Box>

        {/* Carousel Container */}
        <Box sx={{ 
          position: 'relative', 
          mb: { xs: 4, md: 6 },
          px: { xs: 4, md: 6 }, // Increased horizontal padding to prevent clipping
          py: { xs: 4, md: 6 }, // Increased vertical padding to prevent clipping
        }}>
          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: { xs: -20, sm: -40, md: -80 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: { xs: 40, sm: 56, md: 64 },
              height: { xs: 40, sm: 56, md: 64 },
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
            <ChevronLeft sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: -20, sm: -40, md: -80 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: { xs: 40, sm: 56, md: 64 },
              height: { xs: 40, sm: 56, md: 64 },
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
            <ChevronRight sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} />
          </IconButton>

          {/* Carousel Track */}
          <Box
            sx={{
              overflow: 'visible', // Change to visible to prevent clipping
              width: '100%',
              py: { xs: 2, sm: 4, md: 6 }, // Responsive padding for hover effects
              position: 'relative',
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Inner container with overflow hidden for the sliding effect */}
            <Box
              sx={{
                overflow: 'hidden',
                mx: { xs: 1, sm: 2, md: 3 }, // Responsive margin for hover effects
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  transform: `translateX(-${realIndex * (100 / testimonialsPerView)}%)`,
                  transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                  gap: isMobile ? 0 : { sm: 3, md: 4 }, // No gap on mobile to prevent cropping
                  px: { xs: 0, sm: 2, md: 3 }, // No padding on mobile
                  py: { xs: 1, sm: 2 }, // Responsive vertical padding
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={`${testimonial.id}-${index}`}
                    sx={{
                      width: isMobile ? '100%' : `calc(${100 / testimonialsPerView}% - 24px)`,
                      minWidth: isMobile ? '100%' : `calc(${100 / testimonialsPerView}% - 24px)`,
                      maxWidth: isMobile ? '100%' : `calc(${100 / testimonialsPerView}% - 24px)`,
                      flexShrink: 0,
                      height: { xs: 'auto', sm: '280px', md: '300px' }, // Fixed height for consistency
                      display: 'flex',
                      flexDirection: 'column',
                      background: isDark
                        ? 'rgba(30, 41, 59, 0.8)'
                        : 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      borderRadius: { xs: 2, md: 3 },
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': !isMobile ? {
                        transform: 'translateY(-0.5rem) scale(1.02)',
                        boxShadow: isDark
                          ? '0 1.5rem 3rem rgba(0, 0, 0, 0.4)'
                          : '0 1.5rem 3rem rgba(0, 0, 0, 0.15)',
                      } : {},
                      boxShadow: isDark
                        ? '0 0.5rem 1rem rgba(0, 0, 0, 0.2)'
                        : '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <CardContent sx={{ 
                      p: { xs: 2.5, md: 3 }, 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      height: '100%'
                    }}>
                      {/* Rating Stars */}
                      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                        <Rating
                          value={testimonial.rating}
                          readOnly
                          size="small"
                          sx={{
                            color: theme.palette.warning.main,
                            '& .MuiRating-iconEmpty': {
                              color: theme.palette.divider,
                            },
                          }}
                        />
                      </Box>

                      {/* Testimonial Content */}
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          mb: 3,
                          flexGrow: 1,
                          lineHeight: 1.6,
                          fontSize: { xs: '0.95rem', sm: '1rem' },
                          color: 'text.primary',
                          fontStyle: 'italic',
                          display: '-webkit-box',
                          WebkitLineClamp: { xs: 4, sm: 5, md: 6 }, // Responsive line clamping
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textAlign: 'center',
                        }}
                      >
                        "{testimonial.content}"
                      </Typography>

                      {/* Client Info */}
                      <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 'auto' }}>
                        <Avatar 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          sx={{ 
                            width: { xs: 40, sm: 48 }, 
                            height: { xs: 40, sm: 48 },
                            border: `2px solid ${theme.palette.primary.main}20`,
                          }}
                        />
                        <Box sx={{ textAlign: 'left', minWidth: 0, flex: 1 }}>
                          <Typography 
                            variant="subtitle2" 
                            sx={{ 
                              fontWeight: 600,
                              fontSize: { xs: '0.875rem', sm: '1rem' },
                              color: 'text.primary',
                              lineHeight: 1.2,
                              mb: 0.5,
                            }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              color: 'text.secondary',
                              fontSize: { xs: '0.75rem', sm: '0.875rem' },
                              lineHeight: 1.2,
                              display: 'block',
                            }}
                          >
                            {testimonial.role} • {testimonial.company}
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
