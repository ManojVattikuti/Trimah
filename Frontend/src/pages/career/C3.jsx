import React from "react";
import { FaBriefcase, FaCloud, FaCogs } from "react-icons/fa";
import JobWidget from "../ceipal/JobWidget";

export const C3 = () => {
  const jobData = [
    {
      title: "Software Developers",
      description: "Exciting opportunity for software developers!",
      buttonColor: "#50d2af",
      buttonTextColor: "white",
      applyLink: "#",
      icon: <FaCogs className="text-3xl text-white" />,
    },
    {
      title: "DevOps Engineers",
      description: "Join us as a DevOps engineer!",
      buttonColor: "#4fa3d2",
      buttonTextColor: "white",
      applyLink: "#",
      icon: <FaCloud className="text-3xl text-white" />,
    },
    {
      title: "Cloud Security Experts",
      description: "Looking for cloud security experts!",
      buttonColor: "#d250af",
      buttonTextColor: "white",
      applyLink: "#",
      icon: <FaBriefcase className="text-3xl text-white" />,
    },
  ];

  const infiniteJobData = [...jobData, ...jobData]; // Duplicate for seamless scroll

  return (
    <div className="w-full h-auto p-4 lg:px-32 ">
      <div className="text-[#071c39] text-3xl font-bold text-center capitalize leading-10 mb-6">
        Current Openings
      </div>

      {/* Slider container */}
      <div className="relative overflow-hidden group  p-4">
        {/* Fading Effect (Left and Right) */}
        <div className="absolute top-0 left-0 w-1/5 h-full bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/5 h-full bg-gradient-to-l from-white to-transparent"></div>

        <div
          className="flex space-x-6 animate-infinite-scroll group-hover:animate-none"
          style={{
            width: `${infiniteJobData.length * 299}px`,
          }}
        >
          {infiniteJobData.map((job, index) => (
            <div
              key={index}
              className="w-[299px] h-[300px] flex-shrink-0 relative rounded-[15px] bg-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon Background */}
              <div
                className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[78px] h-[78px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: job.buttonColor }}
              >
                {job.icon}
              </div>

              {/* Job Title */}
              <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-full text-center text-[#2b2b2b] text-lg font-semibold capitalize">
                {job.title}
              </div>

              {/* Job Description */}
              <div className="absolute top-[160px] left-1/2 transform -translate-x-1/2 w-5/6 text-center text-sm text-gray-600">
                {job.description}
              </div>

              {/* Apply Button */}
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                <button
                  className="px-6 py-2 rounded-full text-[15px] font-semibold transition-all duration-300 hover:bg-white hover:text-gray-700"
                  style={{
                    backgroundColor: job.buttonColor,
                    color: job.buttonTextColor,
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
<JobWidget/>
      {/* See All Jobs */}
      <div className="mt-6 text-center">
        <a
          href="#"
          className="text-[#684fa3] text-lg font-semibold underline capitalize hover:text-blue-600 transition duration-300"
        >
          See All Jobs
        </a>
      </div>

      {/* CSS for infinite scroll */}
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
