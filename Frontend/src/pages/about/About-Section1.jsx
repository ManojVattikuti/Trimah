export const AboutSection1 = () => {
  return (
    <section className="relative py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full px-8 mb-8 lg:mb-0">
          <div className="relative">
            <div className="flex w-full justify-center lg:justify-start">
              <div className="w-64 h-6 bg-[#24c79b33] rounded-[10px] flex items-center justify-center md:ml-4 sm:ml-4 p-2 mb-2">
                <div className="text-center text-[#24c79b] text-[14px] font-semibold font-parkinsans">
                  ABOUT TRIMAH TECHNOLOGIES
                </div>
              </div>
            </div>


            <h2 className="lg:text-4xl font-bold font-parkinsans mb-4 text-center text-3xl sm:text-3xl lg:text-left">Your Success, Our Integrity</h2>
            <p className="text-sm sm:text-base lg:text-lg mb-8 font-parkinsans text-gray-500 mb-6 text-center lg:text-left">
              At Trimah Technologies, trust is at the heart of everything we do.
              Founded by a team of industry leaders with years of experience in Pharmaceuticals, Healthcare, Financial Services, and Life Sciences, we understand the challenges businesses face in finding the right talent.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 font-parkinsans gap-4 mb-2">
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
                    <img src={item.iconPath} alt={item.title} className="w-6 h-6 " />
                  </div>

                  {/* Title */}
                  <span className="text-lg font-semibold text-sm sm:text-base lg:text-lg">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full">
          <div className="relative w-full h-[400px] md:w-[607px] mx-auto  overflow-hidden group">
          <img
    src="./about/1.png"
    alt="Background Image"
    className="absolute w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
  />
  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500"></div>
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

