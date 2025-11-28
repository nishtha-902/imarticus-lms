const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
  fileName: String,
  extractedText: String
});

module.exports = mongoose.model("Document", DocumentSchema);


// const mongoose = require('mongoose');

// const documentSchema = new mongoose.Schema({
//     name: String,
//     path: String,
//     summary: String
// });

// module.exports = mongoose.model('Document', documentSchema);
