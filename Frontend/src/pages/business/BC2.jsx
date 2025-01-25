import React from 'react';

const BC2 = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-32">
      <div className="w-full max-w-screen-xl mx-auto relative">
        
        {/* Background Sections */}
        <div className="absolute w-[803.30px] h-[568.62px] top-[25px] left-[50%] transform -translate-x-1/2 flex-col justify-start items-start overflow-hidden">
          <div className="w-full pt-[38.08px] origin-top-left rotate-180 justify-center items-center inline-flex overflow-hidden">
            <div className="opacity-40 w-full h-[419.65px] relative"></div>
          </div>
        </div>
        
        <div className="absolute w-[666.30px] h-[448.17px] top-0 left-[50%] transform -translate-x-1/2 opacity-50"></div>

        {/* Text Content Section */}
        <div className="relative z-10">
          {/* Why Choose Us Title */}
          <div className="text-[#071c39] text-3xl font-semibold text-center lg:text-left leading-10 mb-8 lg:mb-12">
            Why Choose Us?
          </div>

          {/* Section 1 - Trusted Expertise */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            <div className="flex items-center mb-6 lg:mb-0">
              <div className="w-[26px] h-[26px] bg-[#684fa3]/20 rounded-full flex justify-center items-center mr-4">
                <div className="text-[#684fa3] text-base font-semibold">1</div>
              </div>
              <div>
                <div className="text-[#071c39] text-xl font-semibold capitalize leading-relaxed">Trusted Expertise</div>
                <div className="text-[#383838] text-base font-normal leading-relaxed w-full sm:w-[300px] md:w-[400px]">
                  As experienced leaders in IT, healthcare, and life sciences, we bring deep technical and industry-specific knowledge to every project.
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[396px] h-[105px]"></div>
          </div>

          {/* Section 2 - Tailored Solutions */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8 transform lg:translate-x-[20%]">
            <div className="flex items-center mb-6 lg:mb-0">
              <div className="w-[26px] h-[26px] bg-[#684fa3]/20 rounded-full flex justify-center items-center mr-4">
                <div className="text-[#684fa3] text-base font-semibold">2</div>
              </div>
              <div>
                <div className="text-[#071c39] text-xl font-semibold capitalize leading-relaxed">Tailored Solutions</div>
                <div className="text-[#383838] text-base font-normal leading-relaxed w-full sm:w-[300px] md:w-[400px]">
                  We work closely with your team to understand your unique challenges and deliver customized strategies.
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[461px] h-[105px]"></div>
          </div>

          {/* Section 3 - Results-Oriented Approach */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            <div className="flex items-center mb-6 lg:mb-0">
              <div className="w-[26px] h-[26px] bg-[#684fa3]/20 rounded-full flex justify-center items-center mr-4">
                <div className="text-[#684fa3] text-base font-semibold">3</div>
              </div>
              <div>
                <div className="text-[#071c39] text-xl font-semibold capitalize leading-relaxed">Results-Oriented Approach</div>
                <div className="text-[#383838] text-base font-normal leading-relaxed w-full sm:w-[300px] md:w-[400px]">
                  From cloud solutions to compliance, our focus is on achieving measurable outcomes that align with your business goals.
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[423px] h-[105px]"></div>
          </div>
        </div>

        {/* Image Section (Hidden on Small Screens) */}
        <div className="absolute top-0 right-0 w-full lg:w-[409.10px] h-[570px] hidden lg:block">
          <div className="relative z-10">
            <img className="w-full h-full mb-16 object-cover" src="./bsuiness/bc2/img1.png" alt="Placeholder Image" />
          </div>

          <svg className="absolute top-[158px] left-[-180px] w-[60vh] h-[60vh] z-0 hidden lg:block" width="782" height="810" viewBox="0 0 682 510" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M790.676 24.4041C747.612 -1.1806 674.22 -16.233 592.344 28.8575C550.661 51.8592 514.165 82.0754 382.39 47.584C304.723 27.2543 254.132 33.1772 203.275 64.0169C139.836 102.45 119.796 168.248 113.695 229.727C110.466 262.259 117.012 298.755 98.9986 325.03C85.3935 344.914 69.2277 342.531 36.05 362.572C-24.0707 398.822 -11.6235 508.643 93.3205 508.643C123.47 508.643 716.794 510.691 783.217 508.643L790.676 24.4041Z" fill="#ECE9FF"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default BC2;
