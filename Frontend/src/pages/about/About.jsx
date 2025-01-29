// pages/AboutPage.js
import React from "react";
import { motion } from "framer-motion";
import AboutHero from "./About-hero";
import { AboutSection1 } from "./About-Section1";
import AboutSection2 from "./AboutSection2";
import AboutSection3 from "./AboutSection3";
import AboutSection4 from "./AboutSection4";
import AboutSection5 from "./AboutSection5";
import AboutSection6 from "./AboutSection6";
import {Why} from "./Why"

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutPage = () => {
  return (
    <div >

      <AboutHero />


   
     
        <AboutSection1 />
    

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <AboutSection2 />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <AboutSection3 />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <AboutSection4 />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutSection5 />
      </motion.div>

      <div className="hidden md:block">
  <motion.div
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <AboutSection6 />
  </motion.div>
</div>

{/* <div className="lg:hidden">
  <Why />
</div> */}


    </div>
  );
};

export default AboutPage;
