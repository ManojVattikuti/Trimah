import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiHelpCircle } from "react-icons/fi";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What Industries does Trimah Technologies Specialize in?",
      answer: "We specialize in Financial Services, Healthcare, Life Sciences, and Technology."
    },
    {
      question: "Can you help with Offshore Staffing?",
      answer: "Yes, we offer a wide range of offshore staffing solutions to meet your specific needs."
    },
    {
      question: "What Types of Staffing Services do you Offer?",
      answer: "We offer a variety of staffing services, including contract, contract-to-hire, and permanent placement."
    },
    {
      question: "How Do I Get Started With Trimah Technologies?",
      answer: "Contact us today for a free consultation to discuss your staffing needs."
    },
    {
      question: "How Do You Ensure Compliance In Regulated Industries?",
      answer: "Our team is experienced in navigating the compliance challenges in Healthcare and Life Sciences, ensuring that our IT solutions align with industry regulations like GDPR, SOC 2, and HIPAA."
    }
  ];

  return (
    <section className="py-16 px-6 sm:px-16 sm:py-16  mt-16 lg:px-32 bg-gray-50">
      <div className="container mx-auto">
        <h2 className=" text-2xl lg:text-4xl font-bold font-parkinsans  text-center font-bold capitalize leading-tight mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg cursor-pointer border-2 border-transparent hover:border-purple-300 transition-colors duration-300 bg-white hover:shadow-lg`}
            >
              <div
                className={`p-4 transition-colors duration-300 ${
                  activeIndex === index ? "bg-purple-100" : "bg-white"
                }`}
                onClick={() => toggleAnswer(index)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <FiHelpCircle size={20} className="text-purple-500" />
                    <h4 className="text-[#071c39] text-base sm:text-lg font-parkinsans sm:font-medium capitalize leading-tight">
                      {faq.question}
                    </h4>
                  </div>
                  <span
                    className={`transform transition-transform duration-200 ${
                      activeIndex === index ? "rotate-180 text-green-500" : "rotate-0 text-gray-600"
                    }`}
                  >
                    {activeIndex === index ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                  </span>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300`}
                style={{
                  height: activeIndex === index ? "auto" : "0",
                  padding: activeIndex === index ? "0.5rem 1rem" : "0", // Reduced padding
                }}
              >
                <p className="text-sm sm:text-base font-parkinsans text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
