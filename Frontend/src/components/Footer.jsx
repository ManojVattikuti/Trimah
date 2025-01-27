import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#684fa3]  text-white py-8 relative"
    >

      <div
        className="absolute opacity-50 top-0 right-0 w-full h-full pointer-events-none hidden lg:block"  // Hidden on small screens, visible on large screens
        style={{
          backgroundImage: 'url(./Framef.png)',
          backgroundPosition: 'top right',  // Position the image to the top-right corner
          backgroundSize: 'auto 80%',       // Adjust the height to fit nicely
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(100%)'
        }}
      ></div>

      <div className="container mx-auto">
        {/* First Section - Heading and Description */}
        <div className="text-center flex flex-col items-center justify-center border-b border-white pb-6">
          <div className="flex flex-col items-center">
            <h3 className="text-white text-4xl sm:text-3xl lg:text-4xl font-bold font-parkinsans capitalize leading-10 mb-4">
              Partner With Trimah Technologies Today
            </h3>

            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-8 font-parkinsans text-gray-500 text-center  capitalize leading-loose mb-6">
              Whether you need IT talent or innovative consulting solutions, we are here to help you succeed.
            </p>

            {/* Buttons side by side */}
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
              {/* Contact Us button */}
              <div className="relative inline-block overflow-hidden rounded-full shadow-md w-full sm:w-auto">
              <a href="/contact" className="block">

       
                <button className="relative overflow-hidden px-4 py- rounded-full bg-white/30 text-sm sm:text-lg font-semibold font-parkinsans lg:text-sm group flex items-center justify-center w-full sm:w-[200px] h-10 sm:h-12">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                    Contact Us Now
                  </span>
                  <FiArrowRight className="ml-2 relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out" />
                  <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                </button>
                </a>
              </div>

              {/* Schedule Consultation button */}
              <div className="relative inline-block overflow-hidden rounded-full shadow-md w-full sm:w-auto">
              <a href="/contact" className="block">
                <button className="relative overflow-hidden px-4 py-2 rounded-full bg-[#24c79b] text-sm sm:text-lg lg:text-sm font-parkinsans font-semibold group flex items-center justify-center w-full sm:w-[200px] lg:w-[280px] h-10 sm:h-12">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                    Schedule a Free Consultation
                  </span>
                  <FiArrowRight className="ml-2 relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out" />
                  <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                </button>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Second Section - Address, Logo, Quick Links, Legal Terms, and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-white py-10 font-parkinsans">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <img src="/TRIMAH - logos/TRIMAH-reversed-all-white-logo.png" alt="Trimah Technologies Logo" className="w-32 h-34" />
            <p className="mt-6 text-lg text-center md:text-left">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt size={24} />
                <span className="text-lg">3934 N Hampton Dr Powell, OH 43065</span>
              </div>
              <div className="flex items-center space-x-3 mt-3">
                <FaPhoneAlt size={20} />
                <span className="text-lg">+13808671774</span>
              </div>
              <div className="flex items-center space-x-3 mt-3">
                <FaEnvelope size={20} />
                <span className="text-lg">info@trimahtech.com</span>
              </div>
            </p>
          </div>

          <div className="text-center md:text-left mb-8 md:mb-0">
            <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
            <ul className="list-none space-y-3">
              <li><a href="/business" className="relative pl-4 hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">Business</a></li>
              <li><a href="/career" className="relative pl-4 hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">Career Seekers</a></li>
              <li><a href="/staffing" className="relative pl-4 hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">Staffing</a></li>
              <li><a href="/industries" className="relative pl-4 hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">Industries</a></li>
              <li><a href="/contact" className="relative pl-4 hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">Contact Us</a></li>
              <li><a href="/about" className="relative pl-4 hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">About Us</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left mb-12">
            <h4 className="text-2xl font-semibold font-['Maven Pro'] mb-4">Legal Terms</h4>
            <ul className="list-none space-y-3">
              <li><a href="#" className="relative pl-4 font-normal hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">Privacy Policy</a></li>
              <li><a href="#" className="relative pl-4 hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">Terms of Service</a></li>
              <li><a href="#" className="relative pl-4 hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">FAQs</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left mt-8 md:mt-0">
            <h4 className="text-xl font-semibold mb-4">Contact Us On:</h4>
            <ul className="flex space-x-6 justify-center md:justify-start">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300"><FaFacebookF size={24} /></a></li>
              <li><a href="https://www.linkedin.com/company/trimah-technologies-llc/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300"><FaLinkedinIn size={24} /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300"><FaTwitter size={24} /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300"><FaInstagram size={24} /></a></li>
            </ul>
          </div>
        </div>


        {/* Third Section - Copyright */}
        <div className="mt-6 flex flex-col md:flex-row justify-between text-sm font-parkinsans">
          <div className="text-left mb-4 md:mb-0 text-xs sm:text-sm md:text-base lg:text-sm">
            © 2025 Trimah Technologies. All Rights Reserved.
          </div>

         

       
          <div className="text-right text-xs sm:text-sm md:text-base lg:text-sm">
          <a href="https://jishnutp.vercel.app/">
            Developed By JTP
            </a>
          </div>
       
        </div>

      </div>
    </footer>
  );
};

export default Footer;
