// Plant.js
import React from "react";
import { motion } from "framer-motion";
import plantImage from "../../assets/images/fish1.jpg"; // Replace with your plant image

const Plant = ({ xPosition }) => {
  return (
    <motion.img
      src={plantImage}
      alt="Plant"
      className="plant"
      style={{ left: xPosition }}
      animate={{ rotate: [-2, 2, -2] }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      }}
    />
  );
};

export default Plant;
