import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const TrendChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.day),
    datasets: [
      {
        label: 'Progress',
        data: data.map(d => d.progress),
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.3)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  return <Line data={chartData} />;
};

export default TrendChart;