export const Ct1 = () => {
  return (
    <>
      <div className="relative w-full h-auto max-w-[1440px] mx-auto p-4 md:flex md:space-x-4 justify-center items-center gap-6 py-24">
        
        {/* First Section */}
        <div className="relative w-full max-w-[461px] bg-white rounded-[20px] shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#684fa3] hover:border-2 ">
          <div className="text-xl text-[#684fa3] font-bold uppercase mb-4">Business Inquiries</div>
          <div className="text-[28px] font-bold mb-6">
            Let's Connect <span className="text-[28px] font-normal">and Build Success Together</span>
          </div>
          <div className="text-[15px] font-normal mb-8">
            Whether you need IT staffing solutions, consulting, or talent for your projects, we’re here to help. Fill out the form below, and our team will be in touch shortly.
          </div>
          <div className="mb-6">
            <div className="flex justify-center lg:justify-start">
              <button className="relative overflow-hidden px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#6fd1ab] text-black text-sm sm:text-lg lg:text-xl font-medium group">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Click Here
                </span>
                <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              </button>
            </div>
          </div>
          <div className="w-full h-[200px]  mt-4">
            
            </div> {/* Image section */}
        </div>

        {/* Second Section */}
        <div className="relative w-full max-w-[461px] bg-white rounded-[20px] shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#684fa3] hover:border-2">
          <div className="text-xl text-[#684fa3] font-bold uppercase mb-4">Career Seekers</div>
          <div className="text-[28px] font-bold mb-6">
            Join Our Team <span className="text-[28px] font-normal">and Make an Impact</span>
          </div>
          <div className="text-[15px] font-normal mb-8">
            Excited to work with Trimah Technologies? Fill out the form below to submit your resume and apply for one of our open positions.
          </div>
          <div className="mb-6">
            <div className="flex justify-center lg:justify-start">
              <button className="relative overflow-hidden px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#6fd1ab] text-black text-sm sm:text-lg lg:text-xl font-medium group">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Click Here
                </span>
                <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              </button>
            </div>
          </div>
          <div className="w-full h-[200px] bg-gray-300 mt-4"></div> {/* Image section */}
        </div>
      </div>
    </>
  );
};
