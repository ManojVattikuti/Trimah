
import React, { useEffect } from "react";
import { FaBriefcase } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../redux/jobSlice";

export const C3 = () => {
  const dispatch = useDispatch();
  const { jobData, loading, error } = useSelector((state) => state.jobs); // Get state from Redux

  useEffect(() => {
    dispatch(fetchJobs()); // Fetch jobs when component mounts
  }, [dispatch]);

  // Duplicate job data for smooth infinite scrolling
  const infiniteJobData = jobData.length > 0 ? [...jobData, ...jobData] : [];

  // Check if a job is new (posted in the last 30 days)
  const isNewJob = (date) => {
    const jobDate = new Date(date);
    const now = new Date();
    const diffInDays = (now - jobDate) / (1000 * 60 * 60 * 24);
    return diffInDays <= 30;
  };

  return (
    <div className="w-full h-auto p-4 lg:px-32">
      <div className="text-[#071c39] text-3xl font-bold text-center capitalize leading-10 mb-6">
        Current Openings
      </div>

      {loading && (
        <div className="flex justify-center items-center h-60">
          <div className="relative w-16 h-16">
            <div className="absolute w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"></div>
            <div className="absolute w-14 h-14 border-t-4 border-green-500 rounded-full animate-spin"></div>
            <div className="absolute w-12 h-12 border-t-4 border-red-500 rounded-full animate-spin"></div>
          </div>
          <p className="ml-4 text-lg text-gray-600">Please wait...</p>
        </div>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="relative overflow-hidden group p-4">
          <div className="absolute top-0 left-0 w-1/5 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/5 h-full bg-gradient-to-l from-white to-transparent"></div>

          <div
            className="flex space-x-6 animate-infinite-scroll group-hover:animate-none"
            style={{ width: `${infiniteJobData.length * 299}px` }}
          >
            {infiniteJobData.map((job, index) => (
              <div
                key={index}
                className="w-[299px] h-[300px] flex-shrink-0 relative rounded-[15px] bg-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {isNewJob(job.created) && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    New
                  </span>
                )}
                <div
                  className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[78px] h-[78px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#4fa3d2" }}
                >
                  <FaBriefcase className="text-3xl text-white" />
                </div>
                <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-full text-center text-[#2b2b2b] text-lg font-semibold capitalize">
                  {job.position_title}
                </div>
                <div className="absolute top-[160px] left-1/2 transform -translate-x-1/2 w-5/6 text-center text-sm text-gray-600">
                  {job.created || "No description available."}
                </div>
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                <a href={job.apply_job_without_registration}>

              
                  <button
                    className="px-6 py-2 rounded-full text-[15px] font-semibold transition-all duration-300 hover:bg-white hover:text-gray-700"
                    style={{ backgroundColor: "#4fa3d2", color: "white", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
                  >
                    Apply Now
                  </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 text-center">
        <a
          href="#"
          className="text-[#684fa3] text-lg font-semibold underline capitalize hover:text-blue-600 transition duration-300"
        >
          See All Jobs
        </a>
      </div>

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
