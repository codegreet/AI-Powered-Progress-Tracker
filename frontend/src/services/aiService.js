import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // ✅ Backend running locally

export const fetchInsights = async (progressData) => {
  try {
    const response = await axios.post(`${BASE_URL}/get-insights`, { progressData });
    return response.data.insights || ["No insights generated."];
  } catch (error) {
    console.error('❌ Error fetching AI insights:', error.message);
    return ["Unable to fetch insights right now."];
  }
};
