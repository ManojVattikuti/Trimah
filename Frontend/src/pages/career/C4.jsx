import React, { useState } from "react";

export const C4 = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const handleProgressClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="w-full h-fit px-4 py-6  flex items-center justify-center">
      <div className="w-full max-w-[1001px] h- mx-auto relative">
        {/* Title */}
        <div className="text-[#071c39] text-2xl md:text-3xl font-bold text-center mb-8 ">
          <span>How</span> to <span>apply</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-[50px] mt-8 flex justify-between lg:left-[136px] items-center relative lg:block hidden">
          {/* Progress bar line */}
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 h-[5px] transition-all duration-300 bg-[#ededed]`}
            style={{
              left: "0%",
              width: `${(currentStep - 1) * 33.33}%`,
              backgroundColor: currentStep >= 1 ? "#684fa3" : "#ededed",
            }}
          ></div>

          {/* Steps */}
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              onClick={() => handleProgressClick(step)}
              className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-full absolute top-1/2 transform -translate-y-1/2 
                ${step === 1 ? "left-[0%]" : step === 2 ? "left-[33.33%]" : "left-[66.66%]"}
                ${currentStep >= step ? "bg-[#684fa3] text-white" : "bg-[#ededed] text-[#5e5e5e]"}
                cursor-pointer transition-all duration-300`}
            >
              {step < 10 ? `0${step}` : step}
            </div>
          ))}
        </div>

        {/* Cards for Steps */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mt-12">
  {[ 
    {
      title: "Submit Your Resume",
      description: "Upload your CV through our easy application portal",
    },
    {
      title: "Interview Process",
      description: "Our team will review your application and invite you to an interview",
    },
    {
      title: "Join Our Team",
      description: "Once selected, you’ll receive an offer and onboarding information",
    },
  ].map((step, index) => (
    <div
      key={index}
      className={`w-full xs:w-[180px] sm:w-[220px] md:w-[350px] lg:w-[400px] h-[200px] md:h-[280px] lg:h-[200px] rounded-[15px] bg-white shadow-lg border-2 border-[#684fa3] transform transition-all duration-300 
        ${currentStep === index + 1 ? "scale-105 shadow-xl" : ""} relative`}
    >
      <div className="w-7 h-7 md:w-9 md:h-9 absolute top-4 left-1/2 transform -translate-x-1/2 rounded-full bg-[#684fa3] flex justify-center items-center text-white">
        <span className="text-sm md:text-lg font-bold">{index + 1}</span>
      </div>
      <div className="text-center mt-16 md:mt-20">
        <div className="text-[#684fa3] text-xs md:text-sm font-semibold">STEP 0{index + 1}</div>
        <div className="text-[#2b2b2b] text-sm md:text-base font-semibold mt-2">
          {step.title}
        </div>
        <div className="text-[#6d6d6d] text-xs md:text-sm font-medium mt-2 px-4">
          {step.description}
        </div>
      </div>
    </div>
  ))}
</div>




      </div>
    </div>
  );
};
