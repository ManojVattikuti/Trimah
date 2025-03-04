// API base URL
export const API_BASE_URL = 'https://trimah-backend-737491632113.us-east5.run.app/api/';

// API endpoints for admin
export const ADMINENDPOINTS = {
  GETUSERS: `${API_BASE_URL}admin/getUsers`,
  GETCONTACTS: `${API_BASE_URL}admin/getMessages`,
  GETAPLLICATIONS :`${API_BASE_URL}admin/applications`,
  DELETEAPPLICATION:`${API_BASE_URL}admin/deleteApplication`,
  DELETEAPPLICATIONS:`${API_BASE_URL}admin/deleteApplications`,
  DELETEINQUIRY:`${API_BASE_URL}admin/deleteInquiry`,
  DELETEINQUIRIES:`${API_BASE_URL}admin/deleteInquiries`,

  DELETEUSER:`${API_BASE_URL}admin/deleteuser`,

  ADDUSER:`${API_BASE_URL}admin/adduser`,

  GETDASHBOARD:`${API_BASE_URL}admin/dashboard-stats`,
  GETAPPLICANTSTATUS:`${API_BASE_URL}admin/applicants-stats`,
  GETINQUIRYSTATS :`${API_BASE_URL}admin/inquiry-stats`,
  GETRECENTAPPLICANTS:`${API_BASE_URL}admin/recent-applicants`,
  GETRECENTINQUIRY:`${API_BASE_URL}admin/recent-inquiry`,

  GETRECENTUSERS:`${API_BASE_URL}admin/recentuser`
  // Add other endpoints here as needed
};
