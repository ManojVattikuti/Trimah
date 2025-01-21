import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#684fa3]  text-white py-8">
      <div className="container mx-auto">
        {/* First Section - Heading and Description */}
        <div className="text-center flex flex-col items-center justify-center border-b border-white pb-6">
          <div className="flex flex-col items-center">
            <h3 className="text-white text-4xl font-bold capitalize leading-10 mb-4">
              Partner With Trimah Technologies Today
            </h3>
            <p className="text-white/70 text-xl text-center font-normal font-Medium capitalize leading-loose mb-6">
              Whether you need IT talent or innovative consulting solutions, we are here to help you succeed.
            </p>

            {/* Buttons side by side */}
            <div className="mt-4 flex flex-col md:flex-row gap-8 justify-center">
              {/* Contact Us button */}
              <div className="relative inline-block overflow-hidden rounded-full shadow-md w-full md:w-auto">
                <button className="relative overflow-hidden px-6 py-4 rounded-full w-[210px] h-14 bg-white/30 rounded-[87px] text-lg font-semibold group flex items-center w-full">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                    Contact Us Now
                  </span>
                  <FiArrowRight className="ml-2 relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out" />
                  <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                </button>
              </div>

              {/* Schedule Consultation button */}
              <div className="relative inline-block overflow-hidden rounded-full shadow-md w-full md:w-auto">
                <button className="relative overflow-hidden px-8 py-4 rounded-full bg-[#24c79b] w-[210px] h-14 rounded-[87px] text-black text-lg font-semibold group flex items-center w-full">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                    Schedule a Free Consultation
                  </span>
                  <FiArrowRight className="ml-2 relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out" />
                  <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Address, Logo, Quick Links, Legal Terms, and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-white py-10">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <img src="/TRIMAH - logos/TRIMAH-reversed-all-white-logo.png" alt="Trimah Technologies Logo" className="w-32 h-34" />
            <p className="mt-6 text-lg text-center md:text-left">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt size={24} />
                <span className="text-lg">3934 N Hampton Dr Powell, OH 43065</span>
              </div>
              <div className="flex items-center space-x-3 mt-3">
                <FaPhoneAlt size={20} />
                <span className="text-lg">+32 9888355353</span>
              </div>
              <div className="flex items-center space-x-3 mt-3">
                <FaEnvelope size={20} />
                <span className="text-lg">supporttrimah@gmail.com</span>
              </div>
            </p>
          </div>

          <div className="text-center md:text-left mb-8 md:mb-0">
            <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
            <ul className="list-none space-y-3">
              <li><a href="#" className="relative pl-4 hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">Business</a></li>
              <li><a href="#" className="relative pl-4 hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">Career Seekers</a></li>
              <li><a href="#" className="relative pl-4 hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">Services</a></li>
              <li><a href="#" className="relative pl-4 hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">Industries</a></li>
              <li><a href="#" className="relative pl-4 hover:text-purple-300 before:content-['•'] before:absolute before:left-0 before:text-black">Contact Us</a></li>
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
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300"><FaLinkedinIn size={24} /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300"><FaTwitter size={24} /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300"><FaInstagram size={24} /></a></li>
            </ul>
          </div>
        </div>

        {/* Third Section - Copyright */}
        <div className="mt-6 flex flex-col md:flex-row justify-between text-sm">
          <div className="text-left mb-4 md:mb-0">© 2025 Trimah Technologies. All Rights Reserved.</div>
          <div className="text-right">Developed By JISHNU TP</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
