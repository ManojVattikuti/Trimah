export const BC6 = () => {
  const industryData = [
    {
      title: "Financial Services",
      description: "Streamlining operations with secure and compliant IT strategies",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5185bb94d8ba68f4ab9ac686298b6161335c9b3eca012a861db339c33c7ead17?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
    },
    {
      title: "Healthcare",
      description: "Transforming healthcare with advanced tech solutions",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5185bb94d8ba68f4ab9ac686298b6161335c9b3eca012a861db339c33c7ead17?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
    },
    {
      title: "Retail",
      description: "Enhancing the shopping experience with digital tools",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5185bb94d8ba68f4ab9ac686298b6161335c9b3eca012a861db339c33c7ead17?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
    },
    {
      title: "Education",
      description: "Empowering education with innovative technology",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5185bb94d8ba68f4ab9ac686298b6161335c9b3eca012a861db339c33c7ead17?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
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
        <div className="text-xl text-black font-semibold text-center">
          {title}
        </div>
        <div className="mt-2 text-sm text-zinc-500 text-center">
          {description}
        </div>
        <div className="w-full mt-5 border-t border-violet-200" />
      </div>
    );
  }

  return (
    <div className="w-full px-5 py-8 lg:py-32">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-[#071c39] lg:px-32 text-[26px] font-bold leading-[34.32px]">
            Industries We Serve
            <div className="text-[#5a5e6a] text-[15px] font-medium">
              Our consulting services cater to various industries, including
            </div>
          </div>
          <div className="text-[#684fa3] lg:px-32 text-lg font-semibold underline mt-4 md:mt-0">
            Discover Industry Solutions
          </div>
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
