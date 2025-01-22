// pages/AboutPage.js
import React, {  useState } from "react";
import { useEffect } from "react";
import AboutHero from "./About-hero";
import { AboutSection1 } from "./About-Section1";
import AboutSection2 from "./AboutSection2";
import AboutSection3 from "./AboutSection3";
import AboutSection4 from "./AboutSection4";
import AboutSection5 from "./AboutSection5";
import AboutSection6 from "./AboutSection6";


const AboutPage = () => {
  // const [animateName, setAnimateName] = useState(false);
  // useEffect(() => {
  //   // Trigger animation after a short delay when component mounts
  //   const timer = setTimeout(() => {
  //     setAnimateName(true);
  //   }, 500); // Adjust delay as needed

  //   // Clean up timeout on component unmount
  //   return () => clearTimeout(timer);
  // }, []);

  return (
<>
<AboutHero/>
<AboutSection1/>
<AboutSection2/>
<AboutSection3/>
<AboutSection4/>
{/* <AboutSection5/>
<AboutSection6/> */}
</>
  );
};

export default AboutPage;
