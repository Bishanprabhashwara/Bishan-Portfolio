import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          whileInView={{background: "#0c0c1d", color: "white" }}
        >
          <h2>Full-Stack Development</h2>
          <p>
          Proficient in Flask, React, Spring Boot, HTML, CSS, and JavaScript. Experienced in building robust web applications from front to back end.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          whileInView={{background: "#0c0c1d", color: "white" }}
        >
          <h2>AI and Machine Learning</h2>
          <p>
          Skilled in Python-based machine learning and deep learning frameworks. Developed AI solutions for predictive modeling and natural language processing.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          whileInView={{background: "#0c0c1d", color: "white" }}
        >
          <h2>Database Management</h2>
          <p>
          Expertise in SQL and PL/SQL programming. Experienced in designing and optimizing databases for efficient data management.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
          whileInView={{background: "#0c0c1d", color: "white" }}
        >
          <h2>Creative Front-End Design</h2>
          <p>
          Proficient in HTML, CSS, and JavaScript for crafting visually appealing and user-friendly interfaces. Experienced in creating interactive web applications with a focus on UI/UX design.
          </p>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;