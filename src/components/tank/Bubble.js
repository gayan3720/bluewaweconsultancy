// Bubble.js
import React from "react";
import { motion } from "framer-motion";

const Bubble = ({ delay, xPosition, speed }) => {
  return (
    <motion.div
      className="bubble"
      style={{ left: xPosition }}
      animate={{ y: [-100, -1000] }}
      transition={{
        repeat: Infinity,
        duration: speed,
        delay: delay,
      }}
    />
  );
};

export default Bubble;
