'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Close } from '@mui/icons-material';

interface CalendlyModalProps {
  open: boolean;
  onClose: () => void;
  calendlyUrl: string;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({
  open,
  onClose,
  calendlyUrl,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when modal opens
  useEffect(() => {
    if (open) {
      setIsLoading(true);
    }
  }, [open]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Listen for Calendly events (keeping for potential analytics or other purposes)
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.event_scheduled') {
          // Event scheduled - confirmation screen will remain visible until user manually closes
          console.log('Calendly event scheduled - confirmation screen will stay open');
        }
      }
    };

    if (open) {
      window.addEventListener('message', handleCalendlyEvent);
    }

    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, [open, onClose]);


  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: isMobile ? '95vw' : '85vw',
          height: isMobile ? '95vh' : '90vh',
          maxWidth: '1200px',
          maxHeight: '1000px',
          borderRadius: 3,
          overflow: 'hidden',
          background: theme.palette.mode === 'dark'
            ? 'rgba(30, 41, 59, 0.95)'
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          margin: 'auto',
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(4px)',
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          <Close />
        </IconButton>

        {/* Loading Indicator */}
        {isLoading && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 8, // Increased top padding for better spacing
              backgroundColor: theme.palette.mode === 'dark'
                ? 'rgba(30, 41, 59, 0.9)'
                : 'rgba(255, 255, 255, 0.9)',
              zIndex: 5,
            }}
          >
            <CircularProgress 
              size={40} 
              sx={{
                color: theme.palette.primary.main, // Use theme primary color (#395ECA)
              }}
            />
          </Box>
        )}

        {/* Calendly Iframe */}
        <Box
          component="iframe"
          src={`${calendlyUrl}?embed_domain=${typeof window !== 'undefined' ? window.location.hostname : ''}&embed_type=Inline&primary_color=395ECA&text_color=000000&background_color=ffffff&hide_loading=1&hide_gdpr_banner=1`}
          sx={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: 2,
          }}
          onLoad={handleIframeLoad}
          title="Schedule a meeting"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;
