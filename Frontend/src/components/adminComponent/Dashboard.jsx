import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  LineChart, Line, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer 
} from "recharts";
import { 
  Card, CircularProgress, Badge, Chip,
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper 
} from "@mui/material";
import { format } from "date-fns";
import { ADMINENDPOINTS } from "../../constants/ApiConstants";
import {Link} from "react-router-dom"
import { BsArrowRight, BsBriefcase, BsBuilding, BsPerson } from 'react-icons/bs';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [applicantStats, setApplicantStats] = useState([]);
  const [inquiryStats, setInquiryStats] = useState([]);
  const [recentApplicants, setRecentApplicants] = useState([]);
  const [recentInquiries, setRecentInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  
 
  
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [
          statsRes, 
          applicantsStatsRes, 
          inquiriesStatsRes,
          recentApplicantsRes,
          recentInquiriesRes
        ] = await Promise.all([
          axios.get(ADMINENDPOINTS.GETDASHBOARD),
          axios.get(ADMINENDPOINTS.GETAPPLICANTSTATUS),
          axios.get(ADMINENDPOINTS.GETINQUIRYSTATS),

          axios.get(ADMINENDPOINTS.GETRECENTAPPLICANTS),
          axios.get(ADMINENDPOINTS.GETRECENTINQUIRY),
        ]);

        setStats(statsRes.data);
        setApplicantStats(applicantsStatsRes.data);
        setInquiryStats(inquiriesStatsRes.data);
        setRecentApplicants(recentApplicantsRes.data);
        setRecentInquiries(recentInquiriesRes.data);
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    );
  }

  if (!stats) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg shadow-sm">
          <p className="font-medium">Error loading dashboard data</p>
          <p className="text-sm mt-1">Please check your connection and try again</p>
        </div>
      </div>
    );
  }

  // Helper function to get status color
  const getStatusColor = (status) => {
    const statusColors = {
      pending: "bg-yellow-100 text-yellow-800",
      reviewing: "bg-blue-100 text-blue-800",
      accepted: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
      new: "bg-purple-100 text-purple-800",
      contacted: "bg-indigo-100 text-indigo-800",
      "in-progress": "bg-blue-100 text-blue-800",
      closed: "bg-gray-100 text-gray-800"
    };
    return statusColors[status] || "bg-gray-100 text-gray-800";
  };

  // Format date for tables
  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMM dd, yyyy");
  };

  return (
    <main className="p-8  min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Administration Dashboard</h1>
          <p className="text-gray-500">Overview of users, applicants and business inquiries</p>
        </header>

        {/* Stats Overview Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Total Users Card */}
          <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="rounded-lg p-4 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <span className="text-xs font-medium text-purple-600 uppercase tracking-wider">Total Users</span>
              <div className="text-3xl font-bold text-gray-800 mt-1">{stats.totalUsers}</div>
              <div className="mt-1 text-sm text-gray-500">Registered accounts</div>
            </div>
          </Card>
          
          {/* Total Applicants Card */}
          <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="rounded-lg p-4 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">Total Applicants</span>
              <div className="text-3xl font-bold text-gray-800 mt-1">{stats.totalApplicants}</div>
              <div className="mt-1 text-sm text-gray-500">Job applications</div>
            </div>
          </Card>
          
          {/* Total Business Inquiries Card */}
          <Card className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="rounded-lg p-4 bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200">
              <span className="text-xs font-medium text-teal-600 uppercase tracking-wider">Business Inquiries</span>
              <div className="text-3xl font-bold text-gray-800 mt-1">{stats.totalBusinessInquiries}</div>
              <div className="mt-1 text-sm text-gray-500">Company contacts</div>
            </div>
          </Card>
          
          {/* Recent Activity Card */}
          <Card className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-lg">
  <div className="rounded-lg p-4 bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200">
    <span className="text-xs font-medium text-amber-600 uppercase tracking-wider">
      Today's Activity
    </span>
    <div className="flex justify-between mt-3">
      <div>
        <div className="text-2xl font-bold text-gray-800">
          {stats?.recentStats?.today?.applicants ?? 0}
        </div>
        <div className="text-sm text-gray-500">New Applications</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-800">
          {stats?.recentStats?.today?.inquiries ?? 0}
        </div>
        <div className="text-sm text-gray-500">New Inquiries</div>
      </div>
    </div>
    <div className="mt-3 text-xs text-gray-500">
      Yesterday: {stats?.recentStats?.yesterday?.applicants ?? 0} applications,{" "}
      {stats?.recentStats?.yesterday?.inquiries ?? 0} inquiries
    </div>
  </div>
</Card>

        </div>

        {/* Charts Section */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {/* Applications Chart */}
          <Card className="p-6 border border-gray-100 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Application Trends (Last 6 Months)</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={applicantStats} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      borderRadius: "4px",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                      border: "1px solid #e0e0e0"
                    }}
                  />
                  <Legend wrapperStyle={{ paddingTop: "10px" }} />
                  <Line 
                    type="monotone" 
                    dataKey="Applications" 
                    stroke="#3366CC" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Inquiries Chart */}
          <Card className="p-6 border border-gray-100 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Business Inquiry Trends (Last 6 Months)</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={inquiryStats} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      borderRadius: "4px",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                      border: "1px solid #e0e0e0"
                    }}
                  />
                  <Legend wrapperStyle={{ paddingTop: "10px" }} />
                  <Bar 
                    dataKey="Inquiries" 
                    fill="#4BC0C0" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Tables Section */}
        <div className="grid gap-8 md:grid-cols-2">
      {/* Recent Applications Card */}
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <BsPerson className="text-blue-600 text-xl" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Recent Applications</h2>
          </div>
          {/* <span className="text-sm font-medium text-blue-600 bg-blue-50 py-1 px-3 rounded-full">
            {recentApplicants.length} new
          </span> */}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-4 font-bold text-gray-600 text-sm">Name</th>
                <th className="text-left py-3 px-4 font-bold text-gray-600 text-sm">Position</th>
                <th className="text-left py-3 px-4 font-bold text-gray-600 text-sm"></th>
                <th className="text-left py-3 px-4 font-bold text-gray-600 text-sm">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentApplicants.map((applicant) => (
                <tr 
                  key={applicant._id} 
                  className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                        {applicant.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{applicant.name}</div>
                        <div className="text-xs text-gray-500">{applicant.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <span className="flex items-center">
                      <BsBriefcase className="text-gray-400 mr-2" />
                      {applicant.position}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full}`}>
                     
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500">
                    {formatDate(applicant.createdAt)}
                  </td>
                </tr>
              ))}
              
              {recentApplicants.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-gray-500">
                    No recent applications found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-center">
          <Link 
            to="/admin/application" 
            className="text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center group transition-colors"
          >
            View All Applications
            <BsArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Recent Business Inquiries Card */}
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <BsBuilding className="text-purple-600 text-xl" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Recent Business Inquiries</h2>
          </div>
          {/* <span className="text-sm font-medium text-purple-600 bg-purple-50 py-1 px-3 rounded-full">
            {recentInquiries.length} new
          </span> */}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-4 font-bold text-gray-600 text-sm">Company</th>
                <th className="text-left py-3 px-4 font-bold text-gray-600 text-sm">Email</th>
                <th className="text-left py-3 px-4 font-bold text-gray-600 text-sm">Phone</th>
                <th className="text-left py-3 px-4 font-bold text-gray-600 text-sm">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentInquiries.map((inquiry) => (
                <tr 
                  key={inquiry._id} 
                  className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                        {inquiry.companyName.charAt(0)}
                      </div>
                      <div className="font-medium text-gray-800">{inquiry.companyName}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-gray-800">{inquiry.contactName}</div>
                    <div className="text-xs text-gray-500">{inquiry.email}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-600">
                      {inquiry.phone}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500">
                    {formatDate(inquiry.createdAt)}
                  </td>
                </tr>
              ))}
              
              {recentInquiries.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-gray-500">
                    No recent business inquiries found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-center">
          <Link 
            to="/admin/business-inquiries" 
            className="text-purple-600 text-sm font-medium hover:text-purple-800 flex items-center group transition-colors"
          >
            View All Inquiries
            <BsArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
      </div>
    </main>
  );
};

export default Dashboard;