'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useScrollTrigger,
  Slide,
  useMediaQuery,
  useTheme as useMuiTheme,
  Menu,
  MenuItem,
  Typography,
  Fade,
  Collapse,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LightMode,
  DarkMode,
  KeyboardArrowDown,
  ExpandLess,
  ExpandMore,
  Dashboard,
  Public,
  Computer,
  PhoneAndroid,
  Extension,
  Settings,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { NAVIGATION_ITEMS, COMPANY_INFO, SERVICES } from '@/data/constants';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Icon mapping helper
const getServiceIcon = (iconName: string) => {
  const iconMap: { [key: string]: React.ElementType } = {
    'Layout': Dashboard,
    'Globe': Public,
    'Monitor': Computer,
    'Smartphone': PhoneAndroid,
    'Puzzle': Extension,
    'Settings': Settings,
  };
  return iconMap[iconName] || Dashboard;
};

const Navigation: React.FC = () => {
  const { mode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const pathname = usePathname();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isMobile) {
      setMobileServicesOpen(!mobileServicesOpen);
    }
  };

  const handleServicesMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (!isMobile) {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
      setServicesAnchorEl(event.currentTarget);
    }
  };

  const handleServicesMouseLeave = () => {
    if (!isMobile) {
      const timeout = setTimeout(() => {
        setServicesAnchorEl(null);
      }, 150);
      setHoverTimeout(timeout);
    }
  };

  const handleMenuMouseEnter = () => {
    if (!isMobile && hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleMenuMouseLeave = () => {
    if (!isMobile) {
      setServicesAnchorEl(null);
    }
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  const isActivePage = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const drawer = (
    <Box sx={{ width: '100%', py: 2 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {NAVIGATION_ITEMS.map((item) => {
            if (item.label === 'Services') {
              return (
                <Box key={item.href}>
                  <Button
                    onClick={handleServicesClick}
                    variant={isActivePage(item.href) ? 'contained' : 'text'}
                    endIcon={mobileServicesOpen ? <ExpandLess /> : <ExpandMore />}
                    sx={{
                      justifyContent: 'space-between',
                      py: 1.5,
                      px: 2,
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      color: isActivePage(item.href) 
                        ? 'primary.contrastText' 
                        : 'text.primary',
                      '&:hover': {
                        backgroundColor: isActivePage(item.href) 
                          ? 'primary.dark' 
                          : 'action.hover',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                  <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
                    <Box sx={{ pl: 2, py: 1 }}>
                      {SERVICES.map((service) => {
                        const IconComponent = getServiceIcon(service.icon);
                        return (
                          <Button
                            key={service.id}
                            component={Link}
                            href={`/services#${service.id}`}
                            onClick={handleNavClick}
                            variant="text"
                            sx={{
                              justifyContent: 'flex-start',
                              py: 1,
                              px: 2,
                              mb: 0.5,
                              width: '100%',
                              color: 'text.secondary',
                              '&:hover': {
                                backgroundColor: 'action.hover',
                                color: 'primary.main',
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                width: '100%',
                              }}
                            >
                              <IconComponent
                                sx={{
                                  fontSize: '1.125rem',
                                  color: 'primary.main',
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: 500,
                                  textAlign: 'left',
                                }}
                              >
                                {service.title}
                              </Typography>
                            </Box>
                          </Button>
                        );
                      })}
                      <Button
                        component={Link}
                        href="/services"
                        onClick={handleNavClick}
                        variant="contained"
                        sx={{
                          justifyContent: 'center',
                          py: 1.5,
                          px: 2,
                          mt: 1,
                          width: '100%',
                          fontWeight: 600,
                          background: `linear-gradient(135deg, ${muiTheme.palette.primary.main} 0%, ${muiTheme.palette.secondary.main} 100%)`,
                          '&:hover': {
                            background: `linear-gradient(135deg, ${muiTheme.palette.secondary.main} 0%, ${muiTheme.palette.primary.main} 100%)`,
                            transform: 'translateY(-0.125rem) scale(1.02)',
                          },
                        }}
                      >
                        View All Services
                      </Button>
                    </Box>
                  </Collapse>
                </Box>
              );
            }
            return (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                onClick={handleNavClick}
                variant={isActivePage(item.href) ? 'contained' : 'text'}
                sx={{
                  justifyContent: 'flex-start',
                  py: 1.5,
                  px: 2,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: isActivePage(item.href) 
                    ? 'primary.contrastText' 
                    : 'text.primary',
                  '&:hover': {
                    backgroundColor: isActivePage(item.href) 
                      ? 'primary.dark' 
                      : 'action.hover',
                  },
                }}
              >
                {item.label}
              </Button>
            );
          })}
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              {mode === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );

  return (
    <>
      <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: 'background.paper',
            backdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${muiTheme.palette.divider}`,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                justifyContent: 'space-between',
                px: { xs: 0, sm: 0 },
                minHeight: { xs: '6rem', md: '7rem' },
              }}
            >
              {/* Logo */}
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'transform 0.2s ease',
                    position: 'relative',
                    zIndex: 10,
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Image
                    src="/snowpeak-logo/vector/defaultLandscape.svg"
                    alt={COMPANY_INFO.name}
                    width={240}
                    height={80}
                  />
                </Box>
              </Link>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {NAVIGATION_ITEMS.map((item) => {
                    if (item.label === 'Services') {
                      return (
                        <Box 
                          key={item.href}
                          onMouseEnter={handleServicesMouseEnter}
                          onMouseLeave={handleServicesMouseLeave}
                        >
                          <Button
                            variant={isActivePage(item.href) ? 'contained' : 'text'}
                            endIcon={<KeyboardArrowDown />}
                            sx={{
                              mx: 0.5,
                              fontWeight: 600,
                              color: isActivePage(item.href) 
                                ? 'primary.contrastText' 
                                : 'text.primary',
                              '&:hover': {
                                backgroundColor: isActivePage(item.href) 
                                  ? 'primary.dark' 
                                  : 'action.hover',
                              },
                            }}
                          >
                            {item.label}
                          </Button>
                          <Menu
                            anchorEl={servicesAnchorEl}
                            open={Boolean(servicesAnchorEl)}
                            onClose={handleServicesClose}
                            TransitionComponent={Fade}
                            transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                            onMouseEnter={handleMenuMouseEnter}
                            onMouseLeave={handleMenuMouseLeave}
                            sx={{
                              '& .MuiPaper-root': {
                                mt: 1,
                                minWidth: 480,
                                maxWidth: 520,
                                background: muiTheme.palette.mode === 'dark'
                                  ? 'rgba(30, 41, 59, 0.95)'
                                  : 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(20px)',
                                border: `1px solid ${muiTheme.palette.divider}`,
                                borderRadius: 3,
                                boxShadow: muiTheme.palette.mode === 'dark'
                                  ? '0 1rem 3rem rgba(0, 0, 0, 0.4)'
                                  : '0 1rem 3rem rgba(0, 0, 0, 0.15)',
                              },
                            }}
                          >
                            <Box sx={{ p: 3 }}>
                              {/* Header */}
                              <Box sx={{ mb: 3, textAlign: 'center' }}>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    fontWeight: 700,
                                    color: 'text.primary',
                                    mb: 0.5,
                                  }}
                                >
                                  Our Services
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: 'text.secondary',
                                    fontSize: '0.875rem',
                                  }}
                                >
                                  Comprehensive digital solutions for your business
                                </Typography>
                              </Box>

                              {/* Services Grid */}
                              <Box
                                sx={{
                                  display: 'grid',
                                  gridTemplateColumns: 'repeat(2, 1fr)',
                                  gap: 2,
                                  mb: 3,
                                }}
                              >
                                {SERVICES.map((service) => {
                                  const IconComponent = getServiceIcon(service.icon);
                                  return (
                                    <Box
                                      key={service.id}
                                      component={Link}
                                      href={`/services#${service.id}`}
                                      onClick={handleServicesClose}
                                      sx={{
                                        display: 'block',
                                        textDecoration: 'none',
                                        p: 2,
                                        borderRadius: 2,
                                        border: `1px solid ${muiTheme.palette.divider}`,
                                        background: muiTheme.palette.mode === 'dark'
                                          ? 'rgba(51, 65, 85, 0.3)'
                                          : 'rgba(248, 250, 252, 0.8)',
                                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                        cursor: 'pointer',
                                        '&:hover': {
                                          transform: 'translateY(-0.125rem)',
                                          borderColor: 'primary.main',
                                          background: muiTheme.palette.mode === 'dark'
                                            ? `linear-gradient(135deg, ${muiTheme.palette.primary.main}15 0%, ${muiTheme.palette.secondary.main}15 100%)`
                                            : `linear-gradient(135deg, ${muiTheme.palette.primary.main}08 0%, ${muiTheme.palette.secondary.main}08 100%)`,
                                          boxShadow: muiTheme.palette.mode === 'dark'
                                            ? '0 0.5rem 1rem rgba(0, 0, 0, 0.3)'
                                            : '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
                                        },
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          display: 'flex',
                                          alignItems: 'flex-start',
                                          gap: 1.5,
                                        }}
                                      >
                                        <Box
                                          sx={{
                                            p: 1,
                                            borderRadius: 1.5,
                                            background: `linear-gradient(135deg, ${muiTheme.palette.primary.main}20 0%, ${muiTheme.palette.secondary.main}20 100%)`,
                                            flexShrink: 0,
                                          }}
                                        >
                                          <IconComponent
                                            sx={{
                                              fontSize: '1.25rem',
                                              color: 'primary.main',
                                            }}
                                          />
                                        </Box>
                                        <Box sx={{ minWidth: 0, flex: 1 }}>
                                          <Typography
                                            variant="body1"
                                            sx={{
                                              fontWeight: 600,
                                              color: 'text.primary',
                                              mb: 0.5,
                                              fontSize: '0.875rem',
                                              lineHeight: 1.3,
                                            }}
                                          >
                                            {service.title}
                                          </Typography>
                                          <Typography
                                            variant="body2"
                                            sx={{
                                              color: 'text.secondary',
                                              fontSize: '0.75rem',
                                              lineHeight: 1.4,
                                              display: '-webkit-box',
                                              WebkitLineClamp: 2,
                                              WebkitBoxOrient: 'vertical',
                                              overflow: 'hidden',
                                            }}
                                          >
                                            {service.description}
                                          </Typography>
                                        </Box>
                                      </Box>
                                    </Box>
                                  );
                                })}
                              </Box>

                              {/* CTA Button */}
                              <Button
                                component={Link}
                                href="/services"
                                onClick={handleServicesClose}
                                variant="contained"
                                fullWidth
                                sx={{
                                  background: `linear-gradient(135deg, ${muiTheme.palette.primary.main} 0%, ${muiTheme.palette.secondary.main} 100%)`,
                                  py: 1.5,
                                  fontWeight: 600,
                                  fontSize: '0.875rem',
                                  borderRadius: 2,
                                  '&:hover': {
                                    background: `linear-gradient(135deg, ${muiTheme.palette.secondary.main} 0%, ${muiTheme.palette.primary.main} 100%)`,
                                    transform: 'translateY(-0.125rem) scale(1.02)',
                                  },
                                }}
                              >
                                View All Services & Pricing
                              </Button>
                            </Box>
                          </Menu>
                        </Box>
                      );
                    }
                    return (
                      <Button
                        key={item.href}
                        component={Link}
                        href={item.href}
                        variant={isActivePage(item.href) ? 'contained' : 'text'}
                        sx={{
                          mx: 0.5,
                          fontWeight: 600,
                          color: isActivePage(item.href) 
                            ? 'primary.contrastText' 
                            : 'text.primary',
                          '&:hover': {
                            backgroundColor: isActivePage(item.href) 
                              ? 'primary.dark' 
                              : 'action.hover',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    );
                  })}
                  
                  <IconButton
                    onClick={toggleTheme}
                    sx={{
                      ml: 1,
                      color: 'text.primary',
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  >
                    {mode === 'light' ? <DarkMode /> : <LightMode />}
                  </IconButton>
                </Box>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: 'text.primary' }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100%',
            top: { xs: '6rem', md: '7rem' },
            height: 'auto',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed AppBar */}
      <Toolbar sx={{ minHeight: { xs: '6rem', md: '7rem' } }} />
    </>
  );
};

export default Navigation;
