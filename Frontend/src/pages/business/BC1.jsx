import React from 'react';

const BC1 = () => {
  return (
    <section className="py-4 md:py-16 px-4 sm:px-8 lg:px-24 w-full min-h-[50vh] overflow-hidden">
      <div className="w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[656px] bg-[#24c79b] rounded-tr-[40px] rounded-tl-[40px] rounded-bl-[40px] md:rounded-tr-[50px] rounded-br-[40px] md:rounded-br-[50px]">
            <img
              className="w-full h-auto rounded-bl-[40px] rounded-tl-[40px] rounded-tr-[40px] md:rounded-tr-[80px] rounded-br-[40px] md:rounded-br-[80px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              src="/bsuiness/bc1/img1.png"
              alt="Business Image"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 px-4 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* IT Consulting Text with Green Background */}
          <div className="w-[200px] md:w-[250px] mb-4 bg-[#24c79b] bg-opacity-50 text-white hover:text-black text-center rounded-[14px] md:rounded-[20px] py-2">
            <div className="text-sm sm:text-base font-parkinsans uppercase leading-tight">
              IT Consulting Services
            </div>
          </div>

          {/* Heading Text */}
          <h2 className="text-[#071c39] text-2xl sm:text-3xl lg:text-4xl font-bold font-parkinsans capitalize leading-tight md:leading-snug mb-6">
            <span>Your </span>
            <span className="text-[#684fa3]">Success</span>
            <span>, Our Integrity</span>
          </h2>

          {/* Description Text */}
          <p className="text-sm sm:text-base lg:text-lg font-parkinsans text-gray-500 leading-7 lg:leading-8">
            At Trimah Technologies, we empower businesses with tailored IT consulting services that drive innovation, improve efficiency, and ensure compliance. Our consulting solutions are built on trust, excellence, and collaboration, with a focus on delivering real value across industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BC1;
