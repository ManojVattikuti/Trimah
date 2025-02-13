import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSection3 = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Adjust the screen size breakpoint as needed
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="container mx-auto py-16 px-8">
      <div className="w-full max-w-[1240px] mx-auto">
        <h2 className="lg:text-4xl font-bold font-parkinsans text-[#071c39]  text-3xl sm:text-3xl text-center mb-4">Our Core Values</h2>


        {isMobile ? (
          <Slider {...settings}>
            {/* Trust Value */}
            <div className="p-4 text-center">
              <div className="mb-4">
                <img
                  src="/about/abs3/abs3-1.png"
                  alt="Trust"
                  className="w-34 h-34 mx-auto group-hover:bg-[#f4f4f4] group-hover:p-2 transition-all"
                />
              </div>
              <h4 className="font-semibold font-parkinsans  text-[#071c39] text-lg mb-2">Trust</h4>
              <p className="text-[#071c39] font-parkinsans  text-sm">
                Building transparent, reliable relationships with our clients and talent.
              </p>
            </div>

            {/* Excellence Value */}
            <div className="p-4 text-center">
              <div className="mb-4">
                <img
                  src="/about/abs3/abs3-2.png"
                  alt="Excellence"
                  className="w-34 h-34 mx-auto group-hover:bg-[#f4f4f4] group-hover:p-2 transition-all"
                />
              </div>
              <h4 className="font-semibold text-[#071c39] font-parkinsans  text-lg mb-2">Excellence</h4>
              <p className="text-[#071c39] font-parkinsans  text-sm">
                Delivering results that exceed expectations.
              </p>
            </div>

            {/* Innovation Value */}
            <div className="p-4 text-center">
              <div className="mb-4">
                <img
                  src="/about/abs3/abs3-4.png"
                  alt="Innovation"
                  className="w-34 h-34 mx-auto group-hover:bg-[#f4f4f4] group-hover:p-2 transition-all"
                />
              </div>
              <h4 className="font-semibold text-[#071c39] text-lg mb-2 font-parkinsans ">Innovation</h4>
              <p className="text-[#071c39] text-sm font-parkinsans ">
                Leveraging the latest technologies to solve industry challenges.
              </p>
            </div>

            {/* Partnership Value */}
            <div className="p-4 text-center">
              <div className="mb-4">
                <img
                  src="/about/abs3/abs3-3.png"
                  alt="Partnership"
                  className="w-34 h-34 mx-auto group-hover:bg-[#f4f4f4] group-hover:p-2 transition-all"
                />
              </div>
              <h4 className="font-semibold text-[#071c39] text-lg mb-2 font-parkinsans ">Partnership</h4>
              <p className="text-[#071c39] text-sm font-parkinsans ">
                Collaborating closely to achieve shared goals.
              </p>
            </div>
          </Slider>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {/* Trust Value */}
            <div className="p-4 text-center lg:mt-4">
              <div className="mb-4">
                <img
                  src="/about/abs3/abs3-1.png"
                  alt="Trust"
                  className="w-34 h-34 mx-auto"
                />
              </div>
              <h4 className="font-semibold text-[#071c39] text-lg mb-2 font-parkinsans ">Trust</h4>
              <p className="text-[#071c39] text-sm font-parkinsans ">
                Building transparent, reliable relationships with our clients and talent.
              </p>
            </div>

            {/* Excellence Value */}
            <div className="p-4 text-center">
              <div className="mb-4">
                <img
                  src="/about/abs3/abs3-2.png"
                  alt="Excellence"
                  className="w-34 h-34 mx-auto"
                />
              </div>
              <h4 className="font-semibold text-[#071c39] text-lg mb-2 font-parkinsans ">Excellence</h4>
              <p className="text-[#071c39] text-sm font-parkinsans ">
                Delivering results that exceed expectations.
              </p>
            </div>

            {/* Innovation Value */}
            <div className="p-4 text-center">
              <div className="mb-4">
                <img
                  src="/about/abs3/abs3-4.png"
                  alt="Innovation"
                  className="w-34 h-34 mx-auto"
                />
              </div>
              <h4 className="font-semibold text-[#071c39] text-lg mb-2 font-parkinsans ">Innovation</h4>
              <p className="text-[#071c39] text-sm font-parkinsans ">
                Leveraging the latest technologies to solve industry challenges.
              </p>
            </div>

            {/* Partnership Value */}
            <div className="p-4 text-center">
              <div className="mb-4">
                <img
                  src="/about/abs3/abs3-3.png"
                  alt="Partnership"
                  className="w-34 h-34 mx-auto"
                />
              </div>
              <h4 className="font-semibold text-[#071c39] text-lg mb-2 font-parkinsans ">Partnership</h4>
              <p className="text-[#071c39] text-sm font-parkinsans ">
                Collaborating closely to achieve shared goals.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection3;
