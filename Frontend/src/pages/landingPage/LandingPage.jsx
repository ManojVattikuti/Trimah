import React from "react";
import Hero from "./Hero";
import ServiceCard from "../../components/landingpage-component/servicecard/ServiceCard";
import IndustrySection from "../../components/landingpage-component/industry/IndustryCard";
import AboutUsSection from "../../components/landingpage-component/aboutTrimah/Aboutus";
import Why from "../../components/landingpage-component/aboutTrimah/Why";
import Section1 from "../../components/landingpage-component/Section1";
import FaqSection from "../../components/landingpage-component/Faq";
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

const LandingPage = () => {

  return (
    <>
      <Hero />
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <ServiceCard />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <IndustrySection />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <AboutUsSection />
      </motion.div>
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <Why />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Section1 />
      </motion.div>
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >

        <FaqSection />
      </motion.div>


    </>
  );
};

export default LandingPage;
