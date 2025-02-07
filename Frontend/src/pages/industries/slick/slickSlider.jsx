import React, { useEffect } from "react";
import "./sliderStyles.css";
import $ from "jquery";
import "slick-carousel";

const SlickSlider = () => {
  useEffect(() => {
    const slider = $(".slider");

    slider.slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      vertical: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
    });

    function doAnimations(elements) {
      const animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

      elements.each(function () {
        var $this = $(this);
        var animationType = "animated " + $this.data("animation");
        var animationDelay = $this.data("delay") || "0s";

        $this.css({
          "animation-delay": animationDelay,
          "-webkit-animation-delay": animationDelay,
        });

        $this.addClass(animationType).one(animationEndEvents, function () {
          $this.removeClass(animationType);
        });
      });
    }

    slider.on("init", function () {
      var $firstAnimatingElements = $(".slick-active").find("[data-animation]");
      doAnimations($firstAnimatingElements);
    });

    slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var $animatingElements = $( 
        '.slick-slide[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    });

    return () => {
      slider.slick("unslick");
    };
  }, []);

  return (
    <div className="slider">
      {/* Slide 1 - Financial Services */}
      <div className="slick-slide relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col 
          lg:items-start lg:pl-16 lg:text-left  /* Left-aligned for large screens */
          md:items-center md:text-center md:px-10 /* Centered for medium screens */
          items-center text-center px-6 py-10"> {/* Default: Centered */}
          <h1
            data-animation="fadeInDown"
            data-delay="0.3s"
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold"
          >
            Financial Services
          </h1>
          <p className="text-sm sm:text-lg font-semibold mt-4">Challenges We Solve:</p>
          <ul className="mt-2 text-sm sm:text-base">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✅</span> Regulatory compliance & data security
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✅</span> Operational scalability
            </li>
          </ul>
        </div>
        <img
          src="https://bit.ly/2Irdksl"
          alt="Financial Services"
          className="slider-image w-full h-screen object-cover"
        />
      </div>

      {/* Slide 2 - Healthcare */}
      <div className="slick-slide relative">
        <div className="absolute top-0 right-0 left-0 bottom-0 z-10 flex flex-col
          lg:items-end lg:pr-16 lg:text-right /* Right-aligned for large screens */
          md:items-center md:text-center md:px-10 /* Centered for medium screens */
          items-center text-center px-6 py-10"> {/* Default: Centered */}
          <h1
            data-animation="fadeInDown"
            data-delay="0.4s"
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold"
          >
            Healthcare
          </h1>
          <p className="text-sm font-semibold mt-4">Challenges We Solve:</p>
          <ul className="mt-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✅</span> HIPAA compliance & data security
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✅</span> Patient data management
            </li>
          </ul>
        </div>
        <img src="https://bit.ly/2jY4fwy" alt="Healthcare" className="slider-image w-full h-screen object-cover" />
      </div>
    </div>
  );
};

export default SlickSlider;
