import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

const ProgressCircle = ({ progress }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
      <CircularProgress 
        variant="determinate" 
        value={progress} 
        size={100} 
        thickness={5}
      />
      <Typography variant="h5" mt={1}>{progress}%</Typography>
    </Box>
  );
};

export default ProgressCircle;

