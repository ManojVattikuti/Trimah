import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { mainContext } from '../../context/mainContex';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Ensure this is imported correctly
import fetchUsers from '../../hooks/fetchUsers';

const Users = () => {
  const { token } = useContext(mainContext);
  const [filterDate, setFilterDate] = useState('');
  const { users, loading, error } = fetchUsers(token);

  const handleDateChange = (e) => {
    setFilterDate(e.target.value);
  };
  const clearFilter = () => {
    setFilterDate('');
  };

  const filteredUsers = filterDate
    ? users.filter(user => moment(user.createdAt).format("YYYY-MM-DD") === filterDate)
    : users;

  const downloadPDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Define PDF columns
    const columns = ['ID', 'Name', 'Email', 'Created'];

    // Define PDF rows data
    const rows = filteredUsers.map(user => [
      user._id,
      user.firstName,
      user.email,
      moment(user.createdAt).format("DD/MM/YYYY")
    ]);

    // Add the table to the PDF
    doc.autoTable({
      head: [columns],
      body: rows,
      startY: 20, // Adjust startY to provide space for the title
      margin: { top: 30 }, // Adjust margin if needed
      didDrawPage: () => {
        doc.text('Users List', 90, 15); // Add title to the PDF
      }
    });

    // Save the PDF
    doc.save('users_list.pdf');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Users List</h2>

      <div className="mb-4 flex items-center space-x-4">
        <div className="flex-grow">
          <label htmlFor="filterDate" className="block text-sm font-medium text-gray-700">Filter by Date:</label>
          <input
            type="date"
            id="filterDate"
            name="filterDate"
            value={filterDate}
            onChange={handleDateChange}
            className="mt-1 block w-full sm:w-60 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          onClick={clearFilter}
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
        >
          Clear Filter
        </button>
        <button
          onClick={downloadPDF}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Download List of Users
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user._id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.firstName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{moment(user.createdAt).format("DD/MM/YYYY")}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">No users found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
