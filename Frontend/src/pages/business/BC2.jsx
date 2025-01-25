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
      <div className="flex gap-2.5 mt-9">
        <div className="self-start px-2.5 text-base leading-none text-center whitespace-nowrap rounded-full bg-slate-500 bg-opacity-20 h-[26px] text-slate-500 w-[26px]">
          {id}
        </div>
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
          <div className="self-start text-xl leading-none text-slate-900">
            {title}
          </div>
          <div className="mt-1 text-base leading-6 text-neutral-700">
            {description}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="z-10 lg:px-8 lg:ml-[100px]  self-end mt-14 w-full max-w-[1255px] max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex z-10 flex-col items-start self-stretch my-auto -mr-11 w-full max-md:mt-10 max-md:max-w-full">
          <div className="text-3xl leading-none text-slate-900">
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
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex relative flex-col grow justify-center items-end px-20 py-0.5 min-h-[569px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cf53ee0fa02d92890ad21ecbeb7ab1977a0655d2d4c46bcffcecdffaae0e428?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
            className="object-cover absolute inset-0 size-full"
            alt="Background decorative image"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd836a660b0603566bed4b93793691c261c6c2006faa7a0244885267aa844168?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
            className="object-contain z-10 mt-0 max-w-full aspect-[0.69] w-[409px]"
            alt="Feature illustration"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default BC2;
