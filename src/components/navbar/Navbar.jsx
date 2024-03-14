import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

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
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/bishan_prabhashwara?igsh=dWF0aHAxa2QzcjB4&utm_source=qr">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/bishan-prabhashwara-0040a5223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://github.com/Bishanprabhashwara">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;