import React from 'react';

const BC3 = () => {

  const consultingServices = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3326528a9a0122a3a7d00e35f3e454a390e9f62e95b65627d9200aded551d25f?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
     title: "Software Development",
      description: "Skilled developers for custom applications and system enhancements",
      variant: "slate"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3326528a9a0122a3a7d00e35f3e454a390e9f62e95b65627d9200aded551d25f?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      title: "DevOps",
      description: "Streamlining operations with CI/CD pipelines and infrastructure automation"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/17491a9d51751686ff7153fc68318953ac60b8c01cf7e5c8da45c68a56584a31?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      title: "Cloud Solutions",
      description: "Designing scalable, secure cloud architectures tailored to your needs."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/17491a9d51751686ff7153fc68318953ac60b8c01cf7e5c8da45c68a56584a31?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      title: "Cybersecurity",
      description: "Protect your business with advanced security strategies and compliance readiness."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/45ae27862dbcc616563380ec5e8a71f1ebec8242ea204a795972d14efccb6d8c?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      title: "QAVE (Quality Assurance Validation Engineering)",
      description: "Expertise in validation processes for highly regulated industries.."
    }
  ];

  const ConsultingCard = ({ icon, title, description, variant = "default" }) => {
    const bgColor = variant === "slate" ? "bg-slate-500" : "bg-white";
    const textColor = variant === "slate" ? "text-white" : "text-slate-900";
    const descriptionColor = variant === "slate" ? "text-white" : "text-neutral-700";

    return (
      <div className={`flex flex-col items-center px-8 py-5 w-full ${bgColor} shadow-[0px_1px_4px_rgba(0,0,0,0.15)] max-md:px-4 max-md:mt-8`}>
        <div className="flex z-10 flex-col justify-center items-center px-6 mt-0 bg-white rounded-full border-8 border-blue-50 border-solid h-[124px] w-[124px] max-md:px-4">
          <img
            loading="lazy"
            src={icon}
            alt={`${title} icon`}
            className="object-contain aspect-square w-[50px]"
          />
        </div>
        <div className={`mt-6 text-xl leading-none text-center ${textColor}`}>
          {title}
        </div>
        <div className={`mt-6 text-base leading-6 text-center ${descriptionColor}`}>
          {description}
        </div>
      </div>
    );
  };

  return (


  
    <div className="flex flex-col items-center py-10 px-32 w-full bg-blue-50 max-md:px-4 max-md:max-w-full relative"
    >
        <div
      className="absolute opacity-30 top-0 right-0 w-full h-full pointer-events-none hidden lg:block"  // Hidden on small screens, visible on large screens
      style={{
        backgroundImage: 'url(./bg/Frame.png)',
        backgroundPosition: 'top right',  // Position the image to the top-right corner
        backgroundSize: 'auto 50%',       // Adjust the height to fit nicely
        backgroundRepeat: 'no-repeat',
        filter: 'grayscale(100%)'
      }}
    ></div>
    <div className="self-end w-full max-w-[1288px] max-md:max-w-full">
      <div className="flex gap-6 max-md:flex-col">
        {/* Top section with 3 cards */}
        <div className="flex flex-col w-full max-md:w-full">
          <div className="flex flex-col mt-16 max-md:mt-8 max-md:max-w-full">
            <div className="flex flex-col text-center">
              <h1 className=" text-3xl font-semibold leading-none text-slate-900">
                Our Consulting Expertise
              </h1>
              <p className="mt-2 text-lg leading-loose text-gray-600 max-md:max-w-full">
                We specialize in delivering expert consulting services across key IT domains
              </p>
            </div>
            <div className="mt-16 max-w-full w-full max-md:mt-8">
              {/* 3 cards on top */}
              <div className="flex gap-6 max-md:flex-col">
                {consultingServices.slice(0, 3).map((service, index) => (
                  <div key={index} className="flex flex-col w-1/3 max-md:w-full">
                    <ConsultingCard {...service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
    {/* Bottom section with 2 cards */}
    <div className="max-w-full w-[746px] mt-8">
      
      <div className="flex gap-8  max-md:flex-col">
        {consultingServices.slice(3, 5).map((service, index) => (
          <div key={index} className="flex flex-col w-1/2  max-md:w-full">
            <ConsultingCard {...service} />
          </div>
        ))}
        
      </div>
      
    </div>
    <div className="flex justify-center lg:justify-start mt-8">
        <button className="relative overflow-hidden px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#6fd1ab] text-black text-[15px] font-semibold font-['Maven Pro'] group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
              Explore Our Industry Solutions →
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3]  rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </div>



        </div>

  
  );
};

export default BC3;
