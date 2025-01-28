import React from "react";
import CareerHero from "./Career-hero";
import { C1 } from "./C1";
import { C2 } from "./C2";
import { C3 } from "./C3";
import { C4 } from "./C4";
import { C5 } from "./C5";
import JobWidget from "../ceipal/JobWidget";
import { motion } from "framer-motion";


const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CareerPage = () => {
  return (
    <>
      <CareerHero />

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <div className="font-parkinsans">
          <C1 />
        </div>

      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <div className="font-parkinsans">
          <C2 />
        </div>

      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >

        <div className="font-parkinsans">
          <C3 />
        </div>
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <div className="font-parkinsans">
          <C4 />
        </div>

      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >

        <div className="mt-12 md:mt-20 mb-12 md:mb-24">
          <C5 />
        </div>
      </motion.div>




      {/* <JobWidget/> */}



    </>

  );
};

// Example ServiceCard component structure


export default CareerPage;
