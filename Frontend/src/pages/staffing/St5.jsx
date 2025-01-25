export const St5 = () => {
  const industries = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7969794c680e4c733bb48fd5912a137b5aee5f5d3a3eaa1d457717122f0d93c2?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      title: "Financial Services",
      description: "Secure skilled IT professionals to meet complex financial operations",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1f9603940fd4c837ae0f5657aaed144a00f84654935cab9625fee13beb97942?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      title: "Healthcare",
      description: "Address unique regulatory and operational needs with specialized talent",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cf0be12d3e9cb68e633c6b196401fff4cb92235f64c6407088cd0c5d84c0439?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      title: "Life Sciences",
      description: "Fill roles for QAVE, compliance and technical expertise",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b36e0dc375b5a5929c669cf4a86ca972bc5488371fdb1adf5e398a10719c5fe?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      title: "Other Industries",
      description: "Extend IT staffing solutions to any sector requiring top-tier professionals.",
    },
  ];

  function IndustryCard({ icon, title, description }) {
    return (
      <div className="flex flex-col items-center px-8 pt-9 pb-6 bg-white rounded-xl shadow-md max-md:px-5 max-md:mt-7">
        <img
          loading="lazy"
          src={icon}
          alt={`${title} icon`}
          className="object-contain aspect-square w-[78px]"
        />
        <div className="mt-4 text-lg font-medium text-zinc-800">{title}</div>
        <div className="mt-2 text-center text-base text-neutral-500">{description}</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1304px] px-6 lg:px-12 mx-auto mt-10">
      <div className="flex flex-wrap gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          >
            <IndustryCard {...industry} />
          </div>
        ))}
      </div>
    </div>
  );
};
