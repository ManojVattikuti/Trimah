import React from 'react';
import AnimateName from "../../context/animateName";
import { Link } from 'react-router-dom';
const BusinessHero = () => {
  return (
    <div className="relative h-[550px]">
      {/* Background Image Section */}
          <div className="relative w-full h-full">
  <img 
    src="./about/hero-about.jpeg" 
    alt="Hero" 
    className="absolute w-full h-full object-cover object-center top-0 left-0" 
  />
  <div className="absolute w-full h-full top-0 left-0 bg-black opacity-80" />
</div>


      {/* Text Section */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* Main Heading */}
        <div className="font-extrabold font-parkinsans  text-white text-[40px] leading-[47.2px] tracking-tight mb-4 sm:text-[32px] md:text-[22px] lg:text-[30px] xl:text-[40px]">
          <AnimateName>
         BUSINESS
          </AnimateName>
        </div>


        {/* Breadcrumbs Section */}
        <div className="flex items-center justify-center gap-2">
          {/* Home */}
          <Link to="/">
          <p className="text-[#ffffffcc] text-xl font-parkinsans tracking-tight leading-[23.6px] sm:text-lg md:text-xl lg:text-xl">
            Home
          </p>
          </Link>
          {/* Arrow Icon */}
          <div className="transform -translate-y-[2px]">
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84025C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84025L5.7154 5.38614C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z" fill="white" fill-opacity="0.8" />
            </svg>
          </div>

          {/* About Us */}
          <Link to="/business">
          
          <p className="text-[#ffffffcc] text-xl font-parkinsans tracking-tight leading-[23.6px] sm:text-lg md:text-xl lg:text-xl">
Business
          </p>
          </Link>
          <div className="transform -translate-y-[2px]">
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84025C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84025L5.7154 5.38614C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z" fill="white" fill-opacity="0.8" />
            </svg>
          </div>
          <Link to="/business">
          <p className="text-[#ffffffcc] text-xl font-parkinsans tracking-tight leading-[23.6px] sm:text-lg md:text-xl lg:text-xl">
Consulting
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessHero;
