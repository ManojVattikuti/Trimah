import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const ServiceSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section className="py-16 px-4 sm:py-16 sm:px-8 lg:py-16 lg:px-32">
      <div className="container mx-auto relative">
      
        <div className="hidden sm:block absolute top-0 right-0 p-4">
          <a
            href="business"
            className="hover:underline text-[#684fa3] text-sm sm:text-base lg:text-lg font-semibold font-parkinsans"
          >
            Explore All Services →
          </a>
        </div>

      
        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold font-parkinsans mb-4">
          Our Trimah Services at a Glance
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mb-8 font-parkinsans text-gray-500">
          At Trimah Technologies, we specialize in Staff Augmentation, offering tailored IT solutions
          <br />
          to meet your unique IT challenges.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-4">
          {/* Card 1 */}
          <div
            className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ${hoveredService === 'consulting'
                ? 'scale-105'
                : hoveredService
                  ? 'scale-95'
                  : ''
              }`}
            onMouseEnter={() => setHoveredService('consulting')}
            onMouseLeave={() => setHoveredService(null)}
          >
            <img
              src="./bg/servicecard/service1.png"
              alt="IT Consulting"
              className={`w-full h-60 sm:h-72 lg:h-80 object-cover transition-transform duration-300 ${hoveredService === 'consulting' ? 'scale-110' : ''
                }`}
            />
            <div className="absolute inset-0 flex items-end justify-start p-4 sm:p-6">
              <div className="text-left bg-[#684fa3] text-white px-2 py-2 rounded-lg">
                <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold font-parkinsans mb-2">
                  IT Consulting
                </h3>
                {hoveredService === 'consulting' && (
                  <p className="text-xs sm:text-sm font-parkinsans">
                    Innovative solutions to meet project demands
                    <br />
                    without long-term commitments.
                  </p>
                )}
              </div>
              <div
                className={`absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white transition-opacity duration-300 ${hoveredService === 'consulting' ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <a href="#" className="flex items-center justify-center">
                  <FiArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ${hoveredService === 'staff' ? 'scale-105' : hoveredService ? 'scale-95' : ''
              }`}
            onMouseEnter={() => setHoveredService('staff')}
            onMouseLeave={() => setHoveredService(null)}
          >
            <img
              src="./bg/servicecard/service2.png"
              alt="Staff Augmentation"
              className={`w-full h-60 sm:h-72 lg:h-80 object-cover transition-transform duration-300 ${hoveredService === 'staff' ? 'scale-110' : ''
                }`}
            />
            <div className="absolute inset-0 flex items-end justify-start p-4 sm:p-6">
              <div className="text-left bg-[#24c79b] text-black px-2 py-2 rounded-lg">
                <h3 className="text-black text-sm sm:text-base lg:text-lg font-semibold font-parkinsans mb-2">
                  Staff Augmentation
                </h3>
                {hoveredService === 'staff' && (
                  <p className="text-xs sm:text-sm font-parkinsans">
                    Access top IT talent to scale your business and
                    <br />
                    meet project demands without long-term commitments.
                  </p>
                )}
              </div>
              <div
                className={`absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-50 text-white transition-opacity duration-300 ${hoveredService === 'staff' ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <a href="#" className="flex items-center justify-center">
                  <FiArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

     
        <div className="block sm:hidden text-center mt-4">
          <a
            href="#"
            className="hover:underline text-[#684fa3] text-sm sm:text-base lg:text-lg font-semibold font-['Maven Pro']"
          >
            Explore All Services →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
