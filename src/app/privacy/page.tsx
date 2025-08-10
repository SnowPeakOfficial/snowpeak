"use client";

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const PrivacyPage: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 12, md: 16 } }}>
      <Container maxWidth="md">
        <Typography variant="h1" sx={{ mb: 3, fontWeight: 700 }}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          We respect your privacy. We collect only the information necessary to respond to your inquiries and deliver
          services. We do not sell your data. Contact us if you have any questions about how your information is
          handled.
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPage;


