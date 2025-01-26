const path = require('path');
const fs = require('fs');
const applicationModel = require('../model/applicationModel');
const BusinessInquiry = require('../model/BusniessInquiryModel');
const cloudinary = require('cloudinary').v2;
const dotenv= require("dotenv")
dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,   // Replace with your Cloudinary cloud name
  api_key: process.env.APIKEY,         // Replace with your Cloudinary API key
  api_secret : process.env.APISECRET    // Replace with your Cloudinary API secret
});


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


//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION
//   });
  
//   const s3 = new AWS.S3();
  
//   const uploadToS3 = async (file) => {
//     const params = {
//       Bucket: process.env.S3_BUCKET_NAME,
//       Key: `resumes/${Date.now()}_${file.originalname}`, // Path within the bucket
//       Body: file.buffer,
//       ContentType: file.mimetype,
//       ACL: 'public-read' // Make the file publicly accessible
//     };
  
//     return s3.upload(params).promise();
//   };
  
//   const apply = async (req, res) => {
//     console.log(req.body);
  
//     try {
//       const { firstName, lastName, email, phone, coverLetter } = req.body;
//       const resume = req.file;
  
//       // Validate required fields
//       if (!firstName || !lastName || !email || !phone || !resume) {
//         return res.status(400).json({ msg: 'Please provide all required fields.' });
//       }
  
//       // Upload resume to S3
//       const result = await uploadToS3(resume);
//       const resumeUrl = result.Location; // S3 URL of the uploaded file
  
//       // Create a new application instance
//       const application = new applicationModel({
//         firstName,
//         lastName,
//         email,
//         phone,
//         coverLetter,
//         resume: resumeUrl // Save the S3 URL to the database
//       });
  
//       // Save application to the database
//       await application.save();
//       res.status(201).json({ msg: 'Application submitted successfully!' });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ msg: 'Server error' });
//     }
//   };

const Inquiries = async (req, res) => {
  console.log(req.body);

  try {
    const { fullName, email, companyName, phone, message } = req.body;

    // Validation checks
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

    // Create a new document
    const formData = new BusinessInquiry({
      fullName,
      email,
      companyName,
      phone,
      message,
    });

    // Save to MongoDB
    const savedData = await formData.save();
    res.status(201).json({ success: true, data: savedData });

  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};




// const { Storage } = require('@google-cloud/storage');
// const path = require('path');

// // Initialize GCP Storage
// const storage = new Storage({
//   keyFilename: path.join(__dirname, './path-to-your-service-account.json'), // Path to your service account JSON key
//   projectId: 'your-project-id', // Replace with your GCP project ID
// });

// const bucketName = 'your-bucket-name'; // Replace with your bucket name
// const bucket = storage.bucket(bucketName);

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