import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn, staggerContainer } from "variants";

const TextContainer = () => {
  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="textContainer">
      {/* upper */}
      <div className="textContainer-top">
        <motion.span variants={fadeIn()} className="text-yellow-600 ">
          Exquisita comida tradicional
        </motion.span>
        <motion.span variants={fadeIn()} className="first-letter:text-5xl">
          
        </motion.span>
      </div>
      {/* //text */}
      <div className="textContainer-middle">
        <motion.span variants={fadeIn()} initial="initial" animate="animate">
          ESPECIAL
        </motion.span>
      </div>
      {/* lower */}
      <div className="textContainer-bottom ">
        <motion.button variants={fadeIn()}><Link href="/platos">Platos</Link></motion.button>
        <motion.p variants={fadeIn()}>
          Tu experiencia <span> degustativa </span> <br /> empieza con nosotros!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default TextContainer;
