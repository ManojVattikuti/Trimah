const path = require('path');
const fs = require('fs');
const applicationModel = require('../model/applicationModel');
const BusinessInquiry = require('../model/BusniessInquiryModel');
const cloudinary = require('cloudinary').v2;
const dotenv= require("dotenv")
const { Storage } = require('@google-cloud/storage');
const axios = require('axios');
dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,   // Replace with your Cloudinary cloud name
  api_key: process.env.APIKEY,         // Replace with your Cloudinary API key
  api_secret : process.env.APISECRET    // Replace with your Cloudinary API secret
});



// // Initialize GCP Storage
// const storage = new Storage({
//   keyFilename: path.join(__dirname, './path-to-your-service-account.json'), // Path to your service account JSON key
//   projectId: 'your-project-id', // Replace with your GCP project ID
// });

// const bucketName = 'your-bucket-name'; // Replace with your bucket name
// const bucket = storage.bucket(bucketName);





//career apply cloudinary working 

const apply = async (req, res) => {
  try {
    const { name, email, position, coverLetter } = req.body;
    const cv = req.file;  // The CV file will be in req.file

    // Validation: Ensure required fields and files are provided
    if (!name || !email || !position || !cv || !coverLetter) {
      return res.status(400).json({ success: false, message: "All fields are required, including CV and Cover Letter." });
    }

    // Upload CV to Cloudinary using upload stream
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'auto' }, // 'auto' lets Cloudinary determine the file type
      async (error, result) => {
        if (error) {
          return res.status(500).json({ success: false, message: "Error uploading CV to Cloudinary.", error });
        }

        // Save form data and Cloudinary URL for CV to the database
        const careerSeeker = new applicationModel({
          name,
          email,
          position,
          cv: result.secure_url, // Cloudinary URL for CV
          coverLetter // Store the cover letter text directly
        });

        // Save to database
        const savedCareerSeeker = await careerSeeker.save();

        // Send success response
        return res.status(201).json({ success: true, data: savedCareerSeeker });
      }
    );

    // Pass the file to the upload stream
    uploadStream.end(cv.buffer);

  } catch (error) {
    console.error('Error saving career seeker form data:', error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};



// inquires to mongodb and hub spot 

const Inquiries = async (req, res) => {
  console.log(req.body);

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
    console.log("Data saved to MongoDB:", savedData);

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
      console.log("HubSpot response:", hubspotResponseData);
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







// career with gcp storage

// const apply = async (req, res) => {
//   try {
//     const { name, email, position, coverLetter } = req.body;
//     const cv = req.file; // The CV file will be in req.file

//     // Validation: Ensure required fields and files are provided
//     if (!name || !email || !position || !cv || !coverLetter) {
//       return res.status(400).json({ success: false, message: "All fields are required, including CV and Cover Letter." });
//     }

//     // Create a unique file name for the CV
//     const fileName = `${Date.now()}-${cv.originalname}`;
//     const file = bucket.file(fileName);

//     // Upload the file to GCP Storage
//     const stream = file.createWriteStream({
//       resumable: true,
//       contentType: cv.mimetype,
//     });

//     stream.on('error', (error) => {
//       console.error('Error uploading CV to GCP:', error);
//       return res.status(500).json({ success: false, message: "Error uploading CV to GCP Storage.", error });
//     });

//     stream.on('finish', async () => {
//       // Make the file publicly accessible
//       await file.makePublic();

//       // Get the public URL
//       const publicUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;

//       // Save form data and GCP URL for CV to the database
//       const careerSeeker = new applicationModel({
//         name,
//         email,
//         position,
//         cv: publicUrl, // GCP URL for CV
//         coverLetter, // Store the cover letter text directly
//       });

//       // Save to database
//       const savedCareerSeeker = await careerSeeker.save();

//       // Send success response
//       res.status(201).json({ success: true, data: savedCareerSeeker });
//     });

//     // Write the file buffer to the stream
//     stream.end(cv.buffer);

//   } catch (error) {
//     console.error('Error saving career seeker form data:', error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };




module.exports={apply,
  Inquiries
 
    
}