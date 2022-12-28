import React from "react";
import { motion } from "framer-motion";
import { variants } from "../FramerMotion/variants";

const VueSvg = ({ fill }: { fill: string }) => {
  return (
    <motion.svg
      variants={variants(fill)}
      initial="default"
      whileTap="tap"
      whileHover="hover"
      width="100"
      height="87"
      viewBox="0 0 100 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80 0H100L50 86.25L0 0H19.75H38.25L50 20L61.5 0H80Z"
        fill="currentColor"
      />
      <path
        d="M0 0L50 86.25L100 0H80L50 51.75L19.75 0H0Z"
        fill="currentColor"
      />
      <path
        d="M19.75 0L50 52L80 0H61.5L50 20L38.25 0H19.75Z"
        fill="currentColor"
      />
    </motion.svg>
  );
};

export default VueSvg;
