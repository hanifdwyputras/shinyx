import React from 'react';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import HomeTabs from '../components/HomeTabs';

export default function IndexPage() {
  return (
    <React.Fragment>
      <Container fixed>
        <Typography variant="h2">ShinyX</Typography>
        <Typography variant="body1">
          A website that could download Bilibili.TV Videos, and TikTok Videos
          without Watermark!
        </Typography>
        <HomeTabs />
      </Container>
    </React.Fragment>
  );
}
