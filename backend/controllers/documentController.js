const Document = require('../models/Document');
const axios = require("axios");
const path = require("path");
const pdf = require("pdf-parse");
const fs = require('fs');
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

exports.uploadDocument = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    // Read file buffer
    const fileBuffer = fs.readFileSync(req.file.path);

    // Extract text from PDF
    const data = await pdf(fileBuffer);

    // Save to MongoDB
    const doc = await Document.create({
      fileName: req.file.originalname,
      extractedText: data.text
    });

    // Delete temp file
    fs.unlinkSync(req.file.path);

    res.json(doc); // returns _id and extractedText
  } catch (err) {
    console.error("UPLOAD ERROR →", err);
    res.status(500).json({ error: "Failed to upload document" });
  }
};

// Summarise document using OpenAI
exports.summariseDocument = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    if (!doc || !doc.extractedText) {
      return res.status(404).json({ error: "Document not found or empty" });
    }

    // Call OpenAI API
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You summarize documents clearly and concisely." },
          { role: "user", content: `Summarize this document:\n\n${doc.extractedText}` }
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

    const summary = response.data.choices[0].message.content;
    res.json({ summary });

  } catch (err) {
    console.error("SUMMARIZE ERROR →", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to summarize document" });
  }
};

// exports.uploadDocument = async (req, res) => {
//   try {
//     const fileBuffer = fs.readFileSync(req.file.path);
//     const pdfData = await pdf(fileBuffer);

//     const doc = await Document.create({
//       fileName: req.file.originalname,
//       extractedText: pdfData.text
//     });

//     res.json(doc);
//   } catch (error) {
//     console.error("UPLOAD ERROR →", error);
//     res.status(500).json({ error: "Failed to upload document" });
//   }
// };

// exports.summariseDocument = async (req, res) => {
//   try {
//     const doc = await Document.findById(req.params.id);

//     if (!doc || !doc.extractedText) {
//       return res.status(404).json({ error: "Document text not found" });
//     }

//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         model: "gpt-4o-mini",
//         messages: [
//           {
//             role: "system",
//             content: "You summarize documents clearly and concisely."
//           },
//           {
//             role: "user",
//             content: `Summarize this document:\n\n${doc.extractedText}`
//           }
//         ],
//         temperature: 0.3
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
//         }
//       }
//     );

//     const summary = response.data.choices[0].message.content;
//     res.json({ summary });

//   } catch (error) {
//     console.error("SUMMARY ERROR →", error.response?.data || error.message);
//     res.status(500).json({ error: "Failed to summarize document" });
//   }
// };
