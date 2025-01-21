// src/Routes.js
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landingpage from '../pages/landingPage/LandingPage';
import AboutPage from '../pages/about/About';
// import ServicePage from '../pages/business/servicePage';
import ContactPage from '../pages/contact/contact';

// import Login from "../pages/Login"
// import Register from "../pages/Register";
// import Admin from "../pages/dashboard/home"
// import Userprofile from "../pages/Userprofile"
import NotFound from '../pages/PageNotFound';
import SupportChat from '../pages/chatBot/Support';
import { mainContext } from '../context/mainContex';
import CareerPage from '../pages/career/career';
import {  Demo } from '../components/demo';
import BusinessPage from '../pages/business/businessPage';
import { Industrymain } from '../pages/industries/Industries-main';
import { Staffingmain } from '../pages/staffing/StaffingMain';


const AppRoutes = () => {
  const {user} = useContext(mainContext)
  return (
    <>
    {user.id && <SupportChat />}
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/business" element={<BusinessPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/career" element={<CareerPage />} />
      <Route path="/industries" element={<Industrymain />} />
      <Route path="/staffing" element={<Staffingmain />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);
};

export default AppRoutes;
