import { Link } from "react-router-dom";

export const BC6 = () => {
  const industryData = [
    {
      title: "Financial Services",
      description: "Streamlining operations with secure and compliant IT strategies",
      icon: "./bsuiness/1.png"
    },
    {
      title: "Healthcare",
      description: "Transforming healthcare with advanced tech solutions",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5185bb94d8ba68f4ab9ac686298b6161335c9b3eca012a861db339c33c7ead17?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
    },
    {
      title: "Retail",
      description: "Enhancing the shopping experience with digital tools",
      icon: "./bsuiness/3.png"
    },
    {
      title: "Education",
      description: "Empowering education with innovative technology",
      icon: "./bsuiness/4.png"
    },
  ];

  function IndustryCard({ title, description, icon }) {
    return (
      <div className="flex flex-col flex-1 w-full justify-center items-center">
        {icon && (
          <img
            loading="lazy"
            src={icon}
            className="object-contain w-14 aspect-square mb-4"
            alt="industry icon"
          />
        )}
        <div className="text-xl text-black font-semibold  font-parkinsans text-center">
          {title}
        </div>
        <div className="mt-2 text-sm text-zinc-500  font-parkinsans text-center">
          {description}
        </div>
        <div className="w-full mt-5 border-t  font-parkinsans border-violet-200" />
      </div>
    );
  }

  return (
    <div className="w-full px-5 py-8 lg:py-16 mt-16">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-3xl sm:text-3xl lg:text-4xl font-bold font-parkinsans  leading-[34.32px]">
            Industries We Serve
            <div className="text-sm sm:text-base lg:text-lg mb-8 font-parkinsans text-gray-500 mt-4 font-medium">
              Our consulting services cater to various industries, including
            </div>
          </div>
          <Link to="/industries">
            <div className="text-[#684fa3] lg:px-32 text-lg font-semibold font-parkinsans underline mt-4 md:mt-0">
              Discover Industry Solutions
            </div>
          </Link>
        </div>

        <div className="mt-11 w-full">
          <div className="flex flex-wrap gap-6 justify-center">
            {industryData.map((industry, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 mb-10">
                <IndustryCard {...industry} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
