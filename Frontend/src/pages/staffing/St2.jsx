export const St2 = () => {
  const staffingData = [
    {
      title: "Trust and Partnership",
      description:
        "We are your reliable partner in finding skilled professionals who fit your business needs",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/25cead6ea824b33fc1f30ad4570ebd8d8bde561b31610bc3f1005a2d39aa8098?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
    },
    {
      title: "Tailored Solutions",
      description:
        "We customize staffing plans to align with your project goals and organizational culture",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/32a68c2bec64158c3f3f6731aa0c899a2601bf7edb656d9aad1a88ccf229d07d?",
    },
    {
      title: "Industry Expertise",
      description: "Our deep understanding of IT, financial, healthcare, and life sciences industries ensures top-tier talent placement",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ec074a4ae0117755fcfe64ee102e2942beb28fc55ff43879c49a99dbed0c96d?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
    }
  ];

  function StaffingCard({ title, description, imageSrc }) {
    return (
      <div className="relative flex flex-col items-start p-4 rounded-lg rounded-[60px] bg-purple-100 max-w-sm h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col justify-between h-full">
        <div className="text-xl font-bold font-parkinsans text-slate-500 transition-all duration-300 hover:text-purple-700">{title}</div>
        <div className="mt-2 font-parkinsans leading-6 text-gray-500 flex-grow transition-all duration-300 hover:text-gray-700">{description}</div>
        {imageSrc && (
          <img
            loading="lazy"
            src={imageSrc}
            alt=""
            className="self-center mt-4 w-[250px] h-[250px] object-contain transform transition-all duration-300 hover:scale-105"
          />
        )}
      </div>
    </div>
    
    );
  }

  return (
    <div className="lg:px-32 px-8"> 
      <div className="mt-16 text-2xl leading-8 font-semibold font-parkinsans max-w-sm">
        Why Choose Trimah Technologies <span className="lowercase">for</span> Staffing
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {staffingData.map((card, index) => (
          <StaffingCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default St2;
