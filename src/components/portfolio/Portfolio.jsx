import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import img1 from "./Screenshot 2024-03-13 200657.png"
import img2 from "./Screenshot 2024-03-14 100556.png"
import img3 from "./img01.jpg"
import img4 from "./Screenshot 2024-03-14 151722.png"

const items = [
  {
    id: 1,
    title: "Safe Route Pro",
    img: img1,
    desc: "An application that predicts appropriate driving speeds for different weather and road conditions, while incorporating live weather updates and location tracking, is crucial for promoting road safety using AI. With this technology, drivers can make informed decisions based on real-time data, reducing the risk of accidents.",
  },
  {
    id: 2,
    title: "FitTrack",
    img: img4,
    desc: "A robust fitness application is indispensable for users seeking to track running speed, estimate body fat using Machine learning, access personalized schedules and diet plans, and utilize a chatbot for immediate assistance. This all-in-one app empowers users to monitor running progress, gain insights into body composition, follow tailored exercise routines, receive nutritional guidance, and easily address any queries through the intuitive chatbot interface",
  },
  {
    id: 3,
    title: "Traveling Site",
    img: img2,
    desc: "Attractive and user friendly traveling site that provide  information on locations and give them ability to be register and enter their traveling information.",
  },
  {
    id: 4,
    title: "Hotel Management System",
    img:img3,
    desc: "Introducing our hotel management application: a secure solution featuring facial recognition technology and user-friendly interfaces tailored for both hotel customers and employees. Seamlessly blending top-notch security with intuitive design, our application ensures a smooth and efficient experience for all users.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <>
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
          </motion.div>
        </div>
        
      </div>
      
    </section>
    
    </>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
      <a href="https://github.com/Bishanprabhashwara">
      <button className="portgit">Other Projects</button>
      </a>
    </div>
  );
};

export default Portfolio;