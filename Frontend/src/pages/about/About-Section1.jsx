export const AboutSection1 = () => {
    return (
        <section className="relative bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">

        <div className="lg:w-1/2 px-8">
          <div className="relative">
            <div className="  left-0 w-64 h-6 -translate-y-1/2  bg-[#24c79b33] rounded-[10px]">
              <div className="  left-1/2 transform -translate-x-50%  -translate-y-60%  text-center text-[#24c79b] text-[14px] font-semibold mt-2">
                ABOUT TRIMAH TECHNOLOGIES
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Your Success, Our Integrity</h2>
            <p className="text-lg mb-6">
              At Trimah Technologies, trust is at the heart of everything we do. Founded by a team of industry leaders with years of experience in Pharmaceuticals, Healthcare, Financial Services, and Life Sciences, we understand the challenges businesses face in finding the right talent. Having managed hiring and IT operations for major organizations, we’ve seen firsthand the importance of reliable partnerships—and we built Trimah Technologies to be just that.
            </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
                  <span className="text-xl font-semibold ">Pharmaceuticals</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2.25m0 4.15c0 .112.01.224.025.337A10.493 10.493 0 0012 21c-4.782 0-8.68-3.505-8.68-7.745A11.54 11.54 0 0112 4.15z" />
                  </svg>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
                  <span className="text-xl font-semibold">Healthcare</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2.25m0 4.15c0 .112.01.224.025.337A10.493 10.493 0 0012 21c-4.782 0-8.68-3.505-8.68-7.745A11.54 11.54 0 0112 4.15z" />
                  </svg>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
                  <span className="text-xl font-semibold">Financial Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2.25m0 4.15c0 .112.01.224.025.337A10.493 10.493 0 0012 21c-4.782 0-8.68-3.505-8.68-7.745A11.54 11.54 0 0112 4.15z" />
                  </svg>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
                  <span className="text-xl font-semibold">Life Sciences</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2.25m0 4.15c0 .112.01.224.025.337A10.493 10.493 0 0012 21c-4.782 0-8.68-3.505-8.68-7.745A11.54 11.54 0 0112 4.15z" />
                  </svg>
                </div>
              </div>
            </div>
          </div> 
          
          <div className="lg:w-1/2"> 
            <div className="relative w-[657px] h-[500px]">
              <img 
                src="./about/1.png" 
                alt="Background Image" 
                className="absolute w-full h-full object-cover" 
              /> 
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> 
                <div className="w-40 h-40 bg-[#684fa366] rounded-full">
                  <div className="w-32 h-32 bg-[#684fa399] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-24 bg-[#684fa3cc] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <img 
                        src="./about/play-button.png" 
                        alt="Play Button" 
                        className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
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
