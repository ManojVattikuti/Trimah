import React from 'react';

const BC2 = () => {
  const whyChooseUsItems = [
    {
      id: 1,
      title: "Trusted Expertise",
      description: "As experienced leaders in IT, healthcare, and life sciences, we bring deep technical and industry-specific knowledge to every project"
    },
    {
      id: 2,
      title: "Tailored Solutions",
      description: "We work closely with your team to understand your unique challenges and deliver customized strategies"
    },
    {
      id: 3,
      title: "Results-Oriented Approach",
      description: "From cloud solutions to compliance, our focus is on achieving measurable outcomes that align with your business goals"
    }
  ];

  function FeatureItem({ id, title, description }) {
    return (
      <div className="flex gap-2.5 mt-6 px-2 sm:mt-8 md:mt-10">
        <div className="self-start p-2 text-base leading-none text-center whitespace-nowrap rounded-full bg-slate-500 bg-opacity-20 h-[26px] text-slate-500 w-[26px]">
          {id}
        </div>
        <div className="flex flex-col">
          <div className="self-start text-sm sm:text-base lg:text-lg mb-4 font-parkinsans font-semibold text-gray-500 leading-none text-slate-900">
            {title}
          </div>
          <div className="text-sm sm:text-base lg:text-lg mb-8 font-parkinsans text-gray-500 leading-6 ">
            {description}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="z-10 lg:px-8 lg:ml-[100px] self-end mt-14 w-full max-w-[1255px] md:mt-10 sm:px-4">
      <div className="flex gap-5 flex-col-reverse md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col w-full md:w-6/12 order-2 md:order-1">
          <div className="flex z-10 flex-col items-start my-auto w-full">
            <div className="text-3xl sm:text-3xl lg:text-4xl font-bold font-parkinsans mb-8">
              Why Choose Us?
            </div>
            {whyChooseUsItems.map((item) => (
              <FeatureItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col w-full md:w-6/12 order-1 md:order-2 relative">
          <div className="flex flex-col justify-center items-center md:items-end px-5 py-2 min-h-[400px] md:min-h-[569px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cf53ee0fa02d92890ad21ecbeb7ab1977a0655d2d4c46bcffcecdffaae0e428?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
              className="object-cover absolute inset-0 size-full w-full h-full md:w-auto md:h-auto"
              alt="Background decorative image"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd836a660b0603566bed4b93793691c261c6c2006faa7a0244885267aa844168?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
              className="object-contain z-10 mt-4 max-w-full aspect-[0.69] md:w-[409px] md:h-auto"
              alt="Feature illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BC2;
