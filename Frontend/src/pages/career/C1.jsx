export const C1 = () => {
  return (
    <div className="w-full min-h-[60vh] px-8 md:px-32 mt-8">
      <div className="relative w-full md:w-[1303px] h-auto md:h-[60vh] mx-auto mt-4">
        <div className="absolute left-0 sm:w-[682px] md:w-[682px] w-[100%]">
          <span className="text-[#071c39] lg:text-4xl md:text-3xl sm:text-xl text-4xl font-bold capitalize leading-tight text-center md:text-left">
            Join the <br />
            <span className="text-[#684fa3] text-4xl sm:text-4xl md:text-3xl font-extrabold capitalize leading-tight text-center md:text-left">
              Trimah Technologies Team
            </span>
          </span>
        </div>

        {/* Optimized and attractive paragraph section */}
        <div className="absolute left-0 top-[150px] md:top-[100px] md:w-[574px] w-[100%] flex items-center justify-center md:justify-start text-center">
          <p className="text-[#5a5e6a] text-base sm:text-lg md:text-xl font-normal leading-[1.7] text-center md:text-left">
            At Trimah Technologies, we are always on the lookout for talented individuals who share our passion for technology and innovation.
            <br />
            As a leading provider of IT staffing and consulting solutions, we offer career opportunities in software development, cybersecurity, DevOps, QAVE, and more.
          </p>
        </div>

        {/* Image Section */}
        <div className="absolute top-[20px] md:top-[-40px] right-0 w-[50%] md:w-[670px] h-fit flex flex-col md:flex-row mt-8 md:mt-0 md:block hidden">
          <img
            className="h- rounded-[28px] w-[60%] md:w-[245px] md:h-[316px] mx-auto md:mx-0 md:left-[400px] top-[0] md:top-[245px] -rotate-90"
            src="./career/pic1.png"
            alt="Team"
          />
          <img
            className="w-[50%] md:w-[118px] md:h-[316px] mx-auto md:mx-0 absolute md:left-[60px] top-[30px] md:top-[196px] rotate-90 rounded-[18px]"
            src="./career/pic2.png"
            alt="Tech"
          />
          <div className="absolute w-20 h-[259px] left-[10%] md:left-[390px] top-[150px] md:top-[-54px] md:w-20 md:h-[259px] -rotate-90 bg-gradient-to-t from-[#24c79b] to-white rounded-[18px]" />
          <div className="absolute w-20 h-[316px] left-[10%] md:left-[-35px] top-[340px] md:top-[509px] md:w-20 md:h-[316px] origin-top-left -rotate-90 bg-gradient-to-t from-[#24c79b] to-white rounded-[18px]" />
          <img
            className="absolute w-[60%] md:w-[245px] md:h-[316px] left-[10%] md:left-[300px] top-[150px] w-full md:w-[259px] h- rounded-[28px] "
            src="./career/pic 3.png"
            alt="Career"
          />
        </div>
      </div>
    </div>
  );
};
