"use client";

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const TermsPage: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 12, md: 16 } }}>
      <Container maxWidth="md">
        <Typography variant="h1" sx={{ mb: 3, fontWeight: 700 }}>
          Terms of Service
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          By using our services, you agree to our standard engagement terms, including scope definition, timelines,
          payments, and intellectual property provisions defined in your project proposal.
        </Typography>
      </Container>
    </Box>
  );
};

export default TermsPage;


