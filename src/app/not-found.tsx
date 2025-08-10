'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box sx={{ py: { xs: 12, md: 16 } }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
          Page not found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The page you are looking for doesn’t exist or has been moved.
        </Typography>
        <Button component={Link} href="/" variant="contained">
          Go Home
        </Button>
      </Container>
    </Box>
  );
}


