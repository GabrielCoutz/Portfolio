import React from "react";
import { motion } from "framer-motion";
import { variants } from "../FramerMotion/variants";

const CssSvg = ({ fill }: { fill: string }) => {
  return (
    <motion.svg
      variants={variants(fill)}
      initial="default"
      whileTap="tap"
      whileHover="hover"
      width="100"
      height="115"
      viewBox="0 0 100 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50.3774 104.276V9.74805L91.5581 9.88517L84.2145 94.4595L50.3774 104.276Z"
        fill="currentColor"
      />
      <path
        d="M8.37339 102.354L0 0L100 0.205689L91.146 102.354L50.3774 114.161L8.37339 102.354Z"
        fill="currentColor"
      />
      <path
        d="M81.3316 21.8303H17.9824L19.6986 34.1862H49.7598L20.1792 46.8864L21.8945 58.8309H65.4776L63.8986 75.5118L49.1421 78.3955L35.759 74.9633L34.7292 65.4895H22.4437L24.0905 85.1921L50.4461 92.5372L75.7042 84.5056L78.93 45.9935H52.23L81.3308 33.9119L81.3316 21.8303Z"
        fill="white"
      />
    </motion.svg>
  );
};

export default CssSvg;
