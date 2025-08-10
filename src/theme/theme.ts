import { createTheme } from '@mui/material/styles';

// SnowPeak Brand Colors from logo info
const brandColors = {
  primary: '#395ECA',
  secondary: '#848BD8',
  text: '#000000',
  slogan: '#141414',
};

// Extended color palette
const colors = {
  brand: brandColors,
  accent: {
    blue: '#3B82F6',
    purple: '#8B5CF6',
    teal: '#14B8A6',
    green: '#10B981',
    orange: '#F59E0B',
  },
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
};

// Fluid typography scale using clamp()
const typography = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: 'clamp(2.5rem, 5vw + 1rem, 4rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: 'clamp(2rem, 4vw + 1rem, 3rem)',
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: 'clamp(1.5rem, 3vw + 1rem, 2rem)',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h4: {
    fontSize: 'clamp(1.25rem, 2vw + 1rem, 1.5rem)',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: 'clamp(1.125rem, 1.5vw + 0.5rem, 1.25rem)',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h6: {
    fontSize: 'clamp(1rem, 1vw + 0.5rem, 1.125rem)',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  body1: {
    fontSize: 'clamp(1rem, 1vw + 0.5rem, 1.125rem)',
    lineHeight: 1.6,
  },
  body2: {
    fontSize: 'clamp(0.875rem, 1vw + 0.25rem, 1rem)',
    lineHeight: 1.5,
  },
};

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.brand.primary,
      light: '#5A7FE8',
      dark: '#2A4BA0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: colors.brand.secondary,
      light: '#A5ACE6',
      dark: '#6B72C5',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: colors.neutral[50],
    },
    text: {
      primary: colors.brand.text,
      secondary: colors.neutral[600],
    },
    divider: colors.neutral[200],
  },
  typography,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '0.75rem',
          padding: '0.75rem 1.5rem',
          fontSize: 'clamp(0.875rem, 1vw + 0.25rem, 1rem)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-0.125rem)',
            boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${colors.brand.primary} 0%, ${colors.brand.secondary} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.brand.secondary} 0%, ${colors.accent.purple} 100%)`,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 'clamp(1rem, 5vw, 2rem)',
          paddingRight: 'clamp(1rem, 5vw, 2rem)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          boxShadow: '0 0.25rem 1rem rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-0.25rem)',
            boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.brand.secondary,
      light: '#A5ACE6',
      dark: '#6B72C5',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: colors.brand.primary,
      light: '#5A7FE8',
      dark: '#2A4BA0',
      contrastText: '#FFFFFF',
    },
    background: {
      default: colors.neutral[900],
      paper: colors.neutral[800],
    },
    text: {
      primary: colors.neutral[50],
      secondary: colors.neutral[300],
    },
    divider: colors.neutral[700],
  },
  typography,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '0.75rem',
          padding: '0.75rem 1.5rem',
          fontSize: 'clamp(0.875rem, 1vw + 0.25rem, 1rem)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-0.125rem)',
            boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${colors.brand.secondary} 0%, ${colors.accent.purple} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.accent.purple} 0%, ${colors.brand.primary} 100%)`,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 'clamp(1rem, 5vw, 2rem)',
          paddingRight: 'clamp(1rem, 5vw, 2rem)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          boxShadow: '0 0.25rem 1rem rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-0.25rem)',
            boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.4)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
  },
});

export { colors, typography };
