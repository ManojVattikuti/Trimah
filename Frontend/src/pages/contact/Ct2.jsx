import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

export const Ct2 = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 justify-center mr-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center py-8 bg-white">
          <div className="space-y-4 ">
            <h2 className="text-4xl font-extrabold text-gray-800">Feel Free to Contact &<br/>
            <span className='text-[#684fa3]'>
            Get in Touch
              </span> </h2>
            <p className="text-gray-600 text-lg leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="px-4 py-2 text-black font-bold">
              Connect with Us On:
            </a>
          </div>
          <div className="flex mt-4 ml-2 space-x-4">
            <a
              href="#"
              className="inline-block rounded-full bg-green-300 hover:bg-green-500 p-2 transform transition duration-300 hover:scale-110"
            >
              <FaFacebook className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="inline-block rounded-full bg-green-300 hover:bg-green-500 p-2 transform transition duration-300 hover:scale-110"
            >
              <FaTwitter className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="inline-block rounded-full bg-green-300 hover:bg-green-500 p-2 transform transition duration-300 hover:scale-110"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
            <a
              href="#"
              className="inline-block rounded-full bg-green-300 hover:bg-green-500 p-2 transform transition duration-300 hover:scale-110"
            >
              <FaLinkedin className="text-white text-xl" />
            </a>
          </div>
        </div>

        {/* Left Section: Contact Information */}
        <div className="flex flex-col items-center justify-between py-8 bg-white">
          <div className="max-w-md mx-auto p-6 space-y-6">
            {/* Phone Number Card */}
            <div className="p-4 bg-white rounded-lg shadow-xl">
              <div className="flex items-center space-x-6">
                <div className="w-10 h-10 rounded-full bg-[#684fa3] flex items-center justify-center">
                  <FaPhoneAlt className="text-white text-2xl" />
                </div>
                <div>
                  <p className="text-gray-800 text-lg font-semibold">Phone Number</p>
                  <p className="text-gray-600 text-xl">+13808671774</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-4 bg-white rounded-lg shadow-xl">
              <div className="flex items-center space-x-6">
                <div className="w-10 h-10 rounded-full bg-[#684fa3] flex items-center justify-center">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <div>
                  <p className="text-gray-800 text-lg font-semibold">Email ID</p>
                  <p className="text-gray-600 text-xl">info@trimahtech.com</p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-4 bg-white rounded-lg shadow-xl">
              <div className="flex items-center space-x-6">
                <div className="w-10 h-10 rounded-full bg-[#684fa3] flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <div>
                  <p className="text-gray-800 text-lg font-semibold">Address</p>
                  <p className="text-gray-600 text-xl">3934 N Hampton Dr Powell, OH 43065</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
