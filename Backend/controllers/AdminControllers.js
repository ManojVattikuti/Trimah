const applicationModel = require("../model/applicationModel");
const ContactModel = require("../model/ContactModel");
const UserModel = require("../model/UserModel");
const axios = require('axios');
const getToken = require('../utils/getToken');
const BusinessInquiry = require("../model/BusniessInquiryModel");
const bcrypt = require('bcryptjs');
const moment = require('moment');
const mongoose = require("mongoose");

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

const getMessages = async (req, res) => {
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

const getApplication = async (req, res) => {

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


const DeleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedApplication = await applicationModel.findByIdAndDelete(id);

    if (!deletedApplication) {
      return res.status(404).json({ success: false, message: "Application not found" });
    }

    res.json({ success: true, message: "Application deleted successfully" });
  } catch (error) {
    console.error("Error deleting application:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }

}


const deleteApplications = async (req, res) => {


  try {
    const { ids } = req.body;
    if (!ids || ids.length === 0) {
      return res.status(400).json({ success: false, message: "No applications selected" });
    }

    await applicationModel.deleteMany({ _id: { $in: ids } });
    res.json({ success: true, message: "Selected applications deleted successfully" });
  } catch (error) {
    console.error("Error deleting applications:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }

}


const DeleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedApplication = await BusinessInquiry.findByIdAndDelete(id);

    if (!deletedApplication) {
      return res.status(404).json({ success: false, message: "Inquiry not found" });
    }

    res.json({ success: true, message: "data deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }

}

const deleteInquiries = async (req, res) => {


  try {
    const { ids } = req.body;
    if (!ids || ids.length === 0) {
      return res.status(400).json({ success: false, message: "No data selected" });
    }

    await BusinessInquiry.deleteMany({ _id: { $in: ids } });
    res.json({ success: true, message: "Selected data deleted successfully" });
  } catch (error) {
    console.error("Error deleting datas:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }

}


const deleteuser = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
}





const adduser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with default role "admin"
    user = new UserModel({
      name,
      email,
      password: hashedPassword,
      role: 'admin' // Default role as admin
    });

    await user.save();
    res.status(201).json({ message: 'User added successfully', user });

  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Error adding user', error });
  }
};


const getMonthName = (month) => moment().month(month - 1).format("MMMM");

const dashboarddata = async (req, res) => {
  try {
    // Count total users, applicants, and business inquiries
    const [totalUsers, totalApplicants, totalBusinessInquiries] = await Promise.all([
      UserModel.countDocuments(),
      applicationModel.countDocuments(),
      BusinessInquiry.countDocuments(),
    ]);

    // Get today's and yesterday's start and end times in UTC
    const todayStart = moment.utc().startOf("day").toDate();
    const todayEnd = moment.utc().endOf("day").toDate();
    const yesterdayStart = moment.utc().subtract(1, "days").startOf("day").toDate();
    const yesterdayEnd = moment.utc().subtract(1, "days").endOf("day").toDate();



    // Fetch counts for today & yesterday
    const [todayApplicants, todayInquiries, yesterdayApplicants, yesterdayInquiries] = await Promise.all([
      applicationModel.countDocuments({
        createdAt: {
          $gte: moment.utc(todayStart).toDate(),
          $lt: moment.utc(todayEnd).toDate()
        }
      }),
      BusinessInquiry.countDocuments({
        createdAt: {
          $gte: moment.utc(todayStart).toDate(),
          $lt: moment.utc(todayEnd).toDate()
        }
      }),
      applicationModel.countDocuments({
        createdAt: {
          $gte: moment.utc(yesterdayStart).toDate(),
          $lt: moment.utc(yesterdayEnd).toDate()
        }
      }),
      BusinessInquiry.countDocuments({
        createdAt: {
          $gte: moment.utc(yesterdayStart).toDate(),
          $lt: moment.utc(yesterdayEnd).toDate()
        }
      }),
    ]);



    // Return the stats
    res.status(200).json({
      totalUsers,
      totalApplicants,
      totalBusinessInquiries,
      recentStats: {
        today: { applicants: todayApplicants, inquiries: todayInquiries },
        yesterday: { applicants: yesterdayApplicants, inquiries: yesterdayInquiries },
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    res.status(500).json({ message: "Failed to fetch dashboard statistics", error: error.message });
  }
};

const getInquiryStats = async (req, res) => {
  try {
    // Get inquiries for the last 6 months
    const sixMonthsAgo = moment().subtract(6, 'months').startOf('month').toDate();

    // Aggregate inquiries by month for the last 6 months
    const inquiriesByMonth = await BusinessInquiry.aggregate([
      {
        $match: {
          createdAt: { $gte: sixMonthsAgo }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 }
      }
    ]);

    // Transform to required format for frontend
    const formattedData = inquiriesByMonth.map(item => ({
      name: getMonthName(item._id.month),
      Inquiries: item.count
    }));

    res.status(200).json(formattedData);
  } catch (error) {
    console.error('Error fetching inquiry statistics:', error);
    res.status(500).json({ message: 'Failed to fetch inquiry statistics' });
  }
};

const getApplicantStats = async (req, res) => {
  try {
    // Get applications for the last 6 months
    const sixMonthsAgo = moment().subtract(6, 'months').startOf('month').toDate();

    // Aggregate applicants by month for the last 6 months
    const applicantsByMonth = await applicationModel.aggregate([
      {
        $match: {
          createdAt: { $gte: sixMonthsAgo }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 }
      }
    ]);

    // Transform to required format for frontend
    const formattedData = applicantsByMonth.map(item => ({
      name: getMonthName(item._id.month),
      Applications: item.count
    }));



    res.status(200).json(formattedData);

  } catch (error) {
    console.error('Error fetching applicant statistics:', error);
    res.status(500).json({ message: 'Failed to fetch applicant statistics' });
  }
};



const getRecentApplicants = async (req, res) => {
  try {
    // Get 5 most recent applicants
    const recentApplicants = await applicationModel.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name  email position  createdAt');

    res.status(200).json(recentApplicants);
  } catch (error) {
    console.error('Error fetching recent applicants:', error);
    res.status(500).json({ message: 'Failed to fetch recent applicants' });
  }
};




getRecentInquiries = async (req, res) => {
  try {
    // Get 5 most recent business inquiries
    const recentInquiries = await BusinessInquiry.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('companyName fullName email phone message createdAt');

    res.status(200).json(recentInquiries);
  } catch (error) {
    console.error('Error fetching recent inquiries:', error);
    res.status(500).json({ message: 'Failed to fetch recent inquiries' });
  }
};



const blockUser = async (req, res) => {
  try {
   

    // ✅ Validate if userId is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      console.log(`Invalid user ID: ${req.params.id}`);
      return res.status(400).json({ msg: "Invalid user ID" });
    }

    // ✅ Find the user in the database
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      console.log(`User not found: ${req.params.id}`);
      return res.status(404).json({ msg: "User not found" });
    }

    // ✅ Toggle isBlocked status
    const previousStatus = user.isBlocked;
    user.isBlocked = !previousStatus;
    await user.save();

    // ✅ Log proper user status change
    console.log(
      `User ${req.params.id} (${user.name || "No Name"}) was ${previousStatus ? "BLOCKED" : "UNBLOCKED"} ➝ Now: ${user.isBlocked ? "BLOCKED" : "UNBLOCKED"}`
    );

    // ✅ Return status 200 with success message
    return res.status(200).json({ 
      msg: `User ${user.isBlocked ? "blocked" : "unblocked"} successfully`, 
      isBlocked: user.isBlocked 
    });

  } catch (error) {
    console.error("Error toggling user access:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = {
  getUsers,
  getMessages,
  getApplication,
  getJobs,
  getToken,
  DeleteApplication,
  deleteApplications,
  DeleteInquiry,
  deleteInquiries,
  deleteuser,
  adduser,
  dashboarddata,
  getApplicantStats,
  getRecentInquiries,
  getInquiryStats,
  getRecentApplicants,
  blockUser,

}



