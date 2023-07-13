'use client'
import React from "react";
import "../globals.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <motion.div className="md:w-1/2 mx-auto text-white font-thin"
        initial ={{opacity: 0, x: 200}}
        animate={{opacity: 1, x: 0}}
        transition={{type: "spring", stiffness: 300}}
      >
        <p
          className="text-center text-2xl md:text-4xl lg:text-6xl px-10 
        lg:px-24 pt-48 leading-relaxed tracking-wide"
        >
          Luxury Living In The Heart Of Harare
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
