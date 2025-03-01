import React, { useContext, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { mainContext } from '../../context/mainContex';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import fetchUsers from '../../hooks/fetchUsers';
import Swal from 'sweetalert2';
import { ADMINENDPOINTS } from '../../constants/ApiConstants';

const Users = () => {
  const { token } = useContext(mainContext);
  const [search, setSearch] = useState('');
  const { users, loading, error, refetch } = fetchUsers(token);

  // Add User Popup
  const openAddUserForm = ( refetch) => {
    Swal.fire({
      title: 'Add New User',
      html: `
        <input id="swal-name" class="swal2-input" placeholder="Name">
        <input id="swal-email" type="email" class="swal2-input" placeholder="Email">
        <input id="swal-password" type="password" class="swal2-input" placeholder="Password">
      `,
      showCancelButton: true,
      confirmButtonText: 'Add User',
      preConfirm: () => {
        return {
          name: document.getElementById('swal-name').value.trim(),
          email: document.getElementById('swal-email').value.trim(),
          password: document.getElementById('swal-password').value.trim(),
        };
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { name, email, password } = result.value;
  
        // Validate user input
        if (!name || !email || !password) {
          Swal.fire('Error', 'All fields are required!', 'error');
          return;
        }
  
        try {
          const response = await axios.post(
            ADMINENDPOINTS.ADDUSER,
            { name, email, password },
           
          );
          console.log(response);
          
  
          if (response.status === 201) {
            Swal.fire({
              title: 'Success!',
              text: response.data.message,
              icon: 'success',
              confirmButtonText: 'OK'
            });
  
            refetch(); // Refresh user list
          }
        } catch (error) {
          console.error("Add User Error:", error.response?.data);
          Swal.fire({
            title: 'Error',
            text: error.response?.data?.message || 'Failed to add user',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      }
    });
  };
  
  
  

  // Toggle User Access
  const toggleUserAccess = async (userId, isBlocked) => {
    try {
      await axios.patch(
        `/api/users/${userId}/toggle-access`,
        { isBlocked: !isBlocked },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      refetch();
    } catch (error) {
      console.error('Error toggling user access:', error);
    }
  };

  // Delete User
  const deleteUser = async (userId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${ADMINENDPOINTS.DELETEUSER}/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          Swal.fire('Deleted!', 'User has been deleted.', 'success');
          refetch();
        } catch (error) {
          Swal.fire('Error', 'Failed to delete user', 'error');
        }
      }
    });
  };

  // Download CSV
  const downloadCSV = () => {
    const csvContent = "ID,Name,Email,Created\n" +
      users.map(user =>
        `${user._id},${user.name},${user.email},${moment(user.createdAt).format("DD/MM/YYYY")}`
      ).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'users_list.csv';
    link.click();
  };

  // Filtered Users Based on Search
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6  min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Users List</h2>

        {/* Controls */}
        <div className="flex flex-wrap justify-between mb-4 gap-4">
          <input
            type="text"
            placeholder="Search users..."
            className="p-2 border rounded-md w-full md:w-3/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={openAddUserForm} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            + Add User
          </button>
          <button onClick={downloadCSV} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            📥 Download CSV
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 bg-white rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Created</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user._id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-600">{user._id}</td>
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">{user.name}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{user.email}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{moment(user.createdAt).format("DD/MM/YYYY")}</td>
                    <td className="px-4 py-2 text-sm">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-md ${user.isBlocked ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
                        {user.isBlocked ? "Blocked" : "Active"}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm">
                      <button
                        onClick={() => toggleUserAccess(user._id, user.isBlocked)}
                        className={`px-3 py-1 text-white rounded-md mr-2 ${user.isBlocked ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`}
                      >
                        {user.isBlocked ? "Enable" : "Block"}
                      </button>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-4 py-6 text-center text-gray-600">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
