import React from "react";
import Hero from "./Hero";
import ServiceCard from "../../components/landingpage-component/servicecard/ServiceCard";
import IndustrySection from "../../components/landingpage-component/industry/IndustryCard";
import AboutUsSection from "../../components/landingpage-component/aboutTrimah/Aboutus";
import Why from "../../components/landingpage-component/aboutTrimah/Why";
import Section1 from "../../components/landingpage-component/Section1";
import FaqSection from "../../components/landingpage-component/Faq";

const LandingPage = () => {
  return (
  <>
  <Hero/>
  <ServiceCard/>
  <IndustrySection/>
  <AboutUsSection/>
  <Why/>
  <Section1/>
  <FaqSection/>
{/*   
  <ExampleComponent/> */}
  
  </>
  );
};

export default LandingPage;
