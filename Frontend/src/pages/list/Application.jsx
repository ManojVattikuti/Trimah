import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { mainContext } from '../../context/mainContex';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import Swal from 'sweetalert2';
import { Briefcase, ListOrdered } from "lucide-react";
import { ADMINENDPOINTS } from '../../constants/ApiConstants';

const Applications = () => {
  const { token } = useContext(mainContext);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApplications, setSelectedApplications] = useState(new Set());
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [applicationsPerPage] = useState(10);

  // Fetch applications on component mount
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(ADMINENDPOINTS.GETAPLLICATIONS, {
          headers: { Authorization: `Bearer ${token}` }
        });
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

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const clearFilter = () => {
    setStartDate('');
    setEndDate('');
    setSearchTerm('');
    setCurrentPage(1);
  };

  const handleCheckboxChange = (id) => {
    setSelectedApplications((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleSelectAll = () => {
    if (selectedApplications.size === currentApplications.length) {
      setSelectedApplications(new Set()); // Deselect all
    } else {
      setSelectedApplications(new Set(currentApplications.map(app => app._id))); // Select all
    }
  };

  const deleteSelected = async () => {
    if (selectedApplications.size === 0) {
      return Swal.fire({
        icon: 'error',
        title: 'No Selection',
        text: 'No applications selected!'
      });
    }

    Swal.fire({
      title: 'Are you sure?',
      text: `You are about to delete ${selectedApplications.size} application(s). This action cannot be undone!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete them!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.post(
            ADMINENDPOINTS.DELETEAPPLICATIONS, 
            { ids: Array.from(selectedApplications) },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          
          setApplications(applications.filter(app => !selectedApplications.has(app._id)));
          setSelectedApplications(new Set()); // Clear selection
          
          Swal.fire(
            'Deleted!',
            'The selected applications have been deleted.',
            'success'
          );
        } catch (err) {
          console.error("Error deleting applications:", err);
          Swal.fire(
            'Error!',
            'There was a problem deleting the applications.',
            'error'
          );
        }
      }
    });
  };

  const deleteSingleApplication = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${ADMINENDPOINTS.DELETEAPPLICATION}/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
          });

          setApplications(applications.filter(app => app._id !== id));
          
          Swal.fire(
            'Deleted!',
            'The application has been deleted.',
            'success'
          );
        } catch (err) {
          console.error("Error deleting application:", err);
          Swal.fire(
            'Error!',
            'There was a problem deleting the application.',
            'error'
          );
        }
      }
    });
  };

  // Filter applications based on search term and date range
  const filteredApplications = applications.filter(application => {
    const matchesSearch = searchTerm === '' || 
      application.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.position?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const createdDate = moment(application.createdAt).format("YYYY-MM-DD");
    
    const matchesDateRange = (
      (!startDate || createdDate >= startDate) && 
      (!endDate || createdDate <= endDate)
    );
    
    return matchesSearch && matchesDateRange;
  });

  // Get current applications for pagination
  const indexOfLastApplication = currentPage * applicationsPerPage;
  const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;
  const currentApplications = filteredApplications.slice(indexOfFirstApplication, indexOfLastApplication);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(filteredApplications.length / applicationsPerPage);

  const downloadFiles = () => {
    Swal.fire({
      title: 'Download Applications',
      text: 'Select the format you want to download:',
      icon: 'question',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'PDF',
      denyButtonText: 'CSV',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      denyButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
    }).then((result) => {
      if (result.isConfirmed) {
        // Download PDF
        const doc = new jsPDF();
        const columns = ['Name', 'Email', 'Phone', 'Job Position', 'Created'];
        const rows = filteredApplications.map(application => [
          application.name,
          application.email,
          application.phone || 'N/A',
          application.position || 'N/A',
          moment(application.createdAt).format("DD/MM/YYYY")
        ]);
  
        doc.autoTable({
          head: [columns],
          body: rows,
          startY: 20,
          margin: { top: 30 },
          didDrawPage: () => {
            doc.text('Applications List', 90, 15);
  
            // Add filter information
            let filterInfo = 'All Applications';
            if (startDate && endDate) {
              filterInfo = `Filtered: ${startDate} to ${endDate}`;
            } else if (startDate) {
              filterInfo = `Filtered: From ${startDate}`;
            } else if (endDate) {
              filterInfo = `Filtered: Until ${endDate}`;
            }
  
            if (searchTerm) {
              filterInfo += ` | Search: "${searchTerm}"`;
            }
  
            doc.text(filterInfo, 14, 10);
            doc.text(`Total: ${filteredApplications.length} applications`, 14, 15);
          }
        });
  
        doc.save('applications_list.pdf');
  
        Swal.fire('Downloaded!', 'Your PDF file has been downloaded.', 'success');
      } else if (result.isDenied) {
        // Download CSV
        const csvData = [
          ['Name', 'Email', 'Phone', 'Job Position', 'Created'],
          ...filteredApplications.map(application => [
            application.name,
            application.email,
            application.phone || 'N/A',
            application.position || 'N/A',
            moment(application.createdAt).format("DD/MM/YYYY")
          ])
        ];
  
        const csvContent = "data:text/csv;charset=utf-8," + csvData.map(e => e.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "applications_list.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  
        Swal.fire('Downloaded!', 'Your CSV file has been downloaded.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'No file was downloaded.', 'info');
      }
    });
  };

  if (loading) return  <div className="flex items-center justify-center w-full h-screen bg-gray-50">
  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
</div>;
  if (error) return <div className="flex justify-center items-center h-screen"><div className="text-xl font-semibold text-red-500">Error: {error}</div></div>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4 p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center gap-2">
        <Briefcase className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">Applicants List</h2>
      </div>
      <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
        <ListOrdered className="mr-2" size={20} />
        <span>Total Applications: <span className="font-bold">{applications.length}</span></span>
      </div>
    </div>

      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-medium mb-3">Filter Applications</h3>
        
        {/* Search bar */}
        <div className="mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search by name, email, or position..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">From Date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={handleStartDateChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">To Date:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={handleEndDateChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          
          <div>
            <button 
              onClick={clearFilter} 
              className="w-full px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
            >
              Clear Filter
            </button>
          </div>
          
          <div>
            <button 
              onClick={downloadFiles} 
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Download Applications
            </button>
          </div>
        </div>
        
        {filteredApplications.length > 0 && filteredApplications.length !== applications.length && (
          <div className="mt-2 text-sm text-gray-600">
            Showing {filteredApplications.length} of {applications.length} applications
          </div>
        )}
      </div>

      {selectedApplications.size > 0 && (
        <div className="mb-4">
          <button 
            onClick={deleteSelected} 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete Selected ({selectedApplications.size})
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input 
                      type="checkbox" 
                      onChange={handleSelectAll} 
                      checked={currentApplications.length > 0 && selectedApplications.size === currentApplications.length} 
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cover Letter</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentApplications.length > 0 ? (
                  currentApplications.map((application) => (
                    <tr key={application._id}>
                      <td className="px-4 py-4">
                        <input 
                          type="checkbox" 
                          checked={selectedApplications.has(application._id)} 
                          onChange={() => handleCheckboxChange(application._id)} 
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{application.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{application.position}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{application.coverLetter || 'N/A'}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{moment(application.createdAt).format("DD/MM/YYYY")}</td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => deleteSingleApplication(application._id)} 
                          className="text-red-500 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="7" className="text-center py-4 text-gray-500">No applications found</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      {filteredApplications.length > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4 rounded-lg shadow">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{indexOfFirstApplication + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastApplication, filteredApplications.length)}
                </span>{" "}
                of <span className="font-medium">{filteredApplications.length}</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ${
                    currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="sr-only">Previous</span>
                  &larr;
                </button>
                
                {/* Page numbers */}
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                      currentPage === index + 1
                        ? 'bg-blue-500 text-white focus:z-20'
                        : 'text-gray-900 hover:bg-gray-50 focus:z-20'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ${
                    currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="sr-only">Next</span>
                  &rarr;
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;