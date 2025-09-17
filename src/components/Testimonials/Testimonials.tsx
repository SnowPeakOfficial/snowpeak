"use client";

import React from 'react';
import { Box, Container, Typography, Card, CardContent, Stack, Avatar } from '@mui/material';
import { TESTIMONIALS } from '@/data/constants';

const Testimonials: React.FC = () => {
  const items = TESTIMONIALS.slice(0, 3);
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
      <Container maxWidth="xl">
        <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
            What Clients Say
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Trusted by founders and teams
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 2, md: 3 },
          }}
        >
          {items.map((t) => (
            <Card key={t.id} sx={{ borderRadius: 2, height: '100%', position: 'relative', zIndex: 2 }}>
              <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  “{t.content}”
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar src={t.image} alt={t.name} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {t.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t.role} • {t.company}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
