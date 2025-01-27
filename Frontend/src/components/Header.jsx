import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { mainContext } from "../context/mainContex";
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons
import {Dropdown} from "./DropDown";
const Header = () => {
  const { user, setToken, signOut } = useContext(mainContext); // Include signOut for logout
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Listen for clicks outside of the dropdown
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide header on scroll down
      } else {
        setIsVisible(true); // Show header on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = () => {
    signOut();
    setToken(""); // Clear the token
    navigate("/login"); // Redirect to login page after logout
  };

  const isLoggedIn = Boolean(user?.username);

  return (
    <header
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed z-50 top-0 left-0 w-full py-2 transition-transform duration-300`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-600">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <div className="w-[165.29px] h-[46px] relative">
              <img
                src="/TRIMAH - logos/TRIMAH-reversed-all-white-logo.png"
                alt="TrimahTech Logo"
                className="h-12 w-auto absolute left-[20.33px] top-0"
              />
            </div>
          </NavLink>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
          <NavLink
  to="/"
  className={({ isActive }) =>
    `text-[15px] font-semibold transition-colors duration-300 font-parkinsans ${
      isActive
        ? "text-green-500 font-bold" // Active state: green color and bold
        : "text-white hover:text-green"
    }`
  }
>
  HOME
</NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-[15px] font-semibold transition-colors duration-300 font-parkinsans ${
                  isActive
                    ? "text-green-500 font-bold" // Active state: green color and bold
                    : "text-white hover:text-green"
                }`
              }
            >
              ABOUT US
            </NavLink>
            <div className="relative group">
      <NavLink
        to="/business"
        className={({ isActive }) =>
          `text-[15px] font-semibold transition-colors duration-300 font-parkinsans ${
            isActive
              ? "text-green-500 font-bold" // Active state: green color and bold
              : "text-white hover:text-green"
          }`
        }
        onClick={() => setIsDropdownOpen((prev) => !prev)} // Toggle dropdown visibility on click
      >
        BUSINESS
      </NavLink>
      {isDropdownOpen && (
        <div
          className="absolute top-full left-0"
          ref={dropdownRef}
        >
          <Dropdown />
        </div>
      )}
    </div>

            <NavLink
              to="/career"
              className={({ isActive }) =>
                `text-[15px] font-semibold transition-colors duration-300 font-parkinsans ${
                  isActive
                    ? "text-green-500 font-bold" // Active state: green color and bold
                    : "text-white hover:text-green"
                }`
              }
            >
              CAREER SEEKER
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-[15px] font-semibold transition-colors duration-300 font-parkinsans ${
                  isActive
                    ? "text-green-500 font-bold" // Active state: green color and bold
                    : "text-white hover:text-green"
                }`
              }
            >
              CONTACT US
            </NavLink>
          </nav>

          {/* Desktop "Find Talent" Button */}
          <div className="hidden lg:flex items-center space-x-4">
            
  <button className="relative overflow-hidden sm:px-4 sm:py-2 rounded-full bg-[#6fd1ab] text-black text-sm sm:text-lg lg:text-sm font-parkinsans font-semibold group">
    <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
      Find Your Talent
    </span>
    <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
  </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
  className={`${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  } fixed inset-0 bg-black h-screen bg-opacity-90 z-40 flex flex-col items-center space-y-6 py-12 transition-transform duration-300`}
>
  <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white bg-black">
    <FaTimes size={24} />
  </button>
  <NavLink
    to="/"
    className="text-white text-[18px] font-semibold font-parkinsans"
    onClick={() => setMenuOpen(false)}
  >
    HOME
  </NavLink>
  <NavLink
    to="/about"
    className="text-white text-[18px] font-semibold font-parkinsans"
    onClick={() => setMenuOpen(false)}
  >
    ABOUT US
  </NavLink>
  <NavLink
    to="/business"
    className="text-white text-[18px] font-semibold font-parkinsans"
    onClick={() => setMenuOpen(false)}
  >
    BUSINESS
  </NavLink>
  <NavLink
    to="/staffing"
    className="text-white text-[18px] font-semibold font-parkinsans"
    onClick={() => setMenuOpen(false)}
  >
    STAFFING
  </NavLink>
  <NavLink
    to="/industries"
    className="text-white text-[18px] font-semibold font-parkinsans"
    onClick={() => setMenuOpen(false)}
  >
    INDUSTRIES
  </NavLink>
  <NavLink
    to="/career"
    className="text-white text-[18px] font-semibold"
    onClick={() => setMenuOpen(false)}
  >
    CAREER SEEKER
  </NavLink>
  <NavLink
    to="/contact"
    className="text-white text-[18px] font-semibold"
    onClick={() => setMenuOpen(false)}
  >
    CONTACT US
  </NavLink>

 
  <button className="relative overflow-hidden px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#6fd1ab] text-black text-sm sm:text-lg lg:text-xl font-medium group">
    <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
      Find Your talent →
    </span>
    <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
  </button>
</div>


    </header>
  );
};

export default Header;
