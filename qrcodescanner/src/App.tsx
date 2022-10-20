import React from 'react';
import './App.css';
import * as image from './qr.jpg';
import QrScanner from 'qr-scanner';
import { Box } from '@mui/material';
import Card from './components/Card';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Card />
    </Box>
  );
}

export default App;
