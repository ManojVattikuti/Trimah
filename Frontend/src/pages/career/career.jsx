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
    <CareerHero/>
    <C1/>
    <C2/>
    <C3/>
    {/* <C4/>
    <C5/> */}
    </>
  );
};

// Example ServiceCard component structure


export default CareerPage;
