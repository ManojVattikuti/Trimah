export const St6 = () => {
  const featureItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f228e9b6351bc5d68a00f88095033cccfdf0b242da437742946ca021f47d8a18?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      title: "Core Values",
      description: "Trust, excellence, and partnership define our staffing approach",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e0c8f602223111e69c8d96fe04761da275c857032f2593c6981f05b64167486?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      title: "Leadership Experience",
      description: "Our team has firsthand knowledge of hiring challenges and solutions in key industries.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8ddf48cec75aa5f0d9fbb7eabdcec286c2ad8c96ed0eecc0b0b44bd2f1724b8?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
      title: "Scalable Solutions",
      description: "Adaptable staffing models to fit your changing needs.",
    },
  ];

  function FeatureItem({ icon, title, description }) {
    return (
      <div className="mt-6">
        <div className="flex gap-3 items-start">
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="w-6 h-6 shrink-0"
          />
          <div className="text-lg font-semibold text-gray-800">{title}</div>
        </div>
        <div className="mt-2 text-base text-gray-600 leading-6">
          {description}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 px-5 py-4 w-full max-w-[1283px] mx-auto max-md:mt-10">
      <div className="flex gap-10 max-md:flex-col">
        {/* Left Section */}
        <div className="flex flex-col w-[37%] max-md:w-full">
          <div className="text-3xl font-bold text-slate-900 mb-6">
            What Sets Us Apart
          </div>
          {featureItems.map((item, index) => (
            <FeatureItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-[63%] max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef6e505d12d4aa4359b7be237635a47f386b9a9fa824d709848598c967089f11?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
            alt="Company features illustration"
            className="w-full rounded-lg object-contain aspect-[1.26]"
          />
        </div>
      </div>
    </div>
  );
};
