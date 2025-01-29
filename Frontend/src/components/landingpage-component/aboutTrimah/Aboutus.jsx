import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  return (
    <>
      {/* Second Section with 3 Images of Different Sizes (Two Columns in One Row) */}
      <section className="py-32 px-6 lg:px-32 relative">
        <div
          className="absolute inset-0 opacity-50  opacity-30"
          style={{
            backgroundImage: 'url(./bg/Vector.png)',
            backgroundPosition: 'top left',
            backgroundSize: 'auto 60%', // Adjust the height to fit nicely
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(100%)',
            // Optional: Add a blur effect to the background image
          }}
        ></div>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Column with Title and Description */}
          <div className="relative z-10 opacity-80 w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-[#071c39] text-[32px] font-semibold lg:text-4xl  font-parkinsans  capitalize leading-[42.24px] mb-4">
              About Trimah Technologies
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-8 font-parkinsans text-gray-500 capitalize leading-7 mb-6">
              Founded by Leaders in Healthcare and Pharmaceuticals IT, Trimah Technologies Brings over Two Years of Expertise in Delivering IT Staffing and Consulting Solutions. We Specialize in Placing Software Developers, DevOps, Cloud in Financial and Healthcare Industries, and Meeting Unique Life Sciences Needs such as Quality Assurance Validation Engineers and Compliance.
            </p>
            <div className="mt-8">
              <Link to="/about">
            
              <button className="relative overflow-hidden px-6 py-3 rounded-full bg-[#6fd1ab] text-black font-parkinsans font-semibold group">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out font-['Maven Pro']">
                  Meet the Team →
                </span>
                <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3]  rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              </button>
              </Link>
            </div>
          </div>

          {/* Right Column with 3 Images of Different Sizes */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-3">
  {/* First section for the large image */}
  <div className="w-full flex justify-center md:col-span-2 hidden lg:block">
    <img
      src="./about/ab1.png"
      alt="Image 1"
      className="w-[336px] h-[583px] object-cover rounded-tl-[50px] rounded-bl-[50px] mx-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
    />
  </div>

  {/* Second section for the two smaller images */}
  <div className="w-full grid grid-cols-1 gap-4 ">
    <div className="w-full h-36 mt-8 hidden lg:block">
      <img
        src="./about/ab2.png"
        alt="Image 2"
        className="w-[236px] h-[250px] object-cover rounded-tr-[30px] rounded-br-[30px] mx-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
      />
    </div>
    <div className="w-full h-36 mb-8 hidden lg:block">
      <img
        src="./about/ab3.png"
        alt="Image 3"
        className="w-[236px] h-[250px] object-cover rounded-tr-[30px] rounded-br-[30px] mx-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
      />
    </div>
  </div>
</div>

        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
