const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: String,
  cv: String, // URL of the uploaded CV on Cloudinary
  coverLetter: String, // Cover letter text
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', ApplicationSchema);
