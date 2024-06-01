import img1 from "./hero.png";
import img2 from  "./scroll.png";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>BISHAN PRABHASHWARA</motion.h2>
          <motion.h1 variants={textVariants}>
            Full-Stack and AI Developer
          </motion.h1>
          
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={img2}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        AI Developer Full-Stack Developer
      </motion.div>
      <div className="imageContainer">
        <img src={img1} alt="" />
        
      </div>
    </div>
  );
};

export default Hero;
