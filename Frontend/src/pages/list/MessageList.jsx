import React, { useContext, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { mainContext } from '../../context/mainContex';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import fetchMessages from '../../hooks/fetchContacts';
import Swal from 'sweetalert2';
import { Briefcase, ListOrdered } from 'lucide-react';
import { ADMINENDPOINTS } from '../../constants/ApiConstants';


const Messages = () => {
  const { token } = useContext(mainContext);
  const { messages, loading, error, refetch } = fetchMessages(token);
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessages, setSelectedMessages] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 10;

  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const clearFilter = () => {
    setStartDate('');
    setEndDate('');
    setSearchTerm('');
    setCurrentPage(1);
  };

  const handleCheckboxChange = (id) => {
    setSelectedMessages((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const handleSelectAll = () => {
    setSelectedMessages(
      selectedMessages.size === messages.length
        ? new Set()
        : new Set(messages.map((msg) => msg._id))
    );
  };

  const deleteSelected = async () => {
    if (selectedMessages.size === 0) {
      return Swal.fire('No Selection', 'No messages selected!', 'error');
    }

    const confirmDelete = await Swal.fire({
      title: 'Are you sure?',
      text: `You are about to delete ${selectedMessages.size} message(s). This action cannot be undone!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete them!',
    });

    if (confirmDelete.isConfirmed) {
      try {
        await axios.post(
         ADMINENDPOINTS.DELETEINQUIRIES,
          { ids: Array.from(selectedMessages) },
          { headers: { Authorization: `Bearer ${token}` } }
        );


        Swal.fire('Deleted!', 'The selected messages have been deleted.', 'success');
       
      } catch (err) {
        console.error("Error deleting messages:", err);
        Swal.fire('Error!', 'There was a problem deleting the messages.', 'error');
      }
    }
  };

  const deleteSingleMessage = async (id) => {
    const confirmDelete = await Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this message. This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirmDelete.isConfirmed) {
      try {
        await axios.delete(
          `${ADMINENDPOINTS.DELETEINQUIRY}/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
       
        Swal.fire('Deleted!', 'The message has been deleted.', 'success');
      
      } catch (err) {
        console.error("Error deleting message:", err);
        Swal.fire('Error!', 'There was a problem deleting the message.', 'error');
      }
    }
  };

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      !searchTerm ||
      message.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.companyName?.toLowerCase().includes(searchTerm.toLowerCase());

    const createdDate = moment(message.createdAt).format('YYYY-MM-DD');

    const matchesDateRange =
      (!startDate || createdDate >= startDate) && (!endDate || createdDate <= endDate);

    return matchesSearch && matchesDateRange;
  });

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);

  const downloadFile = async () => {
    const { value } = await Swal.fire({
      title: "Download Messages",
      text: "Choose a format to download:",
      icon: "info",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "PDF",
      denyButtonText: "CSV",
      cancelButtonText: "Cancel",
    });
  
    if (value === true) {
      downloadPDF(); // PDF chosen
    } else if (value === false) {
      downloadCSV(); // CSV chosen
    } else {
      Swal.fire("Cancelled", "Download was cancelled", "info"); // User clicked Cancel
    }
  };
  
  const downloadPDF = () => {
    const doc = new jsPDF();
    const columns = ['Full Name', 'Email', 'Phone', 'Company Name', 'Message', 'Created'];
    const rows = filteredMessages.map((message) => [
      message.fullName,
      message.email,
      message.phone || 'N/A',
      message.companyName || 'N/A',
      message.message,
      moment(message.createdAt).format('DD/MM/YYYY'),
    ]);
  
    doc.autoTable({
      head: [columns],
      body: rows,
      startY: 20,
      margin: { top: 30 },
      didDrawPage: () => {
        doc.text('Messages List', 90, 15);
        doc.text(`Total: ${filteredMessages.length} messages`, 14, 20);
      },
    });
  
    doc.save('inquiries_list.pdf');
  };
  
  const downloadCSV = () => {
    const headers = ['Full Name', 'Email', 'Phone', 'Company Name', 'Message', 'Created'];
    const rows = filteredMessages.map((message) => [
      message.fullName,
      message.email,
      message.phone || 'N/A',
      message.companyName || 'N/A',
      `"${message.message.replace(/"/g, '""')}"`, // Escape quotes
      moment(message.createdAt).format('DD/MM/YYYY'),
    ]);
  
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
  
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'inquiries_list.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  

  if (loading) return <div className="flex justify-center items-center h-screen"><div className="text-xl font-semibold text-blue-500">Loading Inquiries...</div></div>;
  if (error) return <div className="flex justify-center items-center h-screen"><div className="text-xl font-semibold text-red-500">Error: {error}</div></div>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4 p-4 bg-white shadow-md rounded-lg">
        <div className="flex items-center gap-2">
          <Briefcase className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-gray-800">Business Inquiries</h2>
        </div>
        <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
          <ListOrdered className="mr-2" size={20} />
          <span>Total Inquiries: <span className="font-bold">{messages.length}</span></span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-medium mb-3">Filter Messages</h3>
        
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
              placeholder="Search by name, email, or company..."
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
              onClick={downloadFile} 
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Download Messages
            </button>
          </div>
        </div>
        
        {filteredMessages.length > 0 && filteredMessages.length !== messages.length && (
          <div className="mt-2 text-sm text-gray-600">
            Showing {filteredMessages.length} of {messages.length} messages
          </div>
        )}
      </div>

      {selectedMessages.size > 0 && (
        <div className="mb-4">
          <button 
            onClick={deleteSelected} 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete Selected ({selectedMessages.size})
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
                      checked={currentMessages.length > 0 && selectedMessages.size === currentMessages.length} 
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentMessages.length > 0 ? (
                  currentMessages.map((message) => (
                    <tr key={message._id}>
                      <td className="px-4 py-4">
                        <input 
                          type="checkbox" 
                          checked={selectedMessages.has(message._id)} 
                          onChange={() => handleCheckboxChange(message._id)} 
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{message.fullName}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{message.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{message.phone || 'N/A'}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{message.companyName || 'N/A'}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {message.message.length > 50 ? `${message.message.substring(0, 50)}...` : message.message}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{moment(message.createdAt).format("DD/MM/YYYY")}</td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => deleteSingleMessage(message._id)} 
                          className="text-red-500 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="8" className="text-center py-4 text-gray-500">No messages found</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      {filteredMessages.length > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4 rounded-lg shadow">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{indexOfFirstMessage + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastMessage, filteredMessages.length)}
                </span>{" "}
                of <span className="font-medium">{filteredMessages.length}</span> results
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

export default Messages;