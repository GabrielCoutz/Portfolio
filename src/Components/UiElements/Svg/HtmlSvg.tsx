import React from "react";
import { motion } from "framer-motion";
import { variants } from "../FramerMotion/variants";

const HtmlSvg = ({ fill }: { fill: string }) => {
  return (
    <motion.svg
      variants={variants(fill)}
      initial="default"
      whileTap="tap"
      whileHover="hover"
      width="88"
      height="106"
      viewBox="0 0 88 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.0095046 3.50902L6.4997 91.5213C6.59713 92.8429 7.44109 93.9699 8.63331 94.3706L42.7849 105.848C43.3888 106.051 44.0372 106.051 44.6412 105.848L78.7927 94.3706C79.9849 93.9699 80.8289 92.8429 80.9263 91.5213L87.4165 3.50902C87.5561 1.61681 86.1453 0 84.3549 0H3.07137C1.28096 0 -0.129849 1.61681 0.0095046 3.50902ZM70.7729 30.8163H28.475L29.7515 43.2939H69.8529L67.2296 78.8659L43.7131 86.769L20.1967 78.8659L18.8262 60.2816H31.1695V69.3975L44.043 73.0598L56.8396 69.3975L57.8323 54.8694H18.427L15.8108 19.3907H71.6152L70.7729 30.8163Z"
        fill="currentColor"
      />
    </motion.svg>
  );
};

export default HtmlSvg;
