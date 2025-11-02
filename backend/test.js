import axios from "axios";

async function testBackend() {
  try {
    const response = await axios.post("http://localhost:5000/get-insights", {
      progressData: [
        { day: "Mon", progress: 20 },
        { day: "Tue", progress: 40 }
      ]
    });
    console.log("AI insights:", response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}

testBackend();
