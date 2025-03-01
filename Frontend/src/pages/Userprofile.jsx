// components/UserProfile.js
import React, { useContext, useState, useEffect } from 'react';
import { mainContext } from '../context/mainContex';

const UserProfile = () => {
  const { user } = useContext(mainContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('personal');
  
  // Mock data - replace with actual data fetching
  const [profileData, setProfileData] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    // Simulate API fetch
    setTimeout(() => {
      setProfileData({
        name: user?.name || 'Admin User',
        email: user?.email || 'admin@trimah.com',
        role: user?.role ||'Administrator',
        department: user?.email ||'Trimah Admin',
        joinDate: user?.createdAt ||'January 15, 2022',
        lastLogin: 'today',
        // permissions: ['User Management', 'Content Editing', 'System Configuration', 'Analytics Access'],
        recentActivity: [
          { id: 1, action: 'Modified system settings', date: 'February 28, 2025', time: '14:30' },
          { id: 2, action: 'Added new user account', date: 'February 27, 2025', time: '11:45' },
          { id: 3, action: 'Updated content on homepage', date: 'February 25, 2025', time: '16:20' },
        ]
      });
      setLoading(false);
    }, 800);
  }, [user]);

  // Tab selection handler
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-50">
        <div className="bg-red-50 p-6 rounded-lg shadow-md max-w-md">
          <h2 className="text-red-600 text-xl font-semibold mb-2">Error loading profile</h2>
          <p className="text-gray-700">{error}</p>
          <button 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-screen ">
      {profileData && (
        <>
          {/* Header Banner */}
          <div className="h-64 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col md:flex-row items-start md:items-end">
              <div className="w-24 h-24 rounded-full bg-white p-1 shadow-xl">
                <img 
                  className="w-full h-full rounded-full object-cover"
                  alt={profileData.name}
                  src="/TRIMAH - logos/TRIMAH-icon-favicon-512x512.png"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-4 text-white">
                <h1 className="text-3xl font-bold">{profileData.name}</h1>
                <p className="text-lg opacity-90">{profileData.role} - {profileData.department}</p>
              </div>
              <button className="ml-auto mt-4 md:mt-0 bg-white text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Edit Profile
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav className="flex space-x-8">
                <button
                  onClick={() => handleTabClick('personal')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'personal'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Personal Info
                </button>
                {/* <button
                  onClick={() => handleTabClick('permissions')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'permissions'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Permissions
                </button> */}
                <button
                  onClick={() => handleTabClick('activity')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'activity'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Activity Log
                </button>
                <button
                  onClick={() => handleTabClick('notifications')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'notifications'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Notifications
                </button>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-grow overflow-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
              
              {/* Personal Info Tab */}
              {activeTab === 'personal' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h2>
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Full Name</p>
                        <p className="mt-1 text-lg text-gray-800">{profileData.name}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Email Address</p>
                        <p className="mt-1 text-lg text-gray-800">{profileData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Department</p>
                        <p className="mt-1 text-lg text-gray-800">{profileData.department}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-6 text-gray-800">Account Information</h2>
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Role</p>
                        <p className="mt-1 text-lg text-gray-800">{profileData.role}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Joined Date</p>
                        <p className="mt-1 text-lg text-gray-800">{profileData.joinDate}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Last Login</p>
                        <p className="mt-1 text-lg text-gray-800">{profileData.lastLogin}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Permissions Tab */}
              {/* {activeTab === 'permissions' && (
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-6 text-gray-800">System Permissions</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {profileData.permissions.map((permission, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {permission}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    Manage Permissions
                  </button>
                </div>
              )} */}

              {/* Activity Log Tab */}
              {activeTab === 'activity' && (
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-6 text-gray-800">Recent Activities</h2>
                  <div className="space-y-4">
                    {profileData.recentActivity.map((activity) => (
                      <div key={activity.id} className="border-b border-gray-200 pb-4">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <p className="text-gray-800 font-medium">{activity.action}</p>
                          <p className="text-sm text-gray-500 mt-1 sm:mt-0">
                            {activity.date} at {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 text-blue-600 hover:text-blue-800 transition-colors">
                    View Complete Activity History
                  </button>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">Notification Preferences</h2>
                  <p className="mb-6 text-gray-600">
                    Configure how and when you want to receive notifications from the system.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-lg mb-2">Email Notifications</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Receive important system alerts and updates via email
                      </p>
                      <button className="px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors text-sm">
                        Configure
                      </button>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-lg mb-2">System Notifications</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Control in-app notifications and alerts
                      </p>
                      <button className="px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors text-sm">
                        Configure
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;