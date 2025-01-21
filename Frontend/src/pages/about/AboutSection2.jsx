import React from 'react';

const AboutSection2 = () => {
  return (
    <section className="container mx-auto py-16">
    <div className="relative w-[1258px] h-[651px] rounded-[22px]">
      <div className="absolute w-[1258px] h-[651px] top-0 left-0 bg-[#eee8ff] rounded-[22px]">
        <img
          src="/VECTOR7.png" 
          alt="Vector"
          className="absolute w-[1258px] h-[648px] top-0 left-0" 
        />
      </div>

      {/* Left Section */}
      <div className="absolute left-1/4 top-1/4"> 
        <h3 className="text-[#071c39] font-bold text-3xl mb-4">OUR STORY</h3>
        <h2 className="text-[#071c39] font-bold text-3xl mb-4">Our Journey Began with a Shared Belief</h2>
        <p className="text-[#64696e] text-lg mb-4">
          Businesses thrive when they have trusted partners to deliver exceptional talent and innovative IT solutions.
        </p>
        <p className="text-[#64696e] text-lg mb-4">
          As former hiring leaders, we’ve experienced the difficulties of sourcing skilled professionals, meeting compliance needs, and managing complex IT projects. With these insights, we launched Trimah Technologies to bridge the gap between businesses and world-class talent.
        </p>
        <p className="text-[#64696e] text-lg mb-4">
          We’ve become a trusted name for IT staffing & consulting solutions, placing <span className="font-bold text-[#333333]">Top-Tier IT talent including but not limited to software developers in financial and healthcare industries</span> and addressing <span className="font-bold text-[#333333]">QAVE and compliance challenges in life sciences.</span>
        </p>

        <div className="flex mt-8">
          <div className="w-1/3">
            <div className="text-[#684fa3] font-bold text-3xl">123A</div>
            <p className="text-black text-sm mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="w-1/3">
            <div className="text-[#684fa3] font-bold text-3xl">123A</div>
            <p className="text-black text-sm mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="w-1/3">
            <div className="text-[#684fa3] font-bold text-3xl">123A</div>
            <p className="text-black text-sm mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="absolute right-1/4 top-1/4">
        <img 
          src="/VECTOR8.png" 
          alt="Vector" 
          className="w-[392px] h-[330px]" 
        />
      </div>
    </div>
  </section>
  );
};

export default AboutSection2;