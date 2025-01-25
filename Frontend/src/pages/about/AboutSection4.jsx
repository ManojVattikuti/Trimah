import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const AboutSection4 = () => {
  return (
    <section className='lg:px-32 '>

  
     <div className="px-16 max-w-full bg-violet-100 rounded-3xl w-auto max-md:px-32 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col items-start self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="text-xl leading-none uppercase text-neutral-700">
              What We Do
            </div>
            <div className="self-stretch mt-1 text-2xl leading-10 text-black max-md:max-w-full">
              <span className="font-extrabold text-black">At </span>
              <span className="font-extrabold text-slate-500">
                Trimah Technologies
              </span>
              <span className="font-extrabold text-black">
                , we provide IT staffing{" "}
              </span>
              <span className="font-extrabold text-black lowercase">and</span>
              <span className="font-extrabold text-black">
                {" "}
                consulting services tailored{" "}
              </span>
              <span className="font-extrabold text-black lowercase">
                to your
              </span>
              <span className="font-extrabold text-black"> industry's</span>
              <br />
              <span className="font-extrabold text-black">unique needs.</span>
            </div>
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
        <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fb7052f27625acc6f732efdb623824b31f90be6bf8507e89098483746a5394a?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
            alt="IT staffing and consulting services illustration"
            className="object-contain grow shrink-0 mt-0 max-w-full aspect-[0.67] w-[241px] max-md:mt-10"
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutSection4;