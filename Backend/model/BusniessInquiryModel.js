const mongoose = require("mongoose");

const BusinessInquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  companyName: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  });
  
  const BusinessInquiry = mongoose.model("BusinessInquiry", BusinessInquirySchema);
  module.exports = BusinessInquiry;