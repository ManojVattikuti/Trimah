import React from "react";
import AnimateName from "../../context/animateName";
import CareerHero from "./Career-hero";
import { C1 } from "./C1";
import { C2 } from "./C2";
import { C3 } from "./C3";
import { C4 } from "./C4";
import { C5 } from "./C5";



const CareerPage = () => {
  return (
   <>
  <CareerHero />
  <div className="mt-12 md:mt-20">
    <C1 />
  </div>
  <div className="mt-12 md:mt-20">
    <C2 />
  </div>
  <div className="mt-12 md:mt-20">
    <C3 />
  </div>
  <div className="mt-12 md:mt-20">
    <C4 />
  </div>
  <div className="mt-12 md:mt-20 mb-12 md:mb-24">
    <C5 />
  </div>
</>

  );
};

// Example ServiceCard component structure


export default CareerPage;
