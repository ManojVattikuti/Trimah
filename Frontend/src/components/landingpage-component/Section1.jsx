import React from 'react';

const Section1 = () => {
  return (
    <div className="px-8 sm:px-8 lg:px-32 sm:py-24 lg:py-32">
      <section className="relative bg-violet-900   h-[300px] sm:h-[300px] flex items-start justify-center rounded-[25px]">
        {/* Background Image */}
        <img
          src="/Frames.png"
          alt="Background Image"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        />

        {/* Main Content */}
        <div className="text-white z-10 px-8 py-8 w-full  space-y-4">
          <h1 className="text-white text-3xl sm:text-2xl font-bold capitalize leading-8 sm:leading-10">Join a Team that Makes a Difference</h1>
          <p className="text-white/80  lg:text-lg  sm:text-xs font-medium capitalize leading-6 sm:leading-[20.78px">
            Our Leadership Team, with years of Experience in IT <br/>Healthcare and Pharmaceuticals, 
            Understands the <br/>Challenges of Finding Top-Tier Talent and Delivering IT Solutions.
          </p>
          <div className="flex justify-center lg:justify-start">
  <button className="relative overflow-hidden px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#6fd1ab] text-black text-sm sm:text-lg lg:text-xl font-medium group">
    <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
      Find Your Next Role →
    </span>
    <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
  </button>
</div>

        </div>

        {/* Overlapping Image on the Right */}
        <div className="absolute right-0 top-1/2 transform lg:-translate-y-[67%] sm:-translate-y-[50%] md:-translate-y-[50%] sm:-translate-y-[80%]  -translate-x-[10%] z-0">
  <img
    src="./persons.png" // Replace with your image URL
    alt="Right Image"
    className="w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] lg:w-[650px] lg:h-[450px] object-cover rounded-lg"
  />
</div>


      </section>
    </div>
  );
};

export default Section1;
