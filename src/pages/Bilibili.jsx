import React from 'react';
import fetch from'unfetch';
import useSWR from 'swr';
import { Box, Container, TextField } from '@mui/material';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function BilibiliPage() {
  const [input, setInput] = React.useState('');
  const { data, error } = useSWR(
    input.length > 10 ? '/api/meta?url=' + input : null,
    fetcher
  );

  return (
    <React.Fragment>
      <Container fixed>
        <Box component={'form'}>
          <div>
            <TextField
              onChange={(_, value) => setInput(value)}
              error={!!error}
              helperText={error}
              required
              label="Bilibili.TV Url"
              placeholder="(e.g. https://www.bilibili.tv/id/video/2049134783)"
              fullWidth
            />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
