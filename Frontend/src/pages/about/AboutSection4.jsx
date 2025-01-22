import React from 'react';

const AboutSection4 = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="relative w-[1258px] h-[361px] rounded-[22px] p-8"> 
        <div className="absolute w-[1258px] h-[307px] top-[54px] left-0 bg-[#f0eaff] rounded-[22px]">
          <img
            src="/about/abs2/vectorabs2.png"
            alt="Vector"
            className="absolute w-[458px] h-[307px] top-0 left-[800px]"
          />
        </div>

        <img
          src="/about/abs3/businessman.png"
          alt="Portrait Businessman"
          className="absolute right-0 top-0 w-[541px] h-[361px]"
        />

        <div className="absolute left-[20px] top-[100px]">
          <h3 className="text-[#353535] font-semibold text-xl mb-4">WHAT WE DO</h3>
          <p className="text-black  font-extrabold text-3xl">
            At <span className="text-[#684fa3] font-extrabold text-3xl">Trimah Technologies</span>, we provide IT staffing <br/> and consultingservices tailored to your industry’s <br/>unique needs.
          </p>
          {/* <Cta3 
            className="!absolute !left-[60px] !top-64" 
            group="group-61376-9.png" 
            property1="default" 
          /> */} 
        </div>
      </div>
    </section>
  );
};

export default AboutSection4;