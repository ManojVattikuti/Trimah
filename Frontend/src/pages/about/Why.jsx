import React from "react";


export const Why = () => {
  const infoCards = [
    {
      title: "Tailored Solutions",
      description: "We customize services to meet your business goals",
    },
    {
      title: "A Foundation of Trust",
      description: "Our leadership's proven experience ensures confidence in every interaction.",
    },
    {
      title: "Industry Expertise",
      description: "Specialized knowledge in financial, healthcare, Pharmaceutical and life sciences industries",
    },
    {
      title: "Proven Success",
      description: "A growing track record of delivering top talent and impactful IT solutions.",
    },
  ];

  function InfoCard({ title, description, className = "" }) {
    return (
      <div className={`flex flex-col ${className}`}>
        <div className="text-sm leading-none text-black font-parkimsans">{title}</div>
        <div className="text-xs leading-5 text-neutral-700 font-parkimsans">{description}</div>
      </div>
    );
  }

  return (
    <>
      <div className="z-10 mt-10 w-full px-8 max-w-[2361px] max-md:max-w-full">
      <div className="self-center ttext-3xl sm:text-3xl lg:text-4xl font-bold font-parkinsans text-center max-md:text-center max-md:mb-4">
            Why Choose Us?
          </div>
        <div className="flex gap-5 max-md:flex-col max-md:px-4">
       

          {/* First Column */}
          <div className="flex flex-col w-[33%] max-md:w-full max-md:mb-4">
            <div className="flex flex-col mt-48 text-right max-md:mt-10">
              <div className="flex flex-col items-end pl-12 max-md:pl-5">
                <InfoCard
                  title={infoCards[0].title}
                  description={infoCards[0].description}
                  className="items-end  text-sm sm:text-base lg:text-lg font-parkinsans font-semibold text-gray-500 w-[247px] max-md:w-full"
                />
                <InfoCard
                  title={infoCards[1].title}
                  description={infoCards[1].description}
                  className="self-start text-sm sm:text-base lg:text-lg font-parkinsans  font-semibold text-gray-500 mt-40 max-md:mt-10 w-[240px] max-md:w-full"
                />
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex flex-col w-[53%] max-md:w-full max-md:mt-10">
            <div className="flex flex-col text-lg font-extrabold leading-none text-slate-900 font-parkimsans max-md:text-center">
              <img
                loading="lazy"
                src="/about/abs3/pic1.jpg"
                alt="Why Choose Us illustration"
                className="mt-8 w-[730px] h-[450px] max-md:w-[100%] max-md:h-auto"
              />
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col w-[30%] max-md:w-full max-md:mb-4">
            <div className="flex flex-col items-start mt-48 max-md:mt-10">
              <InfoCard
                title={infoCards[2].title}
                description={infoCards[2].description}
                className="max-md:w-full text-sm sm:text-base lg:text-lg  font-semibold font-parkinsans text-gray-500"
              />
              <InfoCard
                title={infoCards[3].title}
                description={infoCards[3].description}
                className="self-end mt-36 max-w-full w-[209px]  font-semibold sm:text-base lg:text-lg  font-parkinsans text-gray-500 max-md:w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
