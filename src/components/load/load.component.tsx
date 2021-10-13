import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './load.css';

export const Load = (): JSX.Element => (
  <div className="load">
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  </div>
);
