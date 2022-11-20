import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Paper } from '@mui/material';

import BottomBarComponent from './components/BottomBar';
import ErrorPage from './pages/Error';
import NoMatchPage from './pages/NoMatch';
import IndexPage from './pages/Index';
import BilibiliPage from './pages/Bilibili';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/bilibili" element={<BilibiliPage />} />
        <Route
          path="*"
          errorElement={<ErrorPage />}
          element={<NoMatchPage />}
        />
      </Routes>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomBarComponent />
      </Paper>
    </BrowserRouter>
  );
}

export default App;
