import { useState } from "react";
import { FiUpload } from "react-icons/fi";

export const Ct1 = () => {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const [formData1, setFormData1] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    message: "",
  });

  const [formData2, setFormData2] = useState({
    name: "",
    email: "",
    position: "",
    cv: null,
    coverLetter: "",
  });

  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log("Business Inquiry Form Submitted", formData1);
    handleClosePopup1();
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log("Career Seeker Form Submitted", formData2);
    handleClosePopup();
  };

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange2 = (e) => {
    setFormData2((prevData) => ({
      ...prevData,
      cv: e.target.files[0],
    }));
  };

  const handleOpenPopup = () => setShowPopup2(true);
  const handleClosePopup = () => setShowPopup2(false);

  const handleOpenPopup1 = () => setShowPopup1(true);
  const handleClosePopup1 = () => setShowPopup1(false);

  return (
    <div className="relative w-full h-auto max-w-[1440px] mx-auto p-4 flex flex-col md:flex-row md:space-x-4 justify-center items-center gap-6 py-24">
      {/* First Section */}
      <div className="relative w-full max-w-[461px] bg-white rounded-[20px] shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#684fa3] hover:border-2">
        <div className="text-xl text-[#684fa3] font-bold uppercase mb-4">
          Business Inquiries
        </div>
        <div className="text-[24px] md:text-[28px] font-bold mb-6">
          Let's Connect{" "}
          <span className="text-[24px] md:text-[28px] font-normal">
            and Build Success Together
          </span>
        </div>
        <div className="text-[14px] md:text-[15px] font-gilroybold mb-8">
          Whether you need IT staffing solutions, consulting, or talent for your
          projects, we’re here to help. Fill out the form below, and our team
          will be in touch shortly.
        </div>
        <div className="mb-6">
          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleOpenPopup1}
              className="relative overflow-hidden px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#6fd1ab] text-black text-sm sm:text-lg lg:text-xl font-medium group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                Click Here →
              </span>
              <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
            </button>
          </div>
        </div>
        <div className="w-full h-auto mt-6  flex justify-center">
          <img
            src="./contact/Frame.png"
            alt="frame"
            className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] object-contain"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="relative w-full max-w-[461px] bg-white rounded-[20px] shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#684fa3] hover:border-2">
        <div className="text-xl text-[#684fa3] font-bold uppercase mb-4">
          Career Seekers
        </div>
        <div className="text-[24px] md:text-[28px] font-bold mb-6">
          Join Our Team{" "}
          <span className="text-[24px] md:text-[28px] font-normal">
            and Make an Impact
          </span>
        </div>
        <div className="text-[14px] md:text-[15px] font-normal mb-8">
          Excited to work with Trimah Technologies? Fill out the form below to
          submit your resume and apply for one of our open positions.
        </div>
        <div className="mb-6">
          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleOpenPopup}
              className="relative overflow-hidden px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#6fd1ab] text-black text-sm sm:text-lg lg:text-xl font-medium group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                Click Here →
              </span>
              <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
            </button>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center">
          <img
            src="./contact/f2.png"
            alt="frame"
            className="w-[150px] h-[200px] sm:w-[200px] sm:h-[250px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[200px] object-contain"
          />
        </div>
      </div>

      {/* Popups */}
      {showPopup1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-[900px] rounded-xl shadow-lg p-8 relative">
            {/* Close Button */}
            <button
              onClick={handleClosePopup1}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image Column */}
              <div className="flex-1 flex justify-center items-center">
                <img
                  src="./contact/form1.png" // Replace with your actual image path
                  alt="Popup"
                  className="w-full h-auto max-w-[400px] object-cover rounded-md"
                />
              </div>

              {/* Form Column */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-[#684fa3]">
                  Business Enquiries Contact Form
                </h2>
                <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit1}>
                  {/* Full Name */}
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData1.fullName}
                      onChange={handleInputChange1}
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#684fa3] bg-[#f9f9ff]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData1.email}
                      onChange={handleInputChange1}
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#684fa3] bg-[#f9f9ff]"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData1.companyName}
                      onChange={handleInputChange1}
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#684fa3] bg-[#f9f9ff]"
                      placeholder="Enter your company name"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData1.phone}
                      onChange={handleInputChange1}
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#684fa3] bg-[#f9f9ff]"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Message */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData1.message}
                      onChange={handleInputChange1}
                      rows="4"
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#684fa3] bg-[#f9f9ff]"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <div className="col-span-2 flex justify-center">
                    <button
                      type="submit"
                      className="mt-4 px-6 py-3 bg-[#684fa3] text-white rounded-lg shadow-md hover:bg-[#3f3c8c] transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Career Seeker Popup */}
      {showPopup2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-[900px] rounded-xl shadow-lg p-8 relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex justify-center items-center">
                <img
                  src="./contact/form2.png" // Replace with your actual image path
                  alt="Career Seeker"
                  className="w-full h-auto max-w-[400px] object-cover rounded-md"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-[#684fa3]">
                  Career Seeker Form
                </h2>
                <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit2}>
                  {/* Name */}
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData2.name}
                      onChange={handleInputChange2}
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#684fa3] bg-[#f9f9ff]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData2.email}
                      onChange={handleInputChange2}
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#684fa3] bg-[#f9f9ff]"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Position */}
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Position
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData2.position}
                      onChange={handleInputChange2}
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#684fa3] bg-[#f9f9ff]"
                      placeholder="Position you're applying for"
                    />
                  </div>

                  {/* CV */}
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Upload CV
                    </label>
                    <input
                      type="file"
                      name="cv"
                      onChange={handleFileChange2}
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#684fa3] bg-[#f9f9ff]"
                    />
                  </div>

                  {/* Cover Letter */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Cover Letter
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData2.coverLetter}
                      onChange={handleInputChange2}
                      rows="4"
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#684fa3] bg-[#f9f9ff]"
                      placeholder="Write your cover letter"
                    ></textarea>
                  </div>

                  <div className="col-span-2 flex justify-center">
                    <button
                      type="submit"
                      className="mt-4 px-6 py-3 bg-[#684fa3] text-white rounded-lg shadow-md hover:bg-[#3f3c8c] transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
