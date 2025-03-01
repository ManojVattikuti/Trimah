const applicationModel = require("../model/applicationModel");
const ContactModel = require("../model/ContactModel");
const UserModel = require("../model/UserModel");
const axios = require('axios');
const getToken = require('../utils/getToken');
const BusinessInquiry = require("../model/BusniessInquiryModel");


const getUsers = async (req, res) => {
    try {
      const users = await UserModel.find(); // Await the promise returned by find()
      res.json({
        users,
        message: "Successfully fetched users",
        success: true
      });
    } catch (error) {
      console.error(error); 
      res.status(500).json({
        message: "An error occurred while fetching users",
        success: false
      });
    }
  };

  const getMessages = async(req,res)=>{
    try {
        const messages = await BusinessInquiry.find().sort({ createdAt: -1 });
       
        res.json({
          messages,
          message: "Successfully fetched messages",
          success: true
        });
      } catch (error) {
        console.error(error); // Log the error to the console
        res.status(500).json({
          message: "An error occurred while fetching users",
          success: false
        });
      }
    };
   
    const getApplication = async(req,res)=>{
    
      try {
        
    
          const applications = await applicationModel.find().sort({ createdAt: -1 });
         
          res.json({
              applications,
            message: "Successfully fetched Applications",
            success: true
          });
        } catch (error) {
          console.error(error); // Log the error to the console
          res.status(500).json({
            message: "An error occurred while fetching users",
            success: false
          });
        }
      };


      const getJobs = async (req, res) => {
        try {
          
    
            let token = await getToken(); // Get a valid token
    
            const jobResponse = await fetchJobs(token);
    
            if (!jobResponse.results || !Array.isArray(jobResponse.results)) {
                return res.status(500).json({ message: "Invalid job data received", success: false });
            }
  
    
            // Get all unique job statuses (debugging purpose)
            const uniqueStatuses = [...new Set(jobResponse.results.map(job => job["Job_status"]?.trim()))];
            // console.log("Unique Job Statuses:", uniqueStatuses);
    
            const activeJobs = jobResponse.results.filter(job => job.job_status === "Active")
    
       
            res.status(200).json({
                success: true,
                totalJobs: jobResponse.results.length,
                activeJobs: activeJobs.length,
                data: activeJobs // Return all jobs, not just active ones
            });
    
        } catch (error) {
            console.error("Error fetching jobs:", error);
            res.status(500).json({ message: "An error occurred while fetching jobs", success: false });
        }
    };
    
    


  const fetchJobs = async (token) => {
    try {
        const response = await axios.get("https://api.ceipal.com/v1/getJobPostingsList?limit=50", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        return response.data; // Axios automatically parses JSON
    } catch (error) {
        if (error.response && error.response.status === 401) {
            // Token expired, generate a new one and retry
            const newToken = await getToken();
            return await fetchJobs(newToken);
        }

        throw new Error("Error fetching jobs: " + (error.response?.data?.message || error.message));
    }
};

   
module.exports={
    getUsers,
    getMessages,
    getApplication,
    getJobs,
    getToken
}



