import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const InsightCard = ({ insight }) => {
  return (
    <Card 
      style={{ 
        marginBottom: '10px', 
        backgroundColor: '#e3f2fd', 
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer'
      }}
      elevation={3}
    >
      <CardContent>
        <Typography>{insight}</Typography>
      </CardContent>
    </Card>
  );
};

export default InsightCard;
