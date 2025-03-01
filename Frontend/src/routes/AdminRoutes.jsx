import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { mainContext } from "../context/mainContex";
import Dashboard from "../components/adminComponent/Dashboard";
import Users from "../pages/list/UserList";
import Userprofile from "../pages/Userprofile";
import PageInProgres from "../pages/Progress";
import Messages from "../pages/list/MessageList";
import Applications from "../pages/list/Application";
import AdminHeader from "../components/adminComponent/AdminHeader";
import AdminFooter from "../components/adminComponent/AdminFooter";

const AdminRoutes = () => {
  const { token } = useContext(mainContext);

  // Redirect to login if not authenticated
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Admin Header */}
      <AdminHeader />

      {/* Main Content */}
      <div className="flex-grow py-16">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/my-account" element={<Userprofile />} />
          <Route path="/business-inquiries" element={<Messages />} />
          <Route path="/application" element={<Applications />} />
          {/* Catch all unmatched routes */}
          <Route path="*" element={<PageInProgres />} />
        </Routes>
      </div>

      {/* Fixed Admin Footer */}
      <AdminFooter />
    </div>
  );
};

export default AdminRoutes;
