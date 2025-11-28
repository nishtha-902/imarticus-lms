require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
  origin: "*",             // or "http://localhost:3000"
  methods: ["GET", "POST"],
  credentials: true
}));

connectDB();

app.use("/api", require('./routes/summaryRoutes.js'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/documents', require('./routes/documentRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
