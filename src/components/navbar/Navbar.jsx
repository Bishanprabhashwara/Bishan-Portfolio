import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import img1 from "./facebook.png";
import img2 from "./instagram.png";
import img3 from "./youtube.png";
import img4 from "./dribbble.png";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/bishan.prabhashwara.3?mibextid=LQQJ4d">
            <img src={img1} alt="" />
          </a>
          <a href="https://www.instagram.com/bishan_prabhashwara?igsh=dWF0aHAxa2QzcjB4&utm_source=qr">
            <img src={img2}alt="" />
          </a>
          <a href="https://www.linkedin.com/in/bishan-prabhashwara-0040a5223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <img src={img3} alt="" />
          </a>
          <a href="https://github.com/Bishanprabhashwara">
            <img src={img4} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
