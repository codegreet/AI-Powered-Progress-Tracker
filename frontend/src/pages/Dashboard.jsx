import React, { useState, useEffect } from 'react';
import ProgressBar from '../components/ProgressBar';
import ProgressCircle from '../components/ProgressCircle';
import TrendChart from '../components/TrendChart';
import InsightCard from '../components/InsightCard';
import { fetchInsights } from '../services/aiService';
import '../App.css';

const Dashboard = () => {
  const [progressData, setProgressData] = useState([
    { day: "Mon", progress: 20 },
    { day: "Tue", progress: 40 },
    { day: "Wed", progress: 60 },
    { day: "Thu", progress: 80 },
    { day: "Fri", progress: 100 }
  ]);

  const [insights, setInsights] = useState([]);

  useEffect(() => {
    const getInsights = async () => {
      const aiInsights = await fetchInsights(progressData);
      setInsights(aiInsights);
    };
    getInsights();
  }, [progressData]);

  const averageProgress = Math.round(
    progressData.reduce((sum, d) => sum + d.progress, 0) / progressData.length
  );

  return (
    <div className="dashboard-container">
      <h1>AI-Powered Progress Tracker</h1>
      <ProgressCircle progress={averageProgress} />
      {progressData.map(d => (
        <ProgressBar key={d.day} label={d.day} progress={d.progress} />
      ))}
      <TrendChart data={progressData} />
      <h2>AI Insights</h2>
      <div className="insights-container">
        {insights.map((insight, idx) => (
          <InsightCard key={idx} insight={insight} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
