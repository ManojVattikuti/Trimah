const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  coverLetter: { type: String },
  resume: { type: String, required: true }, // Path to the resume file
}, {
  timestamps: true,
});

module.exports = mongoose.model('Application', ApplicationSchema);
