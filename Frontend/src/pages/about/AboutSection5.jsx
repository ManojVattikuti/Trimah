import React from 'react';

const AboutSection5 = () => {
  return (
    <section className="container mx-auto py-8 mb-5 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#071c39] text-center mt-2 mb-8">
        Our Core Services
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="w-full sm:w-[90%] md:w-[48%] lg:w-[50%] xl:w-[40%] group relative">
          <div className="relative h-[260px] sm:h-[300px] bg-[#684fa3] rounded-[19px] overflow-hidden transform group-hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
            <img
              src="/about/abs2/vectorabs2.png"
              alt="Vector"
              className="absolute w-full h-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
            />
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
              <h3 className="text-white text-lg sm:text-xl font-semibold group-hover:text-[#f5d9ff] transition-colors duration-300">
                Staff Augmentation
              </h3>
              <p className="text-white/50 text-sm sm:text-base mt-2 group-hover:text-white transition-colors duration-300">
                Contract, contract-to-hire, full-time & offshore staffing
              </p>
            </div>
            <div className="absolute top-5 left-5 w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-full transform group-hover:scale-110 transition-transform duration-300">
              <img
                src="/about/abs5/ICON1.png"
                alt="Group"
                className="w-8 sm:w-10 h-8 sm:h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>


            
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[90%] md:w-[48%] lg:w-[50%] xl:w-[40%] group relative">
          <div className="relative h-[260px] sm:h-[300px] bg-[#6fd1ab] rounded-[19px] overflow-hidden transform group-hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
            <img
              src="/about/abs2/vectorabs2.png"
              alt="Background"
              className="absolute w-full h-full object-cover opacity-50 transition-opacity duration-300 group-hover:opacity-70"
            />
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
              <h3 className="text-black text-lg sm:text-xl font-semibold group-hover:text-[#2a7055] transition-colors duration-300">
                IT Consulting
              </h3>
              <p className="text-gray-700 text-sm sm:text-base mt-2 group-hover:text-gray-800 transition-colors duration-300">
                Development, DevOps, cloud solutions & regulatory compliance expertise
              </p>
            </div>
            <div className="absolute top-5 left-5 w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-full transform group-hover:scale-110 transition-transform duration-300">
              <img
                src="/about/abs5/ICON2.png"
                alt="Group"
                className="w-8 sm:w-10 h-8 sm:h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection5;
