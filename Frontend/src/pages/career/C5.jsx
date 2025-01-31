import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const C5 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Working at Trimah has been an amazing experience. I love the opportunities for professional growth and being part of such a talented team.",
      name: "Tim George",
      role: "Software Developer",
      img: "./career/image.png",
      color: "#684fa3",
    },
    {
      id: 2,
      text: "The leadership team truly supports your career goals and provides resources to help you succeed.",
      name: "Krishna Chaitanya",
      role: "DevOps Engineer",
      img: "./career/image1.png",
      color: "#6fd1ab",
    },
  ];

  // Auto-change testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="w-full min-h-fit py-16 flex justify-center items-center px-6 md:px-32">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold font-parkinsans capitalize leading-10">
            Employee Testimonials
          </h2>
          <p className="text-[#5a5e6a] text-sm md:text-lg mt-4 font-parkinsans leading-relaxed">
            At our company, we value the voices of our employees. Their experiences and feedback play a key role in shaping our culture and success. From collaborative teamwork to personal growth opportunities, our team members share their positive experiences of working in a dynamic, inclusive, and innovative environment. Here's what they have to say about being a part of our journey.
          </p>

          <div className="flex justify-center lg:justify-start mt-4">
            <Link to="/contact">

              <button className="relative overflow-hidden px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#6fd1ab] text-black text-[15px] font-semibold font-['Maven Pro'] group">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Apply Now
                </span>
                <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3]  rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-8 md:space-y-0">
          {/* Carousel for Mobile */}
          <div className="md:hidden">
            <div
              className="flex bg-white shadow-lg rounded-lg p-6 items-center transform transition duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ borderLeft: `4px solid ${testimonials[currentTestimonial].color}` }}
            >
              <img
                className="w-[80px] h-[80px] rounded-full mx-4"
                src={testimonials[currentTestimonial].img}
                alt={testimonials[currentTestimonial].name}
              />
              <div>
                <p className="text-[#2b2b2b] text-sm md:text-base font-semibold capitalize font-abel leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
                <p className="text-[#684fa3] text-sm mt-2 italic">
                  - {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </div>

          {/* Grid for Desktop */}
          <div className="hidden md:grid grid-cols-1 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex bg-white shadow-lg rounded-lg p-6 items-center transform transition duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ borderLeft: `4px solid ${testimonial.color}` }}
              >
                <img
                  className="w-[80px] h-[80px] rounded-full mx-4"
                  src={testimonial.img}
                  alt={testimonial.name}
                />
                <div>
                  <p className="text-[#2b2b2b] text-sm md:text-base font-semibold font-abel capitalize leading-relaxed">
                    {testimonial.text}
                  </p>
                  <p className="text-[#684fa3] text-sm mt-2 italic">
                    - {testimonial.name}, {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
