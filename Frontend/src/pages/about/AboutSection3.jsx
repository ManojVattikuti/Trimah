import React from 'react';

const AboutSection3 = () => {
  return (
    <section className="container mx-auto py-16">
      <div className=" w-[1240px] h-[393px] top-[1851px] left-[101px]">
        <h2 className="text-3xl font-bold text-[#071c39] text-center mb-4">Our Core Values</h2>

        <div className="grid grid-cols-4 gap-8">
          <div className="p-4 text-center"> 
            <img src="/VECTOR6.png" alt="Vector" className="w-24 h-24 mb-4" />
            <h4 className="font-semibold text-[#071c39] text-lg mb-2">Trust</h4>
            <p className="text-[#071c39] text-sm">
              Building transparent, reliable relationships with our clients and talent.
            </p>
          </div>
          <div className="p-4 text-center">
            <img src="/VECTOR5.png" alt="Vector" className="w-24 h-24 mb-4" />
            <h4 className="font-semibold text-[#071c39] text-lg mb-2">Excellence</h4>
            <p className="text-[#071c39] text-sm">
              Delivering results that exceed expectations
            </p>
          </div>
          <div className="p-4 text-center">
            <img src="/VECTOR4.png" alt="Vector" className="w-24 h-24 mb-4" />
            <h4 className="font-semibold text-[#071c39] text-lg mb-2">Innovation</h4>
            <p className="text-[#071c39] text-sm">
              Leveraging the latest technologies to solve industry challenges
            </p>
          </div>
          <div className="p-4 text-center">
            <img src="/VECTOR3.png" alt="Vector" className="w-24 h-24 mb-4" />
            <h4 className="font-semibold text-[#071c39] text-lg mb-2">Partnership</h4>
            <p className="text-[#071c39] text-sm">
              Collaborating closely to achieve shared goals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;