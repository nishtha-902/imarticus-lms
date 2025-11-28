const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadDocument, summariseDocument } = require("../controllers/documentController");

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("document"), uploadDocument);
router.get("/summarise/:id", summariseDocument);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const { uploadDocument, summariseDocument } = require('../controllers/documentController');

// const upload = multer({ dest: 'uploads/' });

// router.post('/upload', upload.single('document'), uploadDocument);
// router.get('/summarise/:id', summariseDocument);

// module.exports = router;
