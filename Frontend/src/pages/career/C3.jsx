import React, { useEffect, useState } from "react";
import { FaBriefcase, FaSearch, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../redux/jobSlice";

export const C3 = () => {
  const dispatch = useDispatch();
  const { jobData, loading, error } = useSelector((state) => state.jobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // Function to check if a job is new (posted within the last 30 days)
  const isNewJob = (date) => {
    const jobDate = new Date(date);
    const now = new Date();
    const diffInDays = (now - jobDate) / (1000 * 60 * 60 * 24);
    return diffInDays <= 20;
  };

  // Filter jobs based on search query
  const filteredJobs = jobData.filter((job) =>
    job.position_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-auto p-6 lg:px-32">
      <h2 className="text-[#071c39] text-3xl font-bold text-center mb-6">
        Current Openings
      </h2>

      {loading && (
        <div className="flex justify-center items-center h-60">
          <p className="text-lg text-gray-600">Loading jobs...</p>
        </div>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          {/* Jobs Carousel */}
          <div className="relative overflow-hidden group p-4">
            <div className="flex space-x-6 animate-infinite-scroll group-hover:animate-none">
              {filteredJobs.slice(0, 5).map((job, index) => (
                <div
                  key={index}
                  className="w-[300px] h-[280px] flex-shrink-0 relative rounded-lg bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"
                >
                  {/* "New" Badge */}
                  {isNewJob(job.created) && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      New
                    </span>
                  )}

                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] rounded-full flex items-center justify-center bg-blue-500">
                    <FaBriefcase className="text-3xl text-white" />
                  </div>
                  <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-full text-center text-[#2b2b2b] text-lg font-semibold">
                    {job.position_title}
                    <p className="text-gray-600 mt-2">{job.created || "No description available."}</p>
                  </div>
                  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                    <a href={job.apply_job_without_registration} target="_blank" rel="noopener noreferrer">
                      <button className="px-5 py-2 rounded-lg text-sm font-semibold bg-blue-500 text-white hover:bg-blue-600 transition">
                        Apply Now
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Show All Jobs Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-blue-600 text-lg font-semibold underline hover:text-blue-800 transition"
            >
              See All Jobs
            </button>
          </div>
        </>
      )}

      {/* Job List Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-11/12 max-w-4xl rounded-lg shadow-lg p-6 relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-4">
              <h3 className="text-xl font-bold text-gray-800">All Job Listings</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <FaTimes size={20} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative my-4">
              <input
                type="text"
                placeholder="Search by job title..."
                className="border border-gray-300 rounded-lg px-4 py-2 w-full shadow-sm focus:ring focus:ring-blue-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute right-4 top-3 text-gray-400" />
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-96 overflow-y-auto p-2">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 border border-gray-200 relative"
                  >
                    {/* "New" Badge for Jobs Posted in the Last 30 Days */}
                    {isNewJob(job.created) && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        New
                      </span>
                    )}

                    <div className="flex items-center">
                      <FaBriefcase className="text-2xl text-blue-500" />
                      <h4 className="ml-3 text-lg font-semibold">{job.position_title}</h4>
                    </div>
                    <p className="text-gray-500 mt-2 text-sm">{job.created || "No description available."}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <a
                        href={job.apply_job_without_registration}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center"
                      >
                        Apply <FaExternalLinkAlt className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No jobs found.</p>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes infiniteScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
