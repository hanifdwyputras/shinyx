import { TabPanel } from '@mui/lab';
import { Link, Typography } from '@mui/material';

export default function AboutTab() {
  return (
    <TabPanel value="about">
      <Typography variant="body2">
        <strong>ShinyX</strong> is an open source project that could download
        Bilibili.TV, and TikTok videos. This project is maintained by{' '}
        <Link href={'https://github.com/hansputera'}>Hanif Dwy Putra S</Link>, I
        created this project because I want learn ffmpeg on browser, and learn
        reactjs.
      </Typography>
    </TabPanel>
  );
}
