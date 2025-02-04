import { Link } from "react-router-dom";

export const St3 = () => {
  const services = [
    {
      title: "Contract Staffing",
      description: "Short-term experts for project-based requirements",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/32a68c2bec64158c3f3f6731aa0c899a2601bf7edb656d9aad1a88ccf229d07d?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      number: "1"
    },
    {
      title: "Contract-to-Hire",
      description: "Evaluate talent before offering full-time employment",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/df5603e0d4444094756b7a879600348aebb373ee26f8f552f4a88bafeaadfcd9?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      number: "2"
    },
    {
      title: "Full-Time Placements",
      description: "Skilled professionals for permanent roles",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a51c03c1beec3edd567903d02dbb65809e92c8c4c5d69032b3e46edf6194120e?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      number: "3"
    },
    {
      title: "Offshore Staffing",
      description: "Access cost-effective, scalable talent from global markets",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9cca8f304f6cf56681eaa43677b3bea365bb3845c856e4d41bd3576e182d68b?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      number: "4"
    }
  ];

  function StaffingCard({ title, description, imageSrc, number }) {
    return (
      <div className="flex flex-col pt-6 pr-5 pl-10 mx-auto w-full max-w-full bg-purple-100 rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-purple-200">
        <div className="flex gap-3 items-start text-neutral-700">
          <div className="px-4 pt-2.5 pb-4 w-12 h-12 text-xl whitespace-nowrap rounded-full bg-zinc-200 transition-all duration-300 transform hover:scale-110">
            {number}
          </div>
          <div className="my-auto text-xl font-semibold font-parkinsans transition-all duration-300 hover:text-purple-700">{title}</div>
        </div>
        <div className="mt-2 text-sm sm:text-base lg:text-lg mb-6 font-parkinsans text-gray-500 leading-6 transition-all duration-300 hover:text-gray-700">
          {description}
        </div>
        {imageSrc && (
          <img
            loading="lazy"
            src={imageSrc}
            alt={`${title} illustration`}
            className="object-contain mt-3 max-w-full w-[100px] transition-transform duration-300 transform hover:scale-110"
          />
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1591px] px-8 py-20 lg:px-32 mx-auto">
      {/* Heading Section */}
      <div className="text-center">
        <div className="mt-11 text-3xl sm:text-3xl lg:text-3xl font-bold font-parkinsans max-md:mt-10">
          Our Staffing Services
        </div>
        <div className="mt-4 text-lg font-parkinsans leading-loose text-gray-500 max-md:max-w-full">
          We offer flexible staffing solutions{" "}
          <span className="lowercase">to</span> match{" "}
          <span className="lowercase">your</span> specific needs.
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-12 grid grid-cols-2 grid-rows-2 gap-8 max-md:grid-cols-1">
        {services.map((service, index) => (
          <StaffingCard key={index} {...service} />
        ))}
      </div>

      <div className="mt-8">
        <Link to="/contact">
          <button className="relative overflow-hidden px-6 py-3 rounded-full bg-[#6fd1ab] text-black text-base font-semibold group transition-transform duration-300 hover:scale-105">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out font-parkinsans">
              Request Talent Now →
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </Link>
      </div>
    </div>
  );
};
