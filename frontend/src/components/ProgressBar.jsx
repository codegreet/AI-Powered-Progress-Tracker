import React from 'react';
import { LinearProgress, Typography, Box } from '@mui/material';

const ProgressBar = ({ label, progress }) => {
  return (
    <Box mb={2}>
      <Typography variant="body2">{label}</Typography>
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        sx={{ height: 10, borderRadius: 5, marginTop: 1 }}
      />
      <Typography variant="caption">{progress}%</Typography>
    </Box>
  );
};

export default ProgressBar;

