import { FiArrowRight } from "react-icons/fi";
import SplitText from "./splittext";
import { Link } from "react-router-dom";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Title animation completed!");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
    
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="../video1.gif"
          alt="Background Animation"
        />
      </div>


      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 space-y-8 max-w-screen-xl mx-auto">
        {/* IT Consulting Services */}
        <div className="hover:bg-green-300  hover:text-black text-white text-center text-[15px]  px-6 py-2 font-parkinsans w-[250px] h-8 bg-white/20 rounded-[14px] transition capitalize leading-tight">
          IT CONSULTING SERVICES
        </div>

        {/* Heading */}
        <div className="text-center ml-4">
          <SplitText
            text="Your Success , Our Integrity IT Talent & Consulting,Redefined
        "
            className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight"
            delay={50}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,20px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
        {/* Subheading */}
        <p className="text-md sm:text-2xl lg:text-xl text-gray-400 font-abel font-parkinsans sm:px-40">
          Empowering Financial, Healthcare, Life Sciences Industries and <br /> Beyond
          with Skilled IT Professionals & Innovative Solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Button 1 */}
          <div className="relative inline-block overflow-hidden rounded-full shadow-md">
            <Link to="/contact?popup=1">
              <button className="relative flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#6fd1ab] text-black text-[14px] sm:text-[15px] font-semibold font-parkinsans  group">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Find Your Next Hire
                </span>
                <FiArrowRight className="ml-2 relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out" />
                <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              </button>
            </Link>
          </div>

          {/* Button 2 */}
          <div className="relative inline-block overflow-hidden rounded-full shadow-md">
            <Link to="/career">

              <button className="relative flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-[87px] bg-[#684fa3] text-white text-[14px] sm:text-[15px] font-semibold font-parkinsans  group">
                <span className="relative z-10 group-hover:text-black transition-colors duration-300 ease-in-out">
                  Career Opportunities
                </span>
                <FiArrowRight className="ml-2 relative z-10 group-hover:text-black transition-colors duration-300 ease-in-out" />
                <div className="absolute top-0 left-0 w-full h-full bg-green-300 bg-opacity-70 rounded-[87px] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              </button>
            </Link>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Hero;
