import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import debounce from "lodash.debounce";
import { useLocation } from "react-router-dom";

export const S2 = () => {
  const sections = [
    {
      title: "Financial Services",
      challenges: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c896a956619593a96ba59f4a73896a12fc532589acf964feb822837fc4c5f1",
          text: "Regulatory compliance, data security, and operational scalability",
        },
      ],
      services: [
        "Software developers for secure financial applications.",
        "Cloud and cybersecurity solutions",
      ],
      image:
        "./industry/finance.webp",
    },
    {
      title: "Health care",
      challenges: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c896a956619593a96ba59f4a73896a12fc532589acf964feb822837fc4c5f1",
          text: "Ensuring HIPAA compliance and enhancing patient data management",
        },
      ],
      services: [
        "IT consulting for digital transformation and secure operations.",
        "Full-time and contract staffing for healthcare IT roles.",
      ],
      image:
        "./industry/health.jpg",
    },
    {
      title: "Retail And E-commerce",
      challenges: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c896a956619593a96ba59f4a73896a12fc532589acf964feb822837fc4c5f1",
          text: "Supply chain optimization and enhancing customer experiences.",
        },
      ],
      services: [
        "IT solutions for inventory management, POS systems, and digital platforms.",
       
      ],
      image:
        "./industry/Retail.jpg",
    },
    {
      title: "Life Science And Pharmaceuticals",
      challenges: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c896a956619593a96ba59f4a73896a12fc532589acf964feb822837fc4c5f1",
          text: "Quality Assurance Validation Engineering (QAVE) and regulatory compliance.",
        },
      ],
      services: [
        "QAVE experts and regulatory consultants for seamless validation processes.",
      ],
      image:
        "./industry/life.png",
    },
    {
      title: "Oil And Gas",
      challenges: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c896a956619593a96ba59f4a73896a12fc532589acf964feb822837fc4c5f1",
          text: "Complex asset management and operational efficiency.",
        },
      ],
      services: [
        "IT solutions for monitoring, data analytics, and automation in operations.",
      ],
      image:
        "./industry/oil.jpg",
    },
    {
      title: "Technology And Startups",
      challenges: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c896a956619593a96ba59f4a73896a12fc532589acf964feb822837fc4c5f1",
          text: "Scaling development teams and securing infrastructure.",
        },
      ],
      services: [
        "DevOps consulting, software developers, and cybersecurity experts.",
      ],
      image:
        "./industry/startup.jpg",
    },
    {
      title: "Education",
      challenges: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c896a956619593a96ba59f4a73896a12fc532589acf964feb822837fc4c5f1",
          text: "Digital transformation in learning management systems and data privacy.",
        },
      ],
      services: [
        "IT consultants for implementing EdTech platforms and secure systems.",
      ],
      image:
        "./industry/education.jpeg",
    },
    {
      title: "Manufacturing",
      challenges: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c896a956619593a96ba59f4a73896a12fc532589acf964feb822837fc4c5f1",
          text: "Integrating IoT, managing supply chains, and optimizing operations.",
        },
      ],
      services: [
        "IT professionals for ERP integration, IoT implementation, and analytics.",
      ],
      image:
        "./industry/manufacturing.jpg",
    },
    {
      title: "Logistics And Transportation",
      challenges: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c896a956619593a96ba59f4a73896a12fc532589acf964feb822837fc4c5f1",
          text: "Real-time tracking, route optimization, and efficient supply chain management.",
        },
      ],
      services: [
        "IT solutions for fleet management, data analytics, and mobile applications.",
      ],
      image:
        "./industry/logistics.webp",
    },
    {
      title:"Energy And Utilities",
      challenges: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c896a956619593a96ba59f4a73896a12fc532589acf964feb822837fc4c5f1",
          text: "Infrastructure modernization and smart grid technologies.",
        },
      ],
      services: [
        "IT experts for energy analytics, automation, and cybersecurity.",
      ],
      image:
        "./industry/energy.jpg",
    },
    {
      title: "Hospitality",
      challenges: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c896a956619593a96ba59f4a73896a12fc532589acf964feb822837fc4c5f1",
          text: "Enhancing guest experiences and streamlining operations.",
        },
      ],
      services: [
        "IT consulting for PMS (Property Management Systems) and digital platforms.",
      ],
      image:
        "./industry/hospitality.jpg",
    },
  ];

  const sectionRefs = useRef([]);


  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialIndex = query.get("section") ? sections.findIndex((s) => s.title === query.get("section")) : 0;
console.log(initialIndex);

  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    if (sectionRefs.current[currentIndex]) {
      sectionRefs.current[currentIndex].scrollIntoView({ behavior: "smooth" });
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("down");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const changeIndex = useCallback(
    debounce((scrollDirection) => {
      setDirection(scrollDirection > 0 ? "down" : "up");
      setCurrentIndex((prevIndex) => {
        let newIndex = prevIndex + (scrollDirection > 0 ? 1 : -1);
        if (newIndex < 0) newIndex = sections.length - 1;
        if (newIndex >= sections.length) newIndex = 0;
        return newIndex;
      });
    }, 200),
    []
  );

  const handleScroll = (e) => {
    e.preventDefault();
    changeIndex(e.deltaY);
  };

  

  return (
    <div className="py-8 sm:py-24 relative" id="scroller">
      <div className="text-2xl sm:text-3xl font-bold font-parkinsans text- px-8 lg:ml-28">
        Industries We Specialize In
      </div>

      <div
        className="relative mt-8 flex items-center justify-center h-screen sm:h-[80vh] overflow-hidden"
        onWheel={handleScroll}
      >
        {/* Fixed Background */}
        <div className="absolute inset-0 bg-violet-500 rounded-lg w-full max-h-[750px] max-w-[1200px] mx-auto" />

        {/* Left Side Dots */}
        <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 sm:space-y-3">
  {sections.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentIndex(index)}
      className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 focus:outline-none active:scale-110 ${
        currentIndex === index ? "bg-white" : "bg-gray-400"
      }`}
    />
  ))}
</div>



        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: direction === "down" ? 50 : -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction === "down" ? -50 : 50 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative z-10 flex flex-col md:flex-row items-center px-8 sm:px-16 text-white w-full max-w-[1200px]"
          >
            {/* Left Section - Content */}
            <div className="flex flex-col w-full md:w-6/12 text-center md:text-left">
              <div className="text-3xl font-parkinsans font-bold">{sections[currentIndex].title}</div>
              <div className="h-1 w-[146px] bg-purple-400 mt-2 mx-auto md:mx-0"></div>

              <div className="mt-6 text-lg  font-parkinsans sm:text-xl">Challenges We Solve</div>
              {sections[currentIndex].challenges.map((challenge, index) => (
                <div key={index} className="flex items-center mt-3 text-md  font-parkinsans sm:text-lg">
                <img 
  src={challenge.icon} 
  alt="icon" 
  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-2 object-contain"
/>

                  {challenge.text}
                </div>
              ))}

              <div className="mt-6 text-lg  font-parkinsans sm:text-xl">Services Offered</div>
              <div className="mt-3 text-md sm:text-lg  font-parkinsans text-white text-opacity-80">
                {sections[currentIndex].services.map((service, index) => (
                  <React.Fragment key={index}>
                    {service}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="flex w-full md:w-6/12 justify-center md:justify-end mt-6 md:mt-0">
  <img
    src={sections[currentIndex].image}
    alt={sections[currentIndex].title}
    className="w-full max-w-md md:max-w-lg object-contain rounded-lg shadow-lg 
               transition-transform duration-300 hover:scale-105 hover:shadow-xl"
  />
</div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
