import { TabPanel } from '@mui/lab';
import BilibiliPage from '../../pages/Bilibili';

export default function BilibiliTab() {
  return (
    <TabPanel value="bili">
        <BilibiliPage />
    </TabPanel>
  );
}
