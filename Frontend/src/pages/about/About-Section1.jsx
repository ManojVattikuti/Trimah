export const AboutSection1 = () => {
  
  return (
    <section className="relative  py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2 px-8">
          <div className="relative">
            <div className="w-64 h-6 -translate-y-1/2 bg-[#24c79b33] rounded-[10px]">
              <div className="text-center text-[#24c79b] text-[14px] font-semibold mt-2">
                ABOUT TRIMAH TECHNOLOGIES
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Your Success, Our Integrity</h2>
            <p className="text-lg mb-6">
              At Trimah Technologies, trust is at the heart of everything we do.
              Founded by a team of industry leaders with years of experience in Pharmaceuticals, Healthcare, Financial Services, and Life Sciences, we understand the challenges businesses face in finding the right talent.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-2">
  {[
    { title: "Pharmaceuticals", iconPath: "/about/abs1/pharma.png" },
    { title: "Healthcare", iconPath: "/about/abs1/health.png" },
    { title: "Financial Services", iconPath: "/about/abs1/finance.png" },
    { title: "Life Sciences", iconPath: "/about/abs1/lifestyle.png" },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-lg p-4 shadow-md flex items-center gap-4 hover:shadow-xl hover:bg-gray-100 transition-all rounded-[20px] duration-300"
    >
      {/* Circle with Image */}
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full ${index === 1 || index === 2 ? 'bg-green-500' : 'bg-[#684fa3]'} 
                    hover:bg-[#5f3a8e]`}
      >
        <img src={item.iconPath} alt={item.title} className="w-6 h-6" />
      </div>
      
      {/* Title */}
      <span className="text-lg font-semibold text-sm sm:text-base lg:text-lg">{item.title}</span>
    </div>
  ))}
</div>




          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
  <div className="relative w-[457px] h-[400px] md:w-[607px]">
    <img
      src="./about/1.png"
      alt="Background Image"
      className="absolute w-full h-full object-cover rounded-[20px]"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-40 h-40 bg-[#684fa366] rounded-full flex items-center justify-center animate-pulse">
        <div className="w-32 h-32 bg-[#684fa399] rounded-full flex items-center justify-center animate-pulse">
          <div className="w-24 h-24 bg-[#684fa3cc] rounded-full flex items-center justify-center">
            <img
              src="./about/play-button.png"
              alt="Play Button"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
    
  );
};
const CustomIcon = () => (
  <svg
    width="25"
    height="20"
    viewBox="0 0 25 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path d="M14.3886 11.4474L14.9137 10.9223V4.16713C14.1097 3.55351 13.11 3.25321 12.101 3.32222C11.092 3.39122 10.1425 3.82483 9.42955 4.54218L5.57898 8.41359L9.00448 11.8349C9.77081 11.262 10.6854 10.921 11.6398 10.8523C12.5941 10.7836 13.5481 10.9901 14.3886 11.4474Z" fill="white" />
    <path d="M7.06232 18.7778L7.60823 18.2277C7.10344 17.2986 6.90613 16.2334 7.04465 15.1852C7.18317 14.1369 7.65039 13.1596 8.37918 12.3935L4.99118 9.00134L1.13645 12.8519C0.39084 13.6458 -0.0165529 14.6987 0.000515465 15.7876C0.0175838 16.8766 0.457773 17.9162 1.22789 18.6863C1.99801 19.4565 3.03761 19.8967 4.12659 19.9137C5.21557 19.9308 6.26844 19.5234 7.06232 18.7778Z" fill="white" />
    <path d="M15.747 12.5356C16.4119 13.2906 16.8336 14.2286 16.957 15.2271C17.0804 16.2255 16.8998 17.238 16.4388 18.1322C16.9328 18.879 17.6542 19.4467 18.4962 19.7514C19.3381 20.0561 20.2558 20.0815 21.1133 19.8239C21.9709 19.5663 22.7226 19.0393 23.2572 18.321C23.7918 17.6028 24.0809 16.7314 24.0816 15.836V10.4186H15.747V12.5356Z" fill="white" />
    <path d="M19.9143 0C18.8091 0 17.7491 0.439051 16.9676 1.22057C16.1861 2.00208 15.747 3.06205 15.747 4.16728V9.58475H24.0816V4.16728C24.0816 3.06205 23.6425 2.00208 22.861 1.22057C22.0795 0.439051 21.0195 0 19.9143 0Z" fill="white" />
    <path d="M14.6344 12.6099C13.8345 11.9572 12.8207 11.6247 11.7895 11.6768C10.7584 11.729 9.78333 12.162 9.05328 12.8921C8.32322 13.6221 7.89016 14.5972 7.83802 15.6283C7.78588 16.6595 8.11837 17.6733 8.77106 18.4732L14.6344 12.6099Z" fill="white" />
    <path d="M9.35846 19.0609C10.1584 19.7136 11.1722 20.0461 12.2033 19.9939C13.2345 19.9418 14.2096 19.5087 14.9396 18.7787C15.6697 18.0486 16.1027 17.0735 16.1549 16.0424C16.207 15.0113 15.8745 13.9975 15.2218 13.1975L9.35846 19.0609Z" fill="white" />
  </svg>)