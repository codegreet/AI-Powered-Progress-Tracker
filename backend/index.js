import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock fallback insights
const mockInsights = [
  "Keep going! Your progress is steady.",
  "You're ahead of schedule today. Great work!",
  "Focus on the next milestone to stay on track."
];

// Test route
app.get("/", (req, res) => {
  res.send("✅ AI Progress Tracker Backend Running!");
});

// AI insights route
app.post("/get-insights", async (req, res) => {
  const { progressData } = req.body;
  if (!progressData || !Array.isArray(progressData)) {
    return res.status(400).json({ insights: ["Invalid progress data."] });
  }

  const apiKey = process.env.GROQ_API_KEY; // Use your Groq key here

  if (!apiKey) {
    console.warn("⚠️ No API key found. Returning mock insights.");
    return res.json({ insights: mockInsights });
  }

try {
  const prompt = `Generate 3 motivational insights for the following progress data: ${JSON.stringify(progressData)}`;

  const response = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: 'llama-3.1-8b-instant',
      messages: [
        { role: "system", content: "You are a motivational AI assistant." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 200,
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  const aiMessage = response.data.choices?.[0]?.message?.content || "";
  const insights = aiMessage
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  res.json({ insights: insights.length ? insights : mockInsights });
} catch (error) {
  console.error("❌ Error generating AI insights:", error.response?.data || error.message);
  res.json({ insights: mockInsights });
}

});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 AI backend running on port ${PORT}`);
});
