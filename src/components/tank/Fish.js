// Fish.js
import React from "react";
import { motion } from "framer-motion";
import fish1 from "../../assets/images/Tank/Fish1.jpeg"; // Replace with your fish image
import fish2 from "../../assets/images/Tank/Fish2.jpeg"; // Replace with your fish image

const Fish = ({ delay, duration, path }) => {
  const fishImages = [
    { name: "fish1", fish: fish1 },
    {
      name: "fish2",
      fish: fish2,
    },
  ];
  return (
    <>
      {fishImages.map((i) => (
        <motion.img
          src={i.fish}
          alt="Fish"
          className="fish"
          animate={{ x: path, rotate: [0, 10, -10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: duration,
            delay: delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default Fish;
