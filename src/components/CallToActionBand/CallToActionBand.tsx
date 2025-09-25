"use client";

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

const CallToActionBand: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 12 },
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: 'primary.contrastText', 
              fontWeight: 700, 
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Ready to Build Beyond the Summit?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'primary.contrastText', 
              opacity: 0.9, 
              mb: 4,
              fontSize: { xs: '1.125rem', md: '1.25rem' },
            }}
          >
            Let&apos;s craft something remarkable together.
          </Typography>
          <Button component={Link} href="/contact" size="large" variant="contained" sx={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            px: 4,
            py: 1.5,
          }}>
            Get a Proposal
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CallToActionBand;
