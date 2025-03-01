const path = require('path');
const fs = require('fs');
const applicationModel = require('../model/applicationModel');
const BusinessInquiry = require('../model/BusniessInquiryModel');
const cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv")
const { Storage } = require('@google-cloud/storage');
const axios = require('axios');
const getToken = require('../utils/getToken')
dotenv.config()




const applyToCeipal = async (req, res) => {
  try {
    const { name, email, position, coverLetter } = req.body;
    const file = req.file; // Get uploaded resume

    // ✅ Ensure all required fields exist
    if (!name || !email || !position || !coverLetter || !file) {
      return res.status(400).json({ success: false, message: "All fields and resume file are required." });
    }

    // ✅ Check if an application with the same email and position already exists
    const existingApplication = await applicationModel.findOne({ email, position });
    if (existingApplication) {
      return res.status(400).json({ success: false, message: "Application for this position already exists." });
    }

    // ✅ Convert file buffer to Base64
    const resumeBase64 = file.buffer.toString("base64");

    // **Send immediate success response to frontend**
    res.status(200).json({ success: true, message: "Application submitted successfully!" });

    // **Run Ceipal API call & DB save in background**
    (async () => {
      try {
        const authToken = await getToken();
        const ceipalUrl =
          "https://api.ceipal.com/savecustomapplicantdetails/Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09/68255255184ad374a5f48d5ac4576226/";

        const applicantData = [
          {
            first_name: name,
            email_address: email,
            job_title: position,
            filename: file.originalname,
            resume_content: resumeBase64
          }
        ];

        const ceipalRequest = axios.post(ceipalUrl, applicantData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
          }
        });

        const dbSaveRequest = new applicationModel({
          name,
          email,
          position,
          coverLetter,
          resume: file.originalname
        }).save();

        const results = await Promise.allSettled([ceipalRequest, dbSaveRequest]);

        if (results[0].status === "fulfilled") {
          console.log("Ceipal API Success:", results[0].value.data);
        } else {
          console.error("Ceipal API Failed:", results[0].reason.response?.data || results[0].reason);
        }

        if (results[1].status === "fulfilled") {
          console.log("Application saved successfully to MongoDB");
        } else {
          console.error("MongoDB save failed:", results[1].reason);
        }
      } catch (err) {
        console.error("Background process error:", err.message);
      }
    })();
  } catch (error) {
    console.error("Application Submission Error:", error.message, error.response?.data || "");
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};


// inquires to mongodb and hub spot 

const Inquiries = async (req, res) => {


  try {
    const { fullName, email, companyName, phone, message } = req.body;

    // ✅ Step 1: Validation checks
    if (!fullName || typeof fullName !== "string" || fullName.trim() === "") {
      return res.status(400).json({ success: false, message: "Full name is required and must be a string." });
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ success: false, message: "A valid email address is required." });
    }

    if (!companyName || typeof companyName !== "string" || companyName.trim() === "") {
      return res.status(400).json({ success: false, message: "Company name is required and must be a string." });
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
      return res.status(400).json({ success: false, message: "Phone number is required and must be a 10-digit number." });
    }

    if (!message || typeof message !== "string" || message.trim() === "") {
      return res.status(400).json({ success: false, message: "Message is required and must be a string." });
    }

    // ✅ Step 2: Check for duplicate inquiries
    const existingInquiry = await BusinessInquiry.findOne({ email, fullName, phone });

    if (existingInquiry) {
      return res.status(400).json({
        success: false,
        message: "An inquiry with the same name, email, and phone already exists.",
      });
    }

    // ✅ Step 3: Save to MongoDB
    const formData = new BusinessInquiry({ fullName, email, companyName, phone, message });
    const savedData = await formData.save();
  

    // ✅ Step 4: Send data to HubSpot
    const hubspotApiUrl = "https://api.hubapi.com/crm/v3/objects/contacts";
    const hubspotToken = process.env.HUBSPOT_API_KEY;

    const hubspotPayload = {
      properties: {
        firstname: fullName.split(" ")[0],
        lastname: fullName.split(" ")[1] || "",
        email: email,
        phone: phone,
        company: companyName, // Ensure this is correct
        message: message, // Use a custom field if needed
      },
    };

    let hubspotResponseData = null;
    try {
      const hubspotResponse = await axios.post(hubspotApiUrl, hubspotPayload, {
        headers: {
          Authorization: `Bearer ${hubspotToken}`,
          "Content-Type": "application/json",
        },
      });
      hubspotResponseData = hubspotResponse.data;
      
    } catch (hubspotError) {
      console.error("Error sending to HubSpot:", hubspotError.response?.data || hubspotError.message);
      hubspotResponseData = { error: hubspotError.response?.data || "Failed to send to HubSpot" };
    }

    // ✅ Step 5: Send response back to frontend (MongoDB data + HubSpot status)
    res.status(201).json({
      success: true,
      message: "Data saved successfully",
      dbData: savedData,
      hubspotData: hubspotResponseData,
    });

  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};






module.exports = {
  Inquiries,
  applyToCeipal


}