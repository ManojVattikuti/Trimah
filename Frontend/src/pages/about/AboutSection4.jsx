import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const AboutSection4 = () => {
  return (
    <section className="container mx-auto py-24">
      <div className="relative w-[1258px] h-[361px] rounded-[22px] p-2"> 
        <div className="absolute w-[1258px] h-[307px] top-[54px] left-0 bg-[#f0eaff] rounded-[22px]">
          <img
            src="/about/abs2/vectorabs2.png"
            alt="Vector"
            className="absolute w-[458px] h-[307px] top-0 left-[800px]"
          />
        </div>

        <img
          src="/about/abs3/businessman.png"
          alt="Portrait Businessman"
          className="absolute right-0 top-0 w-[681px] h-[361px] left-[650px]"
        />

        <div className="absolute left-[20px] top-[100px]">
          <h3 className="text-[#353535] font-semibold text-xl mb-4">WHAT WE DO</h3>
          <p className="text-black  font-extrabold text-3xl">
            At <span className="text-[#684fa3] font-extrabold text-3xl">Trimah Technologies</span>, we provide IT staffing <br/> and consultingservices tailored to your industry’s <br/>unique needs.
          </p>
          <div className="relative inline-block overflow-hidden rounded-full top-[20px] shadow-md">
             <button className="relative flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#6fd1ab] text-black text-[14px] sm:text-[15px] font-semibold font-['Maven Pro'] group">
               <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                Explore Our Industry Solutions
               </span>
               <FiArrowRight className="ml-2 relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out" />
               <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection4;