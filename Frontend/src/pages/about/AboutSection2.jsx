import React from 'react';

const AboutSection2 = () => {
  return (
    <section className="container mx-auto  py-16">
      <div className="relative w-full h-[501px] rounded-[22px] bg-[#eee8ff] flex items-center justify-center">
        
        {/* Content Section */}
        <div className="absolute top-[50px] left-[30px] pl-8 pr-4">
          <h3 className="text-[#071c39] font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2">OUR STORY</h3>
          <h2 className="text-[#684fA3] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
            Our Journey Began with a <br /> Shared Belief
          </h2>
          <p className="text-[#64696e] text-sm sm:text-base md:text-lg lg:text-xl mb-4">
            Businesses thrive when they have trusted partners to deliver exceptional talent and <br /> innovative IT solutions.
          </p>
          <p className="text-[#64696e] text-sm sm:text-base md:text-lg lg:text-xl mb-6">
            As former hiring leaders, we’ve experienced the difficulties of sourcing skilled <br /> professionals, meeting compliance needs, and managing complex IT projects. With <br /> these insights, we launched Trimah Technologies to bridge the gap between <br /> businesses and world-class talent.
          </p>
          <p className="text-[#64696e] text-sm sm:text-base md:text-lg lg:text-xl mb-4">
            We’ve become a trusted name for IT staffing & consulting solutions, placing <span className="font-bold text-[#333333]">
              Top-Tier IT talent including but not limited to software developers in financial and healthcare industries
            </span> and addressing <span className="font-bold text-[#333333]">QAVE and compliance challenges in life sciences.</span>
          </p>

        
        </div>

        {/* Top Left Image (Hidden on smaller screens) */}
        <div className="absolute top-[50px] left-[880px] w-[392px] h-[330px] hidden sm:block">
          <img 
            src="/about/abs2/Layer_1.png" 
            alt="Top Left Image" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Left Image (Hidden on smaller screens) */}
        <div className="absolute bottom-0 left-[900px] w-[292px] h-[330px] hidden sm:block">
          <img 
            src="/about/abs2/vectorabs2.png" 
            alt="Bottom Left Image" 
            className="w-full h-full object-cover transform rotate-120 opacity-50 filter hue-rotate-270"
          />
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection2;
