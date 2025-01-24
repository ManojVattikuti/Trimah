import React from "react";

export const C3 = () => {
  const jobData = [
    {
      title: "Software Developers",
      description: "Exciting opportunity for software developers!",
      color: "#24c79b",
      buttonColor: "#50d2af",
      buttonTextColor: "white",
      applyLink: "#",
      image: "https://via.placeholder.com/78", // Replace with actual image URLs
    },
    {
      title: "DevOps Engineers",
      description: "Join us as a DevOps engineer!",
      color: "#24c79b",
      buttonColor: "#50d2af",
      buttonTextColor: "white",
      applyLink: "#",
      image: "https://via.placeholder.com/78",
    },
    {
      title: "Cloud Security Experts",
      description: "Looking for cloud security experts!",
      color: "#24c79b",
      buttonColor: "#50d2af",
      buttonTextColor: "white",
      applyLink: "#",
      image: "https://via.placeholder.com/78",
    },
    {
      title: "QAVE Professionals",
      description: "Apply for the QAVE professionals role.",
      color: "#24c79b",
      buttonColor: "#50d2af",
      buttonTextColor: "white",
      applyLink: "#",
      image: "https://via.placeholder.com/78",
    },
    {
      title: "UI/UX Designers",
      description: "Join our creative design team!",
      color: "#24c79b",
      buttonColor: "#50d2af",
      buttonTextColor: "white",
      applyLink: "#",
      image: "https://via.placeholder.com/78",
    },
    {
      title: "Backend Developers",
      description: "Exciting opportunity for backend developers!",
      color: "#24c79b",
      buttonColor: "#50d2af",
      buttonTextColor: "white",
      applyLink: "#",
      image: "https://via.placeholder.com/78",
    },
    {
      title: "Frontend Developers",
      description: "Looking for skilled frontend developers!",
      color: "#24c79b",
      buttonColor: "#50d2af",
      buttonTextColor: "white",
      applyLink: "#",
      image: "https://via.placeholder.com/78",
    },
    {
      title: "Data Scientists",
      description: "Seeking data scientists with analytical skills.",
      color: "#24c79b",
      buttonColor: "#50d2af",
      buttonTextColor: "white",
      applyLink: "#",
      image: "https://via.placeholder.com/78",
    },
    {
      title: "Project Managers",
      description: "Become a part of our management team.",
      color: "#24c79b",
      buttonColor: "#50d2af",
      buttonTextColor: "white",
      applyLink: "#",
      image: "https://via.placeholder.com/78",
    },
    {
      title: "Marketing Specialists",
      description: "Join our marketing team to make an impact!",
      color: "#24c79b",
      buttonColor: "#50d2af",
      buttonTextColor: "white",
      applyLink: "#",
      image: "https://via.placeholder.com/78",
    },
  ];

  return (
    <div className="w-full h-auto p-4 px-32">
      <div className="text-[#071c39] text-3xl font-normal font-bold justify-center text-center capitalize leading-10 mb-6">
        Current Openings
      </div>
    

      {/* Scrollable section */}
      <div className="overflow-x-auto flex space-x-4">
        {jobData.map((job, index) => (
          <div
            key={index}
            className="w-[299px] h-[248px] flex-shrink-0 relative bg-white rounded-[15px] shadow-[0px_0px_25.299999237060547px_2px_rgba(0,0,0,0.10)]"
          >
            <div
              className="w-[299px] h-[248px] absolute top-0 left-0 rounded-[10px]"
              style={{ backgroundColor: job.color }}
            />
            <div className="absolute top-0 left-0 w-[78px] h-[78px] bg-[#684fa3] rounded-full flex items-center justify-center mt-[42px] mx-[111px]">
              {/* Job Image */}
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-full h-5 text-center text-[#2b2b2b] text-lg font-normal font-['Gilroy-SemiBold'] capitalize leading-[34.38px] mt-[100px]">
              {job.title}
            </div>
            <div className="w-[135px] h-[35px] absolute bottom-5 left-[83px]">
              <div
                className="w-[135px] h-[35px] rounded-[59px] flex items-center justify-center"
                style={{ backgroundColor: job.buttonColor }}
              >
                <a
                  href={job.applyLink}
                  className="text-[15px] font-semibold underline capitalize"
                  style={{ color: job.buttonTextColor }}
                >
                  Apply Now
                </a>
              </div>
              
            </div>
            
          </div>
        ))}
      </div>
      <div className="mb-2 text-center">
        <a
          href="#"
          className="text-[#684fa3] text-lg font-semibold font-['Maven Pro'] underline capitalize"
        >
          See All Jobs
        </a>
      </div>
    </div>
  );
};
