import React from 'react';

const BC1 = () => {
  return (
    <section className="py-2 md:py-24 px-4 md:px-24 w-full min-h-[80vh] overflow-hidden">
      <div className="w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative">

        {/* Image Section */}
        <div className="w-full h-auto md:w-[656px] md:h-[345px] relative mb-8 md:mb-0">
          <div className="w-full h-auto md:w-[656px] md:h-[334px] bg-[#24c79b] rounded-tr-[40px] rounded-tl-[40px] rounded-bl-[40px] md:rounded-tr-[80px] rounded-br-[40px] md:rounded-br-[80px]">
            <img
              className="w-full h-auto md:w-[648px] md:h-[334px] rounded-bl-[40px] rounded-tl-[40px] rounded-tr-[40px] md:rounded-tr-[80px] rounded-br-[40px] md:rounded-br-[80px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              src="/bsuiness/bc1/img1.png"
              alt="Business Image"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full px-4 flex flex-col items-center md:items-start md:w-[666px]">

          {/* IT Consulting Text with Green Background */}
          <div className="w-[280px] md:w-[300px] mb-8 bg-[#24c79b] bg-opacity-50 text-white p-2 text-center rounded-[14px] md:rounded-[20px]">
            <div className="text-sm md:text-[15px] font-normal uppercase leading-tight">
              IT Consulting Services
            </div>
          </div>

          {/* Heading Text */}
          <div className="text-[#071c39] text-2xl md:text-3xl font-bold capitalize leading-10 mb-8 text-center md:text-left">
            <span>Your </span>
            <span className="text-[#684fa3]">Success</span>
            <span>, Our Integrity</span>
          </div>

          {/* Description Text */}
          <div className="text-[#5a5e6a] text-sm md:text-base font-normal leading-[30.56px] px-4 mb-8 text-center md:text-left">
            At Trimah Technologies, we empower businesses with tailored IT consulting services that drive innovation, improve efficiency, and ensure compliance. Our consulting solutions are built on trust, excellence, and collaboration, with a focus on delivering real value across industries.
          </div>

        </div>

      </div>
    </section>
  );
};

export default BC1;
