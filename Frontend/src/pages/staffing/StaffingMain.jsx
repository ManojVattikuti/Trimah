import StHero from "./St-Hero"
import { St1 } from "./St1"
import { St2 } from "./St2"
import { St3 } from "./St3"
import { St4 } from "./St4"
import { St5 } from "./St5"
import { St6 } from "./St6"
import { St7 } from "./St7"

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

export const Staffingmain = () => {
    return (
        <>
            <StHero />




            <St1 />


            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}

            >

            </motion.div>

            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}

            >
                <St2 />
            </motion.div>

            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}

            >
                <St3 />

            </motion.div>

            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}

            >
                <div className="font-parkinsans">


                    <St4 />
                </div>

            </motion.div>

            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}

            >
                <St5 />

            </motion.div>

            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}

            >
                <St6 />

            </motion.div>

            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}

            >
                <St7 />

            </motion.div>

        </>
    )
}