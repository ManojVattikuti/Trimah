import React from 'react';

const AboutSection5 = () => {
  return (
    <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-[#071c39] text-center mt-8">Our Core Services</h2> 
      <div className="flex justify-between">
        <div className="w-1/2">
          <div className="relative w-[615px] h-[260px] bg-[#684fa3] rounded-[19px] overflow-hidden"> 
            <img
              src="/VECTOR.png"
              alt="Vector"
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute top-1/3 left-10 text-white text-xl font-semibold">
              Staff <br /> 
              Augmentation
            </div>
            <p className="absolute top-1/2 left-10 text-white/50 text-lg">
              Contract, contract-to-hire, full-time & offshore staffing
            </p>
            <div className="absolute top-1/6 left-10 w-20 h-20 bg-white rounded-full">
              <img 
                src="/group61482.png" 
                alt="Group" 
                className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
              />
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="relative w-[615px] h-[260px] bg-[#6fd1ab] rounded-[19px] overflow-hidden">
            <img src="/BG.png" alt="Background" className="absolute w-full h-full object-cover" />
            <p className="absolute top-1/3 left-10 text-black text-xl font-semibold">
              IT Consulting
            </p>
            <p className="absolute top-1/2 left-10 text-gray-500 text-lg">
              Development, Devops, cloud solutions & regulatory compliance expertise
            </p>
            <div className="absolute top-1/6 left-10 w-20 h-20 bg-white rounded-full">
              <img 
                src="/group61483.png" 
                alt="Group" 
                className="w-6 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
              />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection5;