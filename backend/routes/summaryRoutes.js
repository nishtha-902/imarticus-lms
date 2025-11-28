const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

router.post("/summarize", async (req, res) => {
  try {
    const { documentText } = req.body;

    if (!documentText) return res.status(400).json({ error: "No document text provided" });

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an AI that summarizes documents clearly and concisely."
          },
          {
            role: "user",
            content: `Summarize this document:\n\n${documentText}`
          }
        ],
        temperature: 0.3
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    res.json({ summary: response.data.choices[0].message.content });
  } catch (error) {
    console.error("SUMMARIZATION ERROR →", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to summarize the document" });
  }
});

module.exports = router;
