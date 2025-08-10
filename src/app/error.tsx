'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <Box sx={{ py: { xs: 12, md: 16 } }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
          Something went wrong
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          {error?.message || 'An unexpected error occurred.'}
        </Typography>
        <Button variant="contained" onClick={reset}>
          Try again
        </Button>
      </Container>
    </Box>
  );
}


