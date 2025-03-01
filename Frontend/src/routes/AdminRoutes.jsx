import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { mainContext } from '../context/mainContex';
import Dashboard from '../components/adminComponent/Dashboard';
import Users from '../pages/list/UserList';
import Userprofile from '../pages/Userprofile';
import PageInProgres from '../pages/Progress';
import Messages from '../pages/list/MessageList';
import Applications from '../pages/list/Application';

const AdminRoutes = () => {
  const { token } = useContext(mainContext);

  // If there is no token, redirect to login page or handle unauthorized access
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route path="/" element={ <Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/my-account" element={<Userprofile />} />
      <Route path="/business-inquiries" element={<Messages />} />
      <Route path="/application" element={<Applications />} />
      {/* Catch all unmatched routes */}
      <Route path="*" element={<PageInProgres />} />
    </Routes>
  );
};

export default AdminRoutes;
