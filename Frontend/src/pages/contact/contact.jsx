import React from "react";
import ContactHero from "./Contact-hero";
import { Ct1 } from "./Ct1";
import { Ct2 } from "./Ct2";
import { Ct3 } from "./Ct3";

import MapImageComponent from "./Map";
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

const ContactPage = () => {
  return (
    <>
      <ContactHero />

     <div className="font-parkinsans">


          <Ct1 />
        </div>

     

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <div className="font-parkinsans">
          <Ct2 />
        </div>

      </motion.div>
      <Ct3 />
      {/* <MapImageComponent/> */}
    </>
  );
};




export default ContactPage;
