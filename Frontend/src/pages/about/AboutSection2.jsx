import React from 'react';

const AboutSection2 = () => {

  function StatisticCard({ number, description }) {
    return (
      <div className="flex relative flex-col grow max-md:mt-10">
        <div className="self-start text-3xl leading-loose text-slate-500">
          {number}
        </div>
        <div className="mt-3 text-sm leading-6 text-black">
          {description}
        </div>
      </div>
    );
  }
  return (
    <div className='lg:px-16'>

  
    <div className="flex relative flex-col self-center px-16 py-12 mt-12 w-full  max-w-auto min-h-[500px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/933aaa23f1bbc270162d54f0ef2fc77b7e06989478ab1b47ae93b54369fd9afd?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
        className="object-cover absolute inset-0 size-full"
        alt=""
      />
      <div className="relative max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow mt-4 text-lg leading-9 text-neutral-500 max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-xl leading-none uppercase text-slate-900">
                Our Story
              </div>
              <div className="mt-1.5 text-3xl font-extrabold leading-10 text-slate-500 w-[439px]">
                Our Journey Began with a Shared Belief
              </div>
              <div className="mt-2 max-md:mr-1 max-md:max-w-full">
                Businesses thrive when they have trusted partners to deliver
                exceptional talent and innovative IT solutions.
              </div>
              <div className="mt-2.5 max-md:max-w-full">
                As former hiring leaders, we've experienced the difficulties of
                sourcing skilled professionals, meeting compliance needs, and
                managing complex IT projects. With these insights, we launched
                Trimah Technologies to bridge the gap between businesses and
                world-class talent.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bca6a935e42050725a5767a0b226f0e2001c12199757128dc86e7ab45f824a21?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
              className="object-contain w-full aspect-[1.19] max-md:mt-10"
              alt="Company story illustration"
            />
          </div>
        </div>
      </div>
      <div className="relative mt-1.5 mr-12 text-lg leading-9 text-neutral-500 max-md:mr-2.5 max-md:max-w-full">
        We've become a trusted name for IT staffing & consulting solutions,
        placing{" "}
        <span className="text-neutral-700">
          Top-Tier IT talent including but not limited to software developers in
          financial and healthcare industries
        </span>{" "}
        and addressing{" "}
        <span className="text-neutral-700">
          QAVE and compliance challenges in life sciences.
        </span>
      </div>
      
    </div>
    </div>
  );
}

export default AboutSection2;
