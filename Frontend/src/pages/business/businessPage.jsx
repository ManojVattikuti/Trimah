import React from "react";
import BusinessHero from "./Business-hero";
import BC1 from "./BC1";
import BC2 from "./BC2";
import BC3 from "./BC3";
import { BC4 } from "./BC4";
import { BC6 } from "./BC6";
import { BC7 } from "./BC7";
import { BC8 } from "./BC8";
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
const BusinessPage = () => {
  return (
    <>
      <BusinessHero />

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <BC1 />
      </motion.div>
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <BC2 />
      </motion.div>
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <BC3 />
      </motion.div>
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <div className="hidden sm:block">
          <BC4 />

        </div>
      </motion.div>
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <BC6 />
      </motion.div>
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <BC7 />
      </motion.div>
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <BC8 />
      </motion.div>
    </>
  );
};

// Example ServiceCard component structure


export default BusinessPage;
