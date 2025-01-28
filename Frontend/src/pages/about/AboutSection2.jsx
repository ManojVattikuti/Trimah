import React from 'react';

const AboutSection2 = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-48 ">
      <div className="relative flex flex-col self-center mt-8 md:mt-12 px-8 py-2">
        {/* Background Image */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/933aaa23f1bbc270162d54f0ef2fc77b7e06989478ab1b47ae93b54369fd9afd?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
          className="object-cover absolute inset-0 w-full h-full rounded-[30px]"
          alt="Background"
        />

        <div className="relative z-10">
          <div className="flex flex-col gap-5 md:flex-row md:gap-8 lg:gap-10">
            {/* Left Section */}
            <div className="flex flex-col w-full md:w-[58%] lg:w-[60%] xl:w-[64%]">
              <div className="flex flex-col mt-4 md:mt-8 lg:mt-10">
                <div className="text-lg sm:text-xl md:text-2xl font-semibold leading-none uppercase text-slate-900 font-parkinsans">
                  Our Story
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold font-parkinsans leading-tight md:leading-normal text-[#684fa3] font-parkinsans">
                  Our Journey Began with a Shared Belief
                </h2>
                <p className="mt-3 text-base sm:text-lg text-neutral-500 font-parkinsans">
                  Businesses thrive when they have trusted partners to deliver exceptional talent and innovative IT solutions.
                </p>
                <p className="mt-3 text-base sm:text-lg text-neutral-500 font-parkinsans">
                  As former hiring leaders, we've experienced the difficulties of sourcing skilled professionals, meeting compliance needs, and managing complex IT projects. With these insights, we launched Trimah Technologies to bridge the gap between businesses and world-class talent.
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col w-full md:w-[42%] lg:w-[40%] xl:w-[36%] mt-6 md:mt-0">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bca6a935e42050725a5767a0b226f0e2001c12199757128dc86e7ab45f824a21?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
                className="object-contain w-full aspect-square md:aspect-[1.19]"
                alt="Company story illustration"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-6 md:mt-8 text-base sm:text-lg text-neutral-500 font-parkinsans leading-relaxed">
          We've become a trusted name for IT staffing & consulting solutions, placing{" "}
          <span className="font-semibold text-neutral-700">
            Top-Tier IT talent including but not limited to software developers in financial and healthcare industries
          </span>{" "}
          and addressing{" "}
          <span className="font-semibold text-neutral-700">
            QAVE and compliance challenges in life sciences.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;