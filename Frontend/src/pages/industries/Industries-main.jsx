import IndustryHero from "./Industry-hero"
import { S1 } from "./S1"
import { S2 } from "./S2"
import { S3 } from "./S3"
import { S4 } from "./S4"
import { motion } from "framer-motion";
import SlickSliderWithContent from "./slick/slickSlider"
import SlickSlider from "./slick/slickSlider"
import { useEffect } from "react"



const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


export const Industrymain = () => {
 
  
  return (
    <>
      <IndustryHero />


        <S1 />
    
      
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <S2 />
      </motion.div>

      

    



      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <S3 />
      </motion.div>


  



      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}

      >
        <S4 />

      </motion.div>



    </>
  )
}