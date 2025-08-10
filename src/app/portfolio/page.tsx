"use client";

import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, Stack, Button } from '@mui/material';
import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/data/constants';

const PortfolioPage: React.FC = () => {
  return (
    <Box>
      <Box sx={{ py: { xs: 12, md: 16 } }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 2 }}>
              Portfolio
            </Typography>
            <Typography variant="h6" color="text.secondary">
              A selection of projects showcasing real outcomes and craftsmanship
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
            }}
          >
            {PORTFOLIO_PROJECTS.map((p) => (
              <Card key={p.id} sx={{ borderRadius: 2 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip label={p.type} size="small" />
                    <Chip label={p.status} size="small" color="success" />
                    {p.users && <Chip label={`${p.users} users`} size="small" />}
                  </Stack>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {p.description}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mb: 3 }}>
                    {p.technologies.map((t) => (
                      <Chip key={t} label={t} size="small" variant="outlined" />
                    ))}
                  </Stack>
                  {p.liveUrl && (
                    <Button component={Link} href={p.liveUrl} target="_blank" rel="noopener" variant="contained">
                      View Live
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PortfolioPage;


