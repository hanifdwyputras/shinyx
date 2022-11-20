import React from 'react';
import { TabContext, TabList } from '@mui/lab';
import { Box, Tab } from '@mui/material';

import AboutTab from './tabs/about';
import BilibiliTab from './tabs/bilibili';

export default function HomeTabs() {
  const [value, setValue] = React.useState('about');
  return (
    <React.Fragment>
      <TabContext value={value}>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <TabList onChange={(_, value) => setValue(value)} centered>
            <Tab label="About" value="about" />
            <Tab label="Bilibili-DL" value="bili" />
            <Tab label="TikTok-DL" value="tt" />
          </TabList>
        </Box>
        <AboutTab />
        <BilibiliTab />
      </TabContext>
    </React.Fragment>
  );
}
