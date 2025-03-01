import React, { useContext, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { mainContext } from '../../context/mainContex';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Ensure this is imported correctly
import { useEffect } from 'react';
import { ADMINENDPOINTS } from '../../constants/ApiConstants';

const Applications = () => {
  const { token } = useContext(mainContext);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterDate, setFilterDate] = useState('');

  // Fetch applications on component mount
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(ADMINENDPOINTS.GETAPLLICATIONS, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log(response.data.applications);
        setApplications(response.data.applications);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch applications');
        setLoading(false);
        console.log(err);
      }
    };

    fetchApplications();
  }, [token]);

  const handleDateChange = (e) => {
    setFilterDate(e.target.value);
  };

  const clearFilter = () => {
    setFilterDate('');
  };

  const filteredApplications = filterDate
    ? applications.filter(application => moment(application.createdAt).format("YYYY-MM-DD") === filterDate)
    : applications;

  const downloadPDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Define PDF columns
    const columns = ['Name',  'Email', 'Phone', 'Cover Letter', 'Created'];

    // Define PDF rows data
    const rows = filteredApplications.map(application => [
      application.firstName,
      application.lastName,
      application.email,
      application.phone,
      application.coverLetter || 'N/A',
      moment(application.createdAt).format("DD/MM/YYYY")
    ]);

    // Add the table to the PDF
    doc.autoTable({
      head: [columns],
      body: rows,
      startY: 20, // Adjust startY to provide space for the title
      margin: { top: 30 }, // Adjust margin if needed
      didDrawPage: () => {
        doc.text('Applications List', 90, 15); // Add title to the PDF
      }
    });

    // Save the PDF
    doc.save('applications_list.pdf');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Applications List</h2>

      <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
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
        <div className="flex space-x-4">
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
            Download List of Applications
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    First Name
                  </th>
                  {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Name
                  </th> */}
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  job-Position
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cover Letter
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApplications.length > 0 ? (
                  filteredApplications.map((application) => (
                    <tr key={application.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.name}</td>
                      {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{application.lastName}</td> */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.email}</td>
                    
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{application.position}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.coverLetter || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{moment(application.createdAt).format("DD/MM/YYYY")}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">No applications found</td>
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

export default Applications;
